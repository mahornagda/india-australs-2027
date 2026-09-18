/** The three marks every poster carries: the year, the country, the city. */
export default function Rail({
  inverted = false,
  className = "",
}: {
  inverted?: boolean;
  className?: string;
}) {
  const line = inverted ? "var(--rule-inv-soft)" : "var(--rule-soft)";
  const text = inverted ? "text-cream/60" : "text-ink/45";
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px flex-1" style={{ background: line }} />
      <span className={`rail ${text} flex items-center gap-4`}>
        <span>2027</span>
        <span style={{ opacity: 0.5 }}>|</span>
        <span style={{ letterSpacing: "0.1em", textIndent: "0.1em" }}>भारत</span>
        <span style={{ opacity: 0.5 }}>|</span>
        <span>DEL</span>
      </span>
      <span className="h-px flex-1" style={{ background: line }} />
    </div>
  );
}
