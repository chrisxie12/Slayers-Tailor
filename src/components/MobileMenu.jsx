import { useEffect, useRef } from 'react';
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

  return (
    <div className="mobile-overlay" role="presentation" onClick={onClose}>
      <nav
        id="mobile-menu"
        className="mobile-panel"
        aria-label="Mobile"
        aria-modal="true"
        role="dialog"
        ref={panelRef}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="menu-close" onClick={onClose}>Close</button>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={onClose}>{link.label}</a>
        ))}
      </nav>
    </div>
  );
}
