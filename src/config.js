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

// Picker options. Colours resolve through design-system.css tokens.
export const FABRICS = [
  { id: 'midnight-navy', name: 'Midnight navy', color: 'var(--fabric-midnight)' },
  { id: 'charcoal', name: 'Charcoal', color: 'var(--fabric-charcoal)' },
  { id: 'forest-green', name: 'Forest green', color: 'var(--fabric-forest)' },
  { id: 'burgundy', name: 'Burgundy', color: 'var(--fabric-burgundy)' },
  { id: 'sand', name: 'Sand', color: 'var(--fabric-sand)' },
];

export const LININGS = [
  { id: 'crimson', name: 'Crimson', color: 'var(--lining-crimson)' },
  { id: 'gold', name: 'Gold', color: 'var(--lining-gold)' },
  { id: 'emerald', name: 'Emerald', color: 'var(--lining-emerald)' },
  { id: 'violet', name: 'Violet', color: 'var(--lining-violet)' },
  { id: 'ivory', name: 'Ivory', color: 'var(--lining-ivory)' },
];

export const BUTTONS = [
  { id: 'horn', name: 'Horn', color: 'var(--button-horn)' },
  { id: 'brass', name: 'Brass', color: 'var(--button-brass)' },
  { id: 'pearl', name: 'Pearl', color: 'var(--button-pearl)' },
];

// `pattern` is the SVG pattern id suffix; empty means a plain weave.
export const PATTERNS = [
  { id: 'plain', name: 'Plain', pattern: '' },
  { id: 'pinstripe', name: 'Pinstripe', pattern: 'pin' },
  { id: 'check', name: 'Check', pattern: 'chk' },
];
