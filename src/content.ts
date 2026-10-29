export type Lang = 'fr' | 'en';
import heroImg from './assets/hematologie.jpeg'
import aboutImg from './assets/liza.jpeg'
import labImg from './assets/exams_lab.jpeg'
import kitImg from './assets/kit.jpeg'
import hematologieImg from './assets/hematologie.jpeg'
import bacteriologieImg from './assets/bacteriologie.jpeg'
import parasitologieImg from './assets/parasitologie.jpeg'
import immunologieImg from './assets/immunologie.jpeg'
import virologieImg from './assets/virologie.jpeg'
import anaPathImg from './assets/ana_path.jpeg'
import biochimieImg from './assets/biochmie.jpeg'
import pharmacologieImg from './assets/pharmaco.jpeg'
import bioMolecImg from './assets/bio_molec.jpeg'
import examsLabImg from './assets/exams_lab.jpeg'

export type Subject = {
  id: string;
  name: { fr: string; en: string };
  tag: { fr: string; en: string };
  cover: string;
  price: number;
};

export const LANGS: Lang[] = ['fr', 'en'];

export const WHATSAPP_NUMBER = '24102332188';
export const TIKTOK_URL = 'https://www.tiktok.com/@laminutedubiologiste';
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export const PROMO_END = '2026-12-31T20:00:00+01:00';
export const PREORDER_OPEN = '2026-11-05';
export const PREORDER_CLOSE = '2026-12-05';
export const ORDERS_LIVE = '2026-12-10';

export const HERO_IMAGE =
  'https://images.pexels.com/photos/6192763/pexels-photo-6192763.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400';
export const ABOUT_IMAGE = aboutImg
export const LAB_IMAGE =
  'https://images.pexels.com/photos/8533045/pexels-photo-8533045.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400';
export const INTEGRAL_COVER = kitImg
export const SUBJECTS: Subject[] = [
  {
    id: 'hematologie',
    name: { fr: 'Hématologie', en: 'Hematology' },
    tag: { fr: 'Sang & cellules sanguines', en: 'Blood & blood cells' },
    cover: hematologieImg,
    price: 10500 ,
  },
  {
    id: 'bacteriologie',
    name: { fr: 'Bactériologie', en: 'Bacteriology' },
    tag: { fr: 'Bactéries & infections', en: 'Bacteria & infections' },
    cover: bacteriologieImg,
    price: 10500 ,
  },
  {
    id: 'parasitologie',
    name: { fr: 'Parasitologie', en: 'Parasitology' },
    tag: { fr: 'Parasites & vecteurs', en: 'Parasites & vectors' },
    cover: parasitologieImg,
    price: 10500 ,
  },
  {
    id: 'immunologie',
    name: { fr: 'Immunologie', en: 'Immunology' },
    tag: { fr: 'Immunité & anticorps', en: 'Immunity & antibodies' },
    cover: immunologieImg,
    price: 10500 ,
  },
  {
    id: 'virologie',
    name: { fr: 'Virologie', en: 'Virology' },
    tag: { fr: 'Virus & pathogènes', en: 'Viruses & pathogens' },
    cover: virologieImg,
    price: 10500 ,
  },
  {
    id: 'anatomie-pathologique',
    name: { fr: 'Anatomie pathologique', en: 'Pathological anatomy' },
    tag: { fr: 'Remplace la microbiologie', en: 'Replaces microbiology' },
    cover: anaPathImg,
    price: 10500 ,
  },
  {
    id: 'biochimie',
    name: { fr: 'Biochimie', en: 'Biochemistry' },
    tag: { fr: 'Molécules & métabolisme', en: 'Molecules & metabolism' },
    cover: biochimieImg,
    price: 10500 ,
  },
  {
    id: 'pharmacologie',
    name: { fr: 'Pharmacologie', en: 'Pharmacology' },
    tag: { fr: 'Médicaments & effets', en: 'Drugs & effects' },
    cover: pharmacologieImg,
    price: 10500 ,
  },
  {
    id: 'biologie-cellulaire',
    name: { fr: 'Biologie cellulaire et moléculaire', en: 'Cell & molecular biology' },
    tag: { fr: 'Cellule & ADN', en: 'Cell & DNA' },
    cover:bioMolecImg,
    price: 10500 ,
  },
  {
    id: 'examens-laboratoire',
    name: { fr: 'Examens de laboratoire', en: 'Laboratory exams' },
    tag: { fr: 'Analyses & protocoles', en: 'Tests & protocols' },
    cover:examsLabImg,
    price: 10500 ,
  },
];

export const INTEGRAL = {
  id: 'kit-integral',
  name: { fr: 'Kit intégral — 10 matières', en: 'Integral kit — 10 subjects' },
  tag: {
    fr: 'Les 10 fiches mémo + biomatériaux + porte-badge',
    en: '10 memo cards + biomaterials + badge holder',
  },
  cover: INTEGRAL_COVER,
  price: 25000,
};

export const t = {
  fr: {
    dir: 'La Minute du Biologiste',
    nav: { home: 'Accueil', guides: 'Guides & fiches mémo', about: 'À propos de moi', contact: 'Contact' },
    search: { placeholder: 'Rechercher une matière, un guide…', empty: 'Aucun résultat pour « {q} ».' },
    hero: {
      eyebrow: 'Précommandes ouvertes le 5 novembre 2026',
      title: 'Révisez la biologie médicale avec clarté et méthode.',
      subtitle:
        'Des fiches mémo synthétiques, visuelles et bien organisées, pensées pour les étudiants en biologie médicale. Comprendre, retenir, réussir.',
      cta: 'Découvrir les fiches mémo',
      cta2: 'Voir le kit intégral',
      stat1: '10 matières essentielles',
      stat2: 'Fiches mémo illustrées',
      stat3: 'Pensées pour réviser vite',
    },
    intro: {
      title: 'Bienvenue dans l’univers de La Minute du Biologiste',
      body: 'Un projet éducatif né de la passion pour les sciences biologiques et de l’envie de rendre les connaissances scientifiques plus accessibles aux étudiants. Des supports clairs, synthétiques et bien organisés pour mieux comprendre, mieux retenir et réviser plus efficacement.',
    },
    integral: {
      eyebrow: 'Offre complète',
      title: 'Le guide intégral — 10 matières',
      body: 'Le kit intégral regroupe les dix fiches mémo, les contenus pédagogiques, les biomatériaux, un porte-badge et d’autres accessoires. L’offre la plus complète pour couvrir tout le programme.',
      includes: 'Ce kit comprend',
      items: [
        'Les 10 fiches mémo des matières essentielles',
        'Les contenus pédagogiques détaillés',
        'Les biomatériaux et accessoires associés',
        'Un porte-badge et d’autres outils pratiques',
      ],
      promo: 'Promotion jusqu’au 31 décembre 2026 — 20 h, heure du Gabon',
      cta: 'Précommander le kit intégral',
      badge: 'Offre promotionnelle',
    },
    subjects: {
      eyebrow: 'Guides individuels',
      title: 'Les dix matières des fiches mémo',
      subtitle:
        'Choisissez la matière dont vous avez besoin. Chaque fiche est une synthèse claire, illustrée et organisée. Les aperçus sont partiels — le contenu intégral reste réservé à la commande.',
      view: 'Voir l’aperçu',
      add: 'Ajouter au panier',
      note: 'Note : l’anatomie pathologique remplace la microbiologie dans la première collection.',
      previewTitle: 'Aperçu partiel — {name}',
      previewBody:
        ' Que contient ce kit ?',
      close: 'Fermer',
      addAndOrder: 'Ajouter & précommander',
    },
    order: {
      eyebrow: 'Comment commander ?',
      title: 'Un processus de précommande simple',
      steps: [
        {
          title: 'Choisissez vos fiches',
          body: 'Ajoutez au panier les matières ou le kit intégral qui vous intéressent.',
        },
        {
          title: 'Précommandez',
          body: 'Envoyez votre sélection à la fondatrice via WhatsApp pour confirmation.',
        },
        {
          title: 'Confirmez & payez',
          body: 'MoMo au Gabon, Western Union à l’étranger. La fondatrice valide votre commande.',
        },
        {
          title: 'Recevez vos fiches',
          body: 'À partir du 10 décembre 2026, vos fiches mémo vous sont remises.',
        },
      ],
      timeline: 'Calendrier',
      open: 'Ouverture des précommandes',
      close: 'Clôture des précommandes',
      live: 'Commandes opérationnelles',
      payment: 'Moyens de paiement',
      momo: 'Mobile Money (MoMo) — au Gabon',
      wu: 'Western Union — à l’étranger',
    },
    about: {
      eyebrow: 'À propos de moi',
      title: 'Liza Kenza, fondatrice',
      body: 'Je suis Liza Kenza, étudiante en biologie médicale et fondatrice de La Minute du Biologiste, un projet éducatif né de ma passion pour les sciences biologiques et de mon envie de rendre les connaissances scientifiques plus accessibles aux étudiants.\n\nAu cours de mon parcours, j’ai compris que l’apprentissage de la biologie médicale demande de la rigueur, de la méthode et beaucoup de révisions. Face à la richesse des cours et à la quantité d’informations à retenir, disposer de supports clairs, synthétiques et bien organisés peut faire toute la différence.\n\nC’est de cette volonté qu’est née l’idée des fiches mémo La Minute du Biologiste : des supports conçus pour aider les étudiants à mieux comprendre les notions essentielles, à retenir l’information importante et à réviser plus efficacement.\n\nÀ travers ce projet, je souhaite partager des outils de révision pratiques, visuels et accessibles, tout en contribuant, à mon échelle, à la valorisation de la biologie médicale.\n\nPour moi, apprendre ne consiste pas seulement à mémoriser, mais aussi à comprendre ce que l’on apprend et à savoir mobiliser ses connaissances.\n\nLa Minute du Biologiste, c’est mon engagement pour un apprentissage plus clair, plus structuré et plus accessible.\n\nMerci de faire partie de cette aventure.',
      signature: '— Liza Kenza',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Une question ? Écrivez-moi.',
      body: 'Pour toute question sur les fiches mémo, les précommandes ou les paiements, contactez-moi directement. Je vous réponds avec plaisir.',
      whatsapp: 'Discuter sur WhatsApp',
      tiktok: 'Suivre sur TikTok',
      whatsappNote: 'Commandes & questions',
      tiktokNote: 'Vidéos & actualités',
    },
    cart: {
      title: 'Votre panier',
      empty: 'Votre panier est vide.',
      item: 'article',
      items: 'articles',
      total: 'Total',
      clear: 'Vider le panier',
      remove: 'Retirer',
      checkout: 'Précommander sur WhatsApp',
      keep: 'Continuer mes achats',
      promoNote: 'Prix promotionnel pour le kit intégral.',
    },
    footer: {
      tagline: 'Des fiches mémo claires, visuelles et accessibles pour les étudiants en biologie médicale.',
      nav: 'Navigation',
      contact: 'Contact',
      rights: 'Tous droits réservés.',
      madeWith: 'Conçu avec rigueur pour les étudiants.',
    },
    currency: 'FCFA',
    promo: 'Promotion',
    perSubject: 'par matière',
  },
  en: {
    dir: 'La Minute du Biologiste',
    nav: { home: 'Home', guides: 'Guides & memo cards', about: 'About me', contact: 'Contact' },
    search: { placeholder: 'Search a subject, a guide…', empty: 'No results for “{q}”.' },
    hero: {
      eyebrow: 'Preorders open November 5, 2026',
      title: 'Study medical biology with clarity and method.',
      subtitle:
        'Concise, visual and well-organized memo cards designed for medical biology students. Understand, retain, succeed.',
      cta: 'Explore the memo cards',
      cta2: 'See the integral kit',
      stat1: '10 core subjects',
      stat2: 'Illustrated memo cards',
      stat3: 'Designed for fast revision',
    },
    intro: {
      title: 'Welcome to the world of La Minute du Biologiste',
      body: 'An educational project born from a passion for biological sciences and the desire to make scientific knowledge more accessible to students. Clear, concise and well-organized materials to better understand, better retain and revise more efficiently.',
    },
    integral: {
      eyebrow: 'Complete offer',
      title: 'The integral guide — 10 subjects',
      body: 'The integral kit brings together all ten memo cards, the teaching content, biomaterials, a badge holder and other accessories. The most complete offer to cover the entire program.',
      includes: 'This kit includes',
      items: [
        'The 10 memo cards for the core subjects',
        'Detailed teaching content',
        'Associated biomaterials and accessories',
        'A badge holder and other practical tools',
      ],
      promo: 'Promotion until December 31, 2026 — 8 PM, Gabon time',
      cta: 'Preorder the integral kit',
      badge: 'Promotional offer',
    },
    subjects: {
      eyebrow: 'Individual guides',
      title: 'The ten memo card subjects',
      subtitle:
        'Pick the subject you need. Each card is a clear, illustrated and organized summary. Previews are partial only — the full content is reserved for your order.',
      view: 'View preview',
      add: 'Add to cart',
      note: 'Note: pathological anatomy replaces microbiology in the first collection.',
      previewTitle: 'Partial preview — {name}',
      previewBody:
        'This preview shows only the cover and the table of contents. The full content of the memo card (essential concepts, diagrams, key points to remember) is available upon order.',
      close: 'Close',
      addAndOrder: 'Add & preorder',
    },
    order: {
      eyebrow: 'How to order?',
      title: 'A simple preorder process',
      steps: [
        {
          title: 'Choose your cards',
          body: 'Add the subjects or the integral kit that interest you to the cart.',
        },
        {
          title: 'Preorder',
          body: 'Send your selection to the founder via WhatsApp for confirmation.',
        },
        {
          title: 'Confirm & pay',
          body: 'MoMo in Gabon, Western Union abroad. The founder validates your order.',
        },
        {
          title: 'Receive your cards',
          body: 'From December 10, 2026, your memo cards are delivered to you.',
        },
      ],
      timeline: 'Timeline',
      open: 'Preorders open',
      close: 'Preorders close',
      live: 'Orders go live',
      payment: 'Payment methods',
      momo: 'Mobile Money (MoMo) — in Gabon',
      wu: 'Western Union — abroad',
    },
    about: {
      eyebrow: 'About me',
      title: 'Liza Kenza, founder',
      body: 'I am Liza Kenza, a medical biology student and founder of La Minute du Biologiste, an educational project born from my passion for biological sciences and my desire to make scientific knowledge more accessible to students.\n\nDuring my studies, I came to understand that learning medical biology requires rigor, method and a lot of revision. Faced with the richness of the courses and the amount of information to retain, having clear, concise and well-organized materials can make all the difference.\n\nFrom this will was born the idea of the La Minute du Biologiste memo cards: materials designed to help students better understand essential concepts, retain important information and revise more efficiently.\n\nThrough this project, I want to share practical, visual and accessible revision tools, while contributing, at my level, to the valorization of medical biology.\n\nFor me, learning is not only about memorizing, but also about understanding what you learn and knowing how to mobilize your knowledge.\n\nLa Minute du Biologiste is my commitment to clearer, more structured and more accessible learning.\n\nThank you for being part of this adventure.',
      signature: '— Liza Kenza',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'A question? Write to me.',
      body: 'For any question about the memo cards, preorders or payments, contact me directly. I’ll be happy to answer.',
      whatsapp: 'Chat on WhatsApp',
      tiktok: 'Follow on TikTok',
      whatsappNote: 'Orders & questions',
      tiktokNote: 'Videos & news',
    },
    cart: {
      title: 'Your cart',
      empty: 'Your cart is empty.',
      item: 'item',
      items: 'items',
      total: 'Total',
      clear: 'Clear cart',
      remove: 'Remove',
      checkout: 'Preorder on WhatsApp',
      keep: 'Continue shopping',
      promoNote: 'Promotional price for the integral kit.',
    },
    footer: {
      tagline: 'Clear, visual and accessible memo cards for medical biology students.',
      nav: 'Navigation',
      contact: 'Contact',
      rights: 'All rights reserved.',
      madeWith: 'Designed with rigor for students.',
    },
    currency: 'XAF',
    promo: 'Promotion',
    perSubject: 'per subject',
  },
} as const;

export type Dict = (typeof t)['fr'];
