import { SITE } from '../config';
import Placeholder from './Placeholder';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section-shell about" aria-labelledby="about-title">
      <div>
        <h2 id="about-title" className="section-title">About</h2>
        <p className="section-copy">Slayers Tailor is a tailoring house focused on fit, cloth integrity, and considered finishing.</p>
        <p className="section-copy"><strong>Address:</strong> {SITE.address}</p>
        <p className="section-copy"><strong>Phone:</strong> {SITE.phone}</p>
        <p className="section-copy"><strong>Hours:</strong> {SITE.hours}</p>
      </div>
      <Placeholder caption="Atelier interior placeholder" />
    </section>
  );
}
