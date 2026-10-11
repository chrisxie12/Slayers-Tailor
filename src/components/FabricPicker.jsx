import { PICKER } from '../content';
import './FabricPicker.css';

function SwatchGroup({ label, options, selected, onSelect, valueKey }) {
  return (
    <fieldset className="picker-group">
      <legend>{label} <span>{selected.name}</span></legend>
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
  const patternName = selected.pattern.id === 'plain' ? '' : selected.pattern.name.toLowerCase();
  const summary = PICKER.summary(
    selected.fabric.name,
    patternName,
    selected.lining.name.toLowerCase(),
    selected.buttons.name.toLowerCase(),
  );

  return (
    <div className="section-shell picker">
      <SwatchGroup label={PICKER.groups.fabric} options={fabrics} selected={selected.fabric} onSelect={(next) => setSelected((prev) => ({ ...prev, fabric: next }))} valueKey="shell" />
      <SwatchGroup label={PICKER.groups.lining} options={linings} selected={selected.lining} onSelect={(next) => setSelected((prev) => ({ ...prev, lining: next }))} valueKey="color" />
      <SwatchGroup label={PICKER.groups.buttons} options={buttons} selected={selected.buttons} onSelect={(next) => setSelected((prev) => ({ ...prev, buttons: next }))} valueKey="color" />

      <fieldset className="picker-group">
        <legend>{PICKER.groups.pattern} <span>{selected.pattern.name}</span></legend>
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

      <p className="summary" aria-live="polite">{summary}</p>
      <div className="picker-acts">
        <a className="picker-link" href={whatsappHref} target="_blank" rel="noreferrer">{PICKER.primaryCta}</a>
        <a className="picker-secondary" href="#making">{PICKER.secondaryCta}</a>
      </div>
    </div>
  );
}
