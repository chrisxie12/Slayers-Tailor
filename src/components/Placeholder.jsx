import './Placeholder.css';

export default function Placeholder({ alt, src, width = 800, height = 600, variant = '' }) {
  if (src) {
    return (
      <div className={`ph ${variant}`.trim()}>
        <img src={src} alt={alt} loading="lazy" width={width} height={height} />
      </div>
    );
  }

  // No photo yet: decorative block, no visible caption.
  return <div className={`ph ${variant}`.trim()} aria-hidden="true" />;
}
