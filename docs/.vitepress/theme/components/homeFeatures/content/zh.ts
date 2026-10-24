import type { HomeFeaturesContent } from '../types';
import { zhChats } from './zhChats';

export const zh: HomeFeaturesContent = {
  timeline: {
    eyebrow: '时间线',
    title: '别滚屏，去飞。',
    body: '右侧每个圆点是你问过的一句话。悬停看是哪句，点一下直达；在轨道上停一下，旁边会出现列表按钮，展开就是整段对话的总览，还能搜。',
    hint: '试试：点圆点 · 长按标星 · 悬停轨道打开总览',
    overview: '打开对话总览',
    searchPlaceholder: '搜索这段对话',
    noMatch: '没有匹配「{q}」的提问',
  },
  folders: {
    eyebrow: '文件夹',
    title: '给思想安个家。',
    body: '长在 Gemini 和 ChatGPT 侧栏里，三级嵌套，标星置顶，还能搜。',
    hint: '试试：点另一个对话 · 拖进文件夹 · 搜「猫」',
    heading: '文件夹',
    searchPlaceholder: '搜索文件夹和对话',
    newFolder: '新文件夹',
    noMatch: '没有匹配「{q}」的文件夹或对话',
    star: '标星',
  },
  prompts: {
    eyebrow: '提示词库',
    title: '捕捉灵光。',
    body: '常用的话存一次，所有网页版 AI 都能调出来，连 DeepSeek Harness 这样的本地 WebUI 也行。',
    hint: '试试：点一条，它会填进左边的输入栏，再按发送',
    add: '新增',
    searchPlaceholder: '搜索 prompt 或标签',
    all: '全部',
    saved: '收藏库',
    settings: '设置',
    noMatch: '没有匹配「{q}」的提示词',
  },
  composer: {
    replies: [
      '这里是演示，我只会说预先写好的话。不过你刚才这句已经在时间线上长出了一个新圆点，长按它就能标星。',
      '真正的回答得去网页版 AI 里问。这句话要是常用，可以点提示词库的「{add}」存起来，下次一点就填进输入栏。',
      '收到。顺手教你一招：把这段对话拖进文件夹，以后不用翻历史就能找到。',
      '我是写死的演示回答。装上 Voyager，这套时间线和提示词库就会出现在你真正用的 Gemini、ChatGPT、Claude 和 DeepSeek 里，文件夹则在 Gemini 和 ChatGPT 里。',
    ],
    placeholder: '随便问点什么，或者挑一条提示词',
    send: '发送',
    ball: '打开提示词库',
  },
  demo: { replay: '重播', close: '结束演示', prev: '上一个功能', next: '下一个功能' },
  replyLeads: {
    table: '整理好了：',
    summary: '三点总结：',
    todo: '可以照着这个一项项勾掉：',
    plain: '一句话：',
  },
  chats: zhChats,
  tree: [
    {
      folder: '旅行',
      open: true,
      kids: [{ folder: '京都', open: true, kids: [{ chat: 'kyoto' }, { chat: 'packing' }] }],
    },
    { folder: '做饭', kids: [{ chat: 'dinner' }, { chat: 'week' }] },
    { chat: 'landlord' },
    { chat: 'run' },
    { chat: 'cat' },
    { chat: 'headphones' },
  ],
  current: 'kyoto',
  promptList: [
    { name: '整理成表格', tag: '整理', text: '把上面的内容整理成一张表格。', reply: 'table' },
    { name: '总结成三点', tag: '整理', text: '把这段对话总结成三点。', reply: 'summary' },
    { name: '列成待办清单', tag: '整理', text: '列一个可以打勾的待办清单。', reply: 'todo' },
    {
      name: '翻成地道英文',
      tag: '翻译',
      text: '把你上一条回答翻成地道的英文。',
      reply: 'translate',
    },
    { name: '说得再简单点', tag: '学东西', text: '用一句大白话再说一遍。', reply: 'plain' },
  ],
  groups: [
    {
      title: '视觉体验',
      items: [
        { icon: 'move-horizontal', name: '对话宽度', detail: '拉宽对话区，代码和表格不再折行' },
        { icon: 'a-large-small', name: '字体大小', detail: '单独调聊天字号' },
        { icon: 'clock-3', name: '消息时间戳', detail: '每条消息标上发送时间' },
        { icon: 'workflow', name: 'Mermaid 图表', detail: '流程图、时序图直接渲染' },
        { icon: 'snowflake,rain,sakura', name: '视觉特效', detail: '飘雪、下雨、樱花' },
      ],
    },
    {
      title: '数据归你',
      items: [
        { icon: 'file-down', name: '对话导出', detail: 'Markdown、PDF、JSON、图片' },
        { icon: 'microscope', name: 'Deep Research 导出', detail: '连同思考过程和引用链接' },
        { icon: 'cloud', name: '云同步', detail: 'Google Drive；Safari 走 iCloud' },
        { icon: 'list-x', name: '批量删除', detail: '勾选多条对话一次删掉' },
        { icon: 'image', name: '去水印', detail: 'Nano Banana 生图无损还原' },
      ],
    },
    {
      title: '简化操作',
      items: [
        { icon: 'quote', name: '引用回复', detail: '选中一段，直接引用追问' },
        { icon: 'corner-down-left', name: '发送行为', detail: 'Enter 换行，Ctrl/⌘+Enter 发送' },
        { icon: 'star', name: '默认模型', detail: '新对话自动切到常用模型' },
        { icon: 'git-branch', name: '对话分支', detail: '从任一轮分叉，试另一种问法' },
        { icon: 'sigma', name: '公式复制', detail: '点一下复制 LaTeX 或 Word 公式' },
      ],
    },
    {
      title: '开放生态',
      items: [
        { icon: 'puzzle', name: '插件', detail: '官方插件，也能装你自己的本地插件' },
        { icon: 'globe', name: '多站通用', detail: 'Claude、ChatGPT、DeepSeek、Kimi 也能用' },
        {
          icon: 'monitor',
          name: '本地 WebUI',
          detail: '提示词库也能用在 DeepSeek Harness 等本地界面',
        },
        { icon: 'code', name: '连接 IDE', detail: '把对话上下文同步给 VS Code' },
        { icon: 'panel-left-close', name: '侧栏自动隐藏', detail: '鼠标移开就收起，专心看对话' },
      ],
    },
  ],
};
