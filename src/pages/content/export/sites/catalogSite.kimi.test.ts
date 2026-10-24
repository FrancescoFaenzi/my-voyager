import { afterEach, describe, expect, it, vi } from 'vitest';

import kimiData from '@/features/plugins/catalog/sites/kimi/site.json';
import { validateSiteAdapterData } from '@/features/plugins/sites/siteAdapterData';

import { buildCatalogExportAdapter } from '../adapter/platform/catalog';
import { readCatalogConversation } from './catalogReader';

function archerId(index: number): string {
  return `00000000-0000-4000-8000-${String(index + 1).padStart(12, '0')}`;
}

/** Kimi mounts messages 3..10; reaching the top paginates in the two older messages. */
function kimiFixture() {
  const validated = validateSiteAdapterData(kimiData);
  if (!validated.success) throw new Error(JSON.stringify(validated.error));
  const site = validated.data;
  document.body.innerHTML = '<div class="chat-detail-main"></div>';
  const scroller = document.querySelector<HTMLElement>('div.chat-detail-main')!;
  const items: HTMLElement[] = [];
  let historyLoaded = false;
  let historyScheduled = false;
  for (let index = 0; index < 10; index++) {
    const item = document.createElement('div');
    item.className = 'chat-content-item';
    item.setAttribute('data-archer-id', archerId(index));
    item.innerHTML =
      index % 2 === 0
        ? `<div class="segment-user"><div class="user-content"><p>Prompt ${index}</p></div></div>`
        : `<div class="segment-assistant"><div class="thinking-container">Thinking ${index}</div><div class="markdown"><p>Answer ${index}</p></div></div>`;
    items.push(item);
  }
  scroller.append(...items.slice(2));
  const height = () => (historyLoaded ? 18416 : 14816);
  let top = 2300;
  Object.defineProperties(scroller, {
    scrollTop: {
      configurable: true,
      get: () => top,
      set: (value: number) => {
        top = Math.max(0, Math.min(height() - 1213, value));
        if (top !== 0 || historyScheduled) return;
        historyScheduled = true;
        setTimeout(() => {
          scroller.prepend(...items.slice(0, 2));
          historyLoaded = true;
        }, 5);
      },
    },
    scrollHeight: { configurable: true, get: height },
    clientHeight: { configurable: true, value: 1213 },
  });
  return { site, scroller };
}

afterEach(() => {
  vi.useRealTimers();
  document.body.replaceChildren();
});

describe('Kimi conversation export', () => {
  it('reads the data-archer-id keys and roles while loading the paginated conversation', async () => {
    vi.useFakeTimers();
    const { site, scroller } = kimiFixture();
    expect(scroller.querySelectorAll('.segment-user, .segment-assistant')).toHaveLength(8);

    const pending = readCatalogConversation(
      site,
      buildCatalogExportAdapter(site),
      {},
      { pollMs: 10, stableSamples: 2, topTimeoutMs: 80, timeoutMs: 1000 },
    );
    await vi.advanceTimersByTimeAsync(1100);
    const result = await pending;

    expect(result.snapshots).toHaveLength(10);
    expect(result.snapshots.map(({ nativeId }) => nativeId)).toEqual(
      Array.from({ length: 10 }, (_, index) => `data-archer-id:${archerId(index)}`),
    );
    expect(result.snapshots.map(({ role }) => role)).toEqual(
      Array.from({ length: 10 }, (_, index) => (index % 2 === 0 ? 'user' : 'assistant')),
    );
    // The thinking block inside an assistant segment is not part of the export body.
    expect(result.snapshots.map(({ text }) => text)).toEqual(
      Array.from({ length: 10 }, (_, index) => `${index % 2 === 0 ? 'Prompt' : 'Answer'} ${index}`),
    );
    // Kimi has no known generating marker, so the reader cannot prove completeness.
    expect(result.completeness).toBe('unknown');
    expect(scroller.scrollTop).toBe(2300);
  });
});
