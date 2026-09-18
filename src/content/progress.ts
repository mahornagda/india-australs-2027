export type Item = { what: string; note?: string; owner?: string };
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
      { what: "See the venue — IIT Delhi — and the hotel we are putting teams in" },
      {
        what: "Meet the three Chief Adjudicators and read their full judging record",
        note: "Pranav Kagalkar, Ally Pitt and Sunghyun Park",
      },
      { what: "See the tab team, the organising committee and all twenty-one advisors" },
      {
        what: "See the map of every country our advisors cover",
        note: "Eighteen countries, five regions, drawn as routes into Delhi",
      },
      {
        what: "Read the questions we can answer, and see plainly which ones we cannot yet",
        note: "Nineteen questions. Ten are answered, nine are openly marked as undecided",
      },
      { what: "Search the questions by typing, instead of scrolling the whole list" },
      { what: "Leave a name and an email to be told the day registration opens" },
      { what: "Find who to contact, and about what" },
      { what: "Read all of it on a phone, and with a screen reader" },
      { what: "Follow this page to see exactly where the website stands" },
    ],
  },
  {
    key: "waiting",
    title: "Waiting on an answer",
    tone: "waiting",
    blurb:
      "Each of these is a blank on the site right now. The page is already built — it just needs the answer typed in. The name beside it is the person who has it.",
    items: [
      {
        what: "Confirm 27 June to 4 July 2027 is final, and not moving",
        owner: "Sayiram",
      },
      {
        what: "Who is allowed to enter — which countries, and how many teams a university may send",
        owner: "Sayiram and the adjudication core",
      },
      { what: "The entry fee, and exactly what it covers", owner: "Sayiram" },
      { what: "The day registration opens and the day it closes", owner: "Org Comm" },
      {
        what: "How people pay — card, bank transfer or UPI",
        note: "This decides which payment company we sign up with",
        owner: "Org Comm",
      },
      {
        what: "Whether a debater signs up for themselves, or a university signs up for its teams",
        note: "This changes the shape of the registration form, so it is worth settling early",
        owner: "Org Comm",
      },
      {
        what: "The email address the site should send from",
        note: "Confirmation emails need an address that is ours and that will not land in spam",
        owner: "Org Comm",
      },
      { what: "The day-by-day running order, once rounds are set", owner: "Jemma and Pranjal" },
      { what: "The participant handbook and the equity policy, written out", owner: "Equity team" },
      {
        what: "Whether we keep the existing tab software or wire it into this site",
        owner: "Jemma",
      },
      {
        what: "How long we keep people's details after the tournament ends",
        owner: "Org Comm",
      },
      {
        what: "Surnames for Anjali and Kamal, our two senior advisors",
        note: "Their posters only carry first names",
        owner: "Rajat and Krishnatara",
      },
      {
        what: "A web address of our own to put the site on",
        note: "It sits on a free address today, which works but does not read as ours",
        owner: "Sayiram",
      },
      {
        what: "Whether the campus and the hotel are step-free, checked rather than assumed",
        owner: "Org Comm",
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
