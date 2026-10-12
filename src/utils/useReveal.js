import { useEffect } from 'react';

/**
 * Plays the `.reveal` rise as each section scrolls into view.
 *
 * Sections are visible at rest; this hook only adds `.is-visible`, and only
 * to sections that start below the fold. Content can therefore never be
 * withheld: if the observer never fires — no JS, print, or a capture taken
 * without scrolling — the sections simply stay visible.
 *
 * Three ways a section can start playing, in order of how early they fire:
 * - IntersectionObserver, set to fire while the section is still clear of
 *   the viewport, so the rise begins off-screen rather than on screen;
 * - a passive scroll check, for when observer callbacks are throttled;
 * - nothing at all, if both fail — the section just remains visible.
 *
 * If the visitor prefers reduced motion, nothing is marked and the rise is
 * never played.
 */
export default function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const all = Array.from(document.querySelectorAll('.reveal'));

    if (all.length === 0) {
      return undefined;
    }

    // Only what is off-screen at first paint gets to animate. Anything
    // already on screen is left alone so the first frame is never blank.
    const pending = all.filter(
      (node) => node.getBoundingClientRect().top >= window.innerHeight,
    );

    if (pending.length === 0) {
      return undefined;
    }

    const observer = typeof IntersectionObserver === 'undefined'
      ? null
      : new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              play(entry.target);
            }
          });
        },
        // A positive bottom margin makes this fire while the section is
        // still a quarter of a viewport below the fold.
        { rootMargin: '0px 0px 25% 0px', threshold: 0 },
      );

    function play(node) {
      const index = pending.indexOf(node);
      if (index === -1) {
        return;
      }
      pending.splice(index, 1);
      node.classList.add('is-visible');
      if (observer) {
        observer.unobserve(node);
      }
      if (pending.length === 0) {
        window.removeEventListener('scroll', check);
        if (observer) {
          observer.disconnect();
        }
      }
    }

    // Fallback that works even if observer callbacks are throttled. Fires
    // while the section is still off-screen, like the observer does.
    function check() {
      pending.slice().forEach((node) => {
        if (node.getBoundingClientRect().top < window.innerHeight * 1.25) {
          play(node);
        }
      });
    }

    window.addEventListener('scroll', check, { passive: true });

    if (observer) {
      pending.forEach((node) => observer.observe(node));
    }

    return () => {
      window.removeEventListener('scroll', check);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
}
