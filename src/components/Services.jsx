import { SERVICES } from '../content';
import Placeholder from './Placeholder';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="section-shell" aria-labelledby="services-title">
      <h2 id="services-title" className="section-title">{SERVICES.title}</h2>
      <div className="services-grid">
        {SERVICES.items.map((item) => (
          <article key={item.id} className="card">
            <Placeholder variant={item.dark ? 'd' : ''} />
            <h3>{item.title}</h3>
            <p className="section-copy">{item.lead}</p>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a className="card-cta" href="#book">{item.cta}</a>
          </article>
        ))}
      </div>
      <p className="section-copy services-note">{SERVICES.note}</p>
    </section>
  );
}
