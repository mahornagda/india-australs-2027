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
  { id: "what", label: "Australs" },
  { id: "history", label: "Since 1975" },
  { id: "format", label: "The format" },
  { id: "rounds", label: "Rounds and the break" },
  { id: "reach", label: "The network" },
  { id: "organisers", label: "Organisers" },
];

export default function Tournament() {
  const caps = people.filter((p) => p.group === "cap");
  return (
    <>
      <PageHead
        kicker="The tournament"
        title="The tournament"
        lede="Australs has run every year since 1975, moving between the universities of Australasia and Asia. In 2027 it lands in New Delhi. Fifty-two editions, and none of them here."
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
              Australs
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
                adjudication core comes from three of the regions the tournament serves: India,
                Australia and South Korea.
              </p>
              <p>
                The people running it have judged finals at Worlds, chaired them at UADC and run
                the tab at Australs. You can read what each of them has done on{" "}
                <Link href="/people/">their own page</Link>.
              </p>
            </Prose>
          </div>
          <div className="grid grid-cols-2 gap-3 self-start">
            <Image src={asset("/img/cards/idl.webp")} alt="The Indian Debating League at a closing ceremony" width={760} height={950} className="box w-full p-1" unoptimized />
            <Image src={asset("/img/cards/venue-debsoc.webp")} alt="The IIT Delhi Debating Society" width={760} height={950} className="box mt-8 w-full p-1" unoptimized />
          </div>
        </div>
      </Band>

      <Band id="history" tone="cream">
        <H2 sub="Fifty-two editions, hosted by a different university almost every time.">
          Since 1975
        </H2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_1fr]">
          <Prose>
            <p>
              Australs started as an Australian and New Zealand tournament. It did not stay one. Over
              five decades the field pulled in universities from Indonesia, the Philippines,
              Malaysia, Singapore, Japan, Korea, India, Sri Lanka, Bangladesh and Nepal, until the
              name described the format more than the map.
            </p>
            <p>
              That spread is why the tournament breaks in more than one category. Teams debating in
              a second or a foreign language get ranked against each other as well as against the
              whole field, so a team from Jakarta or Hanoi is not measured only against Melbourne.
            </p>
            <p>
              Hosting moves. A society bids, wins, and spends two years building the thing. Delhi
              won 2027, which puts the tournament in India for the first time since it began.
            </p>
          </Prose>
          <div className="box h-fit">
            <p className="rail border-b border-ink/15 px-4 py-2.5 text-ink/72">What hosting means</p>
            {[
              ["Two years", "From winning the bid to the first round"],
              ["One venue", "Every round on the IIT Delhi campus"],
              ["One hotel", "The whole field under a single roof"],
              ["Five regions", "Advisors working their own circuits"],
              ["Eight days", "Rounds, out-rounds, socials and a final"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline gap-4 border-b border-ink/15 px-4 py-2.5 last:border-0">
                <span className="datum w-[5.5rem] shrink-0 text-[12.5px] text-navy">{k}</span>
                <span className="text-[14px] text-ink/85">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </Band>

      <Band id="format">
        <H2 sub="If you have only debated British Parliamentary, read this part.">
          The format
        </H2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_1fr]">
          <Prose>
            <p>
              Australs uses the <strong>Australasian format</strong>. One team of three faces one
              other, Affirmative against Negative, on the same motion. Six substantive speeches of
              eight minutes, alternating sides. Then a four-minute <strong>reply</strong> from each
              team, given by its first or second speaker. Negative replies first.
            </p>
            <p>
              Two teams changes how a round feels. Nothing sits between you and the people
              arguing the other side, so every claim you make comes back at you by name. Cases
              build across three speeches instead of squeezing into one, which rewards depth. The
              reply asks you to weigh what happened rather than add to it.
            </p>
            <p>
              Some motions land in your inbox weeks early. Others go up shortly before you
              debate them. The adjudication core decides which rounds work which way, and how long
              you get.
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
                  ["Negative reply", "4 min", "Weighs the debate. 1st or 2nd speaker"],
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
            <H2 sub="The adjudication core and the tab team set the shape of the week. They have not set it yet.">
              Rounds and the break
            </H2>
            <Prose className="mt-6">
              <p>
                An Australs normally runs eight or nine preliminary rounds across the week, then
                out-rounds for the teams that break. Tournaments this size usually run an Open
                break alongside ESL and EFL, so teams debating in a second or foreign language get
                ranked against each other as well as against the field.
              </p>
              <p>
                None of that holds for 2027 yet. The moment it does, it goes on the{" "}
                <Link href="/schedule/">schedule</Link>, and every registered team gets it by email
                that day.
              </p>
            </Prose>
          </div>
          <div className="space-y-3 self-center">
            <Pending who="the adjudication core">
              How many preliminary rounds, and how many motions are released in advance.
            </Pending>
            <Pending who="the adjudication core">
              The break structure: Open, ESL, EFL, and how many teams in each.
            </Pending>
            <Pending who="Jemma and Pranjal">The day-by-day running order.</Pending>
            <Pending who="Jemma">
              Whether the existing tab software stays, or is wired into this site.
            </Pending>
          </div>
        </div>
      </Band>

      <Band id="reach" tone="navy">
        <H2 sub="Twenty-one advisors, eighteen countries, five regions. These are the places this tournament has people. Eligibility is a separate question, and the organising committee is still settling it.">
          The network
        </H2>
        <div className="mt-8 min-w-0">
          <RouteMap />
        </div>
      </Band>

      <Band id="organisers" tone="cream">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <H2 sub="Two organisations, running it between them.">Organisers</H2>
            <Prose className="mt-6">
              <p>
                <strong>The Indian Debating League</strong> runs debating across Indian universities
                and schools, and has partnered with the Harvard College Debating Union on tournaments
                in India.
              </p>
              <p>
                <strong>The IIT Delhi Debating Society</strong> hosts the tournament on campus and
                runs it on the ground: the desk, the rooms, the socials and everything that
                happens between rounds.
              </p>
            </Prose>
            <Link href="/people/" className="mt-6 inline-block border-b border-navy/40 pb-0.5 text-[14.5px] text-navy hover:border-navy">
              All thirty-one people
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
