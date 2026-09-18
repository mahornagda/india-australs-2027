import Link from "next/link";
import Rail from "./Rail";
import Tiger from "./Tiger";
import Countdown from "./Countdown";
import { asset } from "@/lib/asset";
import { site } from "@/content/site";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/12">
      <div
        className="absolute inset-0 -z-20 opacity-[0.55]"
        style={{
          backgroundImage: `url(${asset("/img/tex-paper.webp")})`,
          backgroundSize: "520px auto",
        }}
      />
      <div className="grain absolute inset-0 -z-10" />

      {/* The tiger-stripe edges from the tournament banner, bleeding in. */}
      <img
        src={asset("/img/stripes-left.webp")}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 top-0 -z-10 hidden h-full w-40 object-cover opacity-80 lg:block"
      />
      <img
        src={asset("/img/stripes-right.webp")}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-0 -z-10 hidden h-full w-40 object-cover opacity-80 lg:block"
      />

      <div className="mx-auto max-w-4xl px-5 pb-16 pt-10 text-center sm:pb-20 sm:pt-14">
        <Rail />

        <div className="mt-10 flex justify-center">
          <Tiger tone="navy" width={330} className="w-[min(78vw,330px)]" priority />
        </div>

        <h1 className="mt-5">
          <span className="wordmark block text-[clamp(2.4rem,9.5vw,4.6rem)] leading-[0.98] text-ink">
            INDIA AUSTRALS
          </span>
          <span
            className="wordmark mt-2 block text-[clamp(1rem,3.2vw,1.55rem)] text-navy/70"
            style={{ letterSpacing: "0.44em", textIndent: "0.44em" }}
          >
            2027
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-[34ch] text-[clamp(1.05rem,2.4vw,1.25rem)] font-light leading-[1.6] text-ink/75">
          The Australasian Intervarsity Debating Championship comes to India for the first time.
        </p>

        <p className="display mt-7 text-[clamp(1.35rem,4vw,2rem)] text-navy">
          {site.datesLabel}
        </p>
        <p className="mt-1 text-[1.05rem] font-light text-ink/65">
          {site.venue}, {site.city}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/register"
            className="w-full max-w-xs bg-navy px-8 py-3.5 text-[16px] text-cream transition-colors hover:bg-ink sm:w-auto"
          >
            Tell me when registration opens
          </Link>
          <Link
            href="/people"
            className="w-full max-w-xs border border-ink/30 px-8 py-3.5 text-[16px] text-ink transition-colors hover:border-ink/70 sm:w-auto"
          >
            See who is judging
          </Link>
        </div>

        <p className="mt-8 text-[14px] font-light tracking-wide text-ink/45">
          <Countdown />
        </p>
      </div>
    </section>
  );
}
