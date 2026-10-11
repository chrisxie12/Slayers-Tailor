import { PROCESS } from '../content';
import './Process.css';

export default function Process() {
  return (
    <section id="making" className="section-shell" aria-labelledby="process-title">
      <h2 id="process-title" className="section-title">{PROCESS.title}</h2>
      <ol className="process-list">
        {PROCESS.steps.map((step) => (
          <li key={step.title}>
            <h3>{step.title}</h3>
            <p className="section-copy">{step.copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
