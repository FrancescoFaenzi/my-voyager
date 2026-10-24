import type { HomeFeaturesContent } from '../types';
import { esChats } from './esChats';

export const es: HomeFeaturesContent = {
  timeline: {
    eyebrow: 'Línea de tiempo',
    title: 'Ve el pulso de la conversación.',
    body: 'Cada punto de la derecha es una pregunta que hiciste. Pasa el ratón para ver cuál es y haz clic para saltar a ella. Detente sobre el riel y aparece un botón de lista: abre una vista general de todo el chat en la que puedes buscar.',
    hint: 'Pruébalo: haz clic en un punto · mantén pulsado para destacar · pasa por el riel para ver la vista general',
    overview: 'Abrir la vista general del chat',
    searchPlaceholder: 'Buscar en este chat',
    noMatch: 'Ninguna pregunta coincide con «{q}»',
  },
  folders: {
    eyebrow: 'Carpetas',
    title: 'Dale un hogar a tus ideas.',
    body: 'Dentro de la barra lateral de Gemini y ChatGPT. Tres niveles, chats destacados arriba y con buscador.',
    hint: 'Pruébalo: abre otro chat · arrastra uno a una carpeta · busca «gata»',
    heading: 'Carpetas',
    searchPlaceholder: 'Buscar carpetas y chats',
    newFolder: 'Nueva carpeta',
    noMatch: 'Ninguna carpeta ni chat coincide con «{q}»',
    star: 'Destacar',
  },
  prompts: {
    eyebrow: 'Biblioteca de prompts',
    title: '¿Usar y tirar? Mejor guárdalo.',
    body: 'Guarda un prompt una vez y úsalo en cualquier interfaz web de IA, incluso en las locales como DeepSeek Harness.',
    hint: 'Pruébalo: elige uno, aparecerá en el cuadro de texto de la izquierda; después pulsa enviar',
    add: 'Añadir',
    searchPlaceholder: 'Buscar prompts o etiquetas',
    all: 'Todo',
    saved: 'Guardados',
    settings: 'Configuración',
    noMatch: 'Ningún prompt coincide con «{q}»',
  },
  composer: {
    replies: [
      'Esto es una demo, así que solo sé unas cuantas frases escritas de antemano. Pero tu mensaje acaba de añadir un punto a la línea de tiempo: mantenlo pulsado para destacarlo.',
      'Para una respuesta de verdad, pregúntale a tu IA de siempre. Si vas a repetir esta frase, guárdala con «{add}» en la biblioteca de prompts y la próxima vez estará a un clic.',
      'Recibido. Un truco de paso: arrastra esta conversación a una carpeta y no tendrás que rebuscar en el historial.',
      'Soy una respuesta de demo enlatada. Instala Voyager y esta línea de tiempo y esta biblioteca de prompts aparecerán en el Gemini, ChatGPT, Claude y DeepSeek que usas de verdad, y estas carpetas, en Gemini y ChatGPT.',
    ],
    placeholder: 'Pregunta lo que quieras o elige un prompt',
    send: 'Enviar',
    ball: 'Abrir la biblioteca de prompts',
  },
  demo: {
    replay: 'Repetir',
    close: 'Terminar la demo',
    prev: 'Función anterior',
    next: 'Función siguiente',
  },
  replyLeads: {
    table: 'Aquí tienes la tabla:',
    summary: 'En tres puntos:',
    todo: 'Ve tachando uno a uno:',
    plain: 'En pocas palabras:',
  },
  chats: esChats,
  tree: [
    {
      folder: 'Viajes',
      open: true,
      kids: [{ folder: 'Kioto', open: true, kids: [{ chat: 'kyoto' }, { chat: 'packing' }] }],
    },
    { folder: 'Cocina', kids: [{ chat: 'dinner' }, { chat: 'week' }] },
    { chat: 'landlord' },
    { chat: 'run' },
    { chat: 'cat' },
    { chat: 'headphones' },
  ],
  current: 'kyoto',
  promptList: [
    {
      name: 'Pasar a tabla',
      tag: 'Organizar',
      text: 'Pasa lo anterior a una tabla.',
      reply: 'table',
    },
    {
      name: 'Resumir en tres puntos',
      tag: 'Organizar',
      text: 'Resume este chat en tres puntos.',
      reply: 'summary',
    },
    {
      name: 'Hacer una checklist',
      tag: 'Organizar',
      text: 'Dame una lista para ir tachando.',
      reply: 'todo',
    },
    {
      name: 'Traducir al inglés',
      tag: 'Traducir',
      text: 'Traduce tu última respuesta a un inglés natural.',
      reply: 'translate',
    },
    {
      name: 'Explícamelo fácil',
      tag: 'Aprender',
      text: 'Dilo otra vez con palabras sencillas.',
      reply: 'plain',
    },
  ],
  groups: [
    {
      title: 'Experiencia visual',
      items: [
        {
          icon: 'move-horizontal',
          name: 'Ancho del chat',
          detail: 'Ensancha el chat para que quepan el código y las tablas',
        },
        {
          icon: 'a-large-small',
          name: 'Tamaño de fuente',
          detail: 'Ajusta el tamaño del texto del chat por separado',
        },
        { icon: 'clock-3', name: 'Marcas de tiempo', detail: 'La hora de envío de cada mensaje' },
        {
          icon: 'workflow',
          name: 'Gráficos Mermaid',
          detail: 'Diagramas de flujo y de secuencia renderizados al momento',
        },
        {
          icon: 'snowflake,rain,sakura',
          name: 'Efectos visuales',
          detail: 'Nieve, lluvia o flores de cerezo',
        },
      ],
    },
    {
      title: 'Tus datos',
      items: [
        { icon: 'file-down', name: 'Exportar chats', detail: 'Markdown, PDF, JSON o imagen' },
        {
          icon: 'microscope',
          name: 'Exportar Deep Research',
          detail: 'Con el razonamiento y los enlaces a las fuentes',
        },
        {
          icon: 'cloud',
          name: 'Sincronización en la nube',
          detail: 'Google Drive, o iCloud en Safari',
        },
        {
          icon: 'list-x',
          name: 'Eliminación por lote',
          detail: 'Marca varios chats y bórralos de una vez',
        },
        {
          icon: 'image',
          name: 'Quitar marca de agua',
          detail: 'Imágenes de Nano Banana restauradas sin pérdida',
        },
      ],
    },
    {
      title: 'Menos pasos',
      items: [
        {
          icon: 'quote',
          name: 'Respuesta con cita',
          detail: 'Selecciona un fragmento y pregunta sobre él',
        },
        {
          icon: 'corner-down-left',
          name: 'Comportamiento de envío',
          detail: 'Enter para salto de línea, Ctrl/⌘+Enter para enviar',
        },
        {
          icon: 'star',
          name: 'Modelo predeterminado',
          detail: 'Los chats nuevos se abren con tu modelo de siempre',
        },
        {
          icon: 'git-branch',
          name: 'Bifurcación',
          detail: 'Parte de cualquier turno y prueba otro enfoque',
        },
        {
          icon: 'sigma',
          name: 'Copia de fórmulas',
          detail: 'Un clic para copiar en LaTeX o como ecuación de Word',
        },
      ],
    },
    {
      title: 'Ecosistema abierto',
      items: [
        {
          icon: 'puzzle',
          name: 'Plugins',
          detail: 'Plugins oficiales y también tus plugins locales',
        },
        {
          icon: 'globe',
          name: 'Funciona en más sitios',
          detail: 'También en Claude, ChatGPT, DeepSeek y Kimi',
        },
        {
          icon: 'monitor',
          name: 'Interfaces web locales',
          detail: 'Usa la biblioteca de prompts en DeepSeek Harness y otras interfaces locales',
        },
        {
          icon: 'code',
          name: 'Conexión con el IDE',
          detail: 'Envía el contexto del chat a VS Code',
        },
        {
          icon: 'panel-left-close',
          name: 'Ocultar barra lateral',
          detail: 'Se recoge en cuanto apartas el ratón',
        },
      ],
    },
  ],
};
