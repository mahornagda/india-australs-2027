import Link from "next/link";
import Rail from "./Rail";
import Tiger from "./Tiger";
import Countdown from "./Countdown";
import { asset } from "@/lib/asset";
import { site } from "@/content/site";
import { counts } from "@/content/progress";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/15">
      <div
        className="absolute inset-0 -z-20 opacity-72"
        style={{ backgroundImage: `url(${asset("/img/tex-paper.webp")})`, backgroundSize: "560px auto" }}
      />
      <div className="grain absolute inset-0 -z-10" />
      <img src={asset("/img/stripes-left.webp")} alt="" aria-hidden="true" className="pointer-events-none absolute -left-6 top-0 -z-10 hidden h-full w-32 object-cover opacity-80 lg:block" />
      <img src={asset("/img/stripes-right.webp")} alt="" aria-hidden="true" className="pointer-events-none absolute -right-6 top-0 -z-10 hidden h-full w-32 object-cover opacity-80 lg:block" />

      <div className="mx-auto max-w-[1180px] px-4 pb-10 pt-7 text-center">
        <Rail />
        <div className="mt-8 flex justify-center">
          <Tiger tone="navy" width={280} className="w-[min(70vw,280px)]" priority />
        </div>
        <h1 className="mt-4">
          <span className="wordmark block text-[clamp(2.1rem,8.4vw,4rem)] leading-[0.98] text-ink">
            INDIA AUSTRALS
          </span>
          <span
            className="wordmark mt-1.5 block text-[clamp(0.9rem,2.8vw,1.35rem)] text-navy/75"
            style={{ letterSpacing: "0.44em", textIndent: "0.44em" }}
          >
            2027
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-[42ch] text-[1.0625rem] leading-[1.6] text-ink/80">
          The Australasian Intervarsity Debating Championship comes to India for the first time in
          fifty-two years.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
          <Link href="/register/" className="w-full max-w-xs bg-navy px-7 py-3 text-[14.5px] text-cream transition-colors duration-150 hover:bg-ink sm:w-auto">
            Tell me when registration opens
          </Link>
          <Link href="/people/" className="w-full max-w-xs border border-ink/30 px-7 py-3 text-[14.5px] transition-colors duration-150 hover:border-navy hover:bg-navy hover:text-cream sm:w-auto">
            See who is running it
          </Link>
        </div>
      </div>

      {/* The state of play, in one line. */}
      <div className="border-t border-ink/15 bg-paper-2/70">
        <dl className="mx-auto grid max-w-[1180px] grid-cols-2 divide-ink/15 px-4 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">
          {[
            ["Dates", site.datesLabel],
            ["Venue", `${site.venue}, ${site.city}`],
            ["Registration", "Not open yet"],
            ["Countdown", <Countdown key="c" />],
            ["Open questions", <Link key="q" href="/progress/" className="border-b border-navy/40 hover:border-navy">{counts.waiting}, with names</Link>],
          ].map(([k, v], i) => (
            <div key={i} className="border-t border-ink/15 py-3 lg:border-t-0 lg:px-4 lg:first:pl-0">
              <dt className="rail text-ink/70">{k as string}</dt>
              <dd className="mt-1 text-[14px]">{v as React.ReactNode}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
