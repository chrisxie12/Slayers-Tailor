import { PICKER } from '../content';
import { FABRIC_NOTES } from '../config';
import './FabricPicker.css';

function SwatchGroup({ label, options, selected, onSelect }) {
  return (
    <fieldset className="grp">
      <legend>
        {label} <span>{selected.name}</span>
      </legend>
      <div className="sws">
        {options.map((option) => (
          <button
            type="button"
            key={option.id}
            className="sw"
            style={{ '--c': option.color }}
            aria-label={option.name}
            aria-pressed={selected.id === option.id}
            onClick={() => onSelect(option)}
          />
        ))}
      </div>
    </fieldset>
  );
}

export default function FabricPicker({ fabrics, linings, buttons, patterns, selected, setSelected, whatsappHref }) {
  const patternName = selected.pattern.pattern
    ? ` ${selected.pattern.name.toLowerCase()}`
    : '';

  const summary = PICKER.summary(
    selected.fabric.name,
    patternName.trim(),
    selected.lining.name.toLowerCase(),
    selected.buttons.name.toLowerCase(),
  );

  // An empty FABRIC_NOTES map hides the line entirely.
  const note = FABRIC_NOTES[selected.fabric.name];

  return (
    <div className="ctl">
      <div className="grp-wrap">
        <SwatchGroup
          label={PICKER.groups.fabric}
          options={fabrics}
          selected={selected.fabric}
          onSelect={(fabric) => setSelected((prev) => ({ ...prev, fabric }))}
        />
        {note ? <p className="sm">{note}</p> : null}
      </div>

      <SwatchGroup
        label={PICKER.groups.lining}
        options={linings}
        selected={selected.lining}
        onSelect={(lining) => setSelected((prev) => ({ ...prev, lining }))}
      />

      <SwatchGroup
        label={PICKER.groups.buttons}
        options={buttons}
        selected={selected.buttons}
        onSelect={(next) => setSelected((prev) => ({ ...prev, buttons: next }))}
      />

      <fieldset className="grp">
        <legend>
          {PICKER.groups.pattern} <span>{selected.pattern.name}</span>
        </legend>
        <div className="chips">
          {patterns.map((pattern) => (
            <button
              type="button"
              key={pattern.id}
              className="chip"
              aria-pressed={selected.pattern.id === pattern.id}
              onClick={() => setSelected((prev) => ({ ...prev, pattern }))}
            >
              {pattern.name}
            </button>
          ))}
        </div>
      </fieldset>

      <p id="sum" aria-live="polite">{summary}</p>

      <div className="acts">
        <a className="btn p" href={whatsappHref} target="_blank" rel="noopener noreferrer">
          {PICKER.primaryCta}
        </a>
        <a className="btn o" href="#making">{PICKER.secondaryCta}</a>
      </div>
    </div>
  );
}
