export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Process" | "Fees" | "Documentation";
}

export const faqs: FaqItem[] = [
  {
    category: "General",
    question: "Is Raj Edutech a college or a university?",
    answer:
      "No. Raj Edutech is an independent admission guidance consultancy. We are not a college, university, or official representative of any institution. We help students and parents understand and navigate the management quota admission process across colleges in Hyderabad, Bangalore and Chennai.",
  },
  {
    category: "General",
    question: "Can you guarantee me a seat?",
    answer:
      "No admission consultancy can honestly guarantee a seat — seat allocation is always subject to your eligibility, document verification and availability at the college, which is controlled by the institution and, in many cases, a regulatory authority. What we do guarantee is accurate information, honest comparisons between colleges, and full support through documentation and reporting.",
  },
  {
    category: "General",
    question: "Which cities and programmes do you cover?",
    answer:
      "We currently guide students for BTech, MBBS and MBA management quota admissions in Hyderabad, Bangalore and Chennai.",
  },
  {
    category: "Process",
    question: "When should I get in touch — before or after my results?",
    answer:
      "As early as possible, ideally before your entrance exam results are out. Early conversations let us map realistic options in advance, so you're not making rushed decisions once counseling rounds open.",
  },
  {
    category: "Process",
    question: "How long does the admission process usually take?",
    answer:
      "It depends on the programme and college, but management quota admissions typically move within two to four weeks of your results and counseling rounds being finalised. MBBS admissions in particular can move within days once state counseling rounds close, so keeping documents ready matters.",
  },
  {
    category: "Process",
    question: "Do I have to visit your office in person?",
    answer:
      "Most of the guidance — shortlisting, comparisons and documentation review — can be done over a call or WhatsApp. Some colleges do require in-person document verification and reporting, and we'll guide you on exactly when that's needed.",
  },
  {
    category: "Fees",
    question: "Do you charge a consultancy fee?",
    answer:
      "We'll explain our fee structure clearly during your first conversation, before any commitment is made. It is always separate from the college's own admission fee, and nothing is charged without your agreement in writing.",
  },
  {
    category: "Fees",
    question: "Are college fees negotiable?",
    answer:
      "Fees for regulated categories such as management quota and NRI quota are capped by the relevant regulatory authority, though the exact figure varies by college. We help you get the fee structure confirmed in writing so there are no surprises after admission.",
  },
  {
    category: "Documentation",
    question: "What documents do I need to start?",
    answer:
      "This varies by programme, but generally includes your academic mark sheets and certificates, entrance exam scorecard, category and income certificates if applicable, and valid photo ID. We share a programme-specific checklist once we understand your situation.",
  },
  {
    category: "Documentation",
    question: "What happens if a document doesn't match across records — for example, a name spelling?",
    answer:
      "This is more common than people expect and is usually fixable with an affidavit or a correction from the issuing authority, prepared in advance of your reporting date. We flag mismatches early during our document review so they don't become a last-minute problem.",
  },
];
