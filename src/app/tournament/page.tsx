import Link from "next/link";
import Image from "next/image";
import { Page, Band, H2 } from "@/components/Section";
import NetworkMap from "@/components/NetworkMap";
import { site } from "@/content/site";

export const metadata = { title: "The tournament" };

const facts = [
  { k: "Dates", v: site.datesLabel },
  { k: "Debating at", v: `${site.venue}, ${site.city}` },
  { k: "Staying at", v: site.hotel },
  { k: "Format", v: "Australasian, three a side" },
  { k: "Nearest airport", v: "Indira Gandhi International (DEL)" },
  { k: "Registration", v: "Not open yet" },
];

export default function Tournament() {
  return (
    <>
      <Page
        eyebrow="The tournament"
        title="Australs comes to India"
        lede="The Australasian Intervarsity Debating Championship has run every year since 1975, moving between the universities of the region. In 2027 it is held in India for the first time."
      />

      <Band tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div className="max-w-[62ch] space-y-6 text-[1.08rem] font-light leading-[1.72] text-ink/82">
            <p>
              Australs is the oldest and largest university debating championship outside Europe and
              North America. Teams of three come from across Australasia and South and East Asia,
              debate a week of prepared and impromptu motions, and the field narrows to a grand
              final.
            </p>
            <p>
              It has been to Sydney, Manila, Kuala Lumpur, Auckland, Kathmandu and Kuantan. It has
              never been to India. The Indian Debating League and the IIT Delhi Debating Society are
              bringing it here, with an adjudication core drawn from three of the regions the
              tournament serves.
            </p>
            <p>
              Delhi at the end of June is hot, and the monsoon usually breaks during the week. The
              debating is indoors and air conditioned. Everything else about the city is worth the
              heat.
            </p>
          </div>

          <dl className="ticks h-fit border border-ink/15 p-7">
            {facts.map((f) => (
              <div key={f.k} className="border-b border-ink/10 py-3.5 first:pt-0 last:border-0 last:pb-0">
                <dt className="text-[13.5px] font-light text-ink/50">{f.k}</dt>
                <dd className="mt-0.5 text-[1.05rem] text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Band>

      <Band tone="navy">
        <H2 sub="Twenty-one advisors, across five regions. Whether your university can enter is still being settled — this is where the tournament has people, not a list of who may compete.">
          The regions we reach
        </H2>
        <div className="mt-12">
          <NetworkMap />
        </div>
      </Band>

      <Band tone="cream">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <H2 sub="Two organisations are running this between them.">Organised by</H2>
            <div className="mt-8 space-y-6 text-[1.05rem] font-light leading-relaxed text-ink/80">
              <p>
                <strong className="font-normal text-ink">The Indian Debating League</strong> runs
                debating across Indian universities and schools, and has partnered with the Harvard
                College Debating Union on tournaments in India.
              </p>
              <p>
                <strong className="font-normal text-ink">The IIT Delhi Debating Society</strong>{" "}
                hosts the tournament on campus and runs it on the ground.
              </p>
            </div>
            <Link
              href="/people"
              className="mt-8 inline-block border-b border-navy/40 pb-1 text-[16px] text-navy hover:border-navy"
            >
              The people behind both
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img/cards/idl.webp"
              alt="The Indian Debating League at a closing ceremony"
              width={760}
              height={950}
              className="ticks w-full border border-ink/15"
              unoptimized
            />
            <Image
              src="/img/cards/venue-debsoc.webp"
              alt="The IIT Delhi Debating Society"
              width={760}
              height={950}
              className="ticks mt-8 w-full border border-ink/15"
              unoptimized
            />
          </div>
        </div>
      </Band>
    </>
  );
}
