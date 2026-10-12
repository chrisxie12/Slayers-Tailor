import { useEffect, useRef } from 'react';
import { NAV } from '../content';
import './MobileMenu.css';

const FOCUSABLE = 'a[href], button:not([disabled])';

export default function MobileMenu({ open, links, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll(FOCUSABLE) || [];
    focusables[0]?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'Tab' && focusables.length > 1) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  // Reference #menu: a full-bleed deep panel with large serif links.
  return (
    <div id="menu" role="dialog" aria-modal="true" aria-label={NAV.menuLabel} ref={panelRef}>
      <button type="button" id="x" onClick={onClose}>{NAV.menuClose}</button>
      {links.map((link) => (
        <a key={link.href} href={link.href} onClick={onClose}>{link.label}</a>
      ))}
    </div>
  );
}
