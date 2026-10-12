import { useEffect, useState } from 'react';

/**
 * Marks the tab pointing at the section currently in view, and keeps
 * the tab strip scrolled to it. Ported from the reference: an
 * IntersectionObserver banded around the middle of the viewport.
 *
 * Returns the active href so React can own `aria-current` and it
 * survives re-renders.
 */
export default function useSectionSpy(tabsRef) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const tabs = tabsRef.current;
    if (!tabs || typeof IntersectionObserver !== 'function') {
      return undefined;
    }

    const links = Array.from(tabs.querySelectorAll('a[href^="#"]'));
    const targets = links
      .map((link) => ({ link, el: document.querySelector(link.getAttribute('href')) }))
      .filter((target) => target.el);

    if (!targets.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const hit = targets.find((target) => target.el === entry.target);
          if (!hit) {
            return;
          }

          const href = hit.link.getAttribute('href');
          setActive(href);
          tabs.scrollLeft = hit.link.offsetLeft - 24;
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    targets.forEach((target) => observer.observe(target.el));

    return () => observer.disconnect();
  }, [tabsRef]);

  return active;
}
