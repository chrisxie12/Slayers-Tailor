import './Placeholder.css';

export default function Placeholder({ caption, src, width = 800, height = 600 }) {
  if (src) {
    return (
      <figure className="placeholder">
        <img src={src} alt={caption} loading="lazy" width={width} height={height} />
        <figcaption>{caption}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="placeholder">
      <div className="ph" aria-hidden="true" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
