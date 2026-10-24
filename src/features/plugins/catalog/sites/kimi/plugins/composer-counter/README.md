# Kimi · Draft counter

Shows a small live count of your draft just above the Kimi message box, at its
inline-end corner. Choose what it counts in Voyager's popup:

| Setting value     | Counts                                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `chars` (default) | Unicode code points, line breaks excluded (an emoji such as 😀 counts once; a ZWJ sequence such as 👨‍👩‍👧 counts each joined code point) |
| `words`           | whitespace-separated words, with each Chinese, Japanese or Korean character counted as one word; punctuation alone is not a word     |
| `cjkChars`        | Han, Hiragana, Katakana and Hangul characters only                                                                                   |
| `lines`           | lines of the draft; an empty draft is 0, and a trailing line break opens a line                                                      |

There is no token count: Voyager ships no tokenizer.

The plugin invokes Voyager's `counterBadge` primitive with
`{ "target": "composer", "metric": "{{metric}}" }`. The primitive reads the
draft with Voyager's composer reader and updates once per animation frame while
you type. The badge sits above the adapter's `composerRoot` (`.chat-editor-content`),
is hidden while the draft is empty, is read-only and pointer-transparent, and
moves to the new composer after in-app navigation without leaving a second
badge. Turning the plugin off removes the badge and its styles.
