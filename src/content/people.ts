export type Credit = {
  event: string;
  year?: string;
  /** The named edition, where the poster gives one instead of a year. */
  edition?: string;
  role: string;
};

export type Group = "cap" | "tab" | "oc" | "senior" | "advisor";

export type Person = {
  slug: string;
  name: string;
  group: Group;
  role: string;
  country?: string;
  region?: string;
  photo?: string;
  affiliation?: string;
  credits: Credit[];
};

export const groupLabel: Record<Group, string> = {
  cap: "Adjudication core",
  tab: "Tab team",
  oc: "Organising committee",
  senior: "Senior advisor",
  advisor: "Regional advisor",
};

export const people: Person[] = [
  {
    slug: "pranav-kagalkar",
    name: "Pranav Kagalkar",
    group: "cap",
    role: "Chief Adjudicator",
    country: "India",
    region: "South Asia",
    photo: "pranav-kagalkar",
    credits: [
      { event: "wudc", year: "2025", role: "Deputy Chief Adjudicator" },
      { event: "abp", year: "2022", role: "Deputy Chief Adjudicator" },
      { event: "wudc", year: "2021", role: "Finals Judge" },
      { event: "wudc", year: "2022", role: "Finals Judge" },
      { event: "wudc", year: "2023", role: "Finals Judge" },
      { event: "wudc", year: "2026", role: "Finals Judge" },
      { event: "uadc", year: "2023", role: "Finals Chair" },
      { event: "uadc", year: "2025", role: "Finals Chair" },
      { event: "australs", year: "2021", role: "Finals Judge" },
      { event: "australs", year: "2025", role: "Finals Judge" },
      { event: "abp", year: "2023", role: "Finals Judge" },
      { event: "abp", year: "2025", role: "Finals Judge" },
    ],
  },
  {
    slug: "ally-pitt",
    name: "Ally Pitt",
    group: "cap",
    role: "Chief Adjudicator",
    country: "Australia",
    region: "Oceania",
    photo: "ally-pitt",
    credits: [
      { event: "australs", year: "2026", role: "Open Grand Finals Chair" },
      { event: "australs", year: "2025", role: "Grand Finalist, 3rd Best Speaker" },
      { event: "easters", year: "2025", role: "Champion, Best Speaker" },
      { event: "wudc", year: "2024", role: "Quarter Finals Judge" },
      { event: "wudc", year: "2022", role: "Quarter Finalist" },
    ],
  },
  {
    slug: "sunghyun-park",
    name: "Sunghyun Park",
    group: "cap",
    role: "Chief Adjudicator",
    country: "South Korea",
    region: "North East Asia",
    photo: "sunghyun-park",
    credits: [
      { event: "abp", year: "2025", role: "Chief Adjudicator" },
      { event: "neadc", year: "2024", role: "Chief Adjudicator" },
      { event: "abp", year: "2024", role: "EFL Finals Chair, 2nd Best Judge" },
      { event: "australs", year: "2025", role: "Open Grand Finals Panel, 7th Best Judge" },
      { event: "wudc", year: "2025", role: "ESL Semis Judge" },
      { event: "wudc", year: "2026", role: "Open Break, 3rd Best EFL Speaker" },
    ],
  },
  {
    slug: "jemma-griffin",
    name: "Jemma Griffin",
    group: "tab",
    role: "Tab Director",
    country: "Australia",
    region: "Oceania",
    photo: "jemma-griffin",
    credits: [
      { event: "australs", year: "2026", role: "Tab Director" },
      { event: "australs", year: "2024", role: "Tab Team" },
      { event: "australs", year: "2025", role: "Tab Team" },
      { event: "wudc", year: "2026", role: "Tab Team" },
      { event: "wudc", year: "2027", role: "Tab Team" },
      { event: "easters", year: "2025", role: "Tab Director" },
      { event: "easters", year: "2026", role: "Tab Director" },
    ],
  },
  {
    slug: "pranjal-singla",
    name: "Pranjal Singla",
    group: "tab",
    role: "Deputy Tab Director",
    country: "India",
    region: "South Asia",
    photo: "pranjal-singla",
    credits: [
      { event: "nalsar", year: "2024", role: "Tab Director" },
      { event: "cupd", year: "2024", role: "Tab Director" },
      { event: "delhi-debate-open", year: "2024", role: "Tab Director" },
      { event: "delhi-debate-open", year: "2025", role: "Tab Director" },
      { event: "australs", year: "2021", edition: "Nepal", role: "ESL Semi Finalist" },
      { event: "uadc", year: "2022", edition: "Malaysia", role: "Open Double Octofinalist" },
    ],
  },
  {
    slug: "v-sayiram",
    name: "V. Sayiram",
    group: "oc",
    role: "Convenor",
    country: "India",
    region: "South Asia",
    photo: "v-sayiram",
    credits: [
      { event: "abp", edition: "Kuantan", role: "Deputy Chief Adjudicator" },
      { event: "wudc", edition: "Panama", role: "ESL Semifinalist" },
      { event: "india-pre-wudc-fundraiser", year: "2023", role: "Org Team" },
      { event: "the-delhi-debate", year: "2024", role: "Org Team" },
      { event: "dtu-pd", year: "2023", role: "Org Team" },
    ],
  },
  {
    slug: "krishnatara-senthil-kumar",
    name: "Krishnatara Senthil Kumar",
    group: "oc",
    role: "Organising Committee",
    country: "India",
    region: "South Asia",
    affiliation: "Debate Secretary, NUALS",
    photo: "krishnatara-senthil-kumar",
    credits: [
      { event: "nuals-pd", year: "2026", role: "Co-Convenor" },
      { event: "nls-pd", year: "2024", role: "Quarter-Finalist" },
    ],
  },
  {
    slug: "rajat-mukherjee",
    name: "Rajat Mukherjee",
    group: "oc",
    role: "Organising Committee",
    country: "India",
    region: "South Asia",
    photo: "rajat-mukherjee",
    credits: [
      { event: "east-india-pre-abp", year: "2026", role: "Convenor" },
      { event: "east-india-pre-wudc", year: "2025", role: "Co-Convenor" },
      { event: "nitd-pd", year: "2026", role: "Open Champion" },
    ],
  },
  {
    slug: "vani-bhardwaj",
    name: "Vani Bhardwaj",
    group: "oc",
    role: "Organising Committee",
    country: "India",
    region: "South Asia",
    photo: "vani-bhardwaj",
    credits: [
      { event: "abp", year: "2025", role: "Quarter-Finals Panellist" },
      { event: "awgmdc", year: "2025", role: "ESL Finals Panellist" },
      { event: "rmlpd", edition: "X–XIV", role: "Org Comm" },
    ],
  },
  {
    slug: "vansh-chadha",
    name: "Vansh Chadha",
    group: "oc",
    role: "Organising Committee",
    country: "India",
    region: "South Asia",
    photo: "vansh-chadha",
    credits: [
      { event: "australs", year: "2026", role: "Deputy Chief Adjudicator" },
      { event: "uadc", year: "2025", role: "Deputy Chief Adjudicator" },
      { event: "dtu-pd", year: "2023", role: "Convenor" },
    ],
  },
  { slug: "anjali", name: "Anjali", group: "senior", role: "Senior Advisor", photo: "anjali", credits: [] },
  { slug: "kamal", name: "Kamal", group: "senior", role: "Senior Advisor", photo: "kamal", credits: [] },
];

const advisors: [string, string, string][] = [
  ["Aayana Rai Bhojani", "India", "South Asia"],
  ["Daniel Victor", "Sri Lanka", "South Asia"],
  ["Sajid Asbat Khandaker", "Bangladesh", "South Asia"],
  ["Srijan Poudel", "Nepal", "South Asia"],
  ["Bea Legaspi", "Philippines", "South East Asia"],
  ["Ian Dylan Chai", "Malaysia / Singapore", "South East Asia"],
  ["Patrick Cheang", "Malaysia", "South East Asia"],
  ["Tengku Omar", "Indonesia", "South East Asia"],
  ["Vũ Anh Tuấn", "Vietnam", "South East Asia"],
  ["Donner Tang", "Macau", "North East Asia"],
  ["Minami Matsushima", "Japan", "North East Asia"],
  ["Ricky Jin", "China", "North East Asia"],
  ["Youngwoo Park", "South Korea", "North East Asia"],
  ["Aisha O'Malley", "New Zealand", "Oceania"],
  ["Jordyn Gibson", "Australia", "Oceania"],
  ["Kat Cheng", "Australia", "Oceania"],
  ["Jane Mentzinger", "USA", "Beyond Australasia"],
  ["Juanita Hincapié Restrepo", "Colombia", "Beyond Australasia"],
  ["Marta Vasić", "Serbia", "Beyond Australasia"],
];

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

for (const [name, country, region] of advisors) {
  const slug = slugify(name);
  people.push({
    slug,
    name,
    group: "advisor",
    role: "Regional Advisor",
    country,
    region,
    photo: slug,
    credits: [],
  });
}

export const personBySlug = Object.fromEntries(people.map((p) => [p.slug, p]));

export const regions = [
  "South Asia",
  "South East Asia",
  "North East Asia",
  "Oceania",
  "Beyond Australasia",
];

/** Everyone who holds a credit at a given tournament, newest year first. */
export function peopleAtEvent(slug: string) {
  return people
    .flatMap((p) => p.credits.filter((c) => c.event === slug).map((c) => ({ person: p, credit: c })))
    .sort((a, b) => (b.credit.year ?? "0").localeCompare(a.credit.year ?? "0"));
}

export const creditCount = people.reduce((n, p) => n + p.credits.length, 0);
