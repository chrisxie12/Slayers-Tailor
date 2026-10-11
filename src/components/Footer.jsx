import { CONTACT, SITE } from '../config';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-shell">
        <p>{SITE.name}</p>
        {CONTACT.map((row) => (
          <p key={row.key}>{row.label}: {row.value}</p>
        ))}
      </div>
    </footer>
  );
}
