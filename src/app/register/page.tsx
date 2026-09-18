import Link from "next/link";
import { PageHead, Band, SubNav, H2, Prose, Pending } from "@/components/Shell";
import InterestForm from "@/components/InterestForm";

export const metadata = {
  title: "Register",
  description:
    "How registration for India Australs 2027 will work: the steps, the fee, who can enter, judges, scholarships and equity.",
};

const sections = [
  { id: "how", label: "How it works" },
  { id: "who", label: "Who can enter" },
  { id: "money", label: "Fees and scholarships" },
  { id: "judges", label: "Bringing a judge" },
  { id: "equity", label: "Equity" },
  { id: "notify", label: "Hear about it first" },
];

const steps = [
  ["Leave your details", "Name, email, university. That is all we hold until registration opens, and it is all we will ever hold without asking."],
  ["We tell you the day it opens", "In the same message: the fee, what it covers, who may enter and how long you have. You will not have to chase four announcements to work out whether you can come."],
  ["You register a team, or apply to judge", "One form for teams, a separate one for independent adjudicators. Both ask for the minimum we need and nothing else."],
  ["You pay, and we confirm", "Once payment lands we confirm your place, and only then does your account exist. Confirmation carries your sign-in details."],
  ["Your own page opens", "Every form you still owe us, with its deadline, in one list. No more hunting through five emails and a spreadsheet you cannot open."],
];

export default function Register() {
  return (
    <>
      <PageHead
        kicker="Register"
        title="Registration is not open yet"
        lede="When it opens, it opens complete. Fee, eligibility, deadlines and judge requirements go up together, so you can decide in one sitting instead of four. Leave an email and you hear before anyone announces it anywhere else."
        facts={[
          { k: "Status", v: "Not open" },
          { k: "Opens", v: "Date not set" },
          { k: "Fee", v: "Not set" },
          { k: "Who may enter", v: "Not set" },
          { k: "Judges per team", v: "Not set" },
        ]}
      />
      <SubNav items={sections} />

      <Band id="how">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <H2 sub="Five steps, from today to your first round.">How this will work</H2>
          <ol className="border-t border-ink/15">
            {steps.map(([h, p], i) => (
              <li key={h} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink/15 py-4">
                <span className="datum pt-1 text-[12.5px] text-navy">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[1.15rem]">{h}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-[1.66] text-ink/82">{p}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Band>

      <Band id="who" tone="cream">
        <H2 sub="Australs draws from Australasia and across Asia. Exactly where the line falls for 2027, and how many teams one university may send, is being settled by the organising committee together with the adjudication core.">
          Eligibility
        </H2>
        <div className="mt-7 grid gap-8 lg:grid-cols-2">
          <Prose>
            <p>
              What we can say now: it is a university tournament, debated in teams of three, and
              institutions send teams rather than individuals turning up alone. You do not need to
              have debated Australs before, and there is no qualification tournament to get through.
            </p>
            <p>
              If you are unsure whether your circuit is in scope, ask your{" "}
              <Link href="/people/">regional advisor</Link>. They will know before we publish it.
            </p>
          </Prose>
          <div className="space-y-3">
            <Pending who="Sayiram and the adjudication core">
              Which countries and regions are eligible.
            </Pending>
            <Pending who="Sayiram and the adjudication core">
              The cap on teams per university.
            </Pending>
            <Pending who="Org Comm">
              Whether a debater signs up for themselves, or their university signs up for its teams.
              This one changes the shape of the form, so it comes first.
            </Pending>
          </div>
        </div>
      </Band>

      <Band id="money">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <H2 sub="Nothing here is decided, and we are not going to float a number we might have to raise.">
              Fees and scholarships
            </H2>
            <Prose className="mt-6">
              <p>
                The fee will arrive with a line-by-line list of what it covers: accommodation,
                meals, socials, transport between the hotel and campus. You should not have to
                write to us to find out what you paid for.
              </p>
              <p>
                There will be a <strong>scholarship route</strong>. Australs is expensive to reach
                from most of the region, and a tournament that only hears from the institutions who
                can afford it is a worse tournament. Who it is open to and how much it covers is
                still being worked out.
              </p>
            </Prose>
          </div>
          <div className="space-y-3 self-center">
            <Pending who="Sayiram">The entry fee, and exactly what it covers.</Pending>
            <Pending who="Sayiram">
              Whether accommodation at The Grand is inside the fee or charged on top.
            </Pending>
            <Pending who="Org Comm">
              How people pay: card, bank transfer or UPI. This decides which payment company we
              sign up with.
            </Pending>
            <Pending who="Org Comm">
              The scholarship route: who it is for, and what it covers.
            </Pending>
          </div>
        </div>
      </Band>

      <Band id="judges" tone="cream">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <H2 sub="Australs runs on the judges teams bring with them.">Judges</H2>
            <Prose className="mt-6">
              <p>
                Tournaments in this format normally ask each team, or each pair of teams, to bring an
                adjudicator. Pranav Kagalkar, Ally Pitt and Sunghyun Park set that requirement
                for 2027, and they have not fixed it yet.
              </p>
              <p>
                You can also come as an <strong>independent adjudicator</strong>, with no team
                attached. That application opens alongside team registration and is judged on its
                own merits, not on whether your institution is sending debaters.
              </p>
              <p>
                Judge briefings, the adjudication guide and feedback expectations will all be
                published on the <Link href="/resources/">prep page</Link> before the tournament.
              </p>
            </Prose>
          </div>
          <div className="space-y-3 self-center">
            <Pending who="the adjudication core">How many judges a team must bring.</Pending>
            <Pending who="the adjudication core">
              Whether independent adjudicator applications are capped, and how they are assessed.
            </Pending>
          </div>
        </div>
      </Band>

      <Band id="equity" tone="navy">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <H2 sub="Every tournament says it takes equity seriously. What matters is whether you know who to tell, and what happens after you do.">
              Equity
            </H2>
            <Prose className="mt-6 text-cream/88">
              <p>
                There will be an equity team with its own confidential contact, independent of the
                organising committee and the adjudication core. Anything raised with them stays with
                them unless you agree otherwise.
              </p>
              <p>
                Before registration opens we will publish the equity policy: what counts, how to
                raise something, who reads it, what happens next, and what the tournament can and
                cannot do. You should be able to read that and decide whether you trust it
                <em> before</em> you buy a flight, not after something goes wrong.
              </p>
              <p>
                Dietary, accessibility and accommodation needs are asked for on a form once your
                registration is confirmed, and they go to the organising committee rather than the
                equity team.
              </p>
            </Prose>
          </div>
          <div className="space-y-3 self-center">
            <Pending who="the Equity team">
              Who sits on the equity team, and the confidential address to reach them.
            </Pending>
            <Pending who="the Equity team">The equity policy, written out in full.</Pending>
          </div>
        </div>
      </Band>

      <Band id="notify">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <H2 sub="One message, the day it opens. Nothing else, ever.">Get the date</H2>
            <Prose className="mt-6">
              <p>
                We will not send you a newsletter, and we will not pass your address to anyone. When
                registration opens you get one email with everything in it. If you would rather hear
                it from a person, your{" "}
                <Link href="/people/?group=advisor">regional advisor</Link> will know at the same
                time we do.
              </p>
            </Prose>
          </div>
          <InterestForm />
        </div>
      </Band>
    </>
  );
}
