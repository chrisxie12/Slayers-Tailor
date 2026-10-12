// Ported from the reference's search submit handler: a query resolves
// to a cloth, a garment category, or a section of the page.
const SECTION_KEYWORDS = {
  services: '#services',
  bespoke: '#services',
  measure: '#services',
  process: '#making',
  about: '#about',
  faq: '#faq',
  book: '#book',
  contact: '#book',
  lookbook: '#look',
};

export function resolveSearch(query, { categories, fabrics }) {
  const q = (query || '').trim().toLowerCase();
  if (!q) {
    return null;
  }

  const categoryIndex = categories.findIndex((c) => c.name.toLowerCase().includes(q));
  const fabricIndex = fabrics.findIndex((f) => f.name.toLowerCase().includes(q));

  // Section keywords only match once the query is a real word.
  const key = q.length > 2
    ? Object.keys(SECTION_KEYWORDS).find((k) => k.includes(q) || q.includes(k))
    : undefined;
  const section = key ? SECTION_KEYWORDS[key] : undefined;

  if (fabricIndex > -1) {
    return { type: 'fabric', index: fabricIndex };
  }

  if (categoryIndex > -1) {
    return { type: 'category', index: categoryIndex };
  }

  if (section) {
    return { type: 'section', section };
  }

  return { type: 'none' };
}
