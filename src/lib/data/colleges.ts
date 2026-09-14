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
  type: "Private" | "Deemed university" | "Autonomous";
  established: number;
  approval: string;
  location: string;
  website?: string;
  verified: boolean;
  summary: string;
  highlights: string[];
  seats: CollegeSeatInfo[];
}

// Illustrative directory. Names, fees and seat details are representative
// placeholders for the site structure — replace with Raj Edutech's verified,
// current college list before this goes live. `verified: false` marks every
// entry here as unconfirmed; nothing should be taken as confirmation of a
// partnership, seat availability or fee until that flag is flipped.
export const colleges: College[] = [
  {
    id: "col-hyd-eng-1",
    slug: "deccan-institute-of-engineering",
    name: "Deccan Institute of Engineering",
    shortName: "DIE",
    city: "hyderabad",
    programs: ["engineering"],
    type: "Private",
    established: 1998,
    approval: "AICTE-approved, affiliated to JNTU Hyderabad",
    location: "Hyderabad, Telangana",
    verified: false,
    summary:
      "A mid-sized engineering college with a long-running placement cell and a broad spread of core and computing branches.",
    highlights: ["Established placement partnerships", "Hostel and transport for outstation students", "Labs upgraded within the last five years"],
    seats: [
      { program: "engineering", branchesOrSpecialisations: ["CSE", "ECE", "Mechanical", "Civil"], indicativeAnnualFee: "₹1.1L – ₹2.4L" },
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
    id: "col-blr-eng-1",
    slug: "silicon-valley-institute-of-technology",
    name: "Silicon Valley Institute of Technology",
    shortName: "SVIT",
    city: "bangalore",
    programs: ["engineering"],
    type: "Private",
    established: 2003,
    approval: "AICTE-approved, affiliated to VTU",
    location: "Bangalore, Karnataka",
    verified: false,
    summary:
      "An engineering college with a strong campus placement pipeline into Bangalore's IT and product companies.",
    highlights: ["Placement pipeline into IT and product companies", "Modern computing labs", "Active coding and hackathon culture"],
    seats: [
      { program: "engineering", branchesOrSpecialisations: ["CSE", "ISE", "AI & ML", "Electronics"], indicativeAnnualFee: "₹1.8L – ₹3.2L" },
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
    id: "col-che-eng-1",
    slug: "coromandel-college-of-engineering",
    name: "Coromandel College of Engineering",
    shortName: "CCE",
    city: "chennai",
    programs: ["engineering"],
    type: "Private",
    established: 1989,
    approval: "AICTE-approved, affiliated to Anna University",
    location: "Chennai, Tamil Nadu",
    verified: false,
    summary:
      "One of the city's longer-established engineering colleges, known for its core mechanical and civil branches.",
    highlights: ["Strong core-branch reputation", "Long-standing recruiter relationships", "Active alumni mentorship"],
    seats: [
      { program: "engineering", branchesOrSpecialisations: ["Mechanical", "Civil", "CSE", "EEE"], indicativeAnnualFee: "₹0.9L – ₹2L" },
    ],
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
