import Image from "next/image";
import { Page, Band, H2 } from "@/components/Section";
import Rail from "@/components/Rail";
import {
  chiefAdjudicators,
  tabTeam,
  orgComm,
  seniorAdvisors,
  regionalAdvisors,
  advisorCount,
  type Person,
} from "@/content/people";

export const metadata = { title: "People" };

function Portrait({ p, role }: { p: Person; role: string }) {
  return (
    <li className="grid gap-6 sm:grid-cols-[minmax(0,180px)_1fr] sm:gap-8">
      <div className="ticks border border-ink/15 p-2">
        {p.photo ? (
          <Image
            src={`/img/portraits/${p.photo}.webp`}
            alt={`${p.name}, ${role.toLowerCase()}`}
            width={458}
            height={533}
            className="w-full object-cover"
            unoptimized
          />
        ) : null}
      </div>
      <div>
        <h3 className="text-[1.7rem] leading-tight">{p.name}</h3>
        <p className="mt-0.5 text-[15px] font-light text-ink/72">
          {[p.role ?? role, p.country].filter(Boolean).join(" · ")}
        </p>
        <ul className="mt-4 space-y-1.5">
          {p.credits?.map((c) => (
            <li
              key={c}
              className="border-l border-navy/25 pl-4 text-[15.5px] font-light leading-snug text-ink/80"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function People() {
  return (
    <>
      <Page
        eyebrow="People"
        title="Who is running this"
        lede={`Three chief adjudicators, a tab team, five organisers and ${advisorCount} advisors. Between them they have judged or run almost every major tournament in the region.`}
      />

      <Band tone="paper">
        <H2 sub="They set the motions, run the briefings and decide how the break works.">
          Adjudication core
        </H2>
        <ul className="mt-12 space-y-14">
          {chiefAdjudicators.map((p) => (
            <Portrait key={p.name} p={p} role="Chief Adjudicator" />
          ))}
        </ul>
      </Band>

      <Band tone="cream">
        <H2 sub="They draw the rounds, allocate every judge and keep the tournament running to time.">
          Tab team
        </H2>
        <ul className="mt-12 space-y-14">
          {tabTeam.map((p) => (
            <Portrait key={p.name} p={p} role="Tab" />
          ))}
        </ul>
      </Band>

      <Band tone="paper">
        <H2 sub="The people you will be emailing about registration, rooms, food and everything else.">
          Organising committee
        </H2>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {orgComm.map((p) => (
            <li key={p.name} className="ticks border-t border-ink/15 pt-6">
              <h3 className="text-[1.45rem] leading-tight">{p.name}</h3>
              <p className="mt-0.5 text-[15px] font-light text-ink/72">{p.role}</p>
              <ul className="mt-3 space-y-1 text-[15px] font-light leading-snug text-ink/75">
                {p.credits?.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <h3 className="display text-[1.6rem]">Senior advisors</h3>
          <ul className="mt-4 flex flex-wrap gap-x-10 gap-y-2">
            {seniorAdvisors.map((p) => (
              <li key={p.name} className="text-[1.05rem] font-light text-ink/80">
                {p.name}
              </li>
            ))}
          </ul>
        </div>
      </Band>

      <Band tone="navy">
        <H2 sub="Every region Australs draws from has someone on the ground helping us reach it. If you debate in one of these countries, they are your first port of call.">
          Advisors, by region
        </H2>
        <div className="mt-12 space-y-12">
          {regionalAdvisors.map((r) => (
            <div key={r.region}>
              <Rail inverted />
              <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,240px)_1fr] lg:gap-10">
                <h3 className="display text-[1.55rem] text-gold">{r.region}</h3>
                <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                  {r.people.map((p) => (
                    <li key={p.name}>
                      <span className="block text-[1.05rem] font-light text-cream">{p.name}</span>
                      <span className="block text-[14px] font-light text-cream/72">
                        {p.country}
                      </span>
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
