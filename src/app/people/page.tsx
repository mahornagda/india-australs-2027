import { PageHead, Band, H2 } from "@/components/Shell";
import PersonCard from "@/components/PersonCard";
import { people, regions } from "@/content/people";

export const metadata = { title: "The people" };

const by = (g: string) => people.filter((p) => p.group === g);

export default function People() {
  return (
    <>
      <PageHead
        kicker="People"
        title="The people"
        lede="Thirty-one of them, across nine countries. Three chief adjudicators set the motions and the standard. Two people run the tab. Five organise. Twenty-one advisors carry the tournament into their own circuits. Open anyone to read what they have done."
        facts={[
          { k: "Adjudication core", v: "Three" },
          { k: "Tab team", v: "Two" },
          { k: "Organising committee", v: "Five" },
          { k: "Advisors", v: "Twenty-one, in five regions" },
        ]}
      />

      <Band>
        <H2 sub="They pick the motions, brief the judges and decide how the break works. Between them they have judged finals at Worlds, Australs, ABP and UADC.">
          Adjudication core
        </H2>
        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {by("cap").map((p) => (
            <PersonCard key={p.slug} p={p} size="lg" />
          ))}
        </div>
      </Band>

      <Band tone="cream">
        <H2 sub="They draw every round, allocate every judge and keep eight days running to time.">
          Tab team
        </H2>
        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {by("tab").map((p) => (
            <PersonCard key={p.slug} p={p} size="md" />
          ))}
        </div>
      </Band>

      <Band>
        <H2 sub="The people you will be writing to about registration, rooms, food and everything that is not a debate.">
          Organising committee
        </H2>
        <div className="mt-8 grid gap-7 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {by("oc").map((p) => (
            <PersonCard key={p.slug} p={p} size="md" />
          ))}
        </div>

        <div className="mt-12">
          <H2 sub="Two people who have run tournaments in India for longer than most of the committee has been debating.">
            Senior advisors
          </H2>
          <div className="mt-8 grid gap-7 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {by("senior").map((p) => (
              <PersonCard key={p.slug} p={p} size="md" />
            ))}
          </div>
        </div>
      </Band>

      <Band tone="navy">
        <H2 sub="Every region Australs draws from has somebody on the ground here. If you debate in one of these countries, start with your own.">
          Advisors
        </H2>
        <div className="mt-8 space-y-10">
          {regions.map((r) => (
            <div key={r}>
              <h3 className="rail border-b border-cream/20 pb-2.5 text-gold">{r}</h3>
              <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
                {people
                  .filter((p) => p.group === "advisor" && p.region === r)
                  .map((p) => (
                    <PersonCard key={p.slug} p={p} size="sm" />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </Band>
    </>
  );
}
