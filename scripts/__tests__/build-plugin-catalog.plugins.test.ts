import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';

import { validateHostCatalogFile } from '@/features/plugins/remote/hostCatalogFile';

import { parseArgs } from '../build-plugin-catalog';
import {
  GENERATED_AT,
  makeTempDir,
  build,
  readHostFile,
  makeFixtureCatalog,
  removeTempDirs,
} from './buildPluginCatalogFixtures';

afterEach(removeTempDirs);

describe('build-plugin-catalog plugin checks', () => {
  it('publishes an unreleased primitive plugin with a concrete engine range for old clients', async () => {
    const outDir = makeTempDir();
    const catalogDir = makeFixtureCatalog({
      selectors: { assistantTurn: '.reply' },
      manifest: {
        engine: '>=next',
        contributes: { domOps: [{ op: 'native', handler: 'tableCopy', params: {} }] },
      },
    });

    await build(outDir, catalogDir);

    const file = readHostFile(outDir, 'demo.example');
    const plugins = file.plugins as readonly Record<string, unknown>[];
    expect(plugins).toHaveLength(1);
    expect(plugins[0].engine).toMatch(/^>=\d+\.\d+\.\d+$/);
    expect(JSON.stringify(file)).not.toContain('next');
    const validation = validateHostCatalogFile(file, 'demo.example');
    expect(validation?.issues).toEqual([]);
    expect(validation?.manifests).toHaveLength(1);
  });

  it('publishes a fixture plugin that stays inside its site', async () => {
    const outDir = makeTempDir();
    const catalogDir = makeFixtureCatalog();

    const written = await build(outDir, catalogDir);

    expect(written.map((entry) => entry.host)).toEqual(['demo.example']);
    const file = readHostFile(outDir, 'demo.example');
    expect((file.site as Record<string, unknown>).id).toBe('demo');
    expect(validateHostCatalogFile(file, 'demo.example')?.issues).toEqual([]);
  });

  it('publishes a bridge policy that a client reads back with the same allow list', async () => {
    const outDir = makeTempDir();
    const catalogDir = makeFixtureCatalog({
      site: { bridge: { format: 1, allow: ['conversation.open', 'composer.send'] } },
    });
    await build(outDir, catalogDir);

    const validation = validateHostCatalogFile(
      readHostFile(outDir, 'demo.example'),
      'demo.example',
    );
    expect(validation?.issues).toEqual([]);
    expect(validation?.site?.bridge).toEqual({
      format: 1,
      allow: ['conversation.open', 'composer.send'],
    });
  });

  it.each([
    ['an unknown policy format', { bridge: { format: 2, allow: [] } }, /bridge\.format/],
    ['a misspelled op', { bridge: { format: 1, allow: ['composer.sned'] } }, /bridge\.allow\[0\]/],
    [
      'a modelPicker format this build does not read',
      { modelPicker: { format: 2 } },
      /modelPicker\.format/,
    ],
  ])('fails the build on %s, which clients would silently drop', async (_label, site, pattern) => {
    const outDir = makeTempDir();
    const catalogDir = makeFixtureCatalog({ site });

    await expect(build(outDir, catalogDir)).rejects.toThrow(pattern);
    expect(existsSync(join(outDir, 'hosts', 'demo.example.json'))).toBe(false);
  });

  it('fails the build when a plugin targets a host its site does not cover', async () => {
    const outDir = makeTempDir();
    const catalogDir = makeFixtureCatalog({
      matches: ['https://demo.example/*', 'https://elsewhere.example/*'],
    });

    await expect(build(outDir, catalogDir)).rejects.toThrow(
      /demo\.widen.*https:\/\/elsewhere\.example\/\*.*not covered by site "demo"/s,
    );
    expect(existsSync(join(outDir, 'hosts', 'demo.example.json'))).toBe(false);
  });

  it('publishes the DeepSeek formula-copy plugin with its requires and native op', async () => {
    const outDir = makeTempDir();
    await build(outDir);

    const plugins = readHostFile(outDir, 'chat.deepseek.com').plugins as readonly Record<
      string,
      unknown
    >[];
    // The exact count is the catalog's business, not this test's: it grows
    // whenever a plugin is added under sites/deepseek/.
    expect(plugins.length).toBeGreaterThanOrEqual(2);

    const formulaCopy = plugins.find((plugin) => plugin.id === 'voyager.deepseek-formula-copy');
    if (!formulaCopy) throw new Error('the formula-copy plugin was not published');
    expect(formulaCopy.requires).toEqual({ handlers: ['formulaCopy'] });
    expect(typeof formulaCopy.changelog).toBe('string');
    const contributes = formulaCopy.contributes as { domOps?: readonly Record<string, unknown>[] };
    expect(contributes.domOps).toEqual([{ op: 'native', handler: 'formulaCopy', params: {} }]);
    // The engine floor is what makes an old build say "update Voyager" instead
    // of reporting a missing handler (plan §5).
    expect(formulaCopy.engine).toBe('>=1.3.0');
  });

  it('fails the build when a plugin names a primitive this build does not ship', async () => {
    const outDir = makeTempDir();
    const catalogDir = makeFixtureCatalog({
      manifest: {
        engine: '>=1.3.0',
        requires: { handlers: ['teleport'] },
        contributes: { styles: [{ file: 'style.css' }] },
      },
    });

    await expect(build(outDir, catalogDir)).rejects.toThrow(
      /demo\.widen.*unknown primitive handler "teleport"/s,
    );
    expect(existsSync(join(outDir, 'hosts', 'demo.example.json'))).toBe(false);
  });

  it('fails the build when the engine range admits a build older than a primitive', async () => {
    const outDir = makeTempDir();
    const catalogDir = makeFixtureCatalog({
      manifest: {
        engine: '>=1.2.0',
        contributes: {
          styles: [{ file: 'style.css' }],
          domOps: [{ op: 'native', handler: 'formulaCopy', params: {} }],
        },
      },
    });

    await expect(build(outDir, catalogDir)).rejects.toThrow(
      /demo\.widen.*engine ">=1\.2\.0" admits builds older than 1\.3\.0.*"formulaCopy"/s,
    );
    expect(existsSync(join(outDir, 'hosts', 'demo.example.json'))).toBe(false);
  });

  it('fails the build when an open engine range is paired with a primitive', async () => {
    const outDir = makeTempDir();
    const catalogDir = makeFixtureCatalog({
      manifest: {
        engine: '*',
        contributes: {
          styles: [{ file: 'style.css' }],
          domOps: [{ op: 'native', handler: 'formulaCopy', params: {} }],
        },
      },
    });

    await expect(build(outDir, catalogDir)).rejects.toThrow(
      /demo\.widen.*engine "\*" admits any build.*at least 1\.3\.0/s,
    );
  });

  it('accepts a primitive whose sinceEngine the engine range clears', async () => {
    const outDir = makeTempDir();
    const catalogDir = makeFixtureCatalog({
      manifest: {
        engine: '>=1.3.0',
        requires: { handlers: ['formulaCopy'] },
        contributes: {
          styles: [{ file: 'style.css' }],
          domOps: [{ op: 'native', handler: 'formulaCopy', params: {} }],
        },
      },
    });

    await build(outDir, catalogDir);

    const plugins = readHostFile(outDir, 'demo.example').plugins as readonly Record<
      string,
      unknown
    >[];
    expect(plugins.map((plugin) => plugin.id)).toEqual(['demo.widen']);
  });

  it('fails the build when a plugin needs a semantic key its site does not define', async () => {
    const outDir = makeTempDir();
    const catalogDir = makeFixtureCatalog({
      manifest: {
        contributes: {
          styles: [{ file: 'style.css' }],
          domOps: [
            {
              op: 'addClass',
              target: { kind: 'semantic', key: 'scrollContainer' },
              className: 'gv-plugin-demo',
            },
          ],
        },
      },
    });

    await expect(build(outDir, catalogDir)).rejects.toThrow(
      /demo\.widen.*"scrollContainer".*not defined by site "demo"/s,
    );
    expect(existsSync(join(outDir, 'hosts', 'demo.example.json'))).toBe(false);
  });

  it('accepts a semantic target once its site declares the key', async () => {
    const outDir = makeTempDir();
    const catalogDir = makeFixtureCatalog({
      selectors: { scrollContainer: 'main' },
      manifest: {
        contributes: {
          styles: [{ file: 'style.css' }],
          domOps: [
            {
              op: 'addClass',
              target: { kind: 'semantic', key: 'scrollContainer' },
              className: 'gv-plugin-demo',
            },
          ],
        },
      },
    });

    await build(outDir, catalogDir);

    expect(existsSync(join(outDir, 'hosts', 'demo.example.json'))).toBe(true);
  });

  it('parses --out and --now, and rejects unknown flags', () => {
    const defaults = { outDir: '/default/out', now: '2020-01-01T00:00:00.000Z' };

    expect(parseArgs([], defaults)).toEqual(defaults);
    expect(parseArgs(['--out', 'build/catalog', '--now', GENERATED_AT], defaults)).toEqual({
      outDir: resolve('build/catalog'),
      now: GENERATED_AT,
    });
    expect(parseArgs([`--out=build/catalog`, `--now=${GENERATED_AT}`], defaults)).toEqual({
      outDir: resolve('build/catalog'),
      now: GENERATED_AT,
    });
    expect(() => parseArgs(['--nope'], defaults)).toThrow(/Unknown argument/);
    expect(() => parseArgs(['--out'], defaults)).toThrow(/Missing value/);
  });
});
