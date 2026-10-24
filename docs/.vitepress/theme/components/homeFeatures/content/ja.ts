import type { HomeFeaturesContent } from '../types';
import { jaChats } from './jaChats';

export const ja: HomeFeaturesContent = {
  timeline: {
    eyebrow: 'タイムライン',
    title: 'スクロールせず、ひとっ飛び。',
    body: '右側の点ひとつひとつが、あなたの質問です。カーソルを合わせれば中身がわかり、クリックすればそこへジャンプ。レールの上で少し止まるとリストボタンが現れ、会話全体の一覧を開いて検索もできます。',
    hint: '試してみて：点をクリック · 長押しでスター · レールにカーソルを合わせて一覧を開く',
    overview: '会話の一覧を開く',
    searchPlaceholder: 'この会話を検索',
    noMatch: '「{q}」に一致する質問はありません',
  },
  folders: {
    eyebrow: 'フォルダ',
    title: '思考に家を与える。',
    body: 'Gemini と ChatGPT のサイドバーにそのまま溶け込みます。3階層まで入れ子にでき、スター付きは上に固定、検索もできます。',
    hint: '試してみて：別の会話をクリック · フォルダへドラッグ · 「猫」で検索',
    heading: 'フォルダ',
    searchPlaceholder: 'フォルダとチャットを検索',
    newFolder: '新しいフォルダ',
    noMatch: '「{q}」に一致するフォルダやチャットはありません',
    star: 'スター',
  },
  prompts: {
    eyebrow: 'プロンプトライブラリ',
    title: 'ひらめきを、逃さない。',
    body: 'よく使う一文は一度保存すれば、どの Web 版 AI でも呼び出せます。DeepSeek Harness のようなローカル WebUI でも。',
    hint: '試してみて：1つ選ぶと左の入力欄に入るので、そのまま送信',
    add: '追加',
    searchPlaceholder: 'プロンプトまたはタグを検索',
    all: 'すべて',
    saved: '保存済み',
    settings: '設定',
    noMatch: '「{q}」に一致するプロンプトはありません',
  },
  composer: {
    replies: [
      'これはデモなので、用意された返事しかできません。でも今のメッセージで、タイムラインに新しい点が増えました。長押しするとスターを付けられます。',
      '本当の答えは、いつもの AI に聞いてください。よく使う一文なら、プロンプトライブラリの「{add}」で保存しておけば、次からワンクリックで入力できます。',
      '了解です。ついでにひとつ：この会話をフォルダにドラッグしておけば、履歴を探し回らずに済みます。',
      'これは決め打ちのデモ返信です。Voyager を入れると、このタイムラインとプロンプトライブラリは普段使っている Gemini、ChatGPT、Claude、DeepSeek に、フォルダは Gemini と ChatGPT に現れます。',
    ],
    placeholder: 'なんでも聞いてみて。プロンプトを選んでもOK',
    send: '送信',
    ball: 'プロンプトライブラリを開く',
  },
  demo: { replay: 'もう一度', close: 'デモを終了', prev: '前の機能', next: '次の機能' },
  replyLeads: {
    table: '表にまとめました：',
    summary: '3つのポイントにまとめると：',
    todo: 'ひとつずつチェックしていきましょう：',
    plain: 'ひと言でいうと：',
  },
  chats: jaChats,
  tree: [
    {
      folder: '旅行',
      open: true,
      kids: [{ folder: '京都', open: true, kids: [{ chat: 'kyoto' }, { chat: 'packing' }] }],
    },
    { folder: '料理', kids: [{ chat: 'dinner' }, { chat: 'week' }] },
    { chat: 'landlord' },
    { chat: 'run' },
    { chat: 'cat' },
    { chat: 'headphones' },
  ],
  current: 'kyoto',
  promptList: [
    { name: '表にまとめる', tag: '整理', text: '上の内容を表にまとめて。', reply: 'table' },
    {
      name: '3つのポイントで要約',
      tag: '整理',
      text: 'この会話を3つのポイントにまとめて。',
      reply: 'summary',
    },
    {
      name: 'チェックリストにする',
      tag: '整理',
      text: 'チェックできる ToDo リストにして。',
      reply: 'todo',
    },
    {
      name: '自然な英語に翻訳',
      tag: '翻訳',
      text: '直前の回答を自然な英語に訳して。',
      reply: 'translate',
    },
    {
      name: 'もっとかんたんに',
      tag: '学び',
      text: 'もっとかんたんな言葉で言い直して。',
      reply: 'plain',
    },
  ],
  groups: [
    {
      title: '見た目を整える',
      items: [
        {
          icon: 'move-horizontal',
          name: 'チャット幅',
          detail: '会話欄を広げて、コードも表も折り返さない',
        },
        { icon: 'a-large-small', name: 'フォントサイズ', detail: 'チャットの文字サイズだけを調整' },
        {
          icon: 'clock-3',
          name: 'メッセージタイムスタンプ',
          detail: '各メッセージに送信時刻を表示',
        },
        {
          icon: 'workflow',
          name: 'Mermaid ダイアグラム',
          detail: 'フローチャートやシーケンス図をその場で描画',
        },
        { icon: 'snowflake,rain,sakura', name: 'ビジュアルエフェクト', detail: '雪、雨、桜' },
      ],
    },
    {
      title: 'データはあなたのもの',
      items: [
        { icon: 'file-down', name: '会話のエクスポート', detail: 'Markdown・PDF・JSON・画像' },
        {
          icon: 'microscope',
          name: 'Deep Research エクスポート',
          detail: '思考過程と引用リンクもまとめて',
        },
        { icon: 'cloud', name: 'クラウド同期', detail: 'Google ドライブ、Safari では iCloud' },
        { icon: 'list-x', name: '一括削除', detail: '選んだ会話をまとめて削除' },
        { icon: 'image', name: '透かし除去', detail: 'Nano Banana の生成画像をロスレスで復元' },
      ],
    },
    {
      title: '手数を減らす',
      items: [
        { icon: 'quote', name: '引用返信', detail: '一部を選んで、そのまま引用して質問' },
        { icon: 'corner-down-left', name: '送信動作', detail: 'Enter で改行、Ctrl/⌘+Enter で送信' },
        { icon: 'star', name: 'デフォルトモデル', detail: '新しい会話をいつものモデルで開始' },
        {
          icon: 'git-branch',
          name: '会話の分岐',
          detail: '好きなターンから分岐して、別の聞き方を試す',
        },
        { icon: 'sigma', name: '数式コピー', detail: 'クリックで LaTeX や Word の数式をコピー' },
      ],
    },
    {
      title: '開かれたエコシステム',
      items: [
        {
          icon: 'puzzle',
          name: 'プラグイン',
          detail: '公式プラグインに加えて、自作のローカルプラグインも',
        },
        {
          icon: 'globe',
          name: 'マルチサイト対応',
          detail: 'Claude・ChatGPT・DeepSeek・Kimi でも使える',
        },
        {
          icon: 'monitor',
          name: 'ローカル Web UI',
          detail: 'DeepSeek Harness などのローカル UI でもプロンプトライブラリを',
        },
        { icon: 'code', name: 'IDE 連携', detail: '会話のコンテキストを VS Code に同期' },
        {
          icon: 'panel-left-close',
          name: 'サイドバー自動非表示',
          detail: 'マウスを離すと自動で閉じ、会話に集中',
        },
      ],
    },
  ],
};
