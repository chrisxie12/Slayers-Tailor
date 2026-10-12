import { Fragment } from 'react';
import { BAND } from '../content';
import './Band.css';

// Reference: a full-bleed deep band, with the accent words in gold.
export default function Band() {
  return (
    <div className="band">
      <div className="section-shell band-shell">
        <p>
          {BAND.words.map((word, index) => (
            <Fragment key={word.text}>
              {index > 0 && ' '}
              {word.gold ? <span>{word.text}</span> : word.text}
            </Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}
