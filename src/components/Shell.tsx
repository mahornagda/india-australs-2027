import Link from "next/link";
import Rail from "./Rail";

export function PageHead({
  kicker,
  title,
  lede,
  facts,
  children,
}: {
  kicker: string;
  title: string;
  lede?: string;
  facts?: { k: string; v: string; href?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <div className="relative isolate border-b border-ink/15">
      <div className="grain pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-[1180px] px-4 pt-7">
        <Rail left={kicker} />
        <div className="mt-6 grid gap-x-12 gap-y-6 pb-8 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <h1 className="text-[clamp(2.3rem,5.2vw,3.6rem)] text-ink">{title}</h1>
            {lede && (
              <p className="mt-4 max-w-[58ch] text-[1.0625rem] leading-[1.62] text-ink/80">{lede}</p>
            )}
            {children}
          </div>
          {facts && (
            <dl className="box h-fit self-end">
              {facts.map((f) =>
                f.href ? (
                  <Link key={f.k} href={f.href} className="rec flex items-baseline gap-4 px-4 py-2.5">
                    <dt className="rail dim w-[9.5rem] shrink-0 text-ink/70">{f.k}</dt>
                    <dd className="text-[14px]">{f.v}</dd>
                  </Link>
                ) : (
                  <div key={f.k} className="flex items-baseline gap-4 border-b border-ink/15 px-4 py-2.5 last:border-0">
                    <dt className="rail w-[9.5rem] shrink-0 text-ink/70">{f.k}</dt>
                    <dd className="text-[14px]">{f.v}</dd>
                  </div>
                ),
              )}
            </dl>
          )}
        </div>
      </div>
    </div>
  );
}

export function SubNav({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-[57px] z-30 border-b border-ink/15 bg-paper/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-[1180px] gap-1 overflow-x-auto px-4">
        {items.map((i) => (
          <a
            key={i.id}
            href={`#${i.id}`}
            className="shrink-0 border-b-2 border-transparent px-3 py-2.5 text-[12.5px] text-ink/75 transition-colors duration-150 hover:border-ink/30 hover:text-ink"
          >
            {i.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export function Band({
  children,
  tone = "paper",
  className = "",
  id,
}: {
  children: React.ReactNode;
  tone?: "paper" | "navy" | "cream";
  className?: string;
  id?: string;
}) {
  const skin =
    tone === "navy"
      ? "on-navy bg-navy text-cream"
      : tone === "cream"
        ? "bg-paper-2 text-ink"
        : "bg-paper text-ink";
  return (
    <section id={id} className={`relative isolate overflow-hidden border-b border-ink/15 ${skin} ${className}`}>
      <div className="grain pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-[1180px] px-4 py-10">{children}</div>
    </section>
  );
}

export function H2({
  children,
  sub,
  count,
}: {
  children: React.ReactNode;
  sub?: string;
  count?: string;
}) {
  return (
    <div className="max-w-[58ch]">
      <div className="flex items-baseline gap-3">
        <h2 className="text-[clamp(1.6rem,3vw,2.15rem)]">{children}</h2>
        {count && <span className="datum text-[13px] opacity-72">{count}</span>}
      </div>
      {sub && <p className="mt-3 text-[15px] leading-[1.62] opacity-82">{sub}</p>}
    </div>
  );
}

/** Body copy set for reading: one measure, generous leading, links inline. */
export function Prose({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`max-w-[68ch] space-y-4 text-[15.5px] leading-[1.72] [&_a]:border-b [&_a]:border-navy/40 [&_a]:transition-colors [&_a:hover]:border-navy [&_a:hover]:text-navy [&_strong]:font-semibold ${className}`}
    >
      {children}
    </div>
  );
}

/** A blank the tournament has not filled in yet. Never invented, always attributed. */
export function Pending({ who, children }: { who: string; children: React.ReactNode }) {
  return (
    <p className="box border-l-2 border-l-gold bg-gold/8 px-4 py-3 text-[14.5px] leading-relaxed">
      <span className="rail mr-2 align-middle text-ink/70">Not settled</span>
      {children}{" "}
      <Link href="/progress" className="whitespace-nowrap border-b border-navy/40 hover:border-navy">
        {who} →
      </Link>
    </p>
  );
}
