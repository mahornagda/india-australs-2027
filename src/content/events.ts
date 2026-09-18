/**
 * The tournaments this team has between them judged, chaired, run or won.
 * Every entry comes from the credits on the tournament's own announcement
 * posters. Nothing is inferred, and acronyms are only expanded where the
 * expansion is certain.
 */
export type Event = {
  slug: string;
  name: string;
  full?: string;
  kind: "international" | "regional" | "domestic";
  blurb?: string;
};

export const events: Event[] = [
  {
    slug: "wudc",
    name: "WUDC",
    full: "World Universities Debating Championship",
    kind: "international",
    blurb:
      "The world championship, held over New Year. The largest debating tournament there is.",
  },
  {
    slug: "australs",
    name: "Australs",
    full: "Australasian Intervarsity Debating Championship",
    kind: "international",
    blurb: "This tournament. Held every year since 1975, in a different city each time.",
  },
  {
    slug: "abp",
    name: "ABP",
    full: "Asian British Parliamentary Debating Championship",
    kind: "international",
    blurb: "Asia's British Parliamentary championship.",
  },
  {
    slug: "uadc",
    name: "UADC",
    full: "United Asian Debating Championship",
    kind: "international",
    blurb: "The Asian championship, debated in the Australasian format.",
  },
  {
    slug: "easters",
    name: "Easters",
    kind: "regional",
    blurb: "The Australasian intervarsity championship for novice and intermediate debaters.",
  },
  {
    slug: "neadc",
    name: "NEADC",
    kind: "regional",
    blurb: "The North East Asian championship.",
  },
  {
    slug: "awgmdc",
    name: "UNSW AWGMDC",
    kind: "regional",
    blurb: "The Australasian women's and gender minorities championship, hosted by UNSW.",
  },
  { slug: "nalsar", name: "NALSAR", kind: "domestic" },
  { slug: "cupd", name: "CUPD", kind: "domestic" },
  { slug: "delhi-debate-open", name: "Delhi Debate Open", kind: "domestic" },
  { slug: "the-delhi-debate", name: "The Delhi Debate", kind: "domestic" },
  { slug: "nls-pd", name: "NLS PD", kind: "domestic" },
  { slug: "nuals-pd", name: "NUALS PD", kind: "domestic" },
  { slug: "nitd-pd", name: "NITD PD", kind: "domestic" },
  { slug: "dtu-pd", name: "DTU PD", kind: "domestic" },
  { slug: "rmlpd", name: "RMLPD", kind: "domestic" },
  { slug: "east-india-pre-abp", name: "East India Pre ABP", kind: "domestic" },
  { slug: "east-india-pre-wudc", name: "East India Pre WUDC", kind: "domestic" },
  {
    slug: "india-pre-wudc-fundraiser",
    name: "India Pre-WUDC Fundraiser",
    kind: "domestic",
  },
];

export const eventBySlug = Object.fromEntries(events.map((e) => [e.slug, e]));
