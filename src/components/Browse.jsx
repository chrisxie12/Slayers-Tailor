import { CATEGORIES, WHATSAPP_NUMBER } from '../config';
import { BROWSE, whatsAppCategoryMessage } from '../content';
import './Browse.css';

// Line drawings ported from the reference's IC map.
const ICONS = {
  jacket: 'M8 3L3 7l1.5 13H10l2-9 2 9h5.5L21 7l-5-4-4 6z',
  trousers: 'M7 3h10l1 18h-4.5L12 9l-1.5 12H6z',
  shirt: 'M9 3L3 6l2 4 2-1v12h10V9l2 1 2-4-6-3a3 3 0 0 1-6 0z',
  vest: 'M7 3l5 6 5-6 1 17H6z',
  scissors: 'M8 8l12 10M8 16L20 6',
};

function categoryHref(name) {
  const cleanNumber = (WHATSAPP_NUMBER || '').replace(/\D/g, '');
  if (!cleanNumber) {
    return '#';
  }

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(whatsAppCategoryMessage(name))}`;
}

export default function Browse() {
  return (
    <section id="browse" className="section-shell browse reveal" aria-labelledby="browse-title">
      <h2 id="browse-title" className="section-title">{BROWSE.title}</h2>
      <div className="cats">
        {CATEGORIES.map((category) => (
          <a
            key={category.id}
            className="cat"
            href={categoryHref(category.name)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d={ICONS[category.icon]} />
              {category.icon === 'scissors' && (
                <>
                  <circle cx="6" cy="6" r="2.5" />
                  <circle cx="6" cy="18" r="2.5" />
                </>
              )}
            </svg>
            <span>{category.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
