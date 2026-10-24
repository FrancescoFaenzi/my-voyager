import type { HomeFeaturesContent } from '../types';
import { frChats } from './frChats';

export const fr: HomeFeaturesContent = {
  timeline: {
    eyebrow: 'Chronologie',
    title: 'Ne scrollez plus. Volez.',
    body: 'Chaque point à droite est une question que vous avez posée. Survolez-le pour la voir, cliquez pour y sauter. Attardez-vous sur le rail et un bouton liste apparaît : il ouvre une vue d’ensemble de toute la conversation, dans laquelle vous pouvez chercher.',
    hint: 'Essayez : cliquez sur un point · appui long pour mettre une étoile · survolez le rail pour la vue d’ensemble',
    overview: 'Ouvrir la vue d’ensemble',
    searchPlaceholder: 'Rechercher dans cette conversation',
    noMatch: 'Aucune question ne correspond à « {q} »',
  },
  folders: {
    eyebrow: 'Dossiers',
    title: 'Les dossiers, comme ils devraient l’être.',
    body: 'Directement dans la barre latérale de Gemini et de ChatGPT. Trois niveaux, les favoris en haut, et une recherche.',
    hint: 'Essayez : ouvrez une autre conversation · glissez-en une dans un dossier · cherchez « chat »',
    heading: 'Dossiers',
    searchPlaceholder: 'Rechercher des dossiers et des discussions',
    newFolder: 'Nouveau dossier',
    noMatch: 'Aucun dossier ni discussion ne correspond à « {q} »',
    star: 'Mettre en favori',
  },
  prompts: {
    eyebrow: 'Bibliothèque de prompts',
    title: 'Un bon prompt, ça se garde.',
    body: "Enregistrez un prompt une fois et retrouvez-le dans n'importe quelle interface web d'IA, même en local comme DeepSeek Harness.",
    hint: 'Essayez : choisissez-en un, il arrive dans le champ de saisie à gauche, puis envoyez',
    add: 'Ajouter',
    searchPlaceholder: 'Rechercher des prompts ou tags',
    all: 'Tous',
    saved: 'Enregistrés',
    settings: 'Paramètres',
    noMatch: 'Aucun prompt ne correspond à « {q} »',
  },
  composer: {
    replies: [
      "Ceci est une démo : je ne connais que quelques réponses écrites d'avance. Mais votre message vient d'ajouter un point sur la timeline ; maintenez-le appuyé pour le mettre en favori.",
      'Pour une vraie réponse, demandez à votre IA habituelle. Si vous réutilisez cette phrase, enregistrez-la avec « {add} » dans la bibliothèque : elle sera à un clic la prochaine fois.',
      "Bien reçu. Petite astuce au passage : glissez cette conversation dans un dossier, vous n'aurez plus à fouiller l'historique.",
      'Je suis une réponse de démo toute faite. Installez Voyager et cette timeline et cette bibliothèque de prompts apparaissent dans les Gemini, ChatGPT, Claude et DeepSeek que vous utilisez vraiment, et ces dossiers dans Gemini et ChatGPT.',
    ],
    placeholder: 'Posez une question ou choisissez un prompt',
    send: 'Envoyer',
    ball: 'Ouvrir la bibliothèque de prompts',
  },
  demo: {
    replay: 'Rejouer',
    close: 'Terminer la démo',
    prev: 'Fonction précédente',
    next: 'Fonction suivante',
  },
  replyLeads: {
    table: 'Voici le tableau :',
    summary: 'En trois points :',
    todo: 'À cocher au fur et à mesure :',
    plain: 'En clair :',
  },
  chats: frChats,
  tree: [
    {
      folder: 'Voyages',
      open: true,
      kids: [{ folder: 'Kyoto', open: true, kids: [{ chat: 'kyoto' }, { chat: 'packing' }] }],
    },
    { folder: 'Cuisine', kids: [{ chat: 'dinner' }, { chat: 'week' }] },
    { chat: 'landlord' },
    { chat: 'run' },
    { chat: 'cat' },
    { chat: 'headphones' },
  ],
  current: 'kyoto',
  promptList: [
    {
      name: 'Mettre en tableau',
      tag: 'Organiser',
      text: 'Mets ce qui précède sous forme de tableau.',
      reply: 'table',
    },
    {
      name: 'Résumer en trois points',
      tag: 'Organiser',
      text: 'Résume cette conversation en trois points.',
      reply: 'summary',
    },
    {
      name: 'Faire une checklist',
      tag: 'Organiser',
      text: 'Donne-moi une liste à cocher.',
      reply: 'todo',
    },
    {
      name: 'Traduire en anglais',
      tag: 'Traduire',
      text: 'Traduis ta dernière réponse dans un anglais naturel.',
      reply: 'translate',
    },
    {
      name: 'Dis-le simplement',
      tag: 'Apprendre',
      text: 'Redis-le avec des mots simples.',
      reply: 'plain',
    },
  ],
  groups: [
    {
      title: 'Confort visuel',
      items: [
        {
          icon: 'move-horizontal',
          name: 'Largeur du chat',
          detail: 'Élargissez la conversation pour que code et tableaux respirent',
        },
        {
          icon: 'a-large-small',
          name: 'Taille de police',
          detail: 'Réglez la taille du texte du chat à part',
        },
        {
          icon: 'clock-3',
          name: 'Horodatage des messages',
          detail: 'L’heure d’envoi de chaque message',
        },
        {
          icon: 'workflow',
          name: 'Diagrammes Mermaid',
          detail: 'Organigrammes et diagrammes de séquence rendus sur place',
        },
        {
          icon: 'snowflake,rain,sakura',
          name: 'Effets visuels',
          detail: 'Neige, pluie ou fleurs de cerisier',
        },
      ],
    },
    {
      title: 'Vos données',
      items: [
        {
          icon: 'file-down',
          name: 'Export des conversations',
          detail: 'Markdown, PDF, JSON ou image',
        },
        {
          icon: 'microscope',
          name: 'Export Deep Research',
          detail: 'Avec le raisonnement et les liens des sources',
        },
        { icon: 'cloud', name: 'Synchro Cloud', detail: 'Google Drive, ou iCloud sur Safari' },
        {
          icon: 'list-x',
          name: 'Suppression par lot',
          detail: 'Cochez des conversations, supprimez-les d’un coup',
        },
        {
          icon: 'image',
          name: 'Suppression du filigrane',
          detail: 'Images Nano Banana restaurées sans perte',
        },
      ],
    },
    {
      title: 'Moins de clics',
      items: [
        {
          icon: 'quote',
          name: 'Réponse avec citation',
          detail: 'Sélectionnez un passage et posez une question dessus',
        },
        {
          icon: 'corner-down-left',
          name: 'Comportement d’envoi',
          detail: 'Entrée pour aller à la ligne, Ctrl/⌘+Entrée pour envoyer',
        },
        {
          icon: 'star',
          name: 'Modèle par défaut',
          detail: 'Les nouvelles conversations s’ouvrent sur votre modèle habituel',
        },
        {
          icon: 'git-branch',
          name: 'Bifurcation',
          detail: 'Repartez de n’importe quel échange pour tenter une autre piste',
        },
        {
          icon: 'sigma',
          name: 'Copie de formules',
          detail: 'Un clic pour copier en LaTeX ou en équation Word',
        },
      ],
    },
    {
      title: 'Écosystème ouvert',
      items: [
        {
          icon: 'puzzle',
          name: 'Plugins',
          detail: 'Plugins officiels, et aussi vos plugins locaux',
        },
        { icon: 'globe', name: 'Multi-sites', detail: 'Claude, ChatGPT, DeepSeek et Kimi aussi' },
        {
          icon: 'monitor',
          name: 'Interfaces web locales',
          detail: 'La bibliothèque de prompts dans DeepSeek Harness et d’autres interfaces locales',
        },
        { icon: 'code', name: 'Synchro IDE', detail: 'Envoyez le contexte du chat vers VS Code' },
        {
          icon: 'panel-left-close',
          name: 'Barre latérale auto-masquée',
          detail: 'Elle se range dès que la souris s’éloigne',
        },
      ],
    },
  ],
};
