import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import RouteMap from "@/components/RouteMap";
import { Band, H2, Prose } from "@/components/Shell";
import { asset } from "@/lib/asset";
import { people, creditCount, groupLabel } from "@/content/people";
import { events } from "@/content/events";
import { peopleAtEvent } from "@/content/people";
import { groups as logGroups, counts } from "@/content/progress";

const core = people.filter((p) => p.group === "cap" || p.group === "tab");
const topEvents = events
  .map((e) => ({ e, at: peopleAtEvent(e.slug) }))
  .filter((r) => r.at.length > 0)
  .sort((a, b) => b.at.length - a.at.length)
  .slice(0, 8);

export default function Home() {
  return (
    <>
      <Hero />

      <Band tone="navy">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-14">
          <div>
            <H2 sub="Australs has never been held in India. Twenty-one advisors across eighteen countries are helping bring it here — every dot on this sheet is someone working on it.">
              Where this is coming from
            </H2>
            <Link href="/tournament/#reach" className="mt-5 inline-block border-b border-gold/50 pb-0.5 text-[14.5px] text-gold hover:border-gold">
              More on the tournament →
            </Link>
          </div>
          <RouteMap />
        </div>
      </Band>

      <Band>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-14">
          <div>
            <H2
              count={`${creditCount} entries`}
              sub="Every tournament the people running this have between them judged, chaired, tabbed, convened or won. Built line by line from their own announcements — open any of them to see who was there."
            >
              The record
            </H2>
            <Link href="/record/" className="mt-5 inline-block border-b border-navy/40 pb-0.5 text-[14.5px] text-navy hover:border-navy">
              All {events.length} tournaments →
            </Link>
          </div>
          <ul className="border-t border-ink/15 self-start">
            {topEvents.map(({ e, at }) => {
              const years = [...new Set(at.map((a) => a.credit.year).filter(Boolean))].sort();
              return (
                <li key={e.slug}>
                  <Link href={`/record/${e.slug}/`} className="rec grid gap-x-5 gap-y-0.5 px-2 py-2.5 sm:grid-cols-[minmax(0,11rem)_1fr_auto] sm:items-baseline">
                    <span className="flex items-baseline gap-2">
                      <span className="text-[1.1rem] leading-none" style={{ fontFamily: "var(--font-display)" }}>
                        {e.name}
                      </span>
                      <span className="accent datum text-[11px] opacity-76">{at.length}</span>
                    </span>
                    <span className="dim text-[13px] opacity-80">
                      {[...new Set(at.map((a) => a.person.name))].slice(0, 3).join(", ")}
                    </span>
                    <span className="dim datum text-[11px] opacity-74 sm:text-right">
                      {years.length ? `${years[0]}–${years[years.length - 1]}` : "—"}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Band>

      <Band tone="cream">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-14">
          <div>
            <H2
              count={`${people.length} people`}
              sub="Three chief adjudicators from three different regions, a tab team that has run Australs and Worlds, five organisers and twenty-one advisors."
            >
              Who is running it
            </H2>
            <Link href="/people/" className="mt-5 inline-block border-b border-navy/40 pb-0.5 text-[14.5px] text-navy hover:border-navy">
              The full directory →
            </Link>
          </div>
          <ul className="border-t border-ink/15 self-start">
            {core.map((p) => (
              <li key={p.slug}>
                <Link href={`/people/${p.slug}/`} className="rec grid gap-x-5 gap-y-0.5 px-2 py-2.5 sm:grid-cols-[1.1fr_1fr_auto] sm:items-baseline">
                  <span className="text-[15px]">{p.name}</span>
                  <span className="dim text-[13px] opacity-80">{p.role}</span>
                  <span className="dim datum text-[11px] opacity-74 sm:text-right">
                    {p.country} · {p.credits.length} entries
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      <Band>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div>
            <H2 sub="Debates at IIT Delhi in Hauz Khas. Beds at The Grand in Vasant Kunj. Between them, the Qutub Minar, a thirteenth-century reservoir and the best eating in India.">
              Delhi, end of June
            </H2>
            <Prose className="mt-6">
              <p>
                It will be 35 to 40 degrees and the monsoon will probably break during the week.
                Every debating room is air conditioned. Everything else about the city is worth the
                heat.
              </p>
            </Prose>
            <ul className="mt-6 border-t border-ink/15">
              {[
                ["The venue", "Lecture theatres and the auditorium at IIT Delhi", "/delhi/#venue"],
                ["Where you stay", "The Grand New Delhi, twin rooms, half an hour from campus", "/delhi/#stay"],
                ["The city", "Nine things worth the trip, inside an hour of the venue", "/delhi/#city"],
                ["Flights and visas", "One airport, an e-Visa for most of the region", "/delhi/#getting-here"],
                ["Weather and packing", "What late June in Delhi actually does", "/delhi/#weather"],
              ].map(([h, p, href]) => (
                <li key={h}>
                  <Link href={href} className="rec grid gap-x-5 px-2 py-2.5 sm:grid-cols-[minmax(0,10rem)_1fr]">
                    <span className="text-[14.5px]">{h}</span>
                    <span className="dim text-[13px] opacity-80">{p}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3 self-start">
            <Image src={asset("/img/cards/venue-iitd.webp")} alt="The auditorium and main building at IIT Delhi" width={760} height={950} className="box w-full p-1" unoptimized />
            <Image src={asset("/img/cards/acco-grand.webp")} alt="The Grand New Delhi" width={760} height={950} className="box mt-8 w-full p-1" unoptimized />
          </div>
        </div>
      </Band>

      <Band tone="navy">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-14">
          <div>
            <H2 sub="A tournament site usually goes quiet about anything undecided. We publish the list instead, with the name of the person who has each answer.">
              What we have not settled
            </H2>
            <div className="mt-6 flex gap-6">
              {[
                [counts.done, "live"],
                [counts.waiting, "waiting"],
                [counts.later, "second build"],
              ].map(([n, l]) => (
                <div key={l as string}>
                  <p className="datum text-[2rem] leading-none text-gold">{n as number}</p>
                  <p className="rail mt-1 text-cream/70">{l as string}</p>
                </div>
              ))}
            </div>
            <Link href="/progress/" className="mt-6 inline-block border border-gold/60 bg-gold/15 px-5 py-2.5 text-[14.5px] text-gold transition-colors duration-150 hover:bg-gold hover:text-ink">
              Where the website stands
            </Link>
          </div>
          <ul className="border-t border-cream/15 self-start">
            {logGroups[1].items.slice(0, 7).map((i) => (
              <li key={i.what}>
                <Link href="/progress/" className="rec grid gap-x-5 gap-y-0.5 px-2 py-2.5 sm:grid-cols-[1fr_auto] sm:items-baseline">
                  <span className="text-[14px]">{i.what}</span>
                  <span className="accent datum text-[11.5px] text-gold sm:text-right">{i.owner}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Band>
    </>
  );
}
