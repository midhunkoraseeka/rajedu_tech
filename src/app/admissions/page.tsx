import type { Metadata } from "next";
import { Users, HandHeart, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProgramCard } from "@/components/ProgramCard";
import { AdmissionTimeline } from "@/components/AdmissionTimeline";
import { FaqAccordion } from "@/components/FaqAccordion";
import { MultiStepEnquiryForm } from "@/components/forms/MultiStepEnquiryForm";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { fadeUp } from "@/lib/motion";
import { programs } from "@/lib/data/programs";
import { faqs } from "@/lib/data/faq";
import { whatsappLink } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Everything you need to start a management quota BTech, MBBS or MBA admission with Raj Edutech — who we help, how the process works, and how to get guidance.",
  alternates: { canonical: "/admissions" },
};

const whoWeHelp = [
  {
    icon: Users,
    title: "Students & Parents",
    description: "Anyone navigating management quota admissions for the first time, without a trusted point of reference.",
  },
  {
    icon: ShieldCheck,
    title: "Rank-Limited Candidates",
    description: "Students whose counseling rank limits their options at a preferred college or branch.",
  },
  {
    icon: HandHeart,
    title: "Out-of-City Families",
    description: "Families evaluating colleges in a city they don't live in, and need someone local to verify details.",
  },
];

export default function AdmissionsPage() {
  const admissionsFaqs = faqs.slice(0, 6);

  return (
    <>
      <Section tone="blue" spacingBottom="none">
        <Container className="max-w-3xl">
          <Eyebrow>Admissions</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-dark text-balance">
            Everything you need to start your admission.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            One page that brings together who we help, how the process
            works, and how to get guidance — for BTech, MBBS and MBA
            management quota admissions across Hyderabad, Bangalore and
            Chennai.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#enquiry-form" size="lg" withArrow>
              Get Admission Guidance
            </Button>
            <Button href={whatsappLink("Hi Raj Edutech, I'd like guidance on admissions.")} variant="outline" size="lg">
              <WhatsAppIcon className="h-4 w-4" />
              Talk to an Advisor
            </Button>
          </div>
        </Container>
      </Section>

      <Section tone="blue" spacingTop="sm">
        <Container>
          <SectionHeading title="Who we help" className="mb-0" />
          <RevealGroup className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3" stagger={0.08}>
            {whoWeHelp.map((w) => (
              <Reveal key={w.title} variants={fadeUp} className="rounded-2xl border border-border bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-light text-blue">
                  <w.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[15.5px] font-bold text-blue-dark">{w.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{w.description}</p>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Programs"
            title="Pick your programme"
            description="Each has its own eligibility, timeline and documentation."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="blue">
        <Container>
          <SectionHeading eyebrow="How It Works" title="The admission process" className="mb-0" />
          <div className="mt-12">
            <AdmissionTimeline />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Questions families ask before starting" className="mb-0" />
          <div className="mt-8">
            <FaqAccordion items={admissionsFaqs} />
          </div>
        </Container>
      </Section>

      <Section id="enquiry-form" tone="blue">
        <Container className="max-w-2xl">
          <SectionHeading eyebrow="Get Guidance" title="Request admission guidance" className="mb-0" />
          <div className="mt-8 rounded-2xl border border-border bg-white p-6 sm:p-8">
            <MultiStepEnquiryForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
