// All site copy, verbatim from reference/slayers-tailor-demo.html.
// Never invent text here; unknown details stay as placeholders in config.js.

export const BRAND = {
  main: 'SLAYERS',
  rest: 'TAILOR',
};

export const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#look', label: 'Lookbook' },
  { href: '#making', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
];

export const NAV = {
  cta: 'Book a fitting',
  menuButton: 'Menu',
  menuClose: 'Close',
  menuLabel: 'Menu',
};

export const MENU_LINKS = [
  { href: '#top', label: 'Choose your cloth' },
  { href: '#services', label: 'Our services' },
  { href: '#look', label: 'Lookbook' },
  { href: '#making', label: 'How we work' },
  { href: '#about', label: 'About' },
  { href: '#book', label: 'Book a fitting' },
];

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
  summary: (fabric, pattern, lining, buttons) =>
    `${fabric}${pattern ? ` ${pattern}` : ''} cloth, ${lining} lining, ${buttons} buttons.`,
};

export const SERVICES = {
  title: 'Two ways to be fitted.',
  items: [
    {
      id: 'bespoke',
      title: 'Bespoke',
      points: [
        'A pattern drafted from scratch for you',
        'Several fittings as the suit takes shape',
        'Hand-finished details',
      ],
      cta: 'Ask about bespoke',
      photo: 'Photo: bespoke fitting, tailor marking cloth, 4:5',
    },
    {
      id: 'made-to-measure',
      title: 'Made to measure',
      points: [
        'An existing pattern adjusted to your measurements',
        'Fewer fittings and a shorter wait',
        'The same choice of cloth and lining',
      ],
      cta: 'Ask about made to measure',
      photo: 'Photo: made to measure, fabric wall, 4:5',
    },
  ],
  note: 'Timeframes and pricing are confirmed at your consultation.',
};

export const LOOKBOOK = {
  title: 'The look, in photographs.',
  copy: 'These frames mark the shots we will make together.',
  frames: [
    { caption: 'Photo: finished suit, full length, studio, 16:9', wide: true },
    { caption: 'Photo: lapel and hand stitching, close-up, 3:4', dark: true },
    { caption: 'Photo: fitting in progress, 3:4' },
    { caption: 'Photo: cloth wall and lining swatches, 3:4' },
    { caption: 'Photo: client portrait, with permission, 3:4', dark: true },
    { caption: 'Photo: workshop table, shears and chalk, 16:9', wide: true },
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

export const ABOUT = {
  title: 'Clothing made around you.',
  paragraphs: [
    'Every suit starts with a conversation about how you want to look and where you will wear it. From there we choose the cloth, take your measurements and fit the suit until it is right.',
    'Whether you choose bespoke or made to measure, you work directly with the tailor from the first consultation to the final fitting.',
  ],
  cta: 'Book a consultation',
  photo: 'Photo: the tailor at work, 4:5',
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
  details: [
    { label: 'Studio', key: 'address' },
    { label: 'Phone', key: 'phone' },
    { label: 'Hours', key: 'hours' },
  ],
};

export const STICKY_BAR = {
  cta: 'Book a fitting',
};

export const FOOTER = {
  rights: '© 2026 Slayers Tailor. All rights reserved.',
  credit: 'Creative direction by Vision61 Studios.',
};

export const DEMO_SWITCHER = {
  label: 'Demo colours',
  themes: [
    { id: 'crimson', label: 'Crimson' },
    { id: 'emerald', label: 'Emerald' },
    { id: 'kente', label: 'Kente gold' },
  ],
};

export function whatsAppMessage({ fabric, pattern, lining, buttons }) {
  return `Hi Slayers Tailor, I'd like a fitting. Fabric: ${fabric}${pattern ? ` (${pattern})` : ''}, lining: ${lining}, buttons: ${buttons}.`;
}
