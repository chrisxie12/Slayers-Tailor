import './FabricPicker.css';

function SwatchGroup({ label, options, selected, onSelect, valueKey }) {
  return (
    <fieldset className="picker-group">
      <legend>{label}</legend>
      <div className="picker-options">
        {options.map((option) => (
          <button
            type="button"
            key={option.id}
            className={`swatch ${selected.id === option.id ? 'is-active' : ''}`}
            style={{ '--swatch-color': option[valueKey] }}
            onClick={() => onSelect(option)}
            aria-pressed={selected.id === option.id}
          >
            <span>{option.name}</span>
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export default function FabricPicker({ fabrics, linings, buttons, patterns, selected, setSelected, whatsappHref }) {
  return (
    <section id="fabric-picker" className="section-shell picker" aria-labelledby="picker-title">
      <h2 id="picker-title" className="section-title">Design your jacket</h2>
      <SwatchGroup label="Fabric" options={fabrics} selected={selected.fabric} onSelect={(next) => setSelected((prev) => ({ ...prev, fabric: next }))} valueKey="shell" />
      <SwatchGroup label="Lining" options={linings} selected={selected.lining} onSelect={(next) => setSelected((prev) => ({ ...prev, lining: next }))} valueKey="color" />
      <SwatchGroup label="Buttons" options={buttons} selected={selected.buttons} onSelect={(next) => setSelected((prev) => ({ ...prev, buttons: next }))} valueKey="color" />

      <fieldset className="picker-group">
        <legend>Pattern</legend>
        <div className="pattern-row">
          {patterns.map((pattern) => (
            <button
              type="button"
              key={pattern.id}
              className={`pattern-btn ${selected.pattern.id === pattern.id ? 'is-active' : ''}`}
              onClick={() => setSelected((prev) => ({ ...prev, pattern }))}
              aria-pressed={selected.pattern.id === pattern.id}
            >
              {pattern.name}
            </button>
          ))}
        </div>
      </fieldset>

      <p className="summary" aria-live="polite">
        Selected: {selected.fabric.name} shell, {selected.lining.name} lining, {selected.buttons.name} buttons, {selected.pattern.name} pattern.
      </p>
      <a className="picker-link" href={whatsappHref} target="_blank" rel="noreferrer">Send this selection on WhatsApp</a>
    </section>
  );
}
