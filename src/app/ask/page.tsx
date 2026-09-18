import Link from "next/link";
import { Page, Band, H2 } from "@/components/Section";
import { regionalAdvisors } from "@/content/people";

export const metadata = { title: "Ask us something" };

const routes = [
  {
    who: "The organising committee",
    what: "Registration, fees, rooms, food, travel, invitation letters — anything logistical.",
    names: "Sayiram, Krishnatara, Rajat, Vani and Vansh",
  },
  {
    who: "The adjudication core",
    what: "Format, motions, judge requirements, the break, adjudication standards.",
    names: "Pranav Kagalkar, Ally Pitt and Sunghyun Park",
  },
  {
    who: "The tab team",
    what: "The draw, clashes, judge allocation, anything about the running order.",
    names: "Jemma Griffin and Pranjal Singla",
  },
  {
    who: "The equity team",
    what: "Anything you would rather raise confidentially, before or during the tournament.",
    names: "Being appointed — their contact will be published before registration opens",
  },
];

export default function Ask() {
  return (
    <>
      <Page
        eyebrow="Ask us something"
        title="Who to ask, about what"
        lede="Most questions already have an answer on the questions page. If yours does not, these are the people who hold it."
      />

      <Band tone="paper">
        <ul className="grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2">
          {routes.map((r) => (
            <li key={r.who} className="bg-paper p-8">
              <h2 className="display text-[1.45rem] text-navy">{r.who}</h2>
              <p className="mt-3 max-w-[40ch] text-[1.02rem] font-light leading-relaxed text-ink/78">
                {r.what}
              </p>
              <p className="mt-4 text-[14.5px] font-light text-ink/70">{r.names}</p>
            </li>
          ))}
        </ul>

        <div className="ticks mt-12 border border-ink/20 bg-cream/60 p-8">
          <h2 className="display text-[1.5rem] text-navy">No inbox on the site yet</h2>
          <p className="mt-4 max-w-[58ch] text-[1.02rem] font-light leading-relaxed text-ink/78">
            We have not published a tournament email address yet, because we want one that is ours
            and that will not send your message to spam. Until it exists, reach any of the people
            above through your regional advisor, or through the tournament&apos;s announcements.
          </p>
          <Link
            href="/progress"
            className="mt-5 inline-block border-b border-navy/40 pb-1 text-[16px] text-navy hover:border-navy"
          >
            This is on the list, with a name against it
          </Link>
        </div>
      </Band>

      <Band tone="navy">
        <H2 sub="If you debate in one of these countries, your advisor is the fastest way in. They know the tournament and they know your circuit.">
          Start with your region
        </H2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {regionalAdvisors.map((r) => (
            <div key={r.region}>
              <h3 className="display text-[1.3rem] text-gold">{r.region}</h3>
              <ul className="mt-3 space-y-1.5">
                {r.people.map((p) => (
                  <li key={p.name} className="text-[15.5px] font-light text-cream/80">
                    {p.name}
                    <span className="text-cream/72"> · {p.country}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Band>
    </>
  );
}
