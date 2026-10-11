import './BookCta.css';

export default function BookCta({ whatsappHref }) {
  return (
    <section id="book" className="section-shell book-cta" aria-labelledby="book-title">
      <h2 id="book-title" className="section-title">Ready to begin?</h2>
      <p className="section-copy">Share your selection and preferred appointment slot on WhatsApp.</p>
      <a href={whatsappHref} target="_blank" rel="noreferrer">Book your fitting</a>
    </section>
  );
}
