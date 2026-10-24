import type { HomeFeaturesContent } from '../types';
import { koChats } from './koChats';

export const ko: HomeFeaturesContent = {
  timeline: {
    eyebrow: '타임라인',
    title: '스크롤하지 마세요. 날아보세요.',
    body: '오른쪽의 점 하나하나가 당신이 던진 질문입니다. 마우스를 올리면 어떤 질문인지 보이고, 클릭하면 바로 그곳으로 이동합니다. 레일 위에 잠시 머무르면 목록 버튼이 나타나고, 누르면 대화 전체를 한눈에 보며 검색할 수 있습니다.',
    hint: '해 보세요: 점 클릭 · 길게 눌러 별표 · 레일에 마우스를 올려 전체 보기',
    overview: '대화 전체 보기',
    searchPlaceholder: '이 대화에서 검색',
    noMatch: '"{q}"와(과) 일치하는 질문이 없습니다',
  },
  folders: {
    eyebrow: '폴더',
    title: '당신의 생각을 위한 파일 시스템.',
    body: 'Gemini와 ChatGPT 사이드바 안에 그대로. 3단계 폴더, 별표 대화는 맨 위에, 검색까지.',
    hint: '해 보세요: 다른 대화 열기 · 폴더로 드래그 · "고양이" 검색',
    heading: '폴더',
    searchPlaceholder: '폴더 및 채팅 검색',
    newFolder: '새 폴더',
    noMatch: '"{q}"와(과) 일치하는 폴더나 채팅이 없습니다',
    star: '별표 표시',
  },
  prompts: {
    eyebrow: '프롬프트 라이브러리',
    title: '버리지 마세요. 저장하세요.',
    body: '자주 쓰는 문장은 한 번만 저장하면 어떤 웹 AI에서든 불러올 수 있어요. DeepSeek Harness 같은 로컬 WebUI에서도요.',
    hint: '해 보세요: 하나를 고르면 왼쪽 입력창에 들어갑니다. 그다음 전송을 누르세요',
    add: '추가',
    searchPlaceholder: '프롬프트 또는 태그 검색',
    all: '모두',
    saved: '저장 보관함',
    settings: '설정',
    noMatch: '"{q}"와(과) 일치하는 프롬프트가 없습니다',
  },
  composer: {
    replies: [
      '여기는 데모라서 미리 써 둔 말만 할 수 있어요. 그래도 방금 보낸 메시지로 타임라인에 점이 하나 생겼어요. 길게 누르면 별표를 달 수 있어요.',
      "진짜 답은 평소 쓰는 AI에게 물어보세요. 자주 쓰는 문장이라면 프롬프트 라이브러리의 '{add}'로 저장해 두면 다음엔 한 번에 입력돼요.",
      '알겠어요. 하나 알려 드리면, 이 대화를 폴더로 끌어다 놓으면 기록을 뒤질 필요가 없어요.',
      '저는 정해진 데모 답변이에요. Voyager를 설치하면 이 타임라인과 프롬프트 라이브러리는 실제로 쓰는 Gemini, ChatGPT, Claude, DeepSeek에, 폴더는 Gemini와 ChatGPT에 나타나요.',
    ],
    placeholder: '아무거나 물어보거나 프롬프트를 골라 보세요',
    send: '전송',
    ball: '프롬프트 라이브러리 열기',
  },
  demo: { replay: '다시 보기', close: '데모 종료', prev: '이전 기능', next: '다음 기능' },
  replyLeads: {
    table: '표로 정리했어요:',
    summary: '세 줄 요약:',
    todo: '하나씩 체크해 보세요:',
    plain: '쉽게 말하면:',
  },
  chats: koChats,
  tree: [
    {
      folder: '여행',
      open: true,
      kids: [{ folder: '교토', open: true, kids: [{ chat: 'kyoto' }, { chat: 'packing' }] }],
    },
    { folder: '요리', kids: [{ chat: 'dinner' }, { chat: 'week' }] },
    { chat: 'landlord' },
    { chat: 'run' },
    { chat: 'cat' },
    { chat: 'headphones' },
  ],
  current: 'kyoto',
  promptList: [
    { name: '표로 정리하기', tag: '정리', text: '위 내용을 표로 정리해 줘.', reply: 'table' },
    { name: '세 줄 요약', tag: '정리', text: '이 대화를 세 줄로 요약해 줘.', reply: 'summary' },
    {
      name: '체크리스트 만들기',
      tag: '정리',
      text: '하나씩 체크할 수 있는 할 일 목록으로 만들어 줘.',
      reply: 'todo',
    },
    {
      name: '자연스러운 영어로',
      tag: '번역',
      text: '방금 답변을 자연스러운 영어로 번역해 줘.',
      reply: 'translate',
    },
    {
      name: '더 쉽게 설명하기',
      tag: '공부',
      text: '방금 말한 걸 한 문장으로 쉽게 다시 말해 줘.',
      reply: 'plain',
    },
  ],
  groups: [
    {
      title: '보는 즐거움',
      items: [
        {
          icon: 'move-horizontal',
          name: '대화 너비',
          detail: '대화 영역을 넓혀 코드와 표가 한 줄에',
        },
        { icon: 'a-large-small', name: '글꼴 크기', detail: '대화 글꼴 크기만 따로 조절' },
        { icon: 'clock-3', name: '메시지 타임스탬프', detail: '메시지마다 보낸 시간 표시' },
        {
          icon: 'workflow',
          name: 'Mermaid 다이어그램',
          detail: '순서도와 시퀀스 다이어그램을 바로 렌더링',
        },
        { icon: 'snowflake,rain,sakura', name: '시각 효과', detail: '눈, 비, 벚꽃' },
      ],
    },
    {
      title: '내 데이터',
      items: [
        { icon: 'file-down', name: '대화 내보내기', detail: 'Markdown, PDF, JSON, 이미지' },
        { icon: 'microscope', name: 'Deep Research 내보내기', detail: '사고 과정과 출처 링크까지' },
        { icon: 'cloud', name: '클라우드 동기화', detail: 'Google Drive, Safari에서는 iCloud' },
        { icon: 'list-x', name: '일괄 삭제', detail: '여러 대화를 골라 한 번에 삭제' },
        { icon: 'image', name: '워터마크 제거', detail: 'Nano Banana 이미지를 손실 없이 복원' },
      ],
    },
    {
      title: '간편한 조작',
      items: [
        { icon: 'quote', name: '인용 답장', detail: '한 구절을 선택해 바로 이어서 질문' },
        {
          icon: 'corner-down-left',
          name: '전송 동작',
          detail: 'Enter는 줄바꿈, Ctrl/⌘+Enter로 전송',
        },
        { icon: 'star', name: '기본 모델', detail: '새 대화는 늘 쓰던 모델로 시작' },
        { icon: 'git-branch', name: '대화 분기', detail: '원하는 지점에서 갈라져 다르게 물어보기' },
        { icon: 'sigma', name: '수식 복사', detail: '클릭 한 번으로 LaTeX나 Word 수식 복사' },
      ],
    },
    {
      title: '열린 생태계',
      items: [
        { icon: 'puzzle', name: '플러그인', detail: '공식 플러그인에 내 로컬 플러그인까지' },
        {
          icon: 'globe',
          name: '여러 사이트 지원',
          detail: 'Claude, ChatGPT, DeepSeek, Kimi에서도',
        },
        {
          icon: 'monitor',
          name: '로컬 웹 UI',
          detail: 'DeepSeek Harness 같은 로컬 화면에서도 프롬프트 라이브러리를',
        },
        { icon: 'code', name: '컨텍스트 동기화', detail: '대화 컨텍스트를 VS Code로 보내기' },
        {
          icon: 'panel-left-close',
          name: '사이드바 자동 숨김',
          detail: '마우스를 떼면 접혀서 대화에 집중',
        },
      ],
    },
  ],
};
