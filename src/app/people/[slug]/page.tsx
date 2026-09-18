import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHead, Band, H2, Pending } from "@/components/Shell";
import { people, personBySlug, groupLabel } from "@/content/people";
import PersonCard from "@/components/PersonCard";
import { eventBySlug } from "@/content/events";
import { asset } from "@/lib/asset";

export function generateStaticParams() {
  return people.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = personBySlug[(await params).slug];
  return { title: p ? `${p.name}, ${p.role}` : "Not found" };
}

export default async function PersonPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = personBySlug[(await params).slug];
  if (!p) notFound();

  const mine = new Set(p.credits.map((c) => c.event));

  const siblings = people
    .filter((o) => o.slug !== p.slug && o.group === p.group && o.region === p.region)
    .slice(0, 5);

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
            <H2 sub={`Twenty-one people do this job, one or two for each debating circuit Australs reaches. ${p.name} covers ${p.country}.`}>
              What an advisor does
            </H2>
            <div className="mt-7 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Answers first", `Questions from ${p.country} reach ${p.name.split(" ")[0]} before they reach us, and usually get answered the same day.`],
                ["Carries the news", "Registration dates, fees and deadlines go out through the circuits, not only through this site."],
                ["Reports back", "What a circuit needs on cost, visas and timing comes back to the organising committee through its advisor."],
              ].map(([h, t]) => (
                <div key={h} className="border-t border-ink/15 pt-4">
                  <h3 className="rail text-navy">{h}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.68] text-ink/82">{t}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 max-w-[64ch]">
              <Pending who="Rajat and Krishnatara">
                Advisor debating records exist. Nobody put them on the posters, so we have nothing
                to publish here yet.
              </Pending>
            </div>
          </>
        ) : (
          <>
            <H2
              count={`${p.credits.length} entries`}
              sub="Taken line by line from the tournament's own announcement posters. Nothing added, nothing inferred."
            >
              Debating record
            </H2>
            <div className="mt-7 border-t border-ink/15">
              {byEvent.map(({ event, credits }) => (
                <div key={event.slug} className="border-b border-ink/15 py-4">
                  <div className="flex flex-wrap items-baseline gap-x-2.5">
                    <span className="text-[1.3rem] leading-none" style={{ fontFamily: "var(--font-display)" }}>
                      {event.name}
                    </span>
                    {event.full && <span className="text-[13px] text-ink/72">{event.full}</span>}
                  </div>
                  <ul className="mt-2.5 grid gap-x-8 sm:grid-cols-2">
                    {credits.map((c, i) => (
                      <li key={i} className="flex items-baseline gap-3 py-1">
                        <span className="datum w-[5.5rem] shrink-0 text-[12.5px] text-navy">
                          {c.year ?? c.edition ?? ""}
                        </span>
                        <span className="text-[14px] text-ink/85">
                          {c.role}
                          {c.year && c.edition ? <span className="text-ink/72"> · {c.edition}</span> : null}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

        {siblings.length > 0 && (
          <div className="mt-12">
            <H2 sub={`The rest of the people carrying this tournament into ${p.region}.`}>
              {p.group === "advisor" ? `Also in ${p.region}` : "Alongside"}
            </H2>
            <div className="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {siblings.map((o) => (
                <PersonCard key={o.slug} p={o} size="sm" />
              ))}
            </div>
          </div>
        )}

        <Link
          href="/people/"
          className="mt-10 inline-block border-b border-navy/40 pb-0.5 text-[14.5px] text-navy hover:border-navy"
        >
          Back to the people
        </Link>
      </Band>
    </>
  );
}
