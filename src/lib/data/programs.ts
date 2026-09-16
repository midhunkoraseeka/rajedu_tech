export type ProgramSlug = "engineering" | "medical" | "management";

export type ProgramIcon = "cog" | "stethoscope" | "bar-chart";

export interface Program {
  slug: ProgramSlug;
  shortName: string;
  name: string;
  fullName: string;
  icon: ProgramIcon;
  summary: string;
  description: string;
  whoItsFor: string[];
  eligibility: string[];
  seatCategories: { name: string; note: string }[];
  documents: string[];
  timelineNote: string;
  faqs: { question: string; answer: string }[];
}

export const programs: Program[] = [
  {
    slug: "engineering",
    shortName: "BTech",
    name: "BTech / Engineering",
    fullName: "BTech / Engineering Admissions",
    icon: "cog",
    summary:
      "Guidance for management quota and NRI quota engineering seats across branches like CSE, ECE, Mechanical and Civil.",
    description:
      "Engineering admissions through management quota run on a compressed timeline once counseling rounds close. We help you shortlist colleges by branch, campus and fee bracket, understand what a seat actually costs over four years, and complete verification and reporting before the deadline.",
    whoItsFor: [
      "Students whose entrance exam rank limits their counseling options at their preferred branch or college",
      "Families with a strong preference for a specific city or college",
      "Anyone who missed a counseling round and still has a genuine, time-bound option",
    ],
    eligibility: [
      "Pass in 10+2 with Physics, Chemistry and Mathematics",
      "Minimum aggregate as prescribed by the state admission authority",
      "A valid entrance exam score where the college requires one (JEE Main or the relevant state CET)",
    ],
    seatCategories: [
      { name: "Management quota", note: "Seats filled directly by the college, outside the state counseling pool." },
      { name: "NRI quota", note: "A separate fee structure and eligibility route for NRI-sponsored candidates." },
      { name: "Spot admission", note: "Seats that remain vacant after regular rounds, offered on a first-come basis." },
    ],
    documents: [
      "10th and 12th mark sheets and certificates",
      "Entrance exam scorecard (if applicable)",
      "Transfer and conduct certificate",
      "Category and income certificate (if applicable)",
      "Passport-size photographs and ID proof",
    ],
    timelineNote:
      "Management quota engineering seats are typically confirmed within 2–4 weeks of regular counseling closing, but strong branches at well-known colleges fill early.",
    faqs: [
      {
        question: "Is a JEE or CET score compulsory for a management quota BTech seat?",
        answer:
          "Most colleges expect a valid, minimum qualifying score in the relevant entrance exam even for management quota seats. A few autonomous colleges accept board marks directly. We'll confirm the exact requirement for each college on your shortlist.",
      },
      {
        question: "Can I change my branch after taking admission?",
        answer:
          "Branch changes are usually only possible within a college's own policy window, subject to seat availability and your first-year performance. It is not guaranteed, so we recommend choosing a branch you're committed to at the time of admission.",
      },
    ],
  },
  {
    slug: "medical",
    shortName: "MBBS",
    name: "MBBS / Medical",
    fullName: "MBBS Admissions",
    icon: "stethoscope",
    summary:
      "Guidance for management quota and NRI quota MBBS seats in NMC-recognised private medical colleges.",
    description:
      "MBBS management quota admissions involve the highest stakes and the least room for error — a missed document or a missed reporting date can cost a seat entirely. We help you understand realistic options at your NEET score, compare fee structures honestly, and manage documentation against strict deadlines.",
    whoItsFor: [
      "Students whose NEET rank limits their counseling options at their preferred college",
      "Families evaluating private colleges alongside state counseling options",
      "Anyone needing a clear, honest read on realistic options before a deadline",
    ],
    eligibility: [
      "Pass in 10+2 with Physics, Chemistry, Biology and English",
      "A valid, qualifying NEET-UG score and rank",
      "Minimum age and aggregate criteria as prescribed by the National Medical Commission",
    ],
    seatCategories: [
      { name: "Management quota", note: "Filled by the college's management, within NMC-approved fee limits." },
      { name: "NRI quota", note: "Reserved for NRI-sponsored candidates, under a distinct fee structure." },
      { name: "State quota", note: "Allocated through the respective state's counseling authority, not by us." },
    ],
    documents: [
      "NEET-UG admit card and scorecard",
      "10th and 12th mark sheets and certificates",
      "NEET qualifying certificate",
      "Category, income and domicile certificates (if applicable)",
      "Passport-size photographs and ID proof",
    ],
    timelineNote:
      "Private medical college management quota rounds move fast after each state's mop-up round — often within days. Keep documents ready in advance.",
    faqs: [
      {
        question: "What NEET score is realistically needed for a management quota MBBS seat?",
        answer:
          "This varies significantly by state, college and year. We map your NEET rank against the previous years' closing trends for colleges on your shortlist so you're evaluating realistic options, not guesses.",
      },
      {
        question: "Are management quota MBBS fees fixed?",
        answer:
          "Fees are capped by state Fee Regulatory Committees or the National Medical Commission, but they still vary widely by college. We help you get the fee structure in writing before you commit.",
      },
    ],
  },
  {
    slug: "management",
    shortName: "BBA/MBA",
    name: "BBA/MBA / Management",
    fullName: "BBA/MBA Admissions",
    icon: "bar-chart",
    summary:
      "Guidance for management quota BBA, MBA and PGDM seats at AICTE-approved and university-affiliated business schools.",
    description:
      "BBA and MBA management quota admissions give you more flexibility than engineering or medicine, but the range in placement quality and fee structure across colleges is wide. We help you evaluate colleges on outcomes that matter — specialization strength, average placement, and total cost — not just brand recall.",
    whoItsFor: [
      "12th-pass students weighing a direct BBA route against a later MBA",
      "Graduates evaluating specialisation strength over college brand alone",
      "Working professionals considering a sponsored or executive MBA route",
      "Anyone weighing total cost against realistic placement outcomes",
    ],
    eligibility: [
      "For BBA: a pass in 10+2 in any stream, plus any college-specific entrance test or merit criteria",
      "For MBA/PGDM: a recognised bachelor's degree in any discipline",
      "Minimum aggregate as prescribed by the college or affiliating university",
      "A valid entrance score where required (CAT, MAT, CMAT or the relevant state CET for MBA; college-specific tests such as NPAT or SET for BBA)",
    ],
    seatCategories: [
      { name: "Management quota", note: "Seats filled directly by the institute, outside centralised counseling." },
      { name: "Sponsored / NRI quota", note: "For working professionals or NRI-sponsored candidates, where offered." },
      { name: "Direct admission", note: "Available at many autonomous institutes without a mandatory entrance score." },
    ],
    documents: [
      "Bachelor's degree mark sheets and certificate",
      "Entrance exam scorecard (if applicable)",
      "Work experience certificates (if applicable)",
      "Category and income certificate (if applicable)",
      "Passport-size photographs and ID proof",
    ],
    timelineNote:
      "BBA/MBA management quota admissions stay open longer than engineering or medicine, often into the start of the term, but specialization seats fill earlier.",
    faqs: [
      {
        question: "Do I need CAT or MAT for a management quota BBA/MBA seat?",
        answer:
          "It depends on the level and the institute. MBA seats often expect a CAT/MAT/CMAT score, though many autonomous business schools admit through their own process or accept a lower cutoff for management quota seats. BBA seats are usually filled through 12th-grade marks or a college-specific test rather than CAT/MAT. We'll match you to institutes that fit your profile.",
      },
      {
        question: "How much does placement quality actually vary by college?",
        answer:
          "Considerably. We walk you through each shortlisted college's placement record, recruiter profile and specialization strength so the fee you pay is weighed against a realistic outcome.",
      },
    ],
  },
];

export function getProgram(slug: string) {
  return programs.find((p) => p.slug === slug);
}
