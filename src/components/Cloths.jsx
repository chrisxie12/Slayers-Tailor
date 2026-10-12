import { FABRICS } from '../config';
import { CLOTHS, PICKER } from '../content';
import './Cloths.css';

export default function Cloths({ selectedFabric, onSelectFabric }) {
  return (
    <section id="cloths" className="section-shell cloths-section reveal" aria-labelledby="cloths-title">
      <h2 id="cloths-title" className="section-title">{CLOTHS.title}</h2>
      <p className="section-copy">{CLOTHS.copy}</p>
      <div className="cloths">
        {FABRICS.map((fabric) => (
          <div key={fabric.id} className="cl">
            <div className="blk" style={{ '--c': fabric.color }} aria-hidden="true" />
            <b>{fabric.name}</b>
            <button
              type="button"
              className="btn o"
              aria-pressed={selectedFabric.id === fabric.id}
              onClick={() => {
                onSelectFabric(fabric);
                window.scrollTo(0, 0);
              }}
            >
              {PICKER.tryOn}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
