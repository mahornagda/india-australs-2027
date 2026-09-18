import Link from "next/link";
import { PageHead, Band, H2, Prose } from "@/components/Shell";

export const metadata = { title: "Prep and policies" };

const planned = [
  ["Participant handbook", "The format, the rules, the schedule, the venue, and what to do if something goes wrong. One document instead of six announcements.", "Organising committee"],
  ["Equity policy", "What counts as an equity issue, how to raise one, who reads it, and what happens next.", "Equity team"],
  ["Adjudication guide", "How this tournament expects judges to weigh arguments, give feedback and fill a ballot.", "Adjudication core"],
  ["Motions and prep", "Past Australs motions, the prepared-motion release, and reading for the rounds announced early.", "Adjudication core"],
  ["Briefing videos", "Short recordings from the chief adjudicators, for teams new to the Australasian format.", "Adjudication core"],
  ["Travel and visa notes", "What a visa takes from each country, getting in from the airport, and what to pack for Delhi in June.", "Organising committee"],
];

export default function Resources() {
  return (
    <>
      <PageHead
        kicker="Prep and policies"
        title="Nothing to read yet"
        lede="This page will hold everything you need before you arrive. None of it is written. Rather than leave it blank we have listed what is coming and who is writing each piece."
        facts={[
          { k: "Documents planned", v: "Six" },
          { k: "Published", v: "None" },
          { k: "Format explained", v: "On the tournament page", href: "/tournament/#format" },
          { k: "Travel notes", v: "Already on the Delhi page", href: "/delhi/#getting-here" },
        ]}
      />
      <Band>
        <ul className="grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {planned.map(([t, d, who]) => (
            <li key={t} className="bg-paper p-6">
              <h2 className="text-[1.25rem]">{t}</h2>
              <p className="mt-2.5 text-[14px] leading-[1.66] text-ink/82">{d}</p>
              <p className="rail mt-5 border-t border-ink/15 pt-3 text-ink/70">Written by {who}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <H2 sub="The page is built. It waits on words, not on code. The moment any of these exists it appears here.">
              The delay
            </H2>
          </div>
          <Prose>
            <p>
              Some of what would normally sit in a handbook is already written and already on the
              site: the <Link href="/tournament/#format">format is explained in full</Link>,{" "}
              <Link href="/delhi/#getting-here">visas and travel</Link> are covered, and{" "}
              <Link href="/delhi/#weather">what to pack</Link> is there too. What is missing is
              everything that needs a decision behind it.
            </p>
            <p>
              <Link href="/progress/">The build log</Link> lists each of those decisions and who is
              making it.
            </p>
          </Prose>
        </div>
      </Band>
    </>
  );
}
