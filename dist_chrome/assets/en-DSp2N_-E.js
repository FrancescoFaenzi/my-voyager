const e=`> _"What's your name?" — 《Your Name.》 (2016)_

### Highlights

- 🌙 **:kimi: Kimi support**: Folders, Conversation export, Comfortable Reading Width, Reading Typography, Ctrl/⌘+Enter to send, Draft auto-save, Draft counter, Quote replies and Site check now work on Kimi; all nine plugins are off by default, so turn on the ones you want under Plugins.
- 🔒 **Folders stay with their own account**: with account isolation on, switching Google accounts keeps folders, Drive sync and Folder as Project's folder instructions with the account you're on; when Voyager can't tell which account the page is signed in to, it says so instead of loading forever.
- 📁 **:gemini: New chat in a folder without a reload**: with Folder as Project on, **New chat in this folder** opens a new chat right away with that folder already picked.

### New

- **Site check** _(off by default)_: when Voyager breaks on a site, turn on **Site check** under Plugins to see how many of the page elements Voyager relies on were found, and pick the part that looks broken; the report has no chat content, ready to copy or attach to an issue.
- **:claude: Claude and :deepseek: DeepSeek export** _(off by default)_: turn on **Conversation export** under Plugins to save a whole conversation to a file; long conversations are read from start to finish, and Voyager tells you when it couldn't read them all.
- **Voyager on phones**: on Firefox for Android, the timelines, Gemini and ChatGPT export and the visual effects work as usual; other plugins and the folder settings say **Not available on phones yet** and keep your choice for your computer; Google Drive sync isn't available on phones.
- **:chatgpt: Parallel Local Bridge jobs** _(off by default)_: turn on **Run jobs in parallel** in the popup's Local Bridge card and several Voyager CLI jobs run at once, each in its own ChatGPT tab, instead of waiting behind one long reply; needs a voyager CLI newer than 0.4.0.

### Fixes

- **:gemini: Recent Gems back in the sidebar**: now that Gemini keeps Gems under **More**, Recent Gems appear in their own **Gems** section of the sidebar.
- **:chatgpt: Export without signing in**: ChatGPT conversations opened while signed out (\`/uc/\` links) now show the Export button and export normally.
- **:aistudio: AI Studio folder layout**: the Folders heading lines up with the nav's section headings, and prompts are indented under their folder.
- **:aistudio: AI Studio settings apply at once**: the popup's **Hide archived conversations** now controls AI Studio itself, and turning folders on or off no longer needs a reload.
- **:chatgpt: Dragging chats into folders**: dragging a chat in ChatGPT's sidebar no longer drops halfway.
- **Hide archived conversations**: takes effect as soon as it's turned on, and never hides chats that aren't in a folder.
- **:claude: Claude's redesigned sidebar**: Voyager finds Claude's sidebar again after its redesign.
- **:chatgpt: Local Bridge model switching**: Voyager CLI reports a model switch only once the menu has closed and the model has really changed.
- **Firefox sakura effect**: no longer shows a patch of background on dark pages.
`;export{e as default};
