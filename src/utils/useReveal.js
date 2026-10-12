import { useEffect } from 'react';

/**
 * Reveals every `.reveal` element as it scrolls into view.
 *
 * Three safety nets, so content can never be withheld:
 * - elements at or above the fold are revealed synchronously on mount;
 * - a passive scroll check reveals anything that has entered the viewport;
 * - IntersectionObserver does the same, and unobserves as it goes.
 *
 * If the visitor prefers reduced motion, everything is shown immediately.
 */
export default function useReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      document.querySelectorAll('.reveal').forEach((node) => node.classList.add('is-visible'));
      return undefined;
    }

    const pending = Array.from(document.querySelectorAll('.reveal'));

    if (pending.length === 0) {
      return undefined;
    }

    const observer = typeof IntersectionObserver === 'undefined'
      ? null
      : new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
      );

    function reveal(node) {
      if (node.classList.contains('is-visible')) {
        return;
      }
      node.classList.add('is-visible');
      const index = pending.indexOf(node);
      if (index !== -1) {
        pending.splice(index, 1);
      }
      if (pending.length === 0) {
        window.removeEventListener('scroll', check);
        if (observer) {
          observer.disconnect();
        }
      }
    }

    // Fallback that works even if observer callbacks are throttled.
    function check() {
      pending.slice().forEach((node) => {
        if (node.getBoundingClientRect().top < window.innerHeight) {
          reveal(node);
          if (observer) {
            observer.unobserve(node);
          }
        }
      });
    }

    window.addEventListener('scroll', check, { passive: true });

    pending.slice().forEach((node) => {
      if (node.getBoundingClientRect().top < window.innerHeight) {
        reveal(node);
        return;
      }
      if (observer) {
        observer.observe(node);
      }
    });

    return () => {
      window.removeEventListener('scroll', check);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
}
