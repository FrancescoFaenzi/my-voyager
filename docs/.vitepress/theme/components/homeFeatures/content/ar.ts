import type { HomeFeaturesContent } from '../types';
import { arChats } from './arChats';

export const ar: HomeFeaturesContent = {
  timeline: {
    eyebrow: 'الجدول الزمني',
    title: 'لا تمرّر الشاشة. حلّق.',
    body: 'كل نقطة على الجانب سؤالٌ طرحته. مرّر المؤشر فوقها لترى أيّ سؤال هو، وانقر لتنتقل إليه. توقّف لحظة على الشريط فيظهر زر القائمة: يفتح نظرة عامة على المحادثة كلها، ويمكنك البحث فيها.',
    hint: 'جرّب: انقر نقطة · اضغط مطوّلاً لتمييزها بنجمة · مرّر المؤشر على الشريط لفتح النظرة العامة',
    overview: 'فتح النظرة العامة على المحادثة',
    searchPlaceholder: 'ابحث في هذه المحادثة',
    noMatch: 'لا توجد أسئلة تطابق «{q}»',
  },
  folders: {
    eyebrow: 'المجلدات',
    title: 'نظام ملفات لأفكارك.',
    body: 'داخل الشريط الجانبي لـ Gemini وChatGPT مباشرة. ثلاثة مستويات من التداخل، والمحادثات المميّزة بنجمة في الأعلى، مع بحث سريع.',
    hint: 'جرّب: افتح محادثة أخرى · اسحب واحدة إلى مجلد · ابحث عن «قطتي»',
    heading: 'المجلدات',
    searchPlaceholder: 'البحث في المجلدات والمحادثات',
    newFolder: 'مجلد جديد',
    noMatch: 'لا توجد مجلدات أو محادثات تطابق «{q}»',
    star: 'تمييز بنجمة',
  },
  prompts: {
    eyebrow: 'مكتبة المطالبات',
    title: 'لا ترمِها. احفظها.',
    body: 'احفظ المطالبة مرة واحدة واستدعِها في أي واجهة ويب للذكاء الاصطناعي، حتى الواجهات المحلية مثل DeepSeek Harness.',
    hint: 'جرّب: اختر واحدة فتظهر في مربع الإدخال، ثم اضغط إرسال',
    add: 'إضافة',
    searchPlaceholder: 'البحث في المطالبات أو العلامات',
    all: 'الكل',
    saved: 'المحفوظة',
    settings: 'الإعدادات',
    noMatch: 'لا توجد مطالبات تطابق «{q}»',
  },
  composer: {
    replies: [
      'هذا عرض توضيحي، لذا لا أعرف إلا ردودًا مكتوبة مسبقًا. لكن رسالتك أضافت للتو نقطة جديدة على الخط الزمني؛ اضغط عليها مطولًا لتمييزها بنجمة.',
      'للحصول على إجابة حقيقية، اسأل مساعدك المعتاد. وإن كنت ستكرر هذه الجملة، احفظها عبر «{add}» في مكتبة المطالبات لتكون على بُعد نقرة في المرة القادمة.',
      'وصلت. نصيحة سريعة: اسحب هذه المحادثة إلى مجلد، ولن تحتاج إلى البحث في السجل بعد الآن.',
      'أنا رد تجريبي جاهز. ثبّت Voyager وسيظهر هذا الخط الزمني ومكتبة المطالبات في Gemini وChatGPT وClaude وDeepSeek التي تستخدمها فعلًا، وهذه المجلدات في Gemini وChatGPT.',
    ],
    placeholder: 'اسأل عن أي شيء، أو اختر مطالبة',
    send: 'إرسال',
    ball: 'فتح مكتبة المطالبات',
  },
  demo: {
    replay: 'إعادة التشغيل',
    close: 'إنهاء العرض',
    prev: 'الميزة السابقة',
    next: 'الميزة التالية',
  },
  replyLeads: {
    table: 'إليك ذلك في جدول:',
    summary: 'في ثلاث نقاط:',
    todo: 'أنجزها واحدة تلو الأخرى:',
    plain: 'بعبارة بسيطة:',
  },
  chats: arChats,
  tree: [
    {
      folder: 'سفر',
      open: true,
      kids: [{ folder: 'كيوتو', open: true, kids: [{ chat: 'kyoto' }, { chat: 'packing' }] }],
    },
    { folder: 'طبخ', kids: [{ chat: 'dinner' }, { chat: 'week' }] },
    { chat: 'landlord' },
    { chat: 'run' },
    { chat: 'cat' },
    { chat: 'headphones' },
  ],
  current: 'kyoto',
  promptList: [
    { name: 'حوّله إلى جدول', tag: 'تنظيم', text: 'حوّل ما سبق إلى جدول.', reply: 'table' },
    {
      name: 'لخّص في ثلاث نقاط',
      tag: 'تنظيم',
      text: 'لخّص هذه المحادثة في ثلاث نقاط.',
      reply: 'summary',
    },
    {
      name: 'قائمة مهام',
      tag: 'تنظيم',
      text: 'أعطني قائمة مهام أشطب منها بندًا بندًا.',
      reply: 'todo',
    },
    {
      name: 'ترجم إلى الإنجليزية',
      tag: 'ترجمة',
      text: 'ترجم ردّك الأخير إلى إنجليزية طبيعية.',
      reply: 'translate',
    },
    { name: 'بسّطها لي', tag: 'تعلّم', text: 'أعد قول ذلك بكلمات بسيطة.', reply: 'plain' },
  ],
  groups: [
    {
      title: 'تجربة بصرية',
      items: [
        {
          icon: 'move-horizontal',
          name: 'عرض الدردشة',
          detail: 'وسّع المحادثة لتتّسع للأكواد والجداول',
        },
        { icon: 'a-large-small', name: 'حجم الخط', detail: 'اضبط حجم خط الدردشة وحده' },
        { icon: 'clock-3', name: 'طوابع الوقت', detail: 'اعرف متى أُرسلت كل رسالة' },
        {
          icon: 'workflow',
          name: 'مخططات Mermaid',
          detail: 'المخططات الانسيابية والتسلسلية تُعرض في مكانها',
        },
        {
          icon: 'snowflake,rain,sakura',
          name: 'المؤثرات البصرية',
          detail: 'ثلج أو مطر أو أزهار الكرز',
        },
      ],
    },
    {
      title: 'بياناتك ملكك',
      items: [
        { icon: 'file-down', name: 'تصدير المحادثات', detail: 'Markdown أو PDF أو JSON أو صورة' },
        {
          icon: 'microscope',
          name: 'تصدير Deep Research',
          detail: 'مع خطوات التفكير وروابط المصادر',
        },
        { icon: 'cloud', name: 'المزامنة السحابية', detail: 'Google Drive، أو iCloud في Safari' },
        { icon: 'list-x', name: 'الحذف الجماعي', detail: 'حدّد عدة محادثات واحذفها دفعة واحدة' },
        {
          icon: 'image',
          name: 'إزالة العلامة المائية',
          detail: 'استعادة صور Nano Banana دون فقدان الجودة',
        },
      ],
    },
    {
      title: 'خطوات أقل',
      items: [
        { icon: 'quote', name: 'الرد مع اقتباس', detail: 'حدّد مقطعاً واسأل عنه مباشرة' },
        {
          icon: 'corner-down-left',
          name: 'سلوك الإرسال',
          detail: 'Enter لسطر جديد، وCtrl/⌘+Enter للإرسال',
        },
        {
          icon: 'star',
          name: 'النموذج الافتراضي',
          detail: 'المحادثات الجديدة تبدأ بنموذجك المعتاد',
        },
        { icon: 'git-branch', name: 'تفريع المحادثة', detail: 'تفرّع من أي جولة وجرّب زاوية أخرى' },
        { icon: 'sigma', name: 'نسخ الصيغ', detail: 'انقر لنسخ LaTeX أو معادلة Word' },
      ],
    },
    {
      title: 'منظومة مفتوحة',
      items: [
        { icon: 'puzzle', name: 'الإضافات', detail: 'إضافات رسمية، وإضافاتك المحلية أيضًا' },
        {
          icon: 'globe',
          name: 'على مواقع أخرى',
          detail: 'يعمل أيضاً على Claude وChatGPT وDeepSeek وKimi',
        },
        {
          icon: 'monitor',
          name: 'واجهات ويب محلية',
          detail: 'استخدم مكتبة المطالبات في DeepSeek Harness وغيرها من الواجهات المحلية',
        },
        { icon: 'code', name: 'الربط مع IDE', detail: 'أرسل سياق المحادثة إلى VS Code' },
        {
          icon: 'panel-left-close',
          name: 'إخفاء الشريط الجانبي تلقائياً',
          detail: 'ينطوي الشريط الجانبي حين يبتعد عنه المؤشر',
        },
      ],
    },
  ],
};
