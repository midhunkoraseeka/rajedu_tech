import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/CTASection";
import { CollegeCard } from "@/components/CollegeCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ProgramIcon } from "@/components/ProgramIcon";
import { programs, getProgram } from "@/lib/data/programs";
import { collegesByProgram } from "@/lib/data/colleges";
import { whatsappLink } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function generateStaticParams() {
  return programs.map((p) => ({ program: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ program: string }>;
}): Promise<Metadata> {
  const { program: slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  return {
    title: program.fullName,
    description: program.summary,
    alternates: { canonical: `/management-quota/${program.slug}` },
  };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ program: string }>;
}) {
  const { program: slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const relatedColleges = collegesByProgram(program.slug).slice(0, 3);

  return (
    <>
      <Section tone="blue" className="pb-0 sm:pb-0">
        <Container className="max-w-3xl">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue shadow-sm">
            <ProgramIcon icon={program.icon} className="h-6 w-6" />
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-dark text-balance">
            {program.fullName}
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">{program.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`/enquiry?program=${program.slug}`} size="lg" withArrow>
              Get {program.shortName} Admission Guidance
            </Button>
            <Button href={whatsappLink(`Hi Raj Edutech, I'd like guidance on ${program.fullName}.`)} variant="outline" size="lg">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </Button>
          </div>
        </Container>
      </Section>

      <Section tone="blue" className="pt-10">
        <Container className="max-w-3xl">
          <SectionHeading title="Who this is for" className="mb-0" />
          <ul className="mt-8 flex flex-col gap-4">
            {program.whoItsFor.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lime-dark" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading title="Eligibility" className="mb-0" />
              <ul className="mt-6 flex flex-col gap-3">
                {program.eligibility.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading title="Seat categories" className="mb-0" />
              <div className="mt-6 flex flex-col gap-4">
                {program.seatCategories.map((cat) => (
                  <div key={cat.name} className="rounded-2xl border border-border bg-blue-light p-4">
                    <p className="text-[15px] font-bold text-blue-dark">{cat.name}</p>
                    <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">{cat.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="blue">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading title="Documents you'll need" className="mb-0" />
              <ul className="mt-6 flex flex-col gap-2.5">
                {program.documents.map((doc) => (
                  <li key={doc} className="border-l-2 border-border-strong pl-4 text-[14.5px] leading-relaxed text-ink-soft">
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading title="Timeline" className="mb-0" />
              <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">{program.timelineNote}</p>
              <Link href="/admission-process" className="mt-4 inline-block text-[14.5px] font-semibold text-blue hover:underline underline-offset-4">
                See our full admission process
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {relatedColleges.length > 0 ? (
        <Section>
          <Container>
            <SectionHeading
              eyebrow="College Options"
              title={`${program.shortName} colleges on our radar`}
              description="A sample from our directory — the current, verified shortlist depends on your score and city."
              action={
                <Link href="/colleges" className="text-[14.5px] font-semibold text-blue hover:underline underline-offset-4">
                  Browse all colleges
                </Link>
              }
            />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedColleges.map((college) => (
                <CollegeCard key={college.slug} college={college} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section tone="blue">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title={`${program.shortName} — frequently asked`} className="mb-0" />
          <div className="mt-8">
            <FaqAccordion items={program.faqs} />
          </div>
        </Container>
      </Section>

      <CTASection
        title={`Ready to talk through your ${program.shortName} options?`}
        description="Share your score, budget and preferred city — we'll tell you honestly what's realistic."
        whatsappMessage={`Hi Raj Edutech, I'd like guidance on ${program.fullName}.`}
      />
    </>
  );
}
