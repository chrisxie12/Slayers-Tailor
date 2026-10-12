import { useEffect, useRef, useState } from 'react';
import { HERO } from '../content';
import './Hero.css';

export default function Hero({ fabric, lining, buttons, pattern }) {
  const jacketFill = pattern.id === 'plain' ? fabric.shell : `url(#pattern-${pattern.id})`;

  // Replay the jacket's "pop" whenever a choice repaints it.
  const [pop, setPop] = useState(false);
  const firstRun = useRef(true);
  const signature = `${fabric.id}-${lining.id}-${buttons.id}-${pattern.id}`;

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return undefined;
    }

    setPop(false);
    const timer = window.setTimeout(() => setPop(true), 20);

    return () => window.clearTimeout(timer);
  }, [signature]);

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="section-shell hero-shell">
        <div className="hero-copy">
          <h1 id="hero-title">{HERO.title}</h1>
          <p className="section-copy">{HERO.copy}</p>
        </div>
        <div className="jacket-wrap">
          <svg className={`jacket-svg${pop ? ' pop' : ''}`} viewBox="0 0 380 380" aria-hidden="true">
            <defs>
              <pattern id="pattern-pinstripe" width="10" height="10" patternUnits="userSpaceOnUse">
                <rect width="10" height="10" fill={fabric.shell} data-part />
                <path d="M2 0V10M8 0V10" stroke={fabric.accent} strokeWidth="1" />
              </pattern>
              <pattern id="pattern-check" width="16" height="16" patternUnits="userSpaceOnUse">
                <rect width="16" height="16" fill={fabric.shell} data-part />
                <path d="M0 8H16M8 0V16" stroke={fabric.accent} strokeWidth="1.2" />
              </pattern>
            </defs>
            <path
              d="M98 90L145 48H235L282 90L334 200L280 232L256 162V336H124V162L100 232L46 200L98 90Z"
              fill={jacketFill}
              data-part
            />
            <path d="M164 48H216V156L190 198L164 156V48Z" fill={lining.color} data-part />
            <path d="M124 336H256" stroke={fabric.accent} strokeWidth="3" />
            <circle cx="190" cy="183" r="8" fill={buttons.color} data-part />
            <circle cx="190" cy="218" r="8" fill={buttons.color} data-part />
            <circle cx="190" cy="253" r="8" fill={buttons.color} data-part />
          </svg>
        </div>
      </div>
    </section>
  );
}
