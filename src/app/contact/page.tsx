import Link from "next/link";
import { PageHead, Band, H2, Prose, Pending } from "@/components/Shell";
import { people, regions } from "@/content/people";

export const metadata = { title: "Contact" };

const routes = [
  {
    who: "The organising committee",
    what: "Registration, fees, rooms, food, transport, invitation letters — anything logistical.",
    group: "oc" as const,
  },
  {
    who: "The adjudication core",
    what: "Format, motions, judge requirements, the break, adjudication standards.",
    group: "cap" as const,
  },
  {
    who: "The tab team",
    what: "The draw, clashes, judge allocation, anything about the running order.",
    group: "tab" as const,
  },
];

export default function Contact() {
  return (
    <>
      <PageHead
        kicker="Contact"
        title="Who to ask, about what"
        lede="Most of what people write to us about is already answered on the page it belongs to. If yours is not, these are the people who hold the answer — and the fastest way in is usually your own regional advisor."
        facts={[
          { k: "Logistics", v: "Organising committee" },
          { k: "Judging and format", v: "Adjudication core" },
          { k: "Draw and clashes", v: "Tab team" },
          { k: "Equity", v: "Contact not published yet", href: "/register/#equity" },
          { k: "Your region", v: "Twenty-one advisors", href: "/people/?group=advisor" },
        ]}
      />

      <Band>
        <div className="grid gap-px border border-ink/15 bg-ink/15 lg:grid-cols-3">
          {routes.map((r) => (
            <div key={r.who} className="bg-paper p-6">
              <h2 className="text-[1.3rem]">{r.who}</h2>
              <p className="mt-2.5 text-[14px] leading-[1.66] text-ink/82">{r.what}</p>
              <ul className="mt-4 border-t border-ink/15">
                {people
                  .filter((p) => p.group === r.group)
                  .map((p) => (
                    <li key={p.slug}>
                      <Link href={`/people/${p.slug}/`} className="rec flex items-baseline gap-3 py-2">
                        <span className="text-[14px]">{p.name}</span>
                        <span className="dim datum ml-auto text-[11.5px] opacity-74">{p.country}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-[68ch]">
          <Pending who="Org Comm">
            A tournament email address of our own. We have not published one because we want one
            that is ours and that will not put your message in a spam folder.
          </Pending>
        </div>
      </Band>

      <Band tone="navy">
        <H2 sub="If you debate in one of these countries, your advisor is the fastest way in. They know this tournament and they know your circuit.">
          Start with your region
        </H2>
        <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((r) => (
            <div key={r}>
              <h3 className="rail text-gold">{r}</h3>
              <ul className="mt-3 border-t border-cream/15">
                {people
                  .filter((p) => p.group === "advisor" && p.region === r)
                  .map((p) => (
                    <li key={p.slug}>
                      <Link href={`/people/${p.slug}/`} className="rec flex items-baseline gap-3 py-2">
                        <span className="text-[14px]">{p.name}</span>
                        <span className="dim datum ml-auto text-[11.5px] opacity-76">{p.country}</span>
                      </Link>
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
