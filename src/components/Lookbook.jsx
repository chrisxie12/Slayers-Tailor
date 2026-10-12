import { LOOKBOOK } from '../content';
import Placeholder from './Placeholder';
import './Lookbook.css';

function variantOf(frame) {
  return [frame.wide && 'w', frame.dark && 'd'].filter(Boolean).join(' ');
}

export default function Lookbook() {
  return (
    <section id="lookbook" className="section-shell reveal" aria-labelledby="lookbook-title">
      <h2 id="lookbook-title" className="section-title">{LOOKBOOK.title}</h2>
      <p className="section-copy">{LOOKBOOK.copy}</p>
      <div className="lookbook-grid">
        {LOOKBOOK.frames.map((frame) => (
          <Placeholder key={frame.id} variant={variantOf(frame)} />
        ))}
      </div>
    </section>
  );
}
