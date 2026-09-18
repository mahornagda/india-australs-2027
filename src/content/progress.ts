export type Item = { what: string; note?: string; owner?: string; area?: string };
export type Group = {
  key: string;
  title: string;
  blurb: string;
  tone: "done" | "waiting" | "later";
  items: Item[];
};

export const updated = "18 September 2026";

export const groups: Group[] = [
  {
    key: "live",
    title: "Live now",
    tone: "done",
    blurb: "Anyone with the link can do all of this today.",
    items: [
      { what: "Read what the tournament is, when it runs and where it is held" },
      {
        what: "Understand how Australs is actually debated, speech by speech",
        note: "Useful if you have only ever debated British Parliamentary",
      },
      {
        what: "See all thirty-one people with a photo, and open any of them",
        note: "Judges and organisers carry their debating record, taken from the tournament's own posters",
      },
      {
        what: "Read what a regional advisor actually does, and who else covers your region",
      },
      {
        what: "See the eighteen countries our advisors cover, drawn as routes into Delhi",
        note: "Filterable by region, and every country lists its advisor",
      },
      {
        what: "Read a real guide to Delhi",
        note: "The venue, the hotel, nine places worth a free morning, flights, visas, weather and what to pack",
      },
      {
        what: "Understand what hosting an Australs involves, and how the tournament grew since 1975",
      },
      {
        what: "Picture a day at a tournament this size, while the real timetable is settled",
      },
      {
        what: "Find every question we cannot answer yet on the page where you would look for it",
        note: "Marked in place with the name of whoever holds the answer, rather than hidden in a list of questions",
      },
      { what: "Leave a name and an email to be told the day registration opens" },
      { what: "Find who to ask about what, and who your own regional advisor is" },
      { what: "Read all of it on a phone, with a keyboard, or with a screen reader" },
      { what: "Follow this page to see exactly where the website stands" },
    ],
  },
  {
    key: "waiting",
    title: "Waiting on an answer",
    tone: "waiting",
    blurb:
      "Each of these is a blank on the site right now. The page is already built and needs the answer typed in. The name beside it belongs to whoever has it.",
    items: [
      {
        area: "Registration",
        what: "Confirm 27 June to 4 July 2027 is final, and not moving",
        owner: "Sayiram",
      },
      {
        area: "Registration",
        what: "Which countries and regions are eligible",
        owner: "Sayiram and the adjudication core",
      },
      {
        area: "Registration",
        what: "The cap on teams per university",
        owner: "Sayiram and the adjudication core",
      },
      {
        area: "Registration",
        what: "Whether a debater signs up for themselves, or their university signs up for its teams",
        note: "This changes the shape of the registration form, so it is worth settling early",
        owner: "Org Comm",
      },
      {
        area: "Registration",
        what: "The day registration opens and the day it closes",
        owner: "Org Comm",
      },
      {
        area: "Money",
        what: "The entry fee, and exactly what it covers",
        owner: "Sayiram",
      },
      {
        area: "Money",
        what: "Whether accommodation at The Grand sits inside the fee or on top of it",
        owner: "Sayiram",
      },
      {
        area: "Money",
        what: "How people pay: card, bank transfer or UPI",
        note: "This decides which payment company we sign up with",
        owner: "Org Comm",
      },
      {
        area: "Money",
        what: "The scholarship route: who it is for, and what it covers",
        owner: "Org Comm",
      },
      {
        area: "Judging",
        what: "How many judges a team must bring",
        owner: "the adjudication core",
      },
      {
        area: "Judging",
        what: "Whether independent adjudicator applications are capped, and how they are assessed",
        owner: "the adjudication core",
      },
      {
        area: "Rounds",
        what: "How many preliminary rounds, and how many motions go out in advance",
        owner: "the adjudication core",
      },
      {
        area: "Rounds",
        what: "The break structure: Open, ESL, EFL, and how many teams in each",
        owner: "the adjudication core",
      },
      {
        area: "Rounds",
        what: "The day-by-day running order",
        owner: "Jemma and Pranjal",
      },
      {
        area: "Rounds",
        what: "Whether the existing tab software stays, or is wired into this site",
        owner: "Jemma",
      },
      {
        area: "Equity",
        what: "Who sits on the equity team, and the confidential address to reach them",
        owner: "Equity team",
      },
      {
        area: "Equity",
        what: "The equity policy, written out in full",
        owner: "Equity team",
      },
      {
        area: "Equity",
        what: "The participant handbook, written out",
        owner: "Org Comm",
      },
      {
        area: "Logistics",
        what: "How teams get between The Grand and campus each morning, and who pays for it",
        owner: "Org Comm",
      },
      {
        area: "Logistics",
        what: "When we can issue visa invitation letters, and what they cover",
        owner: "Org Comm",
      },
      {
        area: "Logistics",
        what: "A room-by-room access survey of the campus and the hotel",
        note: "So we can say what is step-free instead of assuming",
        owner: "Org Comm",
      },
      {
        area: "Website",
        what: "The email address the site should send from",
        note: "Confirmation emails need an address that is ours and that will not land in spam",
        owner: "Org Comm",
      },
      {
        area: "Website",
        what: "A web address of our own to put the site on",
        note: "It sits on a free address today, which works but does not read as ours",
        owner: "Sayiram",
      },
      {
        area: "Website",
        what: "How long we keep people's details after the tournament ends",
        owner: "Org Comm",
      },
      {
        area: "People",
        what: "Surnames for Anjali and Kamal, our two senior advisors",
        note: "Their posters only carry first names",
        owner: "Rajat and Krishnatara",
      },
      {
        area: "People",
        what: "Debating records for the twenty-one advisors",
        note: "The posters carry their names and countries and nothing else",
        owner: "Rajat and Krishnatara",
      },
    ],
  },
  {
    key: "later",
    title: "The second build",
    tone: "later",
    blurb:
      "None of this can sit on a plain website. It needs people to sign in and a place to keep their answers, which is a separate build. It is not started, and it does not need to be until registration opens.",
    items: [
      { what: "Signing in, with a personal page for each team and judge" },
      { what: "The registration form itself, and showing whether payment has landed" },
      { what: "A checklist per team of every form they still owe us, with deadlines" },
      { what: "Separate views for each committee, so people only see their own work" },
      { what: "Confidential handling of equity and grievance cases" },
      { what: "Announcements that go out by email and appear when someone signs in" },
      { what: "Letting the organising committee pull the numbers out into a spreadsheet" },
      { what: "Checking people in on the day with a QR code" },
      { what: "Certificates after the tournament" },
    ],
  },
];

export const counts = {
  done: groups.find((g) => g.key === "live")!.items.length,
  waiting: groups.find((g) => g.key === "waiting")!.items.length,
  later: groups.find((g) => g.key === "later")!.items.length,
};
