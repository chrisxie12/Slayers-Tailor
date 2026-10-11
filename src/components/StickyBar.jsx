import './StickyBar.css';

export default function StickyBar({ whatsappHref }) {
  return (
    <div className="sticky-bar">
      <a href={whatsappHref} target="_blank" rel="noreferrer">Book on WhatsApp</a>
    </div>
  );
}
