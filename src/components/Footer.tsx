import Link from "next/link";
import Rail from "./Rail";
import Tiger from "./Tiger";
import { site } from "@/content/site";

const columns = [
  {
    head: "Tournament",
    links: [
      { href: "/tournament", label: "About Australs" },
      { href: "/venue", label: "Venue and stay" },
      { href: "/schedule", label: "Schedule" },
      { href: "/people", label: "People" },
    ],
  },
  {
    head: "Taking part",
    links: [
      { href: "/register", label: "Register" },
      { href: "/faq", label: "Questions" },
      { href: "/resources", label: "Prep and policies" },
      { href: "/ask", label: "Ask us something" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="on-navy relative isolate mt-24 overflow-hidden bg-navy text-cream">
      <div className="grain absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-5 py-14">
        <Rail inverted />

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Tiger tone="cream" width={96} />
            <p className="wordmark mt-2 text-[15px] text-cream">INDIA AUSTRALS</p>
            <p className="mt-3 max-w-[24ch] text-[15px] font-light text-cream/70">
              {site.longName}
            </p>
            <p className="mt-3 text-[15px] text-gold">{site.datesLabel}</p>
          </div>

          {columns.map((c) => (
            <div key={c.head}>
              <h2 className="display text-[19px] text-cream">{c.head}</h2>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[15px] font-light text-cream/75 underline-offset-[6px] hover:text-gold hover:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="display text-[19px] text-cream">Organised by</h2>
            <ul className="mt-4 space-y-2.5 text-[15px] font-light text-cream/75">
              {site.partners.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            {/* The build log. Deliberately easy to find — anyone on the
                committee should be able to see where the site stands. */}
            <Link
              href="/progress"
              className="ticks ticks-inv mt-7 block border border-cream/25 px-4 py-3.5 transition-colors hover:border-gold/70"
            >
              <span className="block text-[15px] text-gold">Where the website stands</span>
              <span className="mt-1 block text-[13.5px] font-light leading-snug text-cream/60">
                What is live, what we are waiting on, and who has the answer
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-cream/15 pt-6 text-[13.5px] font-light text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.venue}, {site.city}
          </p>
          <p>Built by the organising committee. Updated {site.buildUpdated}.</p>
        </div>
      </div>
    </footer>
  );
}
