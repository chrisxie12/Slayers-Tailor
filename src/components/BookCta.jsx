import { CONTACT } from '../config';
import { BOOK } from '../content';
import './BookCta.css';

export default function BookCta({ whatsappHref }) {
  return (
    <section id="book" className="section-shell book-cta reveal" aria-labelledby="book-title">
      <h2 id="book-title" className="section-title">{BOOK.title}</h2>
      <p className="section-copy">{BOOK.copy}</p>
      <a className="btn od o" href={whatsappHref} target="_blank" rel="noopener noreferrer">{BOOK.cta}</a>

      {CONTACT.length > 0 && (
        <div className="book-contact">
          {CONTACT.map((row) => (
            <div key={row.key}>
              <b>{row.label}</b>
              <span>{row.value}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
