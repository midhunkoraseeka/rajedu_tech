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

// The BTech/engineering entries below are real institutions (per Raj
// Edutech's provided list); the MBBS and MBA entries are still an
// illustrative, placeholder directory pending a verified list — replace
// those before this goes live. `verified: false` marks every entry as not
// yet confirmed with the institution directly by Raj Edutech; nothing here
// should be taken as confirmation of a partnership, seat availability or
// fee until that flag is flipped. Indicative fees for the real engineering
// colleges are intentionally left as "contact us" rather than a guessed
// figure, since these are identifiable real institutions.
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
    id: "col-hyd-med-1",
    slug: "charminar-medical-college",
    name: "Charminar Medical College",
    shortName: "CMC",
    city: "hyderabad",
    programs: ["medical"],
    type: "Private",
    established: 2005,
    approval: "NMC-recognised, attached teaching hospital",
    location: "Hyderabad, Telangana",
    verified: false,
    summary:
      "A private medical college with an attached multi-specialty teaching hospital and a moderate annual intake.",
    highlights: ["Attached 750-bed teaching hospital", "NMC-recognised MBBS programme", "Structured internship placement"],
    seats: [{ program: "medical", branchesOrSpecialisations: ["MBBS"], indicativeAnnualFee: "₹18L – ₹24L" }],
  },
  {
    id: "col-hyd-mgmt-1",
    slug: "golconda-school-of-business",
    name: "Golconda School of Business",
    shortName: "GSB",
    city: "hyderabad",
    programs: ["management"],
    type: "Autonomous",
    established: 2001,
    approval: "AICTE-approved, affiliated to Osmania University",
    location: "Hyderabad, Telangana",
    verified: false,
    summary:
      "An autonomous business school offering specialisations in finance, marketing and HR with a mid-sized recruiter base.",
    highlights: ["Specialisations in Finance, Marketing and HR", "Industry mentorship programme", "Direct admission for eligible candidates"],
    seats: [{ program: "management", branchesOrSpecialisations: ["Finance", "Marketing", "HR", "Business Analytics"], indicativeAnnualFee: "₹1.5L – ₹3L" }],
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
