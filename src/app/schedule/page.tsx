import Link from "next/link";
import { Page, Band, H2 } from "@/components/Section";
import Rail from "@/components/Rail";
import { site } from "@/content/site";

export const metadata = { title: "Schedule" };

function days() {
  const out: { date: Date; label: string }[] = [];
  const start = new Date(`${site.start}T00:00:00Z`);
  const end = new Date(`${site.end}T00:00:00Z`);
  for (let d = new Date(start); d <= end; d.setUTCDate(d.getUTCDate() + 1)) {
    const date = new Date(d);
    out.push({
      date,
      label: date.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        timeZone: "UTC",
      }),
    });
  }
  return out;
}

const willAppear = [
  "The registration desk, and what time it opens each morning",
  "When each round is released and when it debates",
  "Which motions are prepared and which are impromptu",
  "The break announcement, and the out-rounds",
  "Socials, the dinner and the grand final",
  "Buses between the hotel and campus",
];

export default function Schedule() {
  const list = days();
  return (
    <>
      <Page
        eyebrow="Schedule"
        title="Eight days in Delhi"
        lede={`The tournament runs ${site.datesLabel}. The running order inside those days is set by the tab team once the number of rounds is fixed, and it is not fixed yet.`}
      />

      <Band tone="paper">
        <ol className="grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((d, i) => (
            <li key={d.label} className="bg-paper p-6">
              <p className="display text-[13px] tracking-[0.3em] text-navy/50">
                DAY {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-[1.2rem] leading-tight text-ink">{d.label}</p>
              <p className="mt-3 text-[14.5px] font-light text-ink/45">To be set</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <H2 sub="Once the tab team sets the running order, every one of these lands on this page — and on your own page once sign-in exists.">
              What will fill these days
            </H2>
          </div>
          <ul className="grid gap-3">
            {willAppear.map((w) => (
              <li
                key={w}
                className="border-l border-navy/25 pl-5 text-[1.02rem] font-light leading-relaxed text-ink/78"
              >
                {w}
              </li>
            ))}
          </ul>
        </div>
      </Band>

      <Band tone="navy">
        <Rail inverted />
        <div className="mt-10 max-w-[52ch]">
          <h2 className="text-[clamp(1.7rem,3.6vw,2.4rem)]">Who sets this</h2>
          <p className="mt-5 text-[1.08rem] font-light leading-relaxed text-cream/80">
            Jemma Griffin and Pranjal Singla run the tab. They decide how many preliminary rounds
            there are, how the break works and what time everything starts. Until they have settled
            it, anything on this page would be a guess.
          </p>
          <Link
            href="/progress"
            className="mt-8 inline-block border border-gold/60 bg-gold/15 px-6 py-3 text-[15.5px] text-gold transition-colors hover:bg-gold/25"
          >
            Everything else we are waiting on
          </Link>
        </div>
      </Band>
    </>
  );
}
