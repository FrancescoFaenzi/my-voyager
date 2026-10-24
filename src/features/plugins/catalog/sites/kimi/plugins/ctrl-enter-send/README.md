# Kimi · Ctrl/⌘+Enter to send

Makes **Enter insert a newline** and **Ctrl+Enter** (or **⌘+Enter** on macOS)
send from the Kimi composer. **Shift+Enter** keeps the site's normal behavior.
Enable this plugin from Voyager's popup; there are no additional settings.
Disabling it restores the site's normal keyboard handling immediately.

The plugin invokes Voyager's `sendShortcut` primitive with no params. Its
contract requires the adapter's `composer`, `composerRoot` and `sendButton`
semantic keys. Kimi's composer is a `contenteditable` editor, and its send
control is a `div` whose disabled state is a `.disabled` class rather than a
native `disabled`/`aria-disabled` attribute, so the adapter's `sendButton` is
`.send-button-container:not(.disabled)`: an empty composer has no send control
to press, and Site check counts it 0 there (not judged, since the key is
transient).

This requires an extension update that ships `sendShortcut`. The manifest uses
a concrete engine floor.
