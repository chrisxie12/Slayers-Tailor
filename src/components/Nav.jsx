import './Nav.css';

export default function Nav({ links, menuOpen, onOpenMenu }) {
  return (
    <header className="site-header">
      <div className="header-shell">
        <a className="brand" href="#top">Slayers Tailor</a>
        <nav className="desktop-nav" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <button type="button" className="menu-btn" onClick={onOpenMenu} aria-expanded={menuOpen} aria-controls="mobile-menu">
          Menu
        </button>
      </div>
    </header>
  );
}
