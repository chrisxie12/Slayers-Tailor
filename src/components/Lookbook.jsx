import Placeholder from './Placeholder';
import './Lookbook.css';

export default function Lookbook() {
  return (
    <section id="lookbook" className="section-shell" aria-labelledby="lookbook-title">
      <h2 id="lookbook-title" className="section-title">Lookbook</h2>
      <div className="lookbook-grid">
        <Placeholder caption="Single-breasted notch lapel" />
        <Placeholder caption="Double-breasted peak lapel" />
        <Placeholder caption="Evening tuxedo detail" />
      </div>
    </section>
  );
}
