export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  category: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "management-quota-vs-counseling-seats",
    title: "Management quota vs. counseling seats: what's actually different",
    excerpt:
      "Management quota and counseling seats lead to the same degree, but the process, timeline and cost behind them are very different. Here's what to weigh before choosing either route.",
    date: "2026-01-12",
    readMinutes: 6,
    category: "Admissions basics",
    content: [
      "Counseling seats are allocated centrally by a state or national authority, based on your entrance exam rank, category and preferences. The fee is regulated, the process is transparent, but the number of seats you can realistically get at your rank is fixed and often limited.",
      "Management quota seats are filled directly by the college, outside the centralised pool, within limits set by the regulator. The fee is higher and varies by college, but you get more say in which college and branch you end up in — provided you meet the college's minimum eligibility.",
      "Neither route is inherently 'better.' A strong counseling rank usually makes the counseling route more cost-effective. A rank that limits your counseling options, or a preference for a specific college or city, is when management quota guidance becomes genuinely useful — as long as you go in with realistic, verified information about fees and seat availability rather than assumptions.",
      "Whichever route you're evaluating, get the fee structure and seat category confirmed in writing before you commit. Verbal assurances about 'guaranteed' seats or discounted fees are the single most common source of disputes during admission season.",
    ],
  },
  {
    slug: "documents-checklist-management-quota-admission",
    title: "The document checklist that prevents a wasted reporting-day trip",
    excerpt:
      "Most avoidable admission delays come down to one missing certificate on reporting day. Here's the checklist we run with every family before they travel.",
    date: "2026-01-20",
    readMinutes: 5,
    category: "Documentation",
    content: [
      "Reporting day for a management quota seat is not the time to discover a certificate is missing, expired, or issued in a name that doesn't match your other documents. Colleges work to a fixed reporting window, and most do not accommodate delays.",
      "At minimum, keep originals and photocopies of your 10th and 12th mark sheets and certificates, your entrance exam admit card and scorecard, transfer and conduct certificates from your previous institution, category and income certificates if you're applying under a reserved category, and valid photo ID for both the candidate and a parent or guardian.",
      "Names should match exactly across every document — a common issue is a middle name present on a birth certificate but missing from a mark sheet. Where documents don't match, get an affidavit prepared in advance rather than discovering the mismatch at the admission desk.",
      "We prepare and verify this checklist with every family before a reporting date is fixed, specific to the college and category involved.",
    ],
  },
  {
    slug: "how-to-shortlist-engineering-colleges-by-branch",
    title: "How to shortlist an engineering college by branch, not just by name",
    excerpt:
      "A well-known college name and a well-known branch aren't always the same thing. Here's a more useful way to build your BTech shortlist.",
    date: "2026-02-02",
    readMinutes: 7,
    category: "BTech admissions",
    content: [
      "It's common for a college to be well-regarded overall but weak in a specific branch, or the reverse — a lesser-known college with an unusually strong computer science department because of a long-standing recruiter relationship. Ranking colleges purely by reputation misses this.",
      "A more reliable shortlist looks at branch-level placement percentage and recruiter profile over the last two to three years, faculty strength and lab infrastructure specific to that branch, and how many seats in that branch are typically available through management quota versus how many are absorbed in regular counseling.",
      "It's also worth checking whether a branch is affiliated and approved for the full duration of the course, not just accredited at the time of admission — accreditation lapses do happen and can affect the value of the degree.",
      "We build this branch-level comparison for every college on a family's shortlist, rather than relying on a college's overall brand name alone.",
    ],
  },
  {
    slug: "neet-rank-and-realistic-mbbs-options",
    title: "What your NEET rank realistically buys you this year",
    excerpt:
      "NEET cutoffs move every year based on paper difficulty and applicant volume. Here's how to read your rank against realistic options instead of last year's headlines.",
    date: "2026-02-10",
    readMinutes: 6,
    category: "MBBS admissions",
    content: [
      "Closing ranks for both counseling and management quota MBBS seats shift from year to year, sometimes significantly, based on the exam's difficulty level and the number of applicants. Comparing your rank directly to last year's closing rank at a specific college can be misleading.",
      "A more useful approach is to look at a three-year trend for a college, not a single year, and to separate the state quota, management quota and NRI quota closing trends, since they move independently of each other.",
      "It also matters whether you're evaluating an NMC-recognised college with a stable admission history, or a newer college still building its approval and accreditation track record. Both can be reasonable options, but the risk profile is different.",
      "We map each family's NEET rank against this multi-year, quota-specific trend for every college being considered, so the conversation is about realistic options rather than last year's cutoff headline.",
    ],
  },
  {
    slug: "mba-specialisation-vs-college-brand",
    title: "Choosing an MBA specialisation before choosing a college brand",
    excerpt:
      "A well-known college with a weak specialisation department can be a worse choice than a lesser-known one with strong recruiter relationships in your chosen field.",
    date: "2026-02-18",
    readMinutes: 5,
    category: "MBA admissions",
    content: [
      "MBA outcomes depend heavily on the strength of a specific specialisation's recruiter relationships, not just a college's overall brand. A college well known for finance placements may have a much thinner recruiter base for marketing or HR.",
      "Before shortlisting colleges, it's worth deciding — even tentatively — which specialisation you're leaning toward, then evaluating colleges on their track record in that specific area: faculty, live projects, and which companies actually recruited from that specialisation in the last two placement cycles.",
      "Total cost also matters more in MBA admissions than in engineering or medicine, since the fee range across management quota MBA seats is wide, and the return depends directly on placement outcomes relative to that fee.",
      "We help families weigh specialisation strength and total cost together, rather than treating college brand as the only variable.",
    ],
  },
  {
    slug: "questions-to-ask-before-paying-an-admission-fee",
    title: "Six questions to ask before you pay any admission fee",
    excerpt:
      "A short list of questions that surfaces most of the red flags in a management quota admission offer, before money changes hands.",
    date: "2026-02-25",
    readMinutes: 4,
    category: "Admissions basics",
    content: [
      "Is the fee structure provided in writing, on the college's letterhead, matching what was discussed verbally? Verbal fee promises that differ from the written structure are one of the most common sources of disputes.",
      "Is the seat being offered under the quota category that was discussed — management, NRI or otherwise — and does the fee match that category's regulated cap?",
      "Is the college's approval current for the specific programme and academic year, not just generally accredited in the past?",
      "Is there a written admission or provisional offer letter before any payment is made, and is the refund policy stated clearly in case the offer falls through?",
      "Who is collecting the payment — the college directly, or a third party — and is there a receipt either way?",
      "If any of these can't be answered clearly and in writing, that's a reason to pause and verify further before paying, regardless of how limited the seat is said to be.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
