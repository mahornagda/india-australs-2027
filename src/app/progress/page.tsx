import Link from "next/link";
import { PageHead, Band, H2, Prose } from "@/components/Shell";
import LogBoard from "@/components/LogBoard";
import { groups, counts, updated } from "@/content/progress";

export const metadata = {
  title: "Where the website stands",
  description:
    "A plain list of what the India Australs 2027 website can already do, what it is waiting on, and who has the answer.",
};

const total = counts.done + counts.waiting + counts.later;

export default function Progress() {
  return (
    <>
      <PageHead
        kicker="The build log"
        title="Where the website stands"
        lede="No jargon and no tickets. This is the whole picture: what the site can already do, what it is holding a blank space for, and the name of the person who can fill it in."
        facts={[
          { k: "Live now", v: `${counts.done} things anyone can do` },
          { k: "Waiting on an answer", v: `${counts.waiting} blanks, all assigned` },
          { k: "Second build", v: `${counts.later} parts, not started` },
          { k: "Last updated", v: updated },
        ]}
      >
        <div className="mt-7 max-w-[34rem]">
          <div
            className="flex h-2 w-full overflow-hidden"
            role="img"
            aria-label={`${counts.done} of ${total} done, ${counts.waiting} waiting on an answer, ${counts.later} in the second build.`}
          >
            <span className="bg-navy" style={{ width: `${(counts.done / total) * 100}%` }} />
            <span className="bg-gold" style={{ width: `${(counts.waiting / total) * 100}%` }} />
            <span className="bg-slate/50" style={{ width: `${(counts.later / total) * 100}%` }} />
          </div>
          <p className="mt-2.5 text-[13.5px] text-ink/75">
            {counts.done} of {total} done. The website itself is finished — what is left is either an
            answer nobody has given us, or the second build.
          </p>
        </div>
      </PageHead>

      {/* Waiting first: it is the only part a reader can act on. */}
      <Band tone="navy">
        <div className="max-w-[62ch]">
          <h2 className="text-[clamp(1.7rem,3.4vw,2.4rem)] text-gold">{groups[1].title}</h2>
          <p className="mt-3 text-[15px] leading-[1.62] text-cream/85">{groups[1].blurb}</p>
          <p className="mt-2 text-[14px] text-cream/76">Tap a name to see only theirs.</p>
        </div>
        <div className="mt-8">
          <LogBoard />
        </div>
      </Band>

      <Band>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-14">
          <div>
            <H2 count={`${counts.done}`} sub={groups[0].blurb}>
              Live now
            </H2>
          </div>
          <ul className="border-t border-ink/15 self-start">
            {groups[0].items.map((i) => (
              <li key={i.what} className="border-b border-ink/15 py-2.5">
                <p className="text-[14.5px] leading-snug">{i.what}</p>
                {i.note && <p className="mt-0.5 text-[13px] text-ink/70">{i.note}</p>}
              </li>
            ))}
          </ul>
        </div>
      </Band>

      <Band tone="cream">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-14">
          <div>
            <H2 count={`${counts.later}`} sub={groups[2].blurb}>
              {groups[2].title}
            </H2>
          </div>
          <ul className="border-t border-ink/15 self-start">
            {groups[2].items.map((i) => (
              <li key={i.what} className="border-b border-ink/15 py-2.5 text-[14.5px] text-ink/85">
                {i.what}
              </li>
            ))}
          </ul>
        </div>
      </Band>

      <Band>
        <div className="grid gap-8 lg:grid-cols-2">
          <H2 sub="Kept by hand, not generated.">About this page</H2>
          <Prose>
            <p>
              If something here is wrong or out of date, say so and it gets corrected. An honest list
              is only worth keeping if people trust it.
            </p>
            <p>
              Everything on the site that is missing an answer says so in place, on the page where
              you would look for it, and links back here. Nothing has been invented to fill a gap.
            </p>
            <p>
              <Link href="/">Back to the tournament</Link>
            </p>
          </Prose>
        </div>
      </Band>
    </>
  );
}
