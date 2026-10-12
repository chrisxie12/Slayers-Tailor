import { useEffect, useRef, useState } from 'react';
import { HERO } from '../content';
import './Hero.css';

/**
 * The reference jacket drawing, ported verbatim (viewBox 0 0 200 240).
 * Shell and lapels take the cloth colour or its pattern; sv4 is the
 * lining flash; sv7/sv8 are the buttons.
 */
function Jacket({ fabric, lining, buttons, pattern, pop }) {
  const cloth = fabric.color;
  const shell = pattern.pattern ? `url(#p-${pattern.pattern})` : cloth;

  return (
    <div className="jacket-wrap" role="img" aria-label={HERO.jacketLabel}>
      <svg className={`jacket-svg${pop ? ' pop' : ''}`} viewBox="0 0 200 240">
        <defs>
          <pattern id="p-pin" width="7" height="7" patternUnits="userSpaceOnUse">
            <rect className="pb" width="7" height="7" style={{ fill: cloth }} />
            <rect width="1" height="7" style={{ fill: 'var(--jacket-highlight)' }} opacity=".4" />
          </pattern>
          <pattern id="p-chk" width="18" height="18" patternUnits="userSpaceOnUse">
            <rect className="pb" width="18" height="18" style={{ fill: cloth }} />
            <path
              d="M0 9H18M9 0V18"
              style={{ stroke: 'var(--jacket-highlight)' }}
              strokeOpacity=".28"
              strokeWidth="2"
            />
          </pattern>
        </defs>

        <g style={{ stroke: 'var(--jacket-outline)' }} strokeWidth="1">
          <ellipse
            cx="100" cy="231" rx="72" ry="5"
            style={{ fill: 'var(--jacket-shadow)' }} opacity=".14" stroke="none"
          />
          <path id="sv1" d="M62 34 L26 62 L8 196 L32 202 L44 100 Z" style={{ fill: shell }} />
          <path id="sv2" d="M138 34 L174 62 L192 196 L168 202 L156 100 Z" style={{ fill: shell }} />
          <path id="sv3" d="M62 34 L100 20 L138 34 L156 100 L170 222 L30 222 L44 100 Z" style={{ fill: shell }} />
          <path id="sv4" d="M84 27 L100 160 L116 27 L100 20 Z" stroke="none" style={{ fill: lining.color }} />
          <path id="sv5" d="M84 27 L62 58 L80 104 L100 160 Z" style={{ fill: shell }} />
          <path id="sv6" d="M116 27 L138 58 L120 104 L100 160 Z" style={{ fill: shell }} />

          <path d="M100 160 V222" fill="none" />
          <path
            d="M52 190 H78 M122 190 H148 M118 118 L136 114 M62 58 L84 27 M138 58 L116 27"
            fill="none"
          />

          <g stroke="none" style={{ fill: 'var(--jacket-shadow)' }}>
            <path d="M138 34L156 100L170 222L128 222Z" opacity=".11" />
            <path d="M50 186H80V195H50ZM120 186H150V195H120ZM118 114L138 110L139 116L119 120Z" opacity=".16" />
          </g>

          <path
            d="M62 34L100 20L100 40L70 50Z"
            style={{ fill: 'var(--jacket-highlight)' }} opacity=".13" stroke="none"
          />
          <path
            d="M84 27L62 58L80 104L100 160M116 27L138 58L120 104L100 160"
            fill="none"
            style={{ stroke: 'var(--jacket-highlight)' }}
            strokeOpacity=".4"
            strokeDasharray="2 2"
          />

          <circle id="sv7" cx="100" cy="176" r="5" style={{ fill: buttons.color }} />
          <circle id="sv8" cx="100" cy="198" r="5" style={{ fill: buttons.color }} />
        </g>
      </svg>
    </div>
  );
}

export default function Hero({ fabric, lining, buttons, pattern, children }) {
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

        <Jacket fabric={fabric} lining={lining} buttons={buttons} pattern={pattern} pop={pop} />

        <div className="hero-controls">{children}</div>
      </div>
    </section>
  );
}
