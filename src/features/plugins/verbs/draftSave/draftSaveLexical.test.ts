import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { requireBundledSiteAdapter } from '../../catalog/sites';
import { PluginScope } from '../../runtime/pluginScope';
import { draftSavePrimitive } from './index';
import { DRAFT_RESTORE_DELAY_MS, DRAFT_SAVE_DEBOUNCE_MS } from './session';

// jsdom events are never trusted: `userEvents` marks the ones a person would have caused.
const userEvents = vi.hoisted(() => new WeakSet<Event>());
vi.mock('@/core/utils/userEvent', () => ({ isUserEvent: (event: Event) => userEvents.has(event) }));

const kimi = requireBundledSiteAdapter('kimi');
const ID = '19a2b3c4d5e6f7g8h9i0';
const KEY = `gvDraft:kimi:conv:${ID}`;
let records: Record<string, unknown>;
let scope: PluginScope;

const field = () => document.querySelector<HTMLElement>(kimi.selectors.composer!)!;
const render = (text: string) =>
  text ? `<p dir="ltr"><span data-lexical-text="true">${text}</span></p>` : '<p dir="ltr"><br></p>';

/** Typing a character: Lexical lets the browser insert it, so `input` fires. */
function type(text: string): void {
  field().innerHTML = render(text);
  const event = new Event('input', { bubbles: true });
  userEvents.add(event);
  field().dispatchEvent(event);
}

/** Select-all + Backspace: Lexical cancels the key and edits its own DOM, so no `input` fires. */
function clearWithBackspace(): void {
  const event = new KeyboardEvent('keydown', { key: 'Backspace', bubbles: true, cancelable: true });
  userEvents.add(event);
  field().dispatchEvent(event);
  queueMicrotask(() => (field().innerHTML = render('')));
}

beforeEach(() => {
  vi.useFakeTimers();
  records = {};
  vi.spyOn(chrome.storage.local, 'set').mockImplementation((items, callback) => {
    Object.assign(records, items);
    callback?.();
    return Promise.resolve();
  });
  const get = vi.spyOn(chrome.storage.local, 'get') as unknown as ReturnType<typeof vi.fn>;
  get.mockImplementation(
    (keys: string | null, callback: (items: Record<string, unknown>) => void) => {
      callback(typeof keys === 'string' ? { [keys]: records[keys] } : { ...records });
    },
  );
  vi.spyOn(chrome.storage.local, 'remove').mockImplementation((keys) => {
    for (const key of typeof keys === 'string' ? [keys] : keys) delete records[key];
    return Promise.resolve();
  });
  Object.defineProperty(chrome.runtime, 'lastError', { get: () => undefined, configurable: true });
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue(
    new DOMRect(0, 0, 400, 40),
  );
  window.history.replaceState({}, '', `/chat/${ID}`);
  // Kimi's Lexical composer, as measured live (2026-10-24).
  document.body.innerHTML =
    '<div class="chat-editor-content"><div class="chat-input-editor" contenteditable="true" role="textbox" data-lexical-editor="true">' +
    render('') +
    '</div><div class="send-button-container disabled"></div></div>';
  scope = new PluginScope();
  void draftSavePrimitive.activate(
    scope,
    {},
    { doc: document, adapter: kimi, pluginId: 'test', settings: {}, setTargetCounter: () => {} },
  );
});

afterEach(async () => {
  await scope.dispose();
  document.body.innerHTML = '';
  window.history.replaceState({}, '', '/');
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe('draftSave on a Lexical composer (Kimi)', () => {
  it('drops the saved draft once the person clears the composer with Backspace', async () => {
    await vi.advanceTimersByTimeAsync(DRAFT_RESTORE_DELAY_MS * 2);
    type('Voyager 测试');
    await vi.advanceTimersByTimeAsync(DRAFT_SAVE_DEBOUNCE_MS);
    expect((records[KEY] as { content?: string } | undefined)?.content).toBe('Voyager 测试');

    clearWithBackspace();
    await vi.advanceTimersByTimeAsync(DRAFT_SAVE_DEBOUNCE_MS);

    expect(records[KEY]).toBeUndefined();
  });

  it('keeps the draft when the host re-renders the composer without a key from the person', async () => {
    await vi.advanceTimersByTimeAsync(DRAFT_RESTORE_DELAY_MS * 2);
    type('Voyager 测试');
    await vi.advanceTimersByTimeAsync(DRAFT_SAVE_DEBOUNCE_MS * 3);

    field().innerHTML = render('');
    await vi.advanceTimersByTimeAsync(DRAFT_SAVE_DEBOUNCE_MS);

    expect((records[KEY] as { content?: string } | undefined)?.content).toBe('Voyager 测试');
  });
});
