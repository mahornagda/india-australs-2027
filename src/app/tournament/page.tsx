import Link from "next/link";
import Image from "next/image";
import { PageHead, Band, SubNav, H2, Prose, Pending } from "@/components/Shell";
import RouteMap from "@/components/RouteMap";
import { asset } from "@/lib/asset";
import { site } from "@/content/site";
import { people } from "@/content/people";
import { events } from "@/content/events";

export const metadata = { title: "The tournament" };

const sections = [
  { id: "what", label: "What Australs is" },
  { id: "format", label: "How it is debated" },
  { id: "rounds", label: "Rounds and the break" },
  { id: "reach", label: "Where it reaches" },
  { id: "organisers", label: "Who runs it" },
];

export default function Tournament() {
  const caps = people.filter((p) => p.group === "cap");
  return (
    <>
      <PageHead
        kicker="The tournament"
        title="Fifty-two years, and never once in India"
        lede="Australs has run every year since 1975, moving between the universities of Australasia and Asia. In 2027 it comes to New Delhi for the first time."
        facts={[
          { k: "Dates", v: site.datesLabel },
          { k: "Venue", v: `${site.venue}, ${site.city}`, href: "/delhi/#venue" },
          { k: "Format", v: "Australasian, three a side" },
          { k: "Speech length", v: "8 minutes, 4-minute reply" },
          { k: "Rounds", v: "Not set", href: "/progress/" },
          { k: "Adjudication core", v: caps.map((c) => c.name).join(", "), href: "/people/?group=cap" },
        ]}
      />
      <SubNav items={sections} />

      <Band id="what">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <H2 sub="The oldest and largest university debating championship outside Europe and North America.">
              What Australs is
            </H2>
            <Prose className="mt-6">
              <p>
                The Australasian Intervarsity Debating Championship began in 1975 and has been held
                every year since, hosted by a different university each time. Teams of three come
                from across Australasia, South Asia and East Asia, debate a week of prepared and
                impromptu motions, and the field narrows through out-rounds to a grand final.
              </p>
              <p>
                It has been to Sydney, Manila, Kuala Lumpur, Auckland, Kathmandu and Kuantan. It has
                never been to India. The <strong>Indian Debating League</strong> and the{" "}
                <strong>IIT Delhi Debating Society</strong> are bringing it here, with an
                adjudication core drawn from three of the regions the tournament serves — India,
                Australia and South Korea.
              </p>
              <p>
                Between them, the people running this tournament hold{" "}
                <Link href="/record/">records at {events.length} competitions</Link>, from world
                championship finals to the Indian university circuit.
              </p>
            </Prose>
          </div>
          <div className="grid grid-cols-2 gap-3 self-start">
            <Image src={asset("/img/cards/idl.webp")} alt="The Indian Debating League at a closing ceremony" width={760} height={950} className="box w-full p-1" unoptimized />
            <Image src={asset("/img/cards/venue-debsoc.webp")} alt="The IIT Delhi Debating Society" width={760} height={950} className="box mt-8 w-full p-1" unoptimized />
          </div>
        </div>
      </Band>

      <Band id="format" tone="cream">
        <H2 sub="If you have only debated British Parliamentary, this is the part worth reading.">
          How it is debated
        </H2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_1fr]">
          <Prose>
            <p>
              Australs is debated in the <strong>Australasian format</strong>. Two teams of three —
              Affirmative and Negative — face each other on the same motion. Each of the six
              speakers gives an eight-minute substantive speech, alternating sides, and then each
              team gives a four-minute <strong>reply speech</strong>, delivered by its first or
              second speaker, with the Negative replying first.
            </p>
            <p>
              That structure changes how a round feels. With only two teams there is nowhere to
              hide: every argument you make is answered directly, and the reply speech asks you to
              weigh the debate as a whole rather than add to it. Cases are built across three
              speeches rather than squeezed into one, so depth beats breadth.
            </p>
            <p>
              Some motions are <strong>released in advance</strong> and prepared; others are
              impromptu, released shortly before the round. Which is which, and how long you get,
              is set by the adjudication core.
            </p>
          </Prose>
          <div>
            <div className="box">
              <p className="rail border-b border-ink/15 px-4 py-2.5 text-ink/70">A round, in order</p>
              <ol>
                {[
                  ["1st Affirmative", "8 min", "Defines the motion and opens the case"],
                  ["1st Negative", "8 min", "Answers the definition, opens the opposing case"],
                  ["2nd Affirmative", "8 min", "Rebuts, extends"],
                  ["2nd Negative", "8 min", "Rebuts, extends"],
                  ["3rd Affirmative", "8 min", "Rebuttal, no new matter"],
                  ["3rd Negative", "8 min", "Rebuttal, no new matter"],
                  ["Negative reply", "4 min", "Weighs the debate — 1st or 2nd speaker"],
                  ["Affirmative reply", "4 min", "Weighs the debate, last word"],
                ].map(([who, len, what]) => (
                  <li key={who} className="grid grid-cols-[1fr_auto] gap-x-4 border-b border-ink/15 px-4 py-2.5 last:border-0">
                    <span className="text-[14px]">{who}</span>
                    <span className="datum text-[12px] text-navy">{len}</span>
                    <span className="col-span-2 text-[13px] text-ink/75">{what}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Band>

      <Band id="rounds">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <H2 sub="The shape of the week is the adjudication core's and the tab team's to set, and they have not set it yet.">
              Rounds and the break
            </H2>
            <Prose className="mt-6">
              <p>
                An Australs is normally eight or nine preliminary rounds across the week, followed by
                out-rounds for the teams that break. Tournaments of this size usually run an Open
                break alongside ESL and EFL breaks, so that teams debating in a second or foreign
                language are ranked against each other as well as against the field.
              </p>
              <p>
                None of that is confirmed for 2027. When it is, it appears on the{" "}
                <Link href="/schedule/">schedule</Link>, and every registered team gets it by email
                the same day.
              </p>
            </Prose>
          </div>
          <div className="space-y-3 self-center">
            <Pending who="the adjudication core">
              How many preliminary rounds, and how many motions are released in advance.
            </Pending>
            <Pending who="the adjudication core">
              The break structure — Open, ESL, EFL, and how many teams in each.
            </Pending>
            <Pending who="Jemma and Pranjal">The day-by-day running order.</Pending>
            <Pending who="Jemma">
              Whether the existing tab software stays, or is wired into this site.
            </Pending>
          </div>
        </div>
      </Band>

      <Band id="reach" tone="navy">
        <H2 sub="Twenty-one advisors, eighteen countries, five regions. These are the places this tournament has people — not a list of who may enter, which is still being settled.">
          Where it reaches
        </H2>
        <div className="mt-8 min-w-0">
          <RouteMap />
        </div>
      </Band>

      <Band id="organisers" tone="cream">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <H2 sub="Two organisations, running it between them.">Who runs it</H2>
            <Prose className="mt-6">
              <p>
                <strong>The Indian Debating League</strong> runs debating across Indian universities
                and schools, and has partnered with the Harvard College Debating Union on tournaments
                in India.
              </p>
              <p>
                <strong>The IIT Delhi Debating Society</strong> hosts the tournament on campus and
                runs it on the ground — the desk, the rooms, the socials and everything that happens
                between rounds.
              </p>
            </Prose>
            <Link href="/people/" className="mt-6 inline-block border-b border-navy/40 pb-0.5 text-[14.5px] text-navy hover:border-navy">
              All thirty-one people →
            </Link>
          </div>
          <ul className="border-t border-ink/15 self-start">
            {caps.concat(people.filter((p) => p.group === "tab")).map((p) => (
              <li key={p.slug}>
                <Link href={`/people/${p.slug}/`} className="rec grid gap-x-4 px-2 py-3 sm:grid-cols-[1fr_1fr_auto] sm:items-baseline">
                  <span className="text-[14.5px]">{p.name}</span>
                  <span className="dim text-[13px] opacity-80">{p.role}</span>
                  <span className="dim datum text-[11.5px] opacity-74 sm:text-right">{p.country}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Band>
    </>
  );
}
