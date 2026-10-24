import type { HomeFeaturesContent } from '../types';
import { enChats } from './enChats';

export const en: HomeFeaturesContent = {
  timeline: {
    eyebrow: 'Timeline',
    title: "Don't scroll. Fly.",
    body: 'Each dot on the right is a question you asked. Hover to see which one, click to jump there. Rest on the rail and a list button appears: it opens an overview of the whole chat that you can search.',
    hint: 'Try it: click a dot · press and hold to star · hover the rail for the overview',
    overview: 'Open chat overview',
    searchPlaceholder: 'Search this chat',
    noMatch: 'No questions match "{q}"',
  },
  folders: {
    eyebrow: 'Folders',
    title: 'A home for your thoughts.',
    body: 'Right inside the Gemini and ChatGPT sidebars. Three levels deep, starred chats on top, searchable.',
    hint: 'Try it: open another chat · drag one into a folder · search "cat"',
    heading: 'Folders',
    searchPlaceholder: 'Search folders and chats',
    newFolder: 'New folder',
    noMatch: 'No folders or chats match "{q}"',
    star: 'Star',
  },
  prompts: {
    eyebrow: 'Prompt library',
    title: 'Catch the spark.',
    body: 'Save a prompt once and call it up in any AI web UI, even local ones like DeepSeek Harness.',
    hint: 'Try it: pick one, it lands in the input on the left, then press send',
    add: 'Add',
    searchPlaceholder: 'Search prompts or tags',
    all: 'All',
    saved: 'Saved',
    settings: 'Settings',
    noMatch: 'No prompts match "{q}"',
  },
  composer: {
    replies: [
      'This is a demo, so I only know a few prewritten lines. But your message just grew a new dot on the timeline: press and hold it to star it.',
      "For a real answer, ask your AI of choice. If you'll say this again, save it with “{add}” in the prompt library and it's one click away next time.",
      "Got it. Quick tip while you're here: drag this chat into a folder and you'll never have to dig through your history for it.",
      "I'm a canned demo reply. Install Voyager and this timeline and prompt library show up in the Gemini, ChatGPT, Claude and DeepSeek you actually use, and these folders in Gemini and ChatGPT.",
    ],
    placeholder: 'Ask anything, or pick a prompt',
    send: 'Send',
    ball: 'Open the prompt library',
  },
  demo: { replay: 'Replay', close: 'End demo', prev: 'Previous feature', next: 'Next feature' },
  replyLeads: {
    table: 'Here it is as a table:',
    summary: 'In three points:',
    todo: 'Tick these off one by one:',
    plain: 'In plain words:',
  },
  chats: enChats,
  tree: [
    {
      folder: 'Travel',
      open: true,
      kids: [{ folder: 'Kyoto', open: true, kids: [{ chat: 'kyoto' }, { chat: 'packing' }] }],
    },
    { folder: 'Cooking', kids: [{ chat: 'dinner' }, { chat: 'week' }] },
    { chat: 'landlord' },
    { chat: 'run' },
    { chat: 'cat' },
    { chat: 'headphones' },
  ],
  current: 'kyoto',
  promptList: [
    {
      name: 'Make it a table',
      tag: 'Organize',
      text: 'Turn the above into a table.',
      reply: 'table',
    },
    {
      name: 'Sum up in three points',
      tag: 'Organize',
      text: 'Sum up this chat in three points.',
      reply: 'summary',
    },
    {
      name: 'Turn into a checklist',
      tag: 'Organize',
      text: 'Give me a checklist I can tick off.',
      reply: 'todo',
    },
    {
      name: 'Translate to Spanish',
      tag: 'Translate',
      text: 'Translate your last reply into natural Spanish.',
      reply: 'translate',
    },
    { name: 'Say it simply', tag: 'Learn', text: 'Say that again in plain words.', reply: 'plain' },
  ],
  groups: [
    {
      title: 'Look & feel',
      items: [
        {
          icon: 'move-horizontal',
          name: 'Chat width',
          detail: 'Widen the chat so code and tables fit',
        },
        { icon: 'a-large-small', name: 'Font size', detail: 'Set the chat font size on its own' },
        { icon: 'clock-3', name: 'Timestamps', detail: 'See when each message was sent' },
        {
          icon: 'workflow',
          name: 'Mermaid diagrams',
          detail: 'Flowcharts and sequence diagrams render in place',
        },
        {
          icon: 'snowflake,rain,sakura',
          name: 'Visual effects',
          detail: 'Snow, rain or cherry blossoms',
        },
      ],
    },
    {
      title: 'Your data',
      items: [
        { icon: 'file-down', name: 'Chat export', detail: 'Markdown, PDF, JSON or image' },
        {
          icon: 'microscope',
          name: 'Deep Research export',
          detail: 'With the thinking and source links',
        },
        { icon: 'cloud', name: 'Cloud sync', detail: 'Google Drive, or iCloud in Safari' },
        { icon: 'list-x', name: 'Batch delete', detail: 'Select chats and delete them at once' },
        {
          icon: 'image',
          name: 'Watermark removal',
          detail: 'Restore Nano Banana images losslessly',
        },
      ],
    },
    {
      title: 'Fewer steps',
      items: [
        { icon: 'quote', name: 'Quote reply', detail: 'Select a passage and ask about it' },
        {
          icon: 'corner-down-left',
          name: 'Send behavior',
          detail: 'Enter for a new line, Ctrl/⌘+Enter to send',
        },
        { icon: 'star', name: 'Default model', detail: 'New chats open in your usual model' },
        {
          icon: 'git-branch',
          name: 'Chat branches',
          detail: 'Fork from any turn and try another angle',
        },
        { icon: 'sigma', name: 'Formula copy', detail: 'Click to copy LaTeX or a Word equation' },
      ],
    },
    {
      title: 'Open ecosystem',
      items: [
        {
          icon: 'puzzle',
          name: 'Plugins',
          detail: 'Official plugins, plus your own local ones',
        },
        {
          icon: 'globe',
          name: 'Works across sites',
          detail: 'Claude, ChatGPT, DeepSeek and Kimi too',
        },
        {
          icon: 'monitor',
          name: 'Local web UIs',
          detail: 'Use the prompt library in DeepSeek Harness and other local UIs',
        },
        { icon: 'code', name: 'IDE connection', detail: 'Send chat context to VS Code' },
        {
          icon: 'panel-left-close',
          name: 'Sidebar auto-hide',
          detail: 'The sidebar tucks away when you move off it',
        },
      ],
    },
  ],
};
