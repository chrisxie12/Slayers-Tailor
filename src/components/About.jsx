import { ABOUT } from '../content';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section-shell about reveal" aria-labelledby="about-title">
      <div className="about-body">
        <h2 id="about-title" className="section-title">{ABOUT.title}</h2>
        {ABOUT.paragraphs.map((paragraph) => (
          <p key={paragraph} className="section-copy">{paragraph}</p>
        ))}
        <a className="btn o about-cta" href="#book">{ABOUT.cta}</a>
      </div>
    </section>
  );
}
