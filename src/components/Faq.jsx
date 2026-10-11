import './Faq.css';

export default function Faq() {
  return (
    <section id="faq" className="section-shell" aria-labelledby="faq-title">
      <h2 id="faq-title" className="section-title">FAQ</h2>
      <div className="faq-list">
        <details>
          <summary>How do I start?</summary>
          <p>Book a consultation and share your preferred timeline and style direction.</p>
        </details>
        <details>
          <summary>Do you offer fittings?</summary>
          <p>Yes, fittings are part of the process and are scheduled as the garment progresses.</p>
        </details>
        <details>
          <summary>Can I bring my own fabric?</summary>
          <p>Yes, we can review suitability and advise before cutting.</p>
        </details>
      </div>
    </section>
  );
}
