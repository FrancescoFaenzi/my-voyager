import { describe, expect, it } from 'vitest';

import { listPluginManifestsWithSources } from '../sources/defaultSources';
import type { PluginManifest, PluginSource } from '../types';
import { HostCatalogSource } from './HostCatalogSource';
import { type HostCatalogCacheEntry, normalizeHostCatalogCacheEntry } from './hostCatalogCache';

const HOST = 'chat.deepseek.com';
const ID = 'voyager.deepseek-retired';
const PLUGIN: PluginManifest = {
  id: ID,
  name: 'Retired plugin',
  version: '1.0.0',
  description: 'A bundled plugin.',
  author: 'voyager-official',
  category: 'other',
  license: 'MIT',
  engine: '>=1.0.0',
  tier: 'declarative',
  matches: [`https://${HOST}/*`],
  contributes: {},
};
const SNAPSHOT: PluginSource = {
  id: 'bundled-catalog',
  kind: 'bundled',
  list: async () => [PLUGIN],
};

function entry(overrides: Partial<HostCatalogCacheEntry> = {}): HostCatalogCacheEntry {
  return {
    host: HOST,
    status: 'ok',
    manifests: [],
    revoked: [ID],
    fetchedAt: 1,
    lastAttemptAt: 1,
    failureCount: 0,
    extensionVersion: '2.2.2',
    ...overrides,
  };
}

async function list(cached: HostCatalogCacheEntry | null) {
  const source = new HostCatalogSource({
    extensionVersion: '2.2.2',
    enabled: true,
    loadEntry: async () => normalizeHostCatalogCacheEntry(cached, HOST),
  });
  return listPluginManifestsWithSources([SNAPSHOT, source], { host: HOST });
}

describe('cached catalog revocations', () => {
  it('drops a bundled plugin revoked by the usable cached catalog', async () => {
    expect(await list(entry())).toEqual([]);
  });

  it('keeps a bundled plugin when an old-format catalog simply omits it', async () => {
    expect(await list(entry({ revoked: undefined }))).toEqual([
      { manifest: PLUGIN, sourceId: 'bundled-catalog' },
    ]);
  });

  it('ignores revocations from missing, unfetched, stale or disabled catalogs', async () => {
    for (const cached of [
      entry({ status: 'missing' }),
      entry({ status: 'unknown' }),
      entry({ extensionVersion: '2.2.1' }),
      null,
    ]) {
      expect(await list(cached)).toEqual([{ manifest: PLUGIN, sourceId: 'bundled-catalog' }]);
    }
    const source = new HostCatalogSource({
      enabled: false,
      loadEntry: async () => entry(),
    });
    expect(await listPluginManifestsWithSources([SNAPSHOT, source], { host: HOST })).toEqual([
      { manifest: PLUGIN, sourceId: 'bundled-catalog' },
    ]);
  });

  it('ignores revocations from a non-authoritative source alongside an authoritative one', async () => {
    const unavailable: PluginSource = {
      id: 'unavailable',
      kind: 'remote',
      list: async () => [],
      listWithAuthority: async () => ({ manifests: [], authoritative: false, revoked: [ID] }),
    };
    const available: PluginSource = {
      ...unavailable,
      id: 'available',
      listWithAuthority: async () => ({ manifests: [], authoritative: true }),
    };
    expect(
      await listPluginManifestsWithSources([SNAPSHOT, unavailable, available], { host: HOST }),
    ).toEqual([{ manifest: PLUGIN, sourceId: 'bundled-catalog' }]);
  });
});
