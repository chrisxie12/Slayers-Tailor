import { FAQ } from '../content';
import './Faq.css';

export default function Faq() {
  return (
    <section id="faq" className="section-shell reveal" aria-labelledby="faq-title">
      <h2 id="faq-title" className="section-title">{FAQ.title}</h2>
      <div className="faq-list">
        {FAQ.items.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
