import { ABOUT } from '../content';
import Placeholder from './Placeholder';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section-shell about" aria-labelledby="about-title">
      <div>
        <h2 id="about-title" className="section-title">{ABOUT.title}</h2>
        {ABOUT.paragraphs.map((paragraph) => (
          <p key={paragraph} className="section-copy">{paragraph}</p>
        ))}
        <a className="about-cta" href="#book">{ABOUT.cta}</a>
      </div>
      <Placeholder />
    </section>
  );
}
