import { PageHead, Band } from "@/components/Shell";
import PeopleTable from "@/components/PeopleTable";
import { people, creditCount } from "@/content/people";
import { events } from "@/content/events";

export const metadata = { title: "People" };

export default function People() {
  return (
    <>
      <PageHead
        kicker="People"
        title="Thirty-one people, one directory"
        lede="Three chief adjudicators, a tab team, five organisers and twenty-one advisors. Search it, filter it, and open anyone to see their full record."
        facts={[
          { k: "In the directory", v: `${people.length} people` },
          { k: "Credits held", v: `${creditCount} across ${events.length} tournaments` },
          { k: "Regions covered", v: "Five" },
          { k: "Cross-index", v: "Every tournament, and who was there", href: "/record/" },
        ]}
      />
      <Band>
        <PeopleTable />
      </Band>
    </>
  );
}
