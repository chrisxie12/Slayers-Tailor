import { BRAND, FOOTER } from '../content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-shell">
        <p className="footer-wordmark">
          {BRAND.main} <span>{BRAND.rest}</span>
        </p>
        <div className="footer-lines">
          <span>{FOOTER.rights}</span>
          <span>{FOOTER.credit}</span>
        </div>
      </div>
    </footer>
  );
}
