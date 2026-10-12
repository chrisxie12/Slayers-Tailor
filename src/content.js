// All site copy, verbatim from reference/slayers-tailor-demo.html.
// Never invent text here; unknown details stay as placeholders in config.js.

export const SKIP_LINK = 'Skip to content';

export const BRAND = {
  main: 'SLAYERS',
  rest: 'TAILOR',
};

// `section` marks links that follow a SECTIONS flag; when the section is
// hidden the link is hidden with it.
export const NAV_LINKS = [
  { href: '#browse', label: 'Garments', section: 'browse' },
  { href: '#cloths', label: 'Cloths', section: 'cloths' },
  { href: '#services', label: 'Services' },
  { href: '#making', label: 'Process' },
  { href: '#look', label: 'Lookbook', section: 'look' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
];

export const NAV = {
  cta: 'Book a fitting',
  menuButton: 'Menu',
  menuClose: 'Close',
  menuLabel: 'Menu',
  sectionsLabel: 'Sections',
  searchLabel: 'Search',
  searchPlaceholder: 'Search garments or cloths',
  searchSubmit: 'Search',
};

export const MENU_LINKS = [
  { href: '#top', label: 'Choose your cloth' },
  { href: '#services', label: 'Our services' },
  { href: '#look', label: 'Lookbook', section: 'look' },
  { href: '#making', label: 'How we work' },
  { href: '#about', label: 'About' },
  { href: '#book', label: 'Book a fitting' },
];

export const SEARCH = {
  noMatch: (query) =>
    `No match for "${query}". Try a garment, a cloth colour or a section name.`,
  suggestions: ['Services', 'Process', 'About', 'FAQ', 'Book'],
};

export const HERO = {
  title: 'Cut for you, from the cloth up.',
  copy: 'Choose a fabric and lining, then bring the idea to a fitting. Slayers Tailor makes suits to your measure.',
  jacketLabel: 'Suit jacket preview that changes with your choices',
};

export const PICKER = {
  groups: {
    fabric: 'Fabric',
    lining: 'Lining',
    buttons: 'Buttons',
    pattern: 'Pattern',
  },
  primaryCta: 'Book this on WhatsApp',
  secondaryCta: 'See how we work',
  tryOn: 'Try on the jacket',
  summary: (fabric, pattern, lining, buttons) =>
    `${fabric}${pattern ? ` ${pattern}` : ''} cloth, ${lining} lining, ${buttons} buttons.`,
};

export const BROWSE = {
  title: 'What can we make for you?',
};

export const CLOTHS = {
  title: 'Pick a cloth.',
  copy: 'Tap one to see it on the jacket.',
};

export const SERVICES = {
  title: 'Two ways to be fitted.',
  items: [
    {
      id: 'bespoke',
      title: 'Bespoke',
      lead: 'A suit drafted from scratch for you.',
      points: [
        'A pattern drafted from scratch for you',
        'Several fittings as the suit takes shape',
        'Hand-finished details',
      ],
      cta: 'Ask about bespoke',
    },
    {
      id: 'made-to-measure',
      title: 'Made to measure',
      lead: 'A proven pattern, adjusted to your measurements.',
      dark: true,
      points: [
        'An existing pattern adjusted to your measurements',
        'Fewer fittings and a shorter wait',
        'The same choice of cloth and lining',
      ],
      cta: 'Ask about made to measure',
    },
  ],
  note: 'Timeframes and pricing are confirmed at your consultation.',
};

export const LOOKBOOK = {
  title: 'The look, in photographs.',
  copy: 'These frames mark the shots we will make together.',
  frames: [
    { id: 'full-length', wide: true },
    { id: 'lapel-stitching', dark: true },
    { id: 'fitting' },
    { id: 'cloth-wall' },
    { id: 'client-portrait', dark: true },
    { id: 'workshop-table', wide: true },
  ],
};

export const PROCESS = {
  title: 'How a suit is made.',
  steps: [
    { title: 'Consultation', copy: 'Tell us the occasion and the look. We talk cloth, cut and colour.' },
    { title: 'Measurements', copy: 'We take your measurements and note posture and fit preferences.' },
    { title: 'Fittings', copy: 'We check the fit as it develops and adjust until it sits right.' },
    { title: 'Delivery', copy: 'Your finished suit, pressed and ready to wear.' },
  ],
};

// Word band between Process and About. `gold` marks the accent words.
export const BAND = {
  words: [
    { text: 'Consult.' },
    { text: 'Measure.', gold: true },
    { text: 'Fit.' },
    { text: 'Deliver.', gold: true },
  ],
};

export const ABOUT = {
  title: 'Clothing made around you.',
  paragraphs: [
    'Every suit starts with a conversation about how you want to look and where you will wear it. From there we choose the cloth, take your measurements and fit the suit until it is right.',
    'Whether you choose bespoke or made to measure, you work directly with the tailor from the first consultation to the final fitting.',
  ],
  cta: 'Book a consultation',
};

export const FAQ = {
  title: 'Before you book.',
  items: [
    {
      q: 'Can I choose my own cloth and lining?',
      a: 'Yes. The colours on this page are a preview. At your consultation you see real swatches and choose together.',
    },
    {
      q: 'What should I bring to a first fitting?',
      a: 'A shirt and shoes you plan to wear with the suit, and photos of any looks you like.',
    },
    {
      q: 'How long does a suit take?',
      a: 'It depends on whether you choose bespoke or made to measure. We confirm the timeframe and price at your consultation.',
    },
  ],
};

export const BOOK = {
  title: 'Book a fitting.',
  copy: 'Send your fabric and lining choices on WhatsApp and we will confirm a time for your consultation.',
  cta: 'Message on WhatsApp',
};

export const STICKY_BAR = {
  cta: 'Book a fitting',
};

export const FOOTER = {
  rights: '© 2026 Slayers Tailor. All rights reserved.',
  credit: 'Creative direction by Vision61 Studios.',
};

// The reference always names the pattern, even plain, lowercased.
export function whatsAppMessage({ fabric, pattern, lining, buttons }) {
  return `Hi Slayers Tailor, I'd like a fitting. Fabric: ${fabric} (${pattern.toLowerCase()}), lining: ${lining}, buttons: ${buttons}.`;
}

export function whatsAppCategoryMessage(category) {
  return `Hi Slayers Tailor, I'd like to ask about ${category.toLowerCase()}.`;
}
