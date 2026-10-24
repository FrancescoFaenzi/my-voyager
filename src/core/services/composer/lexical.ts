/**
 * Lexical composers (Kimi's): the editor keeps its own document and reverts
 * DOM changes it did not make. `execCommand` fires no `beforeinput`, so a
 * native insert that opens new blocks (the blank line before a quote) lands
 * in nodes Lexical drops, and the composer is left as it was.
 */

/** Lexical marks its root element; nothing else on a host page carries this. */
export function isLexicalComposer(field: HTMLElement): boolean {
  return field.matches('[data-lexical-editor="true"]');
}

/**
 * Asks Lexical to insert `text` at the field's current selection: a
 * `beforeinput` whose text rides on a `DataTransfer`, which Lexical inserts
 * itself (`insertRawText`, with its own line breaks) and cancels. Returns
 * whether the editor took it; Lexical renders the change on its next commit.
 */
export function insertLexicalText(field: HTMLElement, text: string): boolean {
  const view = field.ownerDocument.defaultView;
  if (!view || typeof view.DataTransfer !== 'function' || typeof view.InputEvent !== 'function') {
    return false;
  }
  try {
    const transfer = new view.DataTransfer();
    transfer.setData('text/plain', text);
    // The text must ride in the init dictionary: a property defined afterwards
    // lives only on the content script's isolated-world wrapper, so the page's
    // Lexical read a null dataTransfer and the quote never arrived.
    const event = new view.InputEvent('beforeinput', {
      inputType: 'insertText',
      data: null,
      dataTransfer: transfer,
      bubbles: true,
      cancelable: true,
      composed: true,
    });
    // jsdom ignores `dataTransfer` in the init dictionary.
    if (event.dataTransfer?.getData('text/plain') !== text) {
      Object.defineProperty(event, 'dataTransfer', { value: transfer });
    }
    field.dispatchEvent(event);
    return event.defaultPrevented;
  } catch {
    return false;
  }
}
