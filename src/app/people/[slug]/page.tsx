import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHead, Band, H2, Pending } from "@/components/Shell";
import { people, personBySlug, groupLabel } from "@/content/people";
import { eventBySlug } from "@/content/events";
import { asset } from "@/lib/asset";

export function generateStaticParams() {
  return people.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = personBySlug[(await params).slug];
  return { title: p ? `${p.name} — ${p.role}` : "Not found" };
}

export default async function PersonPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = personBySlug[(await params).slug];
  if (!p) notFound();

  // Everyone who shares a tournament with this person.
  const mine = new Set(p.credits.map((c) => c.event));
  const alongside = people
    .filter((o) => o.slug !== p.slug && o.credits.some((c) => mine.has(c.event)))
    .map((o) => ({
      person: o,
      shared: [...new Set(o.credits.filter((c) => mine.has(c.event)).map((c) => c.event))],
    }))
    .sort((a, b) => b.shared.length - a.shared.length);

  const byEvent = [...mine]
    .map((slug) => ({
      event: eventBySlug[slug],
      credits: p.credits
        .filter((c) => c.event === slug)
        .sort((a, b) => (b.year ?? "0").localeCompare(a.year ?? "0")),
    }))
    .sort((a, b) => b.credits.length - a.credits.length);

  return (
    <>
      <PageHead
        kicker={groupLabel[p.group]}
        title={p.name}
        lede={p.affiliation}
        facts={[
          { k: "Role here", v: p.role },
          ...(p.country ? [{ k: "Country", v: p.country }] : []),
          ...(p.region ? [{ k: "Region", v: p.region }] : []),
          {
            k: "Record",
            v: p.credits.length ? `${p.credits.length} entries, ${mine.size} tournaments` : "Not published",
          },
        ]}
      >
        {p.photo && (
          <div className="box mt-6 inline-block p-1.5">
            <Image
              src={asset(`/img/portraits/${p.photo}.webp`)}
              alt={`${p.name}, ${p.role.toLowerCase()}`}
              width={458}
              height={533}
              className="w-[190px]"
              unoptimized
            />
          </div>
        )}
      </PageHead>

      <Band>
        {p.credits.length === 0 ? (
          <>
            <H2 sub={`${p.name} is one of the advisors helping bring Australs to India. Their debating record has not been published on the tournament's announcements, so there is nothing here we can state as fact.`}>
              No record published
            </H2>
            <div className="mt-6 max-w-[62ch]">
              <Pending who="Rajat and Krishnatara">
                Advisor records exist but were never put on the announcement posters.
              </Pending>
            </div>
          </>
        ) : (
          <>
            <H2
              count={`${p.credits.length} entries`}
              sub="Every line comes from the tournament's own announcement posters. Open a tournament to see everyone else on this team who has been there."
            >
              The record
            </H2>
            <div className="mt-7 border-t border-ink/15">
              {byEvent.map(({ event, credits }) => (
                <div key={event.slug} className="border-b border-ink/15 py-4">
                  <Link
                    href={`/record/${event.slug}/`}
                    className="group inline-flex items-baseline gap-2.5"
                  >
                    <span className="text-[1.3rem] leading-none" style={{ fontFamily: "var(--font-display)" }}>
                      {event.name}
                    </span>
                    {event.full && <span className="text-[13px] text-ink/70">{event.full}</span>}
                    <span className="text-gold opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                      →
                    </span>
                  </Link>
                  <ul className="mt-2.5 grid gap-x-8 sm:grid-cols-2">
                    {credits.map((c, i) => (
                      <li key={i} className="flex items-baseline gap-3 py-1">
                        <span className="datum w-[5.5rem] shrink-0 text-[12.5px] text-navy">
                          {c.year ?? c.edition ?? "—"}
                        </span>
                        <span className="text-[14px] text-ink/85">
                          {c.role}
                          {c.year && c.edition ? (
                            <span className="text-ink/72"> · {c.edition}</span>
                          ) : null}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

        {alongside.length > 0 && (
          <div className="mt-12">
            <H2
              count={`${alongside.length} people`}
              sub="Others on this tournament's team who have been at the same competitions."
            >
              Has crossed paths with
            </H2>
            <ul className="mt-6 grid gap-x-8 border-t border-ink/15 sm:grid-cols-2">
              {alongside.map(({ person, shared }) => (
                <li key={person.slug}>
                  <Link href={`/people/${person.slug}/`} className="rec flex items-baseline gap-3 py-2.5">
                    <span className="text-[14.5px]">{person.name}</span>
                    <span className="dim text-[12.5px] opacity-76">{person.role}</span>
                    <span className="accent datum ml-auto text-[11.5px] opacity-76">
                      {shared.map((s) => eventBySlug[s].name).join(" · ")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link
          href="/people/"
          className="mt-10 inline-block border-b border-navy/40 pb-0.5 text-[14.5px] text-navy hover:border-navy"
        >
          ← All thirty-one
        </Link>
      </Band>
    </>
  );
}
