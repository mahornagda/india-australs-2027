export function Page({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative isolate">
      <div className="grain pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-5 pt-14 sm:pt-20">
        <header className="max-w-[46ch]">
          {eyebrow && <p className="display text-[19px] text-navy/60">{eyebrow}</p>}
          <h1 className="mt-1 text-[clamp(2.6rem,7vw,4.4rem)] text-ink">{title}</h1>
          {lede && (
            <p className="mt-6 text-[clamp(1.1rem,2.2vw,1.3rem)] leading-[1.62] font-light text-ink/78">
              {lede}
            </p>
          )}
        </header>
        {children}
      </div>
    </div>
  );
}

export function Band({
  children,
  tone = "paper",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "paper" | "navy" | "cream";
  className?: string;
}) {
  const skin =
    tone === "navy"
      ? "on-navy bg-navy text-cream"
      : tone === "cream"
        ? "bg-cream text-ink"
        : "bg-paper text-ink";
  return (
    <section className={`relative isolate overflow-hidden ${skin} ${className}`}>
      <div className="grain pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">{children}</div>
    </section>
  );
}

export function H2({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="max-w-[44ch]">
      <h2 className="text-[clamp(1.9rem,4vw,2.7rem)]">{children}</h2>
      {sub && <p className="mt-4 text-[1.05rem] font-light leading-relaxed opacity-75">{sub}</p>}
    </div>
  );
}
