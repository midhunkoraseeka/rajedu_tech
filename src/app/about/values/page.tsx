import type { Metadata } from "next";
import { ShieldCheck, Scale, FileCheck, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { fadeUp } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Values",
  description: "The values that shape how Raj Edutech guides students and parents through admissions.",
  alternates: { canonical: "/about/values" },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Independence",
    description: "We are not owned by or beholden to any college, so our guidance isn't shaped by who benefits most from your decision.",
  },
  {
    icon: Scale,
    title: "Transparency",
    description: "Fees, seat categories and timelines are put in writing — never left to a verbal promise you can't hold anyone to.",
  },
  {
    icon: FileCheck,
    title: "Rigour",
    description: "Every document is checked against a programme-specific list well before a deadline forces the issue.",
  },
  {
    icon: HeartHandshake,
    title: "Accountability",
    description: "One advisor stays with a family from the first conversation through to admission — not a rotating cast.",
  },
];

export default function ValuesPage() {
  return (
    <>
      <Section tone="blue" className="pb-0 sm:pb-0">
        <Container className="max-w-3xl">
          <Eyebrow>About Raj Edutech</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-dark text-balance">
            Our Values
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            The standards we hold ourselves to on every case, not just the
            ones that go smoothly.
          </p>
        </Container>
      </Section>

      <Section tone="blue" className="pt-10">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.08}>
            {values.map((v) => (
              <Reveal key={v.title} variants={fadeUp} className="flex gap-4 rounded-2xl border border-border bg-white p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lime-light text-lime-dark">
                  <v.icon className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="text-[16px] font-bold text-blue-dark">{v.title}</h2>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <CTASection
        title="See these values in a real conversation"
        description="Talk to an advisor about your own programme, city and score."
        whatsappMessage="Hi Raj Edutech, I'd like to know more about how you work."
      />
    </>
  );
}
