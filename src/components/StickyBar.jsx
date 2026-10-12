import { STICKY_BAR } from '../content';
import './StickyBar.css';

export default function StickyBar({ whatsappHref }) {
  return (
    <div className="bar">
      <a className="btn p" href={whatsappHref} target="_blank" rel="noopener noreferrer">
        {STICKY_BAR.cta}
      </a>
    </div>
  );
}
