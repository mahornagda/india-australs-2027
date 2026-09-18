import Link from "next/link";
import { Page, Band } from "@/components/Section";
import Rail from "@/components/Rail";
import { groups, counts, updated } from "@/content/progress";

export const metadata = {
  title: "Where the website stands",
  description:
    "A plain list of what the India Australs 2027 website can already do, what it is waiting on, and who has the answer.",
};

const total = counts.done + counts.waiting + counts.later;

const waiting = groups.find((g) => g.key === "waiting")!;
const byOwner = Object.entries(
  waiting.items.reduce<Record<string, number>>((acc, i) => {
    const o = i.owner ?? "Not assigned";
    acc[o] = (acc[o] ?? 0) + 1;
    return acc;
  }, {}),
).sort((a, b) => b[1] - a[1]);

function Tally({ n, label, note }: { n: number; label: string; note: string }) {
  return (
    <div className="bg-paper p-7">
      <p className="display text-[3.4rem] leading-none text-navy">{n}</p>
      <p className="mt-2 text-[1.1rem] text-ink">{label}</p>
      <p className="mt-1.5 text-[14.5px] font-light leading-snug text-ink/60">{note}</p>
    </div>
  );
}

export default function Progress() {
  return (
    <>
      <Page
        eyebrow="The build log"
        title="Where the website stands"
        lede="No jargon, no tickets. This is the whole picture of what the site can already do, what it is holding a blank space for, and the name of the person who can fill it in."
      >
        <p className="mt-6 text-[14.5px] font-light text-ink/50">Last updated {updated}.</p>
      </Page>

      <Band tone="paper" className="!pt-14">
        <div className="grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-3">
          <Tally
            n={counts.done}
            label="things anyone can do today"
            note="Built, checked and live on the site"
          />
          <Tally
            n={counts.waiting}
            label="blanks waiting on an answer"
            note="The page exists — someone just has to tell us what goes in it"
          />
          <Tally
            n={counts.later}
            label="parts of the second build"
            note="Cannot sit on a plain website; needs sign-in and a database"
          />
        </div>

        <div className="mt-8">
          <div
            className="flex h-2.5 w-full overflow-hidden"
            role="img"
            aria-label={`${counts.done} of ${total} done, ${counts.waiting} waiting on an answer, ${counts.later} in the second build.`}
          >
            <span className="bg-navy" style={{ width: `${(counts.done / total) * 100}%` }} />
            <span className="bg-gold" style={{ width: `${(counts.waiting / total) * 100}%` }} />
            <span className="bg-slate/45" style={{ width: `${(counts.later / total) * 100}%` }} />
          </div>
          <p className="mt-3 text-[14.5px] font-light text-ink/60">
            {counts.done} of {total} done. The website itself is finished — what is left is either
            an answer we do not have, or the second build.
          </p>
        </div>
      </Band>

      {/* Waiting first: it is the only part anyone reading this can act on. */}
      <Band tone="navy">
        <div className="max-w-[54ch]">
          <h2 className="text-[clamp(1.9rem,4vw,2.7rem)] text-gold">{waiting.title}</h2>
          <p className="mt-4 text-[1.08rem] font-light leading-relaxed text-cream/80">
            {waiting.blurb}
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-2.5">
          {byOwner.map(([owner, n]) => (
            <span
              key={owner}
              className="border border-cream/25 px-3 py-1.5 text-[14px] font-light text-cream/80"
            >
              {owner}
              <span className="text-gold"> · {n}</span>
            </span>
          ))}
        </div>

        <ol className="mt-12 border-t border-cream/15">
          {waiting.items.map((i, n) => (
            <li
              key={i.what}
              className="grid gap-x-8 gap-y-2 border-b border-cream/15 py-6 sm:grid-cols-[auto_1fr_minmax(0,210px)]"
            >
              <span className="display hidden pt-1 text-[13px] tracking-[0.24em] text-cream/30 sm:block">
                {String(n + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-[1.12rem] leading-snug text-cream">{i.what}</p>
                {i.note && (
                  <p className="mt-1.5 max-w-[56ch] text-[15px] font-light leading-snug text-cream/55">
                    {i.note}
                  </p>
                )}
              </div>
              <p className="text-[15px] font-light text-gold sm:text-right">{i.owner}</p>
            </li>
          ))}
        </ol>
      </Band>

      <Band tone="paper">
        <div className="max-w-[54ch]">
          <h2 className="text-[clamp(1.9rem,4vw,2.7rem)]">Live now</h2>
          <p className="mt-4 text-[1.08rem] font-light leading-relaxed text-ink/78">
            {groups[0].blurb}
          </p>
        </div>
        <ul className="mt-10 grid gap-x-12 gap-y-6 lg:grid-cols-2">
          {groups[0].items.map((i) => (
            <li key={i.what} className="grid grid-cols-[auto_1fr] gap-4">
              <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-navy" />
              <div>
                <p className="text-[1.08rem] leading-snug text-ink">{i.what}</p>
                {i.note && (
                  <p className="mt-1 text-[14.5px] font-light leading-snug text-ink/55">{i.note}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Band>

      <Band tone="cream">
        <Rail />
        <div className="mt-10 max-w-[54ch]">
          <h2 className="text-[clamp(1.9rem,4vw,2.7rem)]">{groups[2].title}</h2>
          <p className="mt-4 text-[1.08rem] font-light leading-relaxed text-ink/78">
            {groups[2].blurb}
          </p>
        </div>
        <ul className="mt-10 grid gap-x-12 gap-y-5 lg:grid-cols-2">
          {groups[2].items.map((i) => (
            <li
              key={i.what}
              className="border-l border-slate pl-5 text-[1.05rem] font-light leading-relaxed text-ink/70"
            >
              {i.what}
            </li>
          ))}
        </ul>

        <div className="mt-16 border-t border-ink/15 pt-8">
          <p className="max-w-[60ch] text-[1.02rem] font-light leading-relaxed text-ink/70">
            This page is kept by hand, not generated. If something here is wrong or out of date,
            say so and it gets corrected — an honest list is only useful if people trust it.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block border-b border-navy/40 pb-1 text-[16px] text-navy hover:border-navy"
          >
            Back to the tournament
          </Link>
        </div>
      </Band>
    </>
  );
}
