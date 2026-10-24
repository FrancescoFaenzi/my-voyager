import { afterEach, describe, expect, it } from 'vitest';

import { requireBundledSiteAdapter } from '../catalog/sites';
import { DeclarativeEngine } from '../runtime/declarativeEngine';
import { BundledCatalogPluginSource } from './BundledCatalogPluginSource';

afterEach(() => {
  document.head.innerHTML = '';
  document.body.innerHTML = '';
  document.body.removeAttribute('style');
  document.body.removeAttribute('class');
});

describe('Kimi reading width', () => {
  it('gives the composer the same width as the conversation column', async () => {
    const manifest = (await new BundledCatalogPluginSource().list()).find(
      (entry) => entry.id === 'voyager.kimi-reading-width',
    );
    if (!manifest) throw new Error('Missing bundled Kimi plugin');
    // Kimi's page as measured live (2026-10-24): column 800px, composer 768px.
    document.body.innerHTML =
      '<aside class="next-sidebar" id="sidebar"></aside><div class="chat-detail-main">' +
      '<div class="chat-content-list" id="column"></div><div class="chat-editor-wrap" id="composer"></div></div>';
    const width = (id: string) => getComputedStyle(document.getElementById(id)!).width;
    const engine = new DeclarativeEngine({
      doc: document,
      adapter: requireBundledSiteAdapter('kimi'),
    });
    try {
      engine.mount(manifest, { width: 1200 });
      expect(document.body.style.getPropertyValue('--gv-plugin-reading-width')).toBe('1200px');
      expect(width('column')).toContain('--gv-plugin-reading-width');
      expect(width('composer')).toBe(width('column'));
      expect(width('sidebar')).toBe('');

      engine.unmount(manifest.id);
      expect(width('composer')).toBe('');
    } finally {
      engine.unmount(manifest.id);
    }
  });
});
