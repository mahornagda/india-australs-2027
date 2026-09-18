import Tiger from "./Tiger";

export default function Wordmark({
  tone = "navy",
  size = 150,
}: {
  tone?: "navy" | "cream";
  size?: number;
}) {
  const ink = tone === "navy" ? "text-ink" : "text-cream";
  return (
    <span className="inline-flex flex-col items-center leading-none">
      <Tiger tone={tone} width={size} priority />
      <span
        className={`wordmark ${ink} mt-1`}
        style={{ fontSize: size * 0.155, lineHeight: 1.15 }}
      >
        INDIA AUSTRALS
      </span>
      <span
        className={`wordmark ${tone === "navy" ? "text-navy/70" : "text-gold"}`}
        style={{ fontSize: size * 0.105, letterSpacing: "0.34em", textIndent: "0.34em" }}
      >
        2027
      </span>
    </span>
  );
}
