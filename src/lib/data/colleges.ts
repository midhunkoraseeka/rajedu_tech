import type { CitySlug } from "./cities";
import type { ProgramSlug } from "./programs";

export interface CollegeSeatInfo {
  program: ProgramSlug;
  branchesOrSpecialisations: string[];
  indicativeAnnualFee: string;
}

export interface College {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  city: CitySlug;
  programs: ProgramSlug[];
  type: "Private" | "Government" | "Deemed university" | "Autonomous";
  established: number;
  approval: string;
  location: string;
  website?: string;
  image?: string;
  verified: boolean;
  summary: string;
  highlights: string[];
  seats: CollegeSeatInfo[];
}

const CONTACT_FOR_FEE = "Contact us for current fee details";

// The BTech/engineering entries and the Hyderabad MBBS entries below are
// real institutions (per Raj Edutech's provided lists); the MBA entries and
// the MBBS entries for other cities are still an illustrative, placeholder
// directory pending a verified list — replace those before this goes live.
// `verified: false` marks every entry as not yet confirmed with the
// institution directly by Raj Edutech; nothing here should be taken as
// confirmation of a partnership, seat availability or fee until that flag
// is flipped. Indicative fees for the real colleges are intentionally left
// as "contact us" rather than a guessed figure, since these are
// identifiable real institutions, and all four Hyderabad MBBS colleges are
// government institutions admitting mainly through NEET-UG/state
// counseling rather than a management quota pool.
export const colleges: College[] = [
  {
    id: "col-hyd-eng-jntuh",
    slug: "jntuh-college-of-engineering-hyderabad",
    name: "JNTUH College of Engineering Hyderabad",
    shortName: "JNTUH CEH",
    city: "hyderabad",
    programs: ["engineering"],
    type: "Government",
    established: 1965,
    approval: "AICTE-approved; constituent college of Jawaharlal Nehru Technological University Hyderabad (JNTUH)",
    location: "Kukatpally, Hyderabad, Telangana",
    image: "/b_tech/JNTUH.webp",
    verified: false,
    summary:
      "A government-run constituent engineering college of JNTUH, with a long academic history and admissions driven mainly by state counseling rather than a broad management quota pool.",
    highlights: [
      "Government constituent college of JNTUH, not a private institution",
      "Long-established core and computing branches",
      "Admissions primarily through TS EAMCET/EAPCET counseling; seat availability outside that route is limited",
    ],
    seats: [
      {
        program: "engineering",
        branchesOrSpecialisations: ["CSE", "ECE", "EEE", "Mechanical", "Civil", "IT"],
        indicativeAnnualFee: CONTACT_FOR_FEE,
      },
    ],
  },
  {
    id: "col-hyd-eng-cbit",
    slug: "chaitanya-bharathi-institute-of-technology",
    name: "Chaitanya Bharathi Institute of Technology",
    shortName: "CBIT",
    city: "hyderabad",
    programs: ["engineering"],
    type: "Autonomous",
    established: 1979,
    approval: "AICTE-approved, UGC-autonomous institute affiliated to Osmania University",
    location: "Gandipet, Hyderabad, Telangana",
    image: "/b_tech/CBIT.webp",
    verified: false,
    summary:
      "A long-established, UGC-autonomous private engineering college and one of Hyderabad's more sought-after institutions for computing and core branches.",
    highlights: [
      "UGC-autonomous status",
      "Well-regarded computing and core engineering branches",
      "Established recruiter relationships and placement cell",
    ],
    seats: [
      {
        program: "engineering",
        branchesOrSpecialisations: ["CSE", "IT", "ECE", "EEE", "Mechanical", "Civil"],
        indicativeAnnualFee: CONTACT_FOR_FEE,
      },
    ],
  },
  {
    id: "col-hyd-eng-vnrvjiet",
    slug: "vnr-vignana-jyothi-institute-of-engineering-and-technology",
    name: "VNR Vignana Jyothi Institute of Engineering and Technology",
    shortName: "VNR VJIET",
    city: "hyderabad",
    programs: ["engineering"],
    type: "Autonomous",
    established: 1995,
    approval: "AICTE-approved, UGC-autonomous institute affiliated to JNTUH",
    location: "Bachupally, Hyderabad, Telangana",
    image: "/b_tech/VNR_VJIET.webp",
    verified: false,
    summary:
      "A UGC-autonomous private engineering college with a modern campus and a strong industry-connect programme across computing and core branches.",
    highlights: [
      "UGC-autonomous status",
      "Active industry-connect and placement programme",
      "Modern, well-equipped campus facilities",
    ],
    seats: [
      {
        program: "engineering",
        branchesOrSpecialisations: ["CSE", "IT", "ECE", "EEE", "Mechanical", "Civil"],
        indicativeAnnualFee: CONTACT_FOR_FEE,
      },
    ],
  },
  {
    id: "col-hyd-eng-ou",
    slug: "osmania-university",
    name: "Osmania University",
    shortName: "OU",
    city: "hyderabad",
    programs: ["engineering"],
    type: "Government",
    established: 1918,
    approval: "UGC-recognised state university; engineering programmes offered through its University College of Engineering",
    location: "Osmania University campus, Amberpet, Hyderabad, Telangana",
    image: "/b_tech/Osmania.png",
    verified: false,
    summary:
      "One of India's oldest state universities, with a long-standing engineering college. Admissions are driven mainly by state counseling rather than a broad management quota pool.",
    highlights: [
      "One of India's oldest and most established universities",
      "Long-standing University College of Engineering",
      "Admissions primarily through TS EAMCET/EAPCET counseling; seat availability outside that route is limited",
    ],
    seats: [
      {
        program: "engineering",
        branchesOrSpecialisations: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
        indicativeAnnualFee: CONTACT_FOR_FEE,
      },
    ],
  },
  {
    id: "col-hyd-eng-vasavi",
    slug: "vasavi-college-of-engineering",
    name: "Vasavi College of Engineering",
    shortName: "Vasavi",
    city: "hyderabad",
    programs: ["engineering"],
    type: "Autonomous",
    established: 1981,
    approval: "AICTE-approved, UGC-autonomous institute affiliated to Osmania University",
    location: "Ibrahimbagh, Hyderabad, Telangana",
    image: "/b_tech/Vasavi.jpg",
    verified: false,
    summary:
      "A well-regarded, UGC-autonomous private engineering college in Hyderabad with a long-standing reputation across core and computing branches.",
    highlights: [
      "UGC-autonomous status",
      "Well-regarded core and computing branches",
      "Established private engineering college in Hyderabad",
    ],
    seats: [
      {
        program: "engineering",
        branchesOrSpecialisations: ["CSE", "IT", "ECE", "EEE", "Mechanical", "Civil"],
        indicativeAnnualFee: CONTACT_FOR_FEE,
      },
    ],
  },
  {
    id: "col-hyd-med-omc",
    slug: "osmania-medical-college",
    name: "Osmania Medical College",
    shortName: "OMC",
    city: "hyderabad",
    programs: ["medical"],
    type: "Government",
    established: 1946,
    approval: "NMC-recognised; affiliated to Kaloji Narayana Rao University of Health Sciences (KNRUHS)",
    location: "Koti, Hyderabad, Telangana",
    image: "/mbbs_hyderabad/OMC.jpeg",
    verified: false,
    summary:
      "One of Telangana's oldest government medical colleges, with a large attached teaching hospital and a long-standing academic history.",
    highlights: [
      "One of the oldest government medical colleges in the state",
      "Large attached teaching hospital with high patient volume",
      "Admissions primarily through NEET-UG and TS state counseling; seat availability outside that route is limited",
    ],
    seats: [{ program: "medical", branchesOrSpecialisations: ["MBBS"], indicativeAnnualFee: CONTACT_FOR_FEE }],
  },
  {
    id: "col-hyd-med-gmc",
    slug: "gandhi-medical-college",
    name: "Gandhi Medical College",
    shortName: "GMC",
    city: "hyderabad",
    programs: ["medical"],
    type: "Government",
    established: 1954,
    approval: "NMC-recognised; affiliated to Kaloji Narayana Rao University of Health Sciences (KNRUHS)",
    location: "Musheerabad, Secunderabad, Telangana",
    image: "/mbbs_hyderabad/GMC.png",
    verified: false,
    summary:
      "A long-established government medical college in Secunderabad with a large attached Gandhi Hospital serving the twin cities.",
    highlights: [
      "Large attached Gandhi Hospital with a high patient volume",
      "Long-established government medical college",
      "Admissions primarily through NEET-UG and TS state counseling; seat availability outside that route is limited",
    ],
    seats: [{ program: "medical", branchesOrSpecialisations: ["MBBS"], indicativeAnnualFee: CONTACT_FOR_FEE }],
  },
  {
    id: "col-hyd-med-kmc",
    slug: "kakatiya-medical-college",
    name: "Kakatiya Medical College",
    shortName: "KMC",
    city: "hyderabad",
    programs: ["medical"],
    type: "Government",
    established: 1959,
    approval: "NMC-recognised; affiliated to Kaloji Narayana Rao University of Health Sciences (KNRUHS)",
    location: "Warangal, Telangana",
    image: "/mbbs_hyderabad/kakatiyamedical.webp",
    verified: false,
    summary:
      "A long-established government medical college based in Warangal, one of the older medical teaching institutions in the Telangana region.",
    highlights: [
      "Long-established government medical college in Warangal",
      "Attached teaching hospital serving the wider region",
      "Admissions primarily through NEET-UG and TS state counseling; seat availability outside that route is limited",
    ],
    seats: [{ program: "medical", branchesOrSpecialisations: ["MBBS"], indicativeAnnualFee: CONTACT_FOR_FEE }],
  },
  {
    id: "col-hyd-med-esic",
    slug: "esic-medical-college-hyderabad",
    name: "ESIC Medical College, Hyderabad",
    shortName: "ESIC",
    city: "hyderabad",
    programs: ["medical"],
    type: "Government",
    established: 2013,
    approval: "NMC-recognised; run by the Employees' State Insurance Corporation (ESIC), Ministry of Labour and Employment, Government of India",
    location: "Sanathnagar, Hyderabad, Telangana",
    image: "/mbbs_hyderabad/ESIC-Medical-College-Hyderabad-2.webp",
    verified: false,
    summary:
      "A central government medical college run by ESIC, with an attached hospital campus in Sanathnagar, Hyderabad.",
    highlights: [
      "Run by a central government body (ESIC), not a private trust",
      "Attached ESIC hospital campus",
      "Admissions primarily through NEET-UG and central/state counseling; seat availability outside that route is limited",
    ],
    seats: [{ program: "medical", branchesOrSpecialisations: ["MBBS"], indicativeAnnualFee: CONTACT_FOR_FEE }],
  },
  {
    id: "col-hyd-mgmt-isb",
    slug: "indian-school-of-business-hyderabad",
    name: "Indian School of Business (ISB), Hyderabad",
    shortName: "ISB",
    city: "hyderabad",
    programs: ["management"],
    type: "Autonomous",
    established: 2001,
    approval: "Autonomous institute; admission to its flagship PGP is by application, GMAT/GRE and interview — there is no management quota or donation-based seat route here",
    location: "Gachibowli, Hyderabad, Telangana",
    image: "/bba_hyd/isb.png",
    verified: false,
    summary:
      "One of India's top-ranked business schools, known for its one-year Post Graduate Programme in Management (PGP) rather than a traditional two-year MBA.",
    highlights: [
      "Consistently ranked among India's top business schools",
      "Admission is purely merit-based through GMAT/GRE, essays and interviews",
      "No management quota or direct-admission route — we can help with profile and application guidance only, not a guaranteed or quota seat",
    ],
    seats: [
      {
        program: "management",
        branchesOrSpecialisations: ["PGP (Post Graduate Programme in Management)"],
        indicativeAnnualFee: CONTACT_FOR_FEE,
      },
    ],
  },
  {
    id: "col-hyd-mgmt-ifhe",
    slug: "icfai-foundation-for-higher-education-hyderabad",
    name: "ICFAI Foundation for Higher Education (IFHE), Hyderabad",
    shortName: "IFHE",
    city: "hyderabad",
    programs: ["management"],
    type: "Deemed university",
    established: 1995,
    approval: "UGC-recognised deemed-to-be university; parent institution of ICFAI Business School (IBS) Hyderabad",
    location: "Donthanapally, Shankarapalli Road, Hyderabad, Telangana",
    image: "/bba_hyd/ICFAI.png",
    verified: false,
    summary:
      "A UGC-recognised deemed university offering both BBA and MBA programmes through ICFAI Business School (IBS), with an established recruiter base across finance, marketing and analytics.",
    highlights: [
      "UGC-recognised deemed-to-be university status",
      "Offers both BBA (undergraduate) and MBA (postgraduate) business programmes",
      "Established recruiter relationships through ICFAI Business School (IBS)",
    ],
    seats: [
      {
        program: "management",
        branchesOrSpecialisations: ["BBA", "MBA — Finance, Marketing, HR, Analytics"],
        indicativeAnnualFee: CONTACT_FOR_FEE,
      },
    ],
  },
  {
    id: "col-hyd-mgmt-woxsen",
    slug: "woxsen-university",
    name: "Woxsen University",
    shortName: "Woxsen",
    city: "hyderabad",
    programs: ["management"],
    type: "Private",
    established: 2015,
    approval: "UGC-recognised state private university (Telangana)",
    location: "Kamkole, Sadasivpet, near Hyderabad, Telangana",
    image: "/bba_hyd/Woxen.webp",
    verified: false,
    summary:
      "A private university near Hyderabad built around its School of Business, offering BBA and MBA programmes alongside other disciplines.",
    highlights: [
      "UGC-recognised private university status",
      "Offers both BBA (undergraduate) and MBA (postgraduate) business programmes",
      "Modern campus with an industry-linked curriculum",
    ],
    seats: [
      {
        program: "management",
        branchesOrSpecialisations: ["BBA", "MBA — Finance, Marketing, HR, Business Analytics"],
        indicativeAnnualFee: CONTACT_FOR_FEE,
      },
    ],
  },
  {
    id: "col-blr-med-1",
    slug: "vidyanagar-medical-sciences",
    name: "Vidyanagar Institute of Medical Sciences",
    shortName: "VIMS",
    city: "bangalore",
    programs: ["medical"],
    type: "Deemed university",
    established: 1994,
    approval: "NMC-recognised, deemed-university status",
    location: "Bangalore, Karnataka",
    verified: false,
    summary:
      "A deemed university with an established medical college and a large attached hospital serving the wider region.",
    highlights: ["Large multi-specialty attached hospital", "Research-oriented faculty", "Established alumni network"],
    seats: [{ program: "medical", branchesOrSpecialisations: ["MBBS"], indicativeAnnualFee: "₹20L – ₹26L" }],
  },
  {
    id: "col-blr-mgmt-1",
    slug: "bangalore-graduate-school-of-management",
    name: "Bangalore Graduate School of Management",
    shortName: "BGSM",
    city: "bangalore",
    programs: ["management"],
    type: "Autonomous",
    established: 1996,
    approval: "AICTE-approved, autonomous institute",
    location: "Bangalore, Karnataka",
    verified: false,
    summary:
      "A well-regarded autonomous management institute with a strong analytics and product management specialisation track.",
    highlights: ["Strong analytics and product management track", "Live industry projects", "Dedicated corporate relations cell"],
    seats: [{ program: "management", branchesOrSpecialisations: ["Analytics", "Product Management", "Marketing", "Finance"], indicativeAnnualFee: "₹2L – ₹4L" }],
  },
  {
    id: "col-che-med-1",
    slug: "marina-medical-college",
    name: "Marina Medical College",
    shortName: "MMC",
    city: "chennai",
    programs: ["medical"],
    type: "Private",
    established: 1988,
    approval: "NMC-recognised, attached teaching hospital",
    location: "Chennai, Tamil Nadu",
    verified: false,
    summary:
      "A long-established private medical college with a large attached hospital and a well-known alumni base across South India.",
    highlights: ["Attached teaching hospital with high patient volume", "Long-established alumni network", "Structured residency guidance"],
    seats: [{ program: "medical", branchesOrSpecialisations: ["MBBS"], indicativeAnnualFee: "₹19L – ₹25L" }],
  },
  {
    id: "col-che-mgmt-1",
    slug: "chennai-institute-of-management-studies",
    name: "Chennai Institute of Management Studies",
    shortName: "CIMS",
    city: "chennai",
    programs: ["management"],
    type: "Private",
    established: 1999,
    approval: "AICTE-approved, affiliated to Anna University",
    location: "Chennai, Tamil Nadu",
    verified: false,
    summary:
      "A mid-sized management institute with a practical, industry-linked curriculum and a compact but dedicated recruiter base.",
    highlights: ["Industry-linked curriculum", "Compact batch sizes", "Focused finance and operations specialisations"],
    seats: [{ program: "management", branchesOrSpecialisations: ["Finance", "Operations", "HR"], indicativeAnnualFee: "₹1.2L – ₹2.2L" }],
  },
];

export function getCollege(slug: string) {
  return colleges.find((c) => c.slug === slug);
}

export function collegesByCity(citySlug: CitySlug) {
  return colleges.filter((c) => c.city === citySlug);
}

export function collegesByProgram(programSlug: ProgramSlug) {
  return colleges.filter((c) => c.programs.includes(programSlug));
}
