import Link from "next/link";
import { PageHead, Band, H2, Prose, Pending } from "@/components/Shell";
import { site } from "@/content/site";

export const metadata = { title: "Schedule" };

function days() {
  const out: { n: number; weekday: string; date: string }[] = [];
  const start = new Date(`${site.start}T00:00:00Z`);
  const end = new Date(`${site.end}T00:00:00Z`);
  let n = 0;
  for (const d = new Date(start); d <= end; d.setUTCDate(d.getUTCDate() + 1)) {
    n += 1;
    out.push({
      n,
      weekday: d.toLocaleDateString("en-GB", { weekday: "long", timeZone: "UTC" }),
      date: d.toLocaleDateString("en-GB", { day: "numeric", month: "long", timeZone: "UTC" }),
    });
  }
  return out;
}

const willAppear = [
  ["Registration desk", "Where it is and what time it opens each morning"],
  ["Round release", "When each motion goes up and when it debates"],
  ["Prepared motions", "Which rounds are prepared, and when those motions are published"],
  ["The break", "When it is announced, and the out-round times"],
  ["Socials", "The opening night, the dinner and the grand final"],
  ["Transport", "Buses between The Grand and campus, both directions"],
];

export default function Schedule() {
  const list = days();
  return (
    <>
      <PageHead
        kicker="Schedule"
        title="Eight days"
        lede={`The tournament runs ${site.datesLabel}. What happens inside those days is set by the tab team once the number of rounds is fixed — and it is not fixed yet, so there is nothing here we would ask you to book around.`}
        facts={[
          { k: "First day", v: `${list[0].weekday} ${list[0].date}` },
          { k: "Last day", v: `${list[list.length - 1].weekday} ${list[list.length - 1].date}` },
          { k: "Days", v: `${list.length}` },
          { k: "Rounds", v: "Not set" },
          { k: "Set by", v: "Jemma Griffin and Pranjal Singla", href: "/people/?group=tab" },
        ]}
      />

      <Band>
        <ol className="grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((d) => (
            <li key={d.n} className="bg-paper p-5">
              <p className="rail text-navy">Day {String(d.n).padStart(2, "0")}</p>
              <p className="mt-2 text-[1.15rem] leading-tight">{d.weekday}</p>
              <p className="datum mt-0.5 text-[13px] text-ink/72">{d.date}</p>
              <p className="mt-3 border-t border-ink/15 pt-2.5 text-[13px] text-ink/72">To be set</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <H2 sub="The moment the tab team fixes the running order, all of this lands here — and, once sign-in exists, on a page of your own with only your rounds on it.">
              What will fill these days
            </H2>
            <Prose className="mt-6">
              <p>
                We would rather show you eight empty days with a date on each than invent a timetable
                you might book flights around. If you need to know whether to fly out on the 4th or
                the 5th, the answer today is that we do not know either.
              </p>
            </Prose>
            <Link href="/progress/" className="mt-5 inline-block border-b border-navy/40 pb-0.5 text-[14.5px] text-navy hover:border-navy">
              Everything else we are waiting on →
            </Link>
          </div>
          <ul className="border-t border-ink/15 self-start">
            {willAppear.map(([h, p]) => (
              <li key={h} className="grid gap-x-5 border-b border-ink/15 py-3 sm:grid-cols-[minmax(0,11rem)_1fr]">
                <span className="rail pt-1 text-navy">{h}</span>
                <span className="text-[14px] text-ink/82">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 max-w-[64ch]">
          <Pending who="Jemma and Pranjal">
            The day-by-day running order, once the number of rounds is fixed.
          </Pending>
        </div>
      </Band>
    </>
  );
}
