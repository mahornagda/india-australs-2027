export default function Rail({
  inverted = false,
  className = "",
  left,
  right,
}: {
  inverted?: boolean;
  className?: string;
  left?: string;
  right?: string;
}) {
  const line = inverted ? "var(--rule-inv)" : "var(--rule)";
  const text = inverted ? "text-cream/70" : "text-ink/70";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {left && <span className={`rail shrink-0 ${text}`}>{left}</span>}
      <span className="h-px flex-1" style={{ background: line }} />
      <span className={`rail flex shrink-0 items-center gap-3 ${text}`} aria-hidden="true">
        <span>2027</span>
        <span className="opacity-40">|</span>
        <span style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.1em" }}>भारत</span>
        <span className="opacity-40">|</span>
        <span>DEL</span>
      </span>
      <span className="h-px flex-1" style={{ background: line }} />
      {right && <span className={`rail shrink-0 ${text}`}>{right}</span>}
    </div>
  );
}
