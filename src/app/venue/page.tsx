import Image from "next/image";
import Link from "next/link";
import { Page, Band, H2 } from "@/components/Section";
import { site } from "@/content/site";
import { asset } from "@/lib/asset";

export const metadata = { title: "Venue and stay" };

const unknown = [
  "Whether the campus and hotel are step-free, checked room by room",
  "How you get from the hotel to campus each morning, and who pays for it",
  "What a visa takes from your country, and when we can issue invitation letters",
  "Whether accommodation is inside the entry fee or on top of it",
];

export default function Venue() {
  return (
    <>
      <Page
        eyebrow="Venue and stay"
        title="Where the week happens"
        lede={`Debates run at ${site.venue}, in the south of the city. Teams stay at ${site.hotel}, around forty minutes away by road.`}
      />

      <Band tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <H2 sub="IIT Delhi sits on a green campus in Hauz Khas, next to the Qutub Minar and a short drive from Hauz Khas Village.">
              IIT Delhi
            </H2>
            <p className="mt-6 max-w-[48ch] text-[1.05rem] font-light leading-relaxed text-ink/78">
              Rounds run in the lecture theatres, with the opening, the semi-finals and the grand
              final in the main auditorium. The Debating Society hosts us on campus and will be the
              people you see at the registration desk each morning.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={asset("/img/cards/venue-iitd.webp")}
              alt="The auditorium, a lecture theatre, and the main building at IIT Delhi"
              width={760}
              height={950}
              className="ticks w-full border border-ink/15"
              unoptimized
            />
            <Image
              src={asset("/img/cards/venue-debsoc.webp")}
              alt="Members of the IIT Delhi Debating Society"
              width={760}
              height={950}
              className="ticks mt-10 w-full border border-ink/15"
              unoptimized
            />
          </div>
        </div>
      </Band>

      <Band tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            <Image
              src={asset("/img/cards/acco-grand.webp")}
              alt="The Grand New Delhi, exterior and atrium"
              width={760}
              height={950}
              className="ticks mt-10 w-full border border-ink/15"
              unoptimized
            />
            <Image
              src={asset("/img/cards/acco-rooms.webp")}
              alt="A twin room and the pool at The Grand New Delhi"
              width={760}
              height={950}
              className="ticks w-full border border-ink/15"
              unoptimized
            />
          </div>
          <div className="order-1 lg:order-2">
            <H2 sub="The Grand New Delhi, in Vasant Kunj. Twin rooms, a pool, and breakfast in the atrium before the draw goes up.">
              Where you sleep
            </H2>
            <p className="mt-6 max-w-[46ch] text-[1.05rem] font-light leading-relaxed text-ink/78">
              It is a fifteen minute drive from the airport and around forty from campus, depending
              on how Delhi is behaving that morning. Room allocation, who you share with, and how
              accommodation is charged are all still being worked out.
            </p>
          </div>
        </div>
      </Band>

      <Band tone="navy">
        <H2 sub="Travel is the part people plan earliest, so we would rather tell you what we have not settled than leave the page blank.">
          Four things we cannot answer yet
        </H2>
        <ul className="mt-10 grid gap-x-12 gap-y-5 sm:grid-cols-2">
          {unknown.map((u) => (
            <li
              key={u}
              className="border-l border-gold/50 pl-5 text-[1.02rem] font-light leading-relaxed text-cream/80"
            >
              {u}
            </li>
          ))}
        </ul>
        <Link
          href="/progress"
          className="mt-10 inline-block border border-gold/60 bg-gold/15 px-6 py-3 text-[15.5px] text-gold transition-colors hover:bg-gold/25"
        >
          See who is answering each of these
        </Link>
      </Band>
    </>
  );
}
