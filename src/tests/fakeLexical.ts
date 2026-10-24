/**
 * A Lexical-shaped composer for jsdom, as Kimi renders its composer (measured
 * live 2026-10-24): `<p dir="ltr"><span data-lexical-text="true">…</span></p>`,
 * an empty `<p><br></p>`, line breaks as `<br>`. Like Lexical it keeps its own
 * text: it applies only the `beforeinput` edits it handles itself (text on a
 * `DataTransfer`, as Lexical's `insertRawText` path), rendering on the next
 * microtask as Lexical commits, and reverts any native DOM edit on `input`.
 */

/** jsdom has no `DataTransfer`; the subset `beforeinput` needs. */
class TextTransfer {
  private readonly data = new Map<string, string>();
  setData(type: string, value: string): void {
    this.data.set(type, value);
  }
  getData(type: string): string {
    return this.data.get(type) ?? '';
  }
  get types(): string[] {
    return [...this.data.keys()];
  }
}

export interface FakeLexical {
  /** The editor's own text, with `\n` for each line break. */
  text(): string;
  /** Removes the `DataTransfer` stand-in. */
  restore(): void;
}

export function mountFakeLexical(root: HTMLElement, initial = ''): FakeLexical {
  const view = root.ownerDocument.defaultView!;
  const hadTransfer = 'DataTransfer' in view;
  if (!hadTransfer) Object.assign(view, { DataTransfer: TextTransfer });
  let text = initial;
  root.setAttribute('data-lexical-editor', 'true');

  const render = (): void => {
    const paragraph = root.ownerDocument.createElement('p');
    if (text === '') paragraph.append(root.ownerDocument.createElement('br'));
    else {
      paragraph.dir = 'ltr';
      text.split('\n').forEach((line, index) => {
        if (index > 0) paragraph.append(root.ownerDocument.createElement('br'));
        if (!line) return;
        const span = root.ownerDocument.createElement('span');
        span.setAttribute('data-lexical-text', 'true');
        span.textContent = line;
        paragraph.append(span);
      });
    }
    root.replaceChildren(paragraph);
  };

  /** The text offset of a DOM point inside the editor. */
  const offsetOf = (node: Node, offset: number): number => {
    const range = root.ownerDocument.createRange();
    range.selectNodeContents(root);
    range.setEnd(node, offset);
    const before = range.cloneContents();
    return (before.textContent ?? '').length + before.querySelectorAll('br').length;
  };

  root.addEventListener('beforeinput', (event) => {
    const input = event as InputEvent;
    const inserted = input.dataTransfer?.getData('text/plain');
    const selection = root.ownerDocument.getSelection();
    if (input.inputType !== 'insertText' || input.data !== null || inserted === undefined) return;
    if (!selection?.rangeCount || !root.contains(selection.getRangeAt(0).commonAncestorContainer))
      return;
    event.preventDefault();
    const range = selection.getRangeAt(0);
    const start = text === '' ? 0 : offsetOf(range.startContainer, range.startOffset);
    const end = text === '' ? 0 : offsetOf(range.endContainer, range.endOffset);
    text = text.slice(0, start) + inserted + text.slice(end);
    queueMicrotask(render);
  });
  // A native edit never reaches Lexical's state: the next reconcile puts the DOM back.
  root.addEventListener('input', render);
  render();

  return {
    text: () => text,
    restore: () => {
      if (!hadTransfer) Reflect.deleteProperty(view, 'DataTransfer');
    },
  };
}
