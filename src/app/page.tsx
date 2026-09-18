import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import NetworkMap from "@/components/NetworkMap";
import { Band, H2 } from "@/components/Section";
import { chiefAdjudicators } from "@/content/people";
import { faqs } from "@/content/faq";
import { site } from "@/content/site";

const answered = faqs.filter((f) => !f.pending).length;

export default function Home() {
  return (
    <>
      <Hero />

      <Band tone="navy">
        <H2 sub="Australs has never been held in India. Twenty-one advisors across five regions are helping us bring it here, and every one of these countries has someone working on it.">
          Where this is coming from
        </H2>
        <div className="mt-12">
          <NetworkMap />
        </div>
      </Band>

      <Band tone="paper">
        <H2 sub="Three chief adjudicators, drawn from three of the regions the tournament serves.">
          The adjudication core
        </H2>
        <ul className="mt-12 grid gap-10 sm:grid-cols-3">
          {chiefAdjudicators.map((p) => (
            <li key={p.name}>
              <div className="ticks border border-ink/15 p-2.5">
                <Image
                  src={`/img/portraits/${p.photo}.webp`}
                  alt={`${p.name}, chief adjudicator`}
                  width={458}
                  height={533}
                  className="w-full object-cover"
                  unoptimized
                />
              </div>
              <h3 className="mt-4 text-[1.55rem] leading-tight">{p.name}</h3>
              <p className="text-[15px] font-light text-ink/60">{p.country}</p>
              <p className="mt-3 text-[15px] font-light leading-relaxed text-ink/75">
                {p.credits?.[0]}
              </p>
            </li>
          ))}
        </ul>
        <Link
          href="/people"
          className="mt-10 inline-block border-b border-navy/40 pb-1 text-[16px] text-navy hover:border-navy"
        >
          Every judge, organiser and advisor
        </Link>
      </Band>

      <Band tone="cream">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <H2 sub={`Debates run in the lecture theatres and auditorium at ${site.venue}. Teams stay at ${site.hotel}, around forty minutes away.`}>
              Delhi, end of June
            </H2>
            <p className="mt-6 max-w-[46ch] text-[1.05rem] font-light leading-relaxed text-ink/75">
              It will be hot and it will be the start of the monsoon. We will publish what to pack,
              how to get in from the airport, and what a visa takes, long before you need to book
              anything.
            </p>
            <Link
              href="/venue"
              className="mt-8 inline-block border-b border-navy/40 pb-1 text-[16px] text-navy hover:border-navy"
            >
              The venue and where you will stay
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img/cards/venue-iitd.webp"
              alt="Lecture theatres and the main building at IIT Delhi"
              width={760}
              height={950}
              className="ticks w-full border border-ink/15"
              unoptimized
            />
            <Image
              src="/img/cards/acco-grand.webp"
              alt="The Grand New Delhi, the tournament hotel"
              width={760}
              height={950}
              className="ticks mt-8 w-full border border-ink/15"
              unoptimized
            />
          </div>
        </div>
      </Band>

      <Band tone="navy">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <H2 sub="A tournament site usually goes quiet about anything undecided. We would rather say which is which.">
              What we know, and what we do not
            </H2>
          </div>
          <div className="flex flex-col justify-center gap-5">
            <p className="text-[1.15rem] font-light leading-relaxed text-cream/85">
              Of the {faqs.length} questions people ask us most, {answered} have a real answer
              today. The other {faqs.length - answered} are marked as undecided, with nothing
              invented to fill the gap.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/faq"
                className="border border-cream/30 px-6 py-3 text-[15.5px] text-cream transition-colors hover:border-gold hover:text-gold"
              >
                Read the questions
              </Link>
              <Link
                href="/progress"
                className="border border-gold/60 bg-gold/15 px-6 py-3 text-[15.5px] text-gold transition-colors hover:bg-gold/25"
              >
                Where the website stands
              </Link>
            </div>
          </div>
        </div>
      </Band>
    </>
  );
}
