export const site = {
  name: "India Australs 2027",
  longName: "Australasian Intervarsity Debating Championship 2027",
  city: "New Delhi",
  cityCode: "DEL",
  venue: "IIT Delhi",
  hotel: "The Grand New Delhi",
  start: "2027-06-27",
  end: "2027-07-04",
  datesLabel: "27 June – 4 July 2027",
  partners: ["Indian Debating League", "IIT Delhi Debating Society"],
  buildUpdated: "18 September 2026",
};

export const nav = [
  { href: "/tournament", label: "Tournament" },
  { href: "/people", label: "People" },
  { href: "/record", label: "Record" },
  { href: "/delhi", label: "Delhi" },
  { href: "/schedule", label: "Schedule" },
  { href: "/register", label: "Register" },
];

export const footerNav = [
  {
    head: "The tournament",
    links: [
      { href: "/tournament", label: "What Australs is" },
      { href: "/tournament#format", label: "How it is debated" },
      { href: "/schedule", label: "The eight days" },
      { href: "/record", label: "The record index" },
    ],
  },
  {
    head: "Coming to Delhi",
    links: [
      { href: "/delhi#venue", label: "IIT Delhi" },
      { href: "/delhi#stay", label: "Where you stay" },
      { href: "/delhi#city", label: "The city" },
      { href: "/delhi#getting-here", label: "Flights and visas" },
    ],
  },
  {
    head: "Taking part",
    links: [
      { href: "/register", label: "Register" },
      { href: "/register#judges", label: "Bringing a judge" },
      { href: "/register#money", label: "Fees and scholarships" },
      { href: "/register#equity", label: "Equity" },
    ],
  },
  {
    head: "People",
    links: [
      { href: "/people?group=cap", label: "Adjudication core" },
      { href: "/people?group=tab", label: "Tab team" },
      { href: "/people?group=oc", label: "Organising committee" },
      { href: "/people?group=advisor", label: "Advisors" },
    ],
  },
];

/**
 * Where the "tell me when registration opens" form posts.
 * Paste a Google Form's formResponse URL here and the form goes live;
 * leave it blank and the page says so honestly instead of pretending.
 */
export const interestForm = { action: "", nameField: "", emailField: "", instField: "" };
export const contactEmail = "";
