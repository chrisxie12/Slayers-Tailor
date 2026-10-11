import { STICKY_BAR } from '../content';
import './StickyBar.css';

export default function StickyBar({ whatsappHref }) {
  return (
    <div className="sticky-bar">
      <a href={whatsappHref} target="_blank" rel="noreferrer">{STICKY_BAR.cta}</a>
    </div>
  );
}
