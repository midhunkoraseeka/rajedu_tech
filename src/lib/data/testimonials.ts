import type { ProgramSlug } from "./programs";
import type { CitySlug } from "./cities";

export interface Testimonial {
  id: string;
  quote: string;
  attribution: string;
  program: ProgramSlug;
  city: CitySlug;
}

// Representative testimonials illustrating the tone and shape of real
// feedback. Raj Edutech's live site could not be reached to source verified
// testimonials for this build (it returned a bot-verification wall). Replace
// these with real, consented testimonials before publishing.
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "We had three weeks after the counseling results and no idea where to start. Raj Edutech laid out our actual options at my son's rank, not just the colleges we'd already heard of, and stayed with us right through document verification.",
    attribution: "Parent of a BTech admission, Hyderabad",
    program: "engineering",
    city: "hyderabad",
  },
  {
    id: "t2",
    quote:
      "What helped most was someone telling us honestly which colleges were worth the fee difference and which weren't. That's not something you get from a college's own brochure.",
    attribution: "Parent of an MBBS admission, Bangalore",
    program: "medical",
    city: "bangalore",
  },
  {
    id: "t3",
    quote:
      "I had a NEET rank that didn't fit the college I wanted. Instead of pushing me toward whichever college paid the best commission, they showed me two realistic alternatives and explained why.",
    attribution: "MBBS aspirant, Chennai",
    program: "medical",
    city: "chennai",
  },
  {
    id: "t4",
    quote:
      "The documentation checklist alone saved us a wasted trip. Everything was verified before we travelled for reporting day.",
    attribution: "Parent of a BTech admission, Bangalore",
    program: "engineering",
    city: "bangalore",
  },
  {
    id: "t5",
    quote:
      "I was comparing five MBA colleges on brand name alone. They walked me through placement data and specialisation strength instead, which changed my shortlist completely.",
    attribution: "MBA aspirant, Chennai",
    program: "management",
    city: "chennai",
  },
  {
    id: "t6",
    quote:
      "Straightforward answers, even when the answer was 'that college isn't a good fit for your budget.' That honesty is why we came back for our second child too.",
    attribution: "Parent of an MBA admission, Hyderabad",
    program: "management",
    city: "hyderabad",
  },
];
