import Link from "next/link";
import { PageHead, Band, H2 } from "@/components/Shell";
import { events } from "@/content/events";
import { peopleAtEvent, creditCount, people } from "@/content/people";

export const metadata = {
  title: "The record",
  description:
    "Every tournament the India Australs 2027 team has between them judged, chaired, run or won — and who was at each.",
};

const kinds = [
  { key: "international", label: "International", blurb: "The championships this team judges at the top of." },
  { key: "regional", label: "Regional", blurb: "Championships for a single region or level." },
  { key: "domestic", label: "Indian circuit", blurb: "Tournaments they convene, tab and win at home." },
] as const;

export default function Record() {
  const rows = events
    .map((e) => ({ event: e, at: peopleAtEvent(e.slug) }))
    .filter((r) => r.at.length > 0);
  const withRecord = people.filter((p) => p.credits.length > 0).length;

  return (
    <>
      <PageHead
        kicker="The record"
        title="Where this team has been"
        lede="Every tournament the people running India Australs have between them judged, chaired, tabbed, convened or won. Built line by line from their own announcement posters — nothing inferred. Open any tournament to see who was there."
        facts={[
          { k: "Tournaments", v: `${rows.length}` },
          { k: "Entries", v: `${creditCount}` },
          { k: "People with a record", v: `${withRecord} of ${people.length}`, href: "/people/" },
          { k: "Earliest year", v: "2021" },
        ]}
      />

      {kinds.map(({ key, label, blurb }) => {
        const group = rows.filter((r) => r.event.kind === key);
        if (!group.length) return null;
        return (
          <Band key={key} tone={key === "regional" ? "cream" : "paper"}>
            <H2 count={`${group.length}`} sub={blurb}>
              {label}
            </H2>
            <ul className="mt-7 border-t border-ink/15">
              {group.map(({ event, at }) => {
                const years = [...new Set(at.map((a) => a.credit.year).filter(Boolean))].sort();
                const names = [...new Set(at.map((a) => a.person.name))];
                return (
                  <li key={event.slug}>
                    <Link href={`/record/${event.slug}/`} className="rec grid gap-x-6 gap-y-1 px-2 py-3.5 lg:grid-cols-[minmax(0,15rem)_1fr_auto]">
                      <span className="flex items-baseline gap-2.5">
                        <span className="text-[1.25rem] leading-none" style={{ fontFamily: "var(--font-display)" }}>
                          {event.name}
                        </span>
                        <span className="accent datum text-[11.5px] opacity-76">{at.length}</span>
                      </span>
                      <span className="dim text-[13.5px] opacity-80">{names.join(", ")}</span>
                      <span className="dim datum text-[11.5px] opacity-74 lg:text-right">
                        {years.length ? `${years[0]}–${years[years.length - 1]}` : "—"}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Band>
        );
      })}

      <Band tone="navy">
        <H2 sub="It is assembled from what the tournament has already published about its own team — the credit lines on the announcement posters, nothing more. Where a poster gives an edition instead of a year, the edition is what you see. Where it gives nothing, there is nothing here.">
          How this index was made
        </H2>
      </Band>
    </>
  );
}
