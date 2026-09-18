import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHead, Band, H2 } from "@/components/Shell";
import { events, eventBySlug } from "@/content/events";
import { peopleAtEvent, groupLabel } from "@/content/people";

export function generateStaticParams() {
  return events.filter((e) => peopleAtEvent(e.slug).length > 0).map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const e = eventBySlug[(await params).slug];
  return { title: e ? `${e.name} — the record` : "Not found" };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const e = eventBySlug[(await params).slug];
  if (!e) notFound();
  const at = peopleAtEvent(e.slug);
  if (!at.length) notFound();

  const years = [...new Set(at.map((a) => a.credit.year).filter(Boolean))].sort().reverse();
  const editions = [...new Set(at.map((a) => a.credit.edition).filter(Boolean))];
  const byYear = [
    ...years.map((y) => ({ label: y as string, rows: at.filter((a) => a.credit.year === y) })),
    ...editions
      .filter((ed) => at.some((a) => a.credit.edition === ed && !a.credit.year))
      .map((ed) => ({ label: ed as string, rows: at.filter((a) => a.credit.edition === ed && !a.credit.year) })),
  ];

  return (
    <>
      <PageHead
        kicker="The record"
        title={e.name}
        lede={[e.full, e.blurb].filter(Boolean).join(" — ")}
        facts={[
          { k: "People from this team", v: `${new Set(at.map((a) => a.person.slug)).size}` },
          { k: "Entries", v: `${at.length}` },
          { k: "Years", v: years.length ? `${years[years.length - 1]}–${years[0]}` : editions.join(", ") },
          { k: "All tournaments", v: "Back to the index", href: "/record/" },
        ]}
      />

      <Band>
        <H2 sub="Everyone on the India Australs team who holds a credit here, newest first.">
          Who has been there
        </H2>
        <div className="mt-7">
          {byYear.map(({ label, rows }) => (
            <div key={label} className="border-t border-ink/15 py-1">
              <div className="grid gap-x-6 lg:grid-cols-[6rem_1fr]">
                <p className="datum pt-3.5 text-[13px] text-navy">{label}</p>
                <ul>
                  {rows.map(({ person, credit }, i) => (
                    <li key={`${person.slug}${i}`}>
                      <Link
                        href={`/people/${person.slug}/`}
                        className="rec grid gap-x-5 gap-y-0.5 px-2 py-2.5 sm:grid-cols-[minmax(0,13rem)_1fr_auto] sm:items-baseline"
                      >
                        <span className="text-[14.5px]">{person.name}</span>
                        <span className="text-[13.5px] opacity-85">{credit.role}</span>
                        <span className="dim datum text-[11.5px] opacity-74 sm:text-right">
                          {groupLabel[person.group]}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Band>
    </>
  );
}
