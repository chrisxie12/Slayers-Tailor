import { useMemo, useState } from 'react';
import './App.css';
import { FABRICS, LININGS, BUTTONS, PATTERNS, WHATSAPP_NUMBER, isSectionVisible } from './config';
import { NAV_LINKS, MENU_LINKS, SKIP_LINK } from './content';
import { buildWhatsAppLink } from './utils/whatsapp';
import useReveal from './utils/useReveal';
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

const visible = (link) => !link.section || isSectionVisible(link.section);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState({
    fabric: FABRICS[0],
    lining: LININGS[0],
    buttons: BUTTONS[0],
    pattern: PATTERNS[0],
  });

  useReveal();

  const links = useMemo(() => NAV_LINKS.filter(visible), []);
  const menuLinks = useMemo(() => MENU_LINKS.filter(visible), []);

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
      <a className="skip-link" href="#main-content">{SKIP_LINK}</a>
      <Nav links={links} menuOpen={menuOpen} onOpenMenu={() => setMenuOpen(true)} whatsappHref={whatsappHref} />
      <MobileMenu open={menuOpen} links={menuLinks} onClose={() => setMenuOpen(false)} />
      <main id="main-content">
        <Hero
          fabric={selected.fabric}
          lining={selected.lining}
          buttons={selected.buttons}
          pattern={selected.pattern}
        >
          <FabricPicker
            fabrics={FABRICS}
            linings={LININGS}
            buttons={BUTTONS}
            patterns={PATTERNS}
            selected={selected}
            setSelected={setSelected}
            whatsappHref={whatsappHref}
          />
        </Hero>
        <Services />
        {isSectionVisible('look') && <Lookbook />}
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
