import { describe, expect, it, vi } from 'vitest';

import { validateManifest } from '../manifest/validate';
import type { PluginManifest } from '../types';
import type { HostCatalogCacheEntry } from './hostCatalogCache';
import { HostCatalogRefresher, parseHostCatalogRefreshPayload } from './hostCatalogRefresh';
import type { PluginCatalogSettings } from './hostCatalogSettings';

const HOST = 'chat.deepseek.com';
const URL_FOR_HOST = 'https://voyager.nagi.fun/catalog/hosts/chat.deepseek.com.json';
const HOUR = 60 * 60 * 1000;

const RAW_PLUGIN = {
  id: 'voyager.deepseek-reading-width',
  name: 'DeepSeek · Reading width',
  version: '1.1.0',
  description: 'd',
  author: 'voyager-official',
  category: 'readability',
  license: 'MIT',
  engine: '>=1.2.0',
  tier: 'declarative',
  matches: ['https://chat.deepseek.com/*'],
  contributes: { styles: [{ css: 'body{--x:1}' }] },
};

function catalogFile(plugins: unknown[] = [RAW_PLUGIN]) {
  return { format: 1, host: HOST, generatedAt: '2026-09-07T00:00:00.000Z', plugins };
}

/** Cached entries hold VALIDATED manifests, exactly as the refresher writes them. */
function manifest(id: string): PluginManifest {
  const result = validateManifest({ ...RAW_PLUGIN, id });
  if (!result.success) throw new Error('fixture manifest must validate');
  return result.data;
}

function entry(overrides: Partial<HostCatalogCacheEntry> = {}): HostCatalogCacheEntry {
  return {
    host: HOST,
    status: 'ok',
    manifests: [manifest('voyager.deepseek-reading-width')],
    fetchedAt: 0,
    lastAttemptAt: 0,
    failureCount: 0,
    extensionVersion: '1.8.3',
    ...overrides,
  };
}

type FetchStub = ReturnType<typeof vi.fn>;

function makeFetch(handler: (url: string) => { status: number; body?: unknown }): FetchStub {
  return vi.fn(async (url: string) => {
    const { status, body } = handler(url);
    return {
      ok: status >= 200 && status < 300,
      status,
      json: async () => body,
    };
  });
}

interface Harness {
  readonly refresher: HostCatalogRefresher;
  readonly fetchImpl: FetchStub;
  readonly saved: HostCatalogCacheEntry[];
}

function harness(options: {
  entry?: HostCatalogCacheEntry | null;
  settings?: Partial<PluginCatalogSettings>;
  now?: number;
  eligible?: boolean;
  enabled?: boolean;
  respond?: (url: string) => { status: number; body?: unknown };
}): Harness {
  const saved: HostCatalogCacheEntry[] = [];
  const fetchImpl = makeFetch(options.respond ?? (() => ({ status: 200, body: catalogFile() })));
  const refresher = new HostCatalogRefresher({
    baseUrl: 'https://voyager.nagi.fun/catalog',
    fetchImpl: fetchImpl as unknown as typeof fetch,
    now: () => options.now ?? 10 * HOUR,
    extensionVersion: '1.8.3',
    enabled: options.enabled ?? true,
    loadSettings: async () => ({
      onlineUpdatesEnabled: true,
      checkInterval: '6h',
      ...options.settings,
    }),
    loadEntry: async () => options.entry ?? null,
    saveEntry: async (next) => {
      saved.push(next);
    },
    isHostEligible: async () => options.eligible ?? true,
  });
  return { refresher, fetchImpl, saved };
}

describe('HostCatalogRefresher', () => {
  it('stays off the network inside the interval and honours the online switch', async () => {
    const fresh = harness({ entry: entry({ lastAttemptAt: 9 * HOUR }), now: 10 * HOUR });
    expect(await fresh.refresher.refresh(HOST)).toEqual({
      ok: true,
      status: 'skipped',
      reason: 'fresh',
    });
    expect(fresh.fetchImpl).not.toHaveBeenCalled();
  });

  it('never fetches for a page without an enabled plugin (Gemini, AI Studio, cold hosts)', async () => {
    const { refresher, fetchImpl } = harness({ eligible: false });
    expect(await refresher.refresh(HOST)).toEqual({ ok: true, status: 'ineligible' });
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it('never fetches for Gemini or AI Studio, even on a forced check', async () => {
    const { refresher, fetchImpl } = harness({ eligible: true });
    for (const host of [
      'gemini.google.com',
      'business.gemini.google',
      'aistudio.google.com',
      'aistudio.google.cn',
    ]) {
      expect(await refresher.refresh(host, { force: true })).toEqual({
        ok: true,
        status: 'invalid-host',
      });
    }
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it('rejects hosts that cannot name a file and a build with the channel off', async () => {
    const { refresher, fetchImpl } = harness({});
    expect(await refresher.refresh('*.frame.claudeusercontent.com')).toEqual({
      ok: true,
      status: 'invalid-host',
    });
    expect(await refresher.refresh('chat.deepseek.com/../x')).toEqual({
      ok: true,
      status: 'invalid-host',
    });
    expect(fetchImpl).not.toHaveBeenCalled();

    const off = harness({ enabled: false });
    expect(await off.refresher.refresh(HOST, { force: true })).toEqual({
      ok: true,
      status: 'disabled',
    });
    expect(off.fetchImpl).not.toHaveBeenCalled();
  });

});

describe('parseHostCatalogRefreshPayload', () => {
  it('accepts only an object with a string host', () => {
    expect(parseHostCatalogRefreshPayload({ host: HOST })).toEqual({ host: HOST, force: false });
    expect(parseHostCatalogRefreshPayload({ host: HOST, force: true })).toEqual({
      host: HOST,
      force: true,
    });
    expect(parseHostCatalogRefreshPayload({ host: HOST, force: 'yes' })).toEqual({
      host: HOST,
      force: false,
    });
    expect(parseHostCatalogRefreshPayload({ host: 42 })).toBeNull();
    expect(parseHostCatalogRefreshPayload(HOST)).toBeNull();
    expect(parseHostCatalogRefreshPayload(null)).toBeNull();
  });
});
