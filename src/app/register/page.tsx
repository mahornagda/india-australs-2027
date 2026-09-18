import Link from "next/link";
import { Page, Band, H2 } from "@/components/Section";
import InterestForm from "@/components/InterestForm";

export const metadata = { title: "Register" };

const steps = [
  {
    n: "One",
    t: "Leave your details",
    d: "Name, email, university. That is all we hold until registration opens.",
  },
  {
    n: "Two",
    t: "We tell you the day it opens",
    d: "Along with the fee, what it covers, and how long you have.",
  },
  {
    n: "Three",
    t: "You register your team or apply to judge",
    d: "One form for teams, a separate one for independent adjudicators.",
  },
  {
    n: "Four",
    t: "You pay, and we confirm",
    d: "Once payment lands we confirm your place and send you your sign-in details.",
  },
  {
    n: "Five",
    t: "Your own page opens",
    d: "Every form you still owe us, with its deadline, in one list instead of five emails.",
  },
];

const undecided = [
  "The fee, and whether it covers the hotel",
  "Which universities and regions may enter",
  "The cap on teams per institution",
  "Whether a debater signs up, or their university signs up for them",
  "How many judges a team must bring",
  "The scholarship route, and who it is for",
];

export default function Register() {
  return (
    <>
      <Page
        eyebrow="Register"
        title="Registration is not open yet"
        lede="When it opens, it will open with everything you need to decide at once — the fee, what it covers, who may enter and how long you have. Leave your email and you will hear first."
      />

      <Band tone="paper">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <H2 sub="Five steps, from now to your first round.">How this will work</H2>
            <ol className="mt-10 space-y-8">
              {steps.map((s) => (
                <li key={s.t} className="grid grid-cols-[auto_1fr] gap-5">
                  <span className="display mt-1 text-[13px] tracking-[0.28em] text-navy/70">
                    {s.n.toUpperCase()}
                  </span>
                  <div>
                    <h3 className="text-[1.25rem] leading-snug">{s.t}</h3>
                    <p className="mt-1.5 text-[1.02rem] font-light leading-relaxed text-ink/72">
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="display text-[1.7rem] text-navy">Hear about it first</h2>
            <div className="mt-6">
              <InterestForm />
            </div>
          </div>
        </div>
      </Band>

      <Band tone="navy">
        <H2 sub="These decide what the registration form even looks like, so they come before it opens, not after.">
          Six things still to settle
        </H2>
        <ul className="mt-10 grid gap-x-12 gap-y-4 sm:grid-cols-2">
          {undecided.map((u) => (
            <li
              key={u}
              className="border-l border-gold/50 pl-5 text-[1.02rem] font-light leading-relaxed text-cream/82"
            >
              {u}
            </li>
          ))}
        </ul>
        <Link
          href="/progress"
          className="mt-10 inline-block border border-gold/60 bg-gold/15 px-6 py-3 text-[15.5px] text-gold transition-colors hover:bg-gold/25"
        >
          Who is deciding each one
        </Link>
      </Band>
    </>
  );
}
