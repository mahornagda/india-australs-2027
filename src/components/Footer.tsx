import Link from "next/link";
import Rail from "./Rail";
import Tiger from "./Tiger";
import { site, footerNav } from "@/content/site";

export default function Footer() {
  return (
    <footer className="on-navy relative isolate mt-16 overflow-hidden bg-navy text-cream">
      <div className="grain absolute inset-0 -z-10" />
      <div className="mx-auto max-w-[1180px] px-4 py-10">
        <Rail inverted left={site.datesLabel} right={`${site.venue}`} />

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Tiger tone="cream" width={78} />
            <p className="wordmark mt-1.5 text-[13px] text-cream">INDIA AUSTRALS</p>
            <p className="mt-2.5 max-w-[26ch] text-[13px] font-light text-cream/72">
              {site.longName}
            </p>
            <ul className="mt-4 space-y-1 text-[13px] text-cream/72">
              {site.partners.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          {footerNav.map((c) => (
            <div key={c.head}>
              <h2 className="rail text-gold">{c.head}</h2>
              <ul className="mt-3.5">
                {c.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} className="rec py-2 text-[13.5px] text-cream/85">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-3 border-t border-cream/15 pt-5 text-[12.5px] text-cream/74 sm:grid-cols-[1fr_auto] sm:items-center">
          <p>
            <Link href="/contact" className="underline decoration-cream/30 underline-offset-4 hover:text-gold">
              Contact
            </Link>{" "}
            ·{" "}
            <Link href="/resources" className="underline decoration-cream/30 underline-offset-4 hover:text-gold">
              Prep and policies
            </Link>{" "}
            ·{" "}
            <Link href="/progress" className="underline decoration-cream/30 underline-offset-4 hover:text-gold">
              Where the website stands
            </Link>
          </p>
          <p className="datum text-cream/72">Updated {site.buildUpdated}</p>
        </div>
      </div>
    </footer>
  );
}
