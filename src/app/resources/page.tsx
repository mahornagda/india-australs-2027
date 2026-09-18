import Link from "next/link";
import { Page, Band, H2 } from "@/components/Section";

export const metadata = { title: "Prep and policies" };

const planned = [
  {
    t: "Participant handbook",
    d: "Everything in one document — the format, the rules, the schedule, the venue, what to do if something goes wrong.",
    who: "Organising committee",
  },
  {
    t: "Equity policy",
    d: "What counts as an equity issue, how to raise one, who reads it and what happens next.",
    who: "Equity team",
  },
  {
    t: "Adjudication guide",
    d: "How this tournament expects judges to weigh arguments, give feedback and fill a ballot.",
    who: "Adjudication core",
  },
  {
    t: "Motions and prep",
    d: "Past Australs motions, the prepared-motion release, and reading for the ones announced early.",
    who: "Adjudication core",
  },
  {
    t: "Briefing videos",
    d: "Short recordings from the chief adjudicators, for teams new to the Australasian format.",
    who: "Adjudication core",
  },
  {
    t: "Travel and visa notes",
    d: "What a visa takes from each country, how to get in from the airport, and what to pack for Delhi in June.",
    who: "Organising committee",
  },
];

export default function Resources() {
  return (
    <>
      <Page
        eyebrow="Prep and policies"
        title="Nothing to read yet"
        lede="This page will hold everything you need before you arrive. None of it is written, so rather than leave an empty page we have listed what is coming and who is writing it."
      />

      <Band tone="paper">
        <ul className="grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {planned.map((p) => (
            <li key={p.t} className="bg-paper p-7">
              <h2 className="display text-[1.3rem] text-ink">{p.t}</h2>
              <p className="mt-3 text-[1rem] font-light leading-relaxed text-ink/75">{p.d}</p>
              <p className="mt-5 border-t border-ink/12 pt-3 text-[13.5px] font-light text-ink/68">
                Written by {p.who}
              </p>
            </li>
          ))}
        </ul>
      </Band>

      <Band tone="navy">
        <div className="max-w-[54ch]">
          <H2 sub="The moment any of these is written, it appears here. The page is built; it is waiting on words, not on code.">
            Why this page is empty
          </H2>
          <Link
            href="/progress"
            className="mt-8 inline-block border border-gold/60 bg-gold/15 px-6 py-3 text-[15.5px] text-gold transition-colors hover:bg-gold/25"
          >
            Where the website stands
          </Link>
        </div>
      </Band>
    </>
  );
}
