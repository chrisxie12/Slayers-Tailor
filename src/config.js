// Site configuration. Empty values are hidden automatically — nothing
// placeholder-ish ever reaches the page.

export const WHATSAPP_NUMBER = '';

export const SITE = {
  name: 'Slayers Tailor',
  address: '',
  phone: '',
  hours: '',
};

// Section visibility, keyed by section id. Set a key to false and the
// section plus any nav/menu link that points at it is not rendered.
export const SECTIONS = {
  look: false,
  browse: true,
  cloths: true,
};

export function isSectionVisible(id) {
  return SECTIONS[id] !== false;
}

// Empty-value hiding: drop any row whose value is blank, null or
// undefined, so contact blocks collapse instead of showing stubs.
export function hideEmpty(rows) {
  return rows.filter((row) => String(row.value ?? '').trim() !== '');
}

export const CONTACT = hideEmpty([
  { key: 'address', label: 'Studio', value: SITE.address },
  { key: 'phone', label: 'Phone', value: SITE.phone },
  { key: 'hours', label: 'Hours', value: SITE.hours },
]);

// Optional per-cloth description shown under the Fabric group. An empty
// object hides the line entirely.
export const FABRIC_NOTES = {};

export const FABRICS = [
  { id: 'midnight-wool', name: 'Midnight Wool', shell: 'var(--fabric-midnight)', accent: 'var(--fabric-midnight-accent)' },
  { id: 'charcoal-twill', name: 'Charcoal Twill', shell: 'var(--fabric-charcoal)', accent: 'var(--fabric-charcoal-accent)' },
  { id: 'navy-serge', name: 'Navy Serge', shell: 'var(--fabric-navy)', accent: 'var(--fabric-navy-accent)' },
];

export const LININGS = [
  { id: 'burgundy', name: 'Burgundy', color: 'var(--lining-burgundy)' },
  { id: 'forest', name: 'Forest', color: 'var(--lining-forest)' },
  { id: 'sapphire', name: 'Sapphire', color: 'var(--lining-sapphire)' },
];

export const BUTTONS = [
  { id: 'horn', name: 'Horn', color: 'var(--button-horn)' },
  { id: 'onyx', name: 'Onyx', color: 'var(--button-onyx)' },
  { id: 'pearl', name: 'Pearl', color: 'var(--button-pearl)' },
];

export const PATTERNS = [
  { id: 'plain', name: 'Plain' },
  { id: 'pinstripe', name: 'Pinstripe' },
  { id: 'check', name: 'Check' },
];
