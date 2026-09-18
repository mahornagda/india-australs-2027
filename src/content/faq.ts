export type Faq = {
  q: string;
  a: string;
  group: string;
  pending?: boolean;
};

export const faqGroups = [
  "The tournament",
  "Getting there and staying",
  "Registering",
  "Judging",
  "Equity and access",
];

export const faqs: Faq[] = [
  {
    group: "The tournament",
    q: "What is India Australs 2027?",
    a: "It is the Australasian Intervarsity Debating Championship, the oldest and largest university debating championship in the region. In 2027 it comes to India for the first time, hosted in New Delhi.",
  },
  {
    group: "The tournament",
    q: "When does it run?",
    a: "27 June to 4 July 2027. Those are the dates on our announcement. The hour-by-hour running order is still being set, and will appear on the schedule page once it is.",
  },
  {
    group: "The tournament",
    q: "Where is it held?",
    a: "IIT Delhi, in south New Delhi. Debates run in the campus lecture theatres and auditorium.",
  },
  {
    group: "The tournament",
    q: "Who is organising it?",
    a: "The Indian Debating League, together with the IIT Delhi Debating Society.",
  },
  {
    group: "The tournament",
    q: "What format is debated?",
    a: "Australs is debated in the Australasian format — three speakers a side, one reply. How many preliminary rounds there are, and how the break is structured, is set by the adjudication core and is not confirmed yet.",
    pending: true,
  },
  {
    group: "Getting there and staying",
    q: "Where do teams stay?",
    a: "The Grand New Delhi, in Vasant Kunj. It is the tournament's accommodation partner.",
  },
  {
    group: "Getting there and staying",
    q: "Which airport should I fly into?",
    a: "Indira Gandhi International Airport, code DEL. It is the only international airport serving Delhi and it is around 30 to 45 minutes from both the hotel and the campus.",
  },
  {
    group: "Getting there and staying",
    q: "Is accommodation part of the registration fee?",
    a: "Not decided yet. The organising committee is still settling what the fee covers.",
    pending: true,
  },
  {
    group: "Getting there and staying",
    q: "Will you help with visas?",
    a: "We will publish visa guidance and issue invitation letters to registered teams. The process and timing are not confirmed yet.",
    pending: true,
  },
  {
    group: "Registering",
    q: "Is registration open?",
    a: "Not yet. Leave your email on the register page and you will hear the day it opens, before it is announced anywhere else.",
  },
  {
    group: "Registering",
    q: "What does it cost?",
    a: "Not decided yet. The fee and what it includes will be published together, well before registration opens.",
    pending: true,
  },
  {
    group: "Registering",
    q: "Who can enter, and how many teams per university?",
    a: "Not decided yet. The organising committee and the adjudication core are settling which regions are eligible and the cap per institution.",
    pending: true,
  },
  {
    group: "Registering",
    q: "Do debaters sign up one by one, or does the university sign up for them?",
    a: "Not decided yet. This changes what the registration form looks like, so it is one of the first things we will confirm.",
    pending: true,
  },
  {
    group: "Registering",
    q: "Are there scholarships or subsidised places?",
    a: "Yes, there will be a scholarship route. Who it is open to and how much it covers is not settled yet.",
    pending: true,
  },
  {
    group: "Judging",
    q: "Does my team have to bring a judge?",
    a: "Not confirmed yet. Australs tournaments normally ask for one judge per team or two, and the adjudication core will set the requirement.",
    pending: true,
  },
  {
    group: "Judging",
    q: "Can I come as an independent adjudicator?",
    a: "Yes. There will be a separate application for independent adjudicators, opening alongside team registration.",
    pending: true,
  },
  {
    group: "Equity and access",
    q: "Who do I speak to about an equity concern?",
    a: "There will be an equity team with its own confidential contact, published before registration opens. Anything raised with them stays with them.",
    pending: true,
  },
  {
    group: "Equity and access",
    q: "How do I tell you about dietary or access needs?",
    a: "You will be asked on a form after your registration is confirmed, covering food, accessibility and accommodation preferences together.",
  },
  {
    group: "Equity and access",
    q: "Is the campus and hotel step-free?",
    a: "We are checking this properly rather than guessing, and will publish what is and is not step-free at both sites.",
    pending: true,
  },
];
