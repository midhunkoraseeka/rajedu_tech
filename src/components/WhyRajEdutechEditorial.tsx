import { Sparkles, Workflow, Laptop, Wallet } from "lucide-react";
import { Eyebrow } from "./ui/SectionHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { fadeUp, slideRight } from "@/lib/motion";

const benefits = [
  {
    icon: Sparkles,
    title: "Personalized Guidance",
    description: "Every recommendation is weighed against your score, budget and city — not a generic shortlist.",
  },
  {
    icon: Workflow,
    title: "End-to-End Support",
    description: "From your first conversation to settling in after admission, one advisor stays with you throughout.",
  },
  {
    icon: Laptop,
    title: "Technology Integration",
    description: "Documentation checklists, timelines and updates you can track digitally — not scattered across calls.",
  },
  {
    icon: Wallet,
    title: "Cost-Effective Solutions",
    description: "We help you weigh fee against outcome honestly, so you don't overpay for a name alone.",
  },
];

export function WhyRajEdutechEditorial() {
  return (
    <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <Reveal variants={slideRight}>
        <Eyebrow>Why Raj Edutech</Eyebrow>
        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-dark text-balance leading-[1.15]">
          Guidance built around your family&apos;s decision, not a college&apos;s intake target.
        </h2>
        <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-ink-soft">
          Admission season rewards whoever has better information. We exist
          to put that information — and someone accountable for explaining
          it — on your side of the table.
        </p>
      </Reveal>

      <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.08}>
        {benefits.map((b) => (
          <Reveal key={b.title} variants={fadeUp} className="rounded-2xl border border-border bg-white p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-light text-lime-dark">
              <b.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-[15.5px] font-bold text-blue-dark">{b.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{b.description}</p>
          </Reveal>
        ))}
      </RevealGroup>
    </div>
  );
}
