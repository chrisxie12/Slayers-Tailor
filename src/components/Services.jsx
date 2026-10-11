import './Services.css';

export default function Services() {
  return (
    <section id="services" className="section-shell" aria-labelledby="services-title">
      <h2 id="services-title" className="section-title">Services</h2>
      <div className="services-grid">
        <article><h3>Bespoke</h3><p className="section-copy">Pattern drafted from your measurements and posture for a one-of-one fit.</p></article>
        <article><h3>Made to measure</h3><p className="section-copy">Refined house blocks adjusted to your body and styling preferences.</p></article>
        <article><h3>Alterations</h3><p className="section-copy">Precision adjustments to bring treasured garments back into form.</p></article>
      </div>
    </section>
  );
}
