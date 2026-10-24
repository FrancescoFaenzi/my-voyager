import type { HomeFeaturesContent } from '../types';
import { ptChats } from './ptChats';

export const pt: HomeFeaturesContent = {
  timeline: {
    eyebrow: 'Linha do Tempo',
    title: 'Não faça scroll. Voe.',
    body: 'Cada ponto à direita é uma pergunta que fez. Passe o rato para ver qual é, clique para saltar até lá. Pare um instante na barra e aparece um botão de lista: abre uma visão geral de toda a conversa, onde também pode pesquisar.',
    hint: 'Experimente: clique num ponto · mantenha premido para marcar com estrela · passe o rato na barra para a visão geral',
    overview: 'Abrir a visão geral da conversa',
    searchPlaceholder: 'Pesquisar nesta conversa',
    noMatch: 'Nenhuma pergunta corresponde a «{q}»',
  },
  folders: {
    eyebrow: 'Pastas',
    title: 'Um sistema de ficheiros para os seus pensamentos.',
    body: 'Mesmo dentro da barra lateral do Gemini e do ChatGPT. Três níveis, conversas com estrela no topo e pesquisa.',
    hint: 'Experimente: abra outra conversa · arraste uma para uma pasta · pesquise «gata»',
    heading: 'Pastas',
    searchPlaceholder: 'Pesquisar pastas e conversas',
    newFolder: 'Nova pasta',
    noMatch: 'Nenhuma pasta ou conversa corresponde a «{q}»',
    star: 'Marcar com estrela',
  },
  prompts: {
    eyebrow: 'Biblioteca de Prompts',
    title: 'Não deite fora. Guarde.',
    body: 'Guarde um prompt uma vez e use-o em qualquer interface web de IA, até nas locais como o DeepSeek Harness.',
    hint: 'Experimente: escolha um, ele vai para a caixa de texto à esquerda, e depois carregue em enviar',
    add: 'Adicionar',
    searchPlaceholder: 'Pesquisar prompts ou tags',
    all: 'Todos',
    saved: 'Guardados',
    settings: 'Definições',
    noMatch: 'Nenhum prompt corresponde a «{q}»',
  },
  composer: {
    replies: [
      'Isto é uma demonstração, por isso só sei umas frases escritas de antemão. Mas a sua mensagem acabou de criar um novo ponto na linha do tempo: mantenha-o premido para lhe dar uma estrela.',
      'Para uma resposta a sério, pergunte à sua IA habitual. Se vai repetir esta frase, guarde-a com «{add}» na biblioteca de prompts e da próxima vez fica à distância de um clique.',
      'Recebido. Uma dica de passagem: arraste esta conversa para uma pasta e deixa de ter de procurar no histórico.',
      'Sou uma resposta de demonstração pré-escrita. Instale o Voyager e esta linha do tempo e esta biblioteca de prompts aparecem no Gemini, ChatGPT, Claude e DeepSeek que usa de verdade, e estas pastas no Gemini e no ChatGPT.',
    ],
    placeholder: 'Pergunte o que quiser ou escolha um prompt',
    send: 'Enviar',
    ball: 'Abrir a Biblioteca de Prompts',
  },
  demo: {
    replay: 'Repetir',
    close: 'Terminar a demonstração',
    prev: 'Funcionalidade anterior',
    next: 'Funcionalidade seguinte',
  },
  replyLeads: {
    table: 'Aqui fica em tabela:',
    summary: 'Em três pontos:',
    todo: 'Pode ir riscando um a um:',
    plain: 'Por outras palavras:',
  },
  chats: ptChats,
  tree: [
    {
      folder: 'Viagens',
      open: true,
      kids: [{ folder: 'Quioto', open: true, kids: [{ chat: 'kyoto' }, { chat: 'packing' }] }],
    },
    { folder: 'Cozinha', kids: [{ chat: 'dinner' }, { chat: 'week' }] },
    { chat: 'landlord' },
    { chat: 'run' },
    { chat: 'cat' },
    { chat: 'headphones' },
  ],
  current: 'kyoto',
  promptList: [
    {
      name: 'Pôr numa tabela',
      tag: 'Organizar',
      text: 'Põe o que está acima numa tabela.',
      reply: 'table',
    },
    {
      name: 'Resumir em três pontos',
      tag: 'Organizar',
      text: 'Resume esta conversa em três pontos.',
      reply: 'summary',
    },
    {
      name: 'Fazer uma checklist',
      tag: 'Organizar',
      text: 'Dá-me uma lista de tarefas para ir riscando.',
      reply: 'todo',
    },
    {
      name: 'Traduzir para inglês',
      tag: 'Traduzir',
      text: 'Traduz a tua última resposta para um inglês natural.',
      reply: 'translate',
    },
    {
      name: 'Explicar por miúdos',
      tag: 'Aprender',
      text: 'Diz isso outra vez por palavras simples.',
      reply: 'plain',
    },
  ],
  groups: [
    {
      title: 'Mais bonito',
      items: [
        {
          icon: 'move-horizontal',
          name: 'Largura do chat',
          detail: 'Alargue a conversa para caberem código e tabelas',
        },
        {
          icon: 'a-large-small',
          name: 'Tamanho da fonte',
          detail: 'Ajuste o tamanho do texto do chat à parte',
        },
        {
          icon: 'clock-3',
          name: 'Carimbo de data/hora',
          detail: 'Veja quando cada mensagem foi enviada',
        },
        {
          icon: 'workflow',
          name: 'Diagramas Mermaid',
          detail: 'Fluxogramas e diagramas de sequência renderizados no sítio',
        },
        {
          icon: 'snowflake,rain,sakura',
          name: 'Efeitos visuais',
          detail: 'Neve, chuva ou flores de cerejeira',
        },
      ],
    },
    {
      title: 'Mais seu',
      items: [
        { icon: 'file-down', name: 'Exportar conversas', detail: 'Markdown, PDF, JSON ou imagem' },
        {
          icon: 'microscope',
          name: 'Exportação Deep Research',
          detail: 'Com o raciocínio e as ligações das fontes',
        },
        {
          icon: 'cloud',
          name: 'Sincronização na nuvem',
          detail: 'Google Drive, ou iCloud no Safari',
        },
        {
          icon: 'list-x',
          name: 'Eliminação em lote',
          detail: 'Selecione várias conversas e elimine-as de uma vez',
        },
        {
          icon: 'image',
          name: "Remoção de marca d'água",
          detail: 'Imagens do Nano Banana restauradas sem perdas',
        },
      ],
    },
    {
      title: 'Mais rápido',
      items: [
        {
          icon: 'quote',
          name: 'Resposta com citação',
          detail: 'Selecione um excerto e pergunte sobre ele',
        },
        {
          icon: 'corner-down-left',
          name: 'Comportamento de envio',
          detail: 'Enter para nova linha, Ctrl/⌘+Enter para enviar',
        },
        {
          icon: 'star',
          name: 'Modelo padrão',
          detail: 'As novas conversas abrem no modelo de sempre',
        },
        {
          icon: 'git-branch',
          name: 'Bifurcação de conversa',
          detail: 'Ramifique a partir de qualquer ponto e tente outro caminho',
        },
        {
          icon: 'sigma',
          name: 'Cópia de fórmulas',
          detail: 'Um clique copia LaTeX ou uma equação do Word',
        },
      ],
    },
    {
      title: 'Mais aberto',
      items: [
        {
          icon: 'puzzle',
          name: 'Plugins',
          detail: 'Plugins oficiais e também os seus plugins locais',
        },
        {
          icon: 'globe',
          name: 'Funciona noutros sites',
          detail: 'Também no Claude, ChatGPT, DeepSeek e Kimi',
        },
        {
          icon: 'monitor',
          name: 'Interfaces web locais',
          detail: 'Use a Biblioteca de Prompts no DeepSeek Harness e noutras interfaces locais',
        },
        {
          icon: 'code',
          name: 'Ligação ao IDE',
          detail: 'Envie o contexto da conversa para o VS Code',
        },
        {
          icon: 'panel-left-close',
          name: 'Ocultar barra lateral',
          detail: 'A barra lateral recolhe-se quando o rato sai dela',
        },
      ],
    },
  ],
};
