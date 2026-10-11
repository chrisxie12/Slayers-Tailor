import { BRAND, NAV } from '../content';
import './Nav.css';

export default function Nav({ links, menuOpen, onOpenMenu, whatsappHref }) {
  return (
    <header className="site-header">
      <div className="header-shell">
        <a className="brand" href="#top">
          {BRAND.main} <span>{BRAND.rest}</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
          <a className="nav-cta" href={whatsappHref} target="_blank" rel="noreferrer">
            {NAV.cta}
          </a>
        </nav>
        <button type="button" className="menu-btn" onClick={onOpenMenu} aria-expanded={menuOpen} aria-controls="mobile-menu">
          {NAV.menuButton}
        </button>
      </div>
    </header>
  );
}
