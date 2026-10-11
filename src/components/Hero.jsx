import './Hero.css';

export default function Hero({ fabric, lining, buttons, pattern, whatsappHref }) {
  const jacketFill = pattern.id === 'plain' ? fabric.shell : `url(#pattern-${pattern.id})`;

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="section-shell hero-shell">
        <div>
          <p className="eyebrow">Bespoke tailoring</p>
          <h1 id="hero-title">Crafted for your stride.</h1>
          <p className="section-copy">Choose your cloth, lining, and finishing details. We cut every jacket to your body and your intent.</p>
          <a className="hero-cta" href={whatsappHref} target="_blank" rel="noreferrer">Book on WhatsApp</a>
        </div>
        <svg className="jacket-svg" viewBox="0 0 380 380" aria-hidden="true">
          <defs>
            <pattern id="pattern-pinstripe" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill={fabric.shell} />
              <path d="M2 0V10M8 0V10" stroke={fabric.accent} strokeWidth="1" />
            </pattern>
            <pattern id="pattern-check" width="16" height="16" patternUnits="userSpaceOnUse">
              <rect width="16" height="16" fill={fabric.shell} />
              <path d="M0 8H16M8 0V16" stroke={fabric.accent} strokeWidth="1.2" />
            </pattern>
          </defs>
          <path d="M98 90L145 48H235L282 90L334 200L280 232L256 162V336H124V162L100 232L46 200L98 90Z" fill={jacketFill} />
          <path d="M164 48H216V156L190 198L164 156V48Z" fill={lining.color} />
          <path d="M124 336H256" stroke={fabric.accent} strokeWidth="3" />
          <circle cx="190" cy="183" r="8" fill={buttons.color} />
          <circle cx="190" cy="218" r="8" fill={buttons.color} />
          <circle cx="190" cy="253" r="8" fill={buttons.color} />
        </svg>
      </div>
    </section>
  );
}
