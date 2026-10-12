import { useEffect, useRef, useState } from 'react';
import { CATEGORIES, FABRICS } from '../config';
import { BRAND, NAV, SEARCH } from '../content';
import { resolveSearch } from '../utils/search';
import useSectionSpy from '../utils/useSectionSpy';
import './Nav.css';

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l4.5 4.5" />
  </svg>
);

// Suggestions offered in the search dropdown.
const SUGGESTIONS = [
  ...CATEGORIES.map((c) => c.name),
  ...FABRICS.map((f) => f.name),
  ...SEARCH.suggestions,
];

export default function Nav({ links, menuOpen, onOpenMenu, whatsappHref, onSearchFabric }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);
  const tabsRef = useRef(null);
  const timersRef = useRef([]);

  const activeHref = useSectionSpy(tabsRef);

  // Clear any pending message/highlight timers when unmounted.
  useEffect(() => () => timersRef.current.forEach((id) => window.clearTimeout(id)), []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const input = inputRef.current;
    if (!input) {
      return;
    }

    const raw = input.value;
    const result = resolveSearch(raw, { categories: CATEGORIES, fabrics: FABRICS });

    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
    setMessage('');

    if (!result) {
      return;
    }

    if (result.type === 'fabric') {
      onSearchFabric(FABRICS[result.index]);
      window.scrollTo(0, 0);
    } else if (result.type === 'category') {
      const card = document.querySelectorAll('.cat')[result.index];
      if (card) {
        card.scrollIntoView({ block: 'center' });
        card.classList.add('hit');
        timersRef.current.push(window.setTimeout(() => card.classList.remove('hit'), 2200));
      }
    } else if (result.type === 'section') {
      document.querySelector(result.section)?.scrollIntoView();
    } else {
      setMessage(SEARCH.noMatch(raw));
      timersRef.current.push(window.setTimeout(() => setMessage(''), 5000));
    }

    input.blur();

    // The reference collapses the search field again on phones.
    if (window.matchMedia('(max-width: 767px)').matches) {
      setSearchOpen(false);
    }
  };

  return (
    <header className="site-header">
      <div className="section-shell header-shell hd">
        <a className="logo" href="#top">
          {BRAND.main} <span>{BRAND.rest}</span>
        </a>

        <button
          type="button"
          className="ib search-toggle"
          aria-label={NAV.searchLabel}
          aria-expanded={searchOpen}
          aria-controls="site-search"
          onClick={() => {
            const next = !searchOpen;
            setSearchOpen(next);
            if (next) {
              window.requestAnimationFrame(() => inputRef.current?.focus());
            }
          }}
        >
          <SearchIcon />
        </button>

        <button
          type="button"
          className="btn o menu-btn"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={onOpenMenu}
        >
          {NAV.menuButton}
        </button>

        <form
          id="site-search"
          className={`sf${searchOpen ? ' on' : ''}`}
          role="search"
          onSubmit={handleSubmit}
        >
          <input
            ref={inputRef}
            id="sq"
            type="search"
            placeholder={NAV.searchPlaceholder}
            aria-label={NAV.searchPlaceholder}
            list="sg"
            autoComplete="off"
          />
          <button type="submit" aria-label={NAV.searchSubmit}>
            <SearchIcon />
          </button>
          <datalist id="sg">
            {SUGGESTIONS.map((suggestion) => (
              <option key={suggestion} value={suggestion} />
            ))}
          </datalist>
        </form>

        <a className="btn p hb" href={whatsappHref} target="_blank" rel="noopener noreferrer">
          {NAV.cta}
        </a>

        <nav className="tabs" aria-label={NAV.sectionsLabel} ref={tabsRef}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeHref === link.href ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <p id="msg" className="search-msg" role="status">{message}</p>
    </header>
  );
}
