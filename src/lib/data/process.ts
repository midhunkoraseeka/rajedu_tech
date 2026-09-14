export interface ProcessStep {
  title: string;
  description: string;
}

export const admissionProcessSteps: ProcessStep[] = [
  {
    title: "Consultation",
    description:
      "A free first conversation to understand your academic background, entrance exam score, budget and preferred city — over a call or WhatsApp.",
  },
  {
    title: "Profile Evaluation",
    description:
      "We map your score and profile against realistic options, so the conversation stays grounded in what's actually achievable.",
  },
  {
    title: "College Selection",
    description:
      "We match you against colleges by branch strength, fee bracket and past-year trends — not just brand names.",
  },
  {
    title: "Documentation",
    description:
      "We prepare and verify every certificate against a programme-specific checklist, flagging mismatches early.",
  },
  {
    title: "Application Support",
    description:
      "We help you get the seat category and fee structure confirmed in writing before you commit to anything.",
  },
  {
    title: "Admission Assistance",
    description:
      "We guide you through verification and reporting, and stay reachable through the first term for any follow-up formalities.",
  },
];
