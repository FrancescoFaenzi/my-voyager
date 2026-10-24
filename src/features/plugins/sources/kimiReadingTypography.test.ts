import { afterEach, describe, expect, it } from 'vitest';

import { requireBundledSiteAdapter } from '../catalog/sites';
import { DeclarativeEngine } from '../runtime/declarativeEngine';
import type { PluginManifest } from '../types';
import { BundledCatalogPluginSource } from './BundledCatalogPluginSource';

const ID = 'voyager.kimi-reading-typography';
const OFF = {
  fontSizeEnabled: false,
  fontSize: 100,
  spacingEnabled: false,
  lineHeight: 160,
  paragraphSpacing: 16,
};

// Kimi's reply as measured live (2026-10-24): the thinking block renders its own
// .markdown at 14px, the answer's .paragraph divs are 16px inside a 14px .markdown.
const PAGE =
  '<div class="segment-user"><div class="paragraph" id="user">Question</div></div>' +
  '<div id="answer" class="segment-assistant">' +
  '<div class="thinking-container"><div class="markdown"><div class="paragraph" id="think">Thinking</div>' +
  '<ul><li id="think-item">Step</li></ul></div></div>' +
  '<div class="markdown">' +
  '<div class="paragraph" id="first">First</div>' +
  '<ul><li id="item">Item<ul><li id="nested">Nested</li></ul></li>' +
  '<li id="loose"><div class="paragraph" id="loose-p">Loose</div></li></ul>' +
  '<div class="paragraph" id="block-math"><span class="katex-display"><span class="katex">y</span></span></div>' +
  '<table><tbody><tr><td id="cell"><div class="paragraph" id="cell-p">Cell</div></td></tr></tbody></table>' +
  '<div class="paragraph" id="last">Last</div></div></div>';

// jsdom leaves var() unresolved; the plugin sets its variables on <body>.
const applied = (id: string, property: string) =>
  getComputedStyle(document.getElementById(id)!)
    .getPropertyValue(property)
    .replace(
      /var\((--[\w-]+)(?:,\s*([^)]+))?\)/g,
      (_, name: string, fallback = '') => document.body.style.getPropertyValue(name) || fallback,
    )
    .replace(/\s+/g, ' ')
    .replace(/\( | \)/g, (m) => m.trim());

async function mountPage(settings: typeof OFF) {
  const manifest = (await new BundledCatalogPluginSource().list()).find(
    (m): m is PluginManifest => m.id === ID,
  );
  if (!manifest) throw new Error('Missing Kimi reading typography plugin');
  document.body.innerHTML = PAGE;
  const engine = new DeclarativeEngine({
    doc: document,
    adapter: requireBundledSiteAdapter('kimi'),
  });
  engine.mount(manifest, settings);
  return engine;
}

afterEach(() => {
  document.head.innerHTML = '';
  document.body.innerHTML = '';
  document.body.removeAttribute('style');
});

describe('Kimi reading typography', () => {
  it('scales answer paragraphs, list text included, from their native 16px, so 125% is 20px', async () => {
    const engine = await mountPage({ ...OFF, fontSizeEnabled: true, fontSize: 125 });
    try {
      // A list item's .paragraph carries Kimi's own 16px, so it is sized too;
      // the size is absolute, so nested items never compound.
      for (const id of ['first', 'item', 'nested', 'loose-p', 'last']) {
        expect(applied(id, 'font-size'), id).toBe('calc(16px * 125 / 100)');
        expect(applied(id, 'line-height'), id).toBe('1.625em');
      }
      expect(applied('cell', 'font-size')).toBe('calc(14px * 125 / 100)');
      expect(applied('cell-p', 'font-size')).toBe('');
    } finally {
      engine.unmountAll();
    }
  });

  it('keeps thinking, block formulas and user messages native', async () => {
    const engine = await mountPage({
      ...OFF,
      fontSizeEnabled: true,
      fontSize: 150,
      spacingEnabled: true,
      lineHeight: 200,
      paragraphSpacing: 8,
    });
    try {
      for (const id of ['think', 'think-item', 'block-math', 'user']) {
        expect(applied(id, 'font-size'), id).toBe('');
        expect(applied(id, 'line-height'), id).toBe('');
      }
      for (const id of ['think', 'user']) expect(applied(id, 'margin-block-end'), id).toBe('');
    } finally {
      engine.unmountAll();
    }
  });

  it('leaves answers native while both switches are off', async () => {
    const engine = await mountPage(OFF);
    try {
      for (const id of ['first', 'item', 'cell', 'last']) {
        expect(applied(id, 'font-size'), id).toBe('');
        expect(applied(id, 'line-height'), id).toBe('');
      }
    } finally {
      engine.unmountAll();
    }
  });
});
