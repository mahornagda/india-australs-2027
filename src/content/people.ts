export type Person = {
  name: string;
  country?: string;
  role?: string;
  photo?: string;
  credits?: string[];
};

export const chiefAdjudicators: Person[] = [
  {
    name: "Pranav Kagalkar",
    country: "India",
    photo: "pranav-kagalkar",
    credits: [
      "Deputy Chief Adjudicator, WUDC 2025 and ABP 2022",
      "WUDC Finals Judge, 2021, 2022, 2023 and 2026",
      "UADC Finals Chair, 2023 and 2025",
      "Australs Finals Judge, 2021 and 2025",
      "ABP Finals Judge, 2023 and 2025",
    ],
  },
  {
    name: "Ally Pitt",
    country: "Australia",
    photo: "ally-pitt",
    credits: [
      "Open Grand Finals Chair, Australs 2026",
      "Grand Finalist and 3rd Best Speaker, Australs 2025",
      "Champion and Best Speaker, Easters 2025",
      "Quarter Finals Judge, WUDC 2024",
      "Quarter Finalist, WUDC 2022",
    ],
  },
  {
    name: "Sunghyun Park",
    country: "South Korea",
    photo: "sunghyun-park",
    credits: [
      "Chief Adjudicator, ABP 2025 and NEADC 2024",
      "EFL Finals Chair and 2nd Best Judge, ABP 2024",
      "Open Grand Finals Panel and 7th Best Judge, Australs 2025",
      "ESL Semis Judge, WUDC 2025",
      "Open Break and 3rd Best EFL Speaker, WUDC 2026",
    ],
  },
];

export const tabTeam: Person[] = [
  {
    name: "Jemma Griffin",
    country: "Australia",
    role: "Tab Director",
    photo: "jemma-griffin",
    credits: [
      "Tab Director, Australs 2026",
      "Australs Tab Team, 2024 and 2025",
      "WUDC Tab Team, 2026 and 2027",
      "Easters Tab Director, 2025 and 2026",
    ],
  },
  {
    name: "Pranjal Singla",
    country: "India",
    role: "Deputy Tab Director",
    photo: "pranjal-singla",
    credits: [
      "Tab Director, NALSAR 2024",
      "Tab Director, CUPD 2024",
      "Tab Director, Delhi Debate Open 2024 and 2025",
      "ESL Semi Finalist, Nepal Australs 2021",
      "Open Double Octofinalist, Malaysia UADC 2022",
    ],
  },
];

export const orgComm: Person[] = [
  {
    name: "V. Sayiram",
    role: "Convenor",
    photo: "v-sayiram",
    credits: [
      "Deputy Chief Adjudicator, Kuantan ABP",
      "ESL Semifinalist, Panama WUDC",
      "Org Team, India Pre-WUDC Fundraiser 2023, The Delhi Debate 2024, DTU PD 2023",
    ],
  },
  {
    name: "Krishnatara Senthil Kumar",
    role: "Organising Committee",
    credits: [
      "Debate Secretary, NUALS",
      "Co-Convenor, NUALS PD 2026",
      "Quarter-Finalist, NLS PD 2024",
    ],
  },
  {
    name: "Rajat Mukherjee",
    role: "Organising Committee",
    credits: [
      "Convenor, East India Pre ABP 2026",
      "Co-Convenor, East India Pre WUDC 2025",
      "Open Champion, NITD PD 2026",
    ],
  },
  {
    name: "Vani Bhardwaj",
    role: "Organising Committee",
    credits: [
      "Quarter-Finals Panellist, ABP 2025",
      "ESL Finals Panellist, UNSW AWGMDC 2025",
      "Org Comm, RMLPD X-XIV",
    ],
  },
  {
    name: "Vansh Chadha",
    role: "Organising Committee",
    credits: [
      "Deputy Chief Adjudicator, Australs 2026",
      "Deputy Chief Adjudicator, UADC 2025",
      "Convenor, DTU PD 2023",
    ],
  },
];

export const seniorAdvisors: Person[] = [
  { name: "Anjali", role: "Senior Advisor" },
  { name: "Kamal", role: "Senior Advisor" },
];

export type Region = { region: string; card: string; people: Person[] };

export const regionalAdvisors: Region[] = [
  {
    region: "South Asia",
    card: "adv-sa",
    people: [
      { name: "Aayana Rai Bhojani", country: "India" },
      { name: "Daniel Victor", country: "Sri Lanka" },
      { name: "Sajid Asbat Khandaker", country: "Bangladesh" },
      { name: "Srijan Poudel", country: "Nepal" },
    ],
  },
  {
    region: "South East Asia",
    card: "adv-sea",
    people: [
      { name: "Bea Legaspi", country: "Philippines" },
      { name: "Ian Dylan Chai", country: "Malaysia / Singapore" },
      { name: "Patrick Cheang", country: "Malaysia" },
      { name: "Tengku Omar", country: "Indonesia" },
      { name: "Vũ Anh Tuấn", country: "Vietnam" },
    ],
  },
  {
    region: "North East Asia",
    card: "adv-nea",
    people: [
      { name: "Donner Tang", country: "Macau" },
      { name: "Minami Matsushima", country: "Japan" },
      { name: "Ricky Jin", country: "China" },
      { name: "Youngwoo Park", country: "South Korea" },
    ],
  },
  {
    region: "Oceania",
    card: "adv-oceania",
    people: [
      { name: "Aisha O'Malley", country: "New Zealand" },
      { name: "Jordyn Gibson", country: "Australia" },
      { name: "Kat Cheng", country: "Australia" },
    ],
  },
  {
    region: "Beyond Australasia",
    card: "adv-beyond",
    people: [
      { name: "Jane Mentzinger", country: "USA" },
      { name: "Juanita Hincapié Restrepo", country: "Colombia" },
      { name: "Marta Vasić", country: "Serbia" },
    ],
  },
];

export const advisorCount =
  regionalAdvisors.reduce((n, r) => n + r.people.length, 0) + seniorAdvisors.length;
