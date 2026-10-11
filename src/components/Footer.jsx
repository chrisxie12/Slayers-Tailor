import { SITE } from '../config';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-shell">
        <p>{SITE.name}</p>
        <p>{SITE.address}</p>
        <p>{SITE.phone}</p>
      </div>
    </footer>
  );
}
