# Kimi · Reading Typography

Adjusts the text size, line height and paragraph spacing of Kimi answers. The
controls match Voyager's Gemini font size and spacing settings: text size in
percent (80-150), and one spacing switch for line height (120-220 percent) and
paragraph spacing (0-24 px). Both switches are off by default, and a switch that
is off leaves its properties native.

Only answer paragraphs (Kimi's `.paragraph` divs), list items and table cells
change. Kimi's native metrics are 16 px on a 26 px line for paragraphs and list
items, and 14 px on a 22 px line for table cells; each scales from its own
size rather than its 14 px parent, so 125% makes a paragraph 20 px. Nested
items and cells inherit the size, so a percentage never compounds. Code blocks
keep their fixed size, block formulas stay native because KaTeX sizes them
relative to their parent, and thinking blocks (`.thinking-container`, which
carry their own `.markdown`), user messages and the composer are left alone.

Uses the Kimi adapter's `assistantTurn` semantic key. No extra host permissions,
native handler, remote resources or new storage keys. Disabling the plugin
removes the scoped class, both switch attributes and the stylesheet.
