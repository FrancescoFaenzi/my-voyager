import type { HomeFeaturesContent } from '../types';
import { zhTWChats } from './zh_TWChats';

export const zhTW: HomeFeaturesContent = {
  timeline: {
    eyebrow: '時間軸',
    title: '別再滑了，用飛的。',
    body: '右側每個圓點都是你問過的一句話。滑鼠移上去就知道是哪句，點一下直接跳過去；在軌道上停一下，旁邊會出現列表按鈕，展開就是整段對話的總覽，還能搜尋。',
    hint: '試試看：點圓點 · 長按加星 · 停在軌道上打開總覽',
    overview: '開啟對話總覽',
    searchPlaceholder: '搜尋這段對話',
    noMatch: '沒有符合「{q}」的提問',
  },
  folders: {
    eyebrow: '資料夾',
    title: '給思想安個家。',
    body: '就長在 Gemini 和 ChatGPT 側邊欄裡，三層巢狀，星標置頂，還能搜尋。',
    hint: '試試看：點另一個對話 · 拖進資料夾 · 搜尋「貓」',
    heading: '資料夾',
    searchPlaceholder: '搜尋資料夾和對話',
    newFolder: '新資料夾',
    noMatch: '沒有符合「{q}」的資料夾或對話',
    star: '加星標',
  },
  prompts: {
    eyebrow: '提示詞庫',
    title: '捕捉靈光。',
    body: '常用的話存一次，所有網頁版 AI 都叫得出來，連 DeepSeek Harness 這種本機 WebUI 也行。',
    hint: '試試看：點一則，它會填進左邊的輸入框，再按傳送',
    add: '新增',
    searchPlaceholder: '搜尋 prompt 或標籤',
    all: '全部',
    saved: '收藏庫',
    settings: '設定',
    noMatch: '沒有符合「{q}」的提示詞',
  },
  composer: {
    replies: [
      '這裡是示範，我只會說事先寫好的話。不過你剛剛那句已經在時間軸上長出一個新圓點，長按它就能加星號。',
      '真正的回答要去網頁版 AI 問。這句話如果常用，可以按提示詞庫的「{add}」存起來，下次一點就填進輸入框。',
      '收到。順便教你一招：把這段對話拖進資料夾，以後不用翻紀錄就找得到。',
      '我是寫死的示範回答。裝上 Voyager，這套時間軸和提示詞庫就會出現在你真正在用的 Gemini、ChatGPT、Claude 和 DeepSeek 裡，資料夾則在 Gemini 和 ChatGPT 裡。',
    ],
    placeholder: '隨便問點什麼，或挑一則提示詞',
    send: '傳送',
    ball: '開啟提示詞庫',
  },
  demo: { replay: '重播', close: '結束示範', prev: '上一個功能', next: '下一個功能' },
  replyLeads: {
    table: '整理好了：',
    summary: '三點總結：',
    todo: '照著這份一項一項打勾就好：',
    plain: '白話來說：',
  },
  chats: zhTWChats,
  tree: [
    {
      folder: '旅行',
      open: true,
      kids: [{ folder: '京都', open: true, kids: [{ chat: 'kyoto' }, { chat: 'packing' }] }],
    },
    { folder: '下廚', kids: [{ chat: 'dinner' }, { chat: 'week' }] },
    { chat: 'landlord' },
    { chat: 'run' },
    { chat: 'cat' },
    { chat: 'headphones' },
  ],
  current: 'kyoto',
  promptList: [
    { name: '整理成表格', tag: '整理', text: '把上面的內容整理成一張表格。', reply: 'table' },
    { name: '總結成三點', tag: '整理', text: '把這段對話總結成三點。', reply: 'summary' },
    { name: '列成待辦清單', tag: '整理', text: '列一份可以打勾的待辦清單。', reply: 'todo' },
    {
      name: '翻成道地英文',
      tag: '翻譯',
      text: '把你上一則回答翻成道地的英文。',
      reply: 'translate',
    },
    { name: '說得再白話一點', tag: '學東西', text: '用一句白話再說一次。', reply: 'plain' },
  ],
  groups: [
    {
      title: '視覺體驗',
      items: [
        { icon: 'move-horizontal', name: '對話寬度', detail: '拉寬對話區，程式碼和表格不再折行' },
        { icon: 'a-large-small', name: '字體大小', detail: '單獨調整聊天字級' },
        { icon: 'clock-3', name: '訊息時間戳', detail: '每則訊息標上傳送時間' },
        { icon: 'workflow', name: 'Mermaid 圖表', detail: '流程圖、循序圖直接呈現' },
        { icon: 'snowflake,rain,sakura', name: '視覺特效', detail: '飄雪、下雨、櫻花' },
      ],
    },
    {
      title: '資料歸你',
      items: [
        { icon: 'file-down', name: '對話匯出', detail: 'Markdown、PDF、JSON、圖片' },
        { icon: 'microscope', name: 'Deep Research 匯出', detail: '連同思考過程和引用連結' },
        { icon: 'cloud', name: '雲端同步', detail: 'Google Drive；Safari 用 iCloud' },
        { icon: 'list-x', name: '批次刪除', detail: '勾選多個對話，一次刪掉' },
        { icon: 'image', name: '去除浮水印', detail: 'Nano Banana 生成的圖片無損還原' },
      ],
    },
    {
      title: '簡化操作',
      items: [
        { icon: 'quote', name: '引用回覆', detail: '選取一段，直接引用追問' },
        { icon: 'corner-down-left', name: '傳送行為', detail: 'Enter 換行，Ctrl/⌘+Enter 傳送' },
        { icon: 'star', name: '預設模型', detail: '新對話自動切到常用模型' },
        { icon: 'git-branch', name: '對話分支', detail: '從任一輪分岔，換個問法試試' },
        { icon: 'sigma', name: '公式複製', detail: '點一下就複製 LaTeX 或 Word 公式' },
      ],
    },
    {
      title: '開放生態',
      items: [
        { icon: 'puzzle', name: '外掛', detail: '官方外掛，也能裝你自己的本機外掛' },
        { icon: 'globe', name: '多站通用', detail: 'Claude、ChatGPT、DeepSeek、Kimi 也能用' },
        {
          icon: 'monitor',
          name: '本機 Web UI',
          detail: '提示詞庫也能用在 DeepSeek Harness 等本機介面',
        },
        { icon: 'code', name: '連接 IDE', detail: '把對話上下文同步給 VS Code' },
        { icon: 'panel-left-close', name: '側邊欄自動收起', detail: '滑鼠移開就收起，專心看對話' },
      ],
    },
  ],
};
