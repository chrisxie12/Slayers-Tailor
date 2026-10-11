import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { FABRICS, LININGS, BUTTONS, PATTERNS, WHATSAPP_NUMBER } from './config';
import { buildWhatsAppLink } from './utils/whatsapp';
import Nav from './components/Nav';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import FabricPicker from './components/FabricPicker';
import Services from './components/Services';
import Lookbook from './components/Lookbook';
import Process from './components/Process';
import About from './components/About';
import Faq from './components/Faq';
import BookCta from './components/BookCta';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#lookbook', label: 'Lookbook' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
  { href: '#book', label: 'Book' },
];

const themeOptions = ['crimson', 'emerald', 'kente'];

function DemoThemeSwitcher() {
  const show = new URLSearchParams(window.location.search).has('demo');
  const [theme, setTheme] = useState('crimson');

  useEffect(() => {
    if (!show) {
      return undefined;
    }
    document.documentElement.dataset.brand = theme;
    return () => {
      delete document.documentElement.dataset.brand;
    };
  }, [show, theme]);

  if (!show) {
    return null;
  }

  return (
    <div className="demo-switcher" role="group" aria-label="Demo color switcher">
      {themeOptions.map((option) => (
        <button
          key={option}
          type="button"
          className={theme === option ? 'is-active' : ''}
          onClick={() => setTheme(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState({
    fabric: FABRICS[0],
    lining: LININGS[0],
    buttons: BUTTONS[0],
    pattern: PATTERNS[0],
  });

  const whatsappHref = useMemo(
    () => buildWhatsAppLink(WHATSAPP_NUMBER, {
      fabric: selected.fabric.name,
      lining: selected.lining.name,
      buttons: selected.buttons.name,
      pattern: selected.pattern.name,
    }),
    [selected],
  );

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav links={links} menuOpen={menuOpen} onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} links={links} onClose={() => setMenuOpen(false)} />
      <DemoThemeSwitcher />
      <main id="main-content">
        <Hero
          fabric={selected.fabric}
          lining={selected.lining}
          buttons={selected.buttons}
          pattern={selected.pattern}
          whatsappHref={whatsappHref}
        />
        <FabricPicker
          fabrics={FABRICS}
          linings={LININGS}
          buttons={BUTTONS}
          patterns={PATTERNS}
          selected={selected}
          setSelected={setSelected}
          whatsappHref={whatsappHref}
        />
        <Services />
        <Lookbook />
        <Process />
        <About />
        <Faq />
        <BookCta whatsappHref={whatsappHref} />
      </main>
      <StickyBar whatsappHref={whatsappHref} />
      <Footer />
    </>
  );
}
