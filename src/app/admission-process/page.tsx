import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";
import { AdmissionTimeline } from "@/components/AdmissionTimeline";
import { CTASection } from "@/components/CTASection";
import { programs } from "@/lib/data/programs";

export const metadata: Metadata = {
  title: "The Admission Process",
  description:
    "The six steps Raj Edutech follows for every management quota BTech, MBBS and MBA admission — from your first conversation to settling in after admission.",
  alternates: { canonical: "/admission-process" },
};

export default function AdmissionProcessPage() {
  return (
    <>
      <Section tone="blue" spacingBottom="none">
        <Container className="max-w-3xl">
          <Eyebrow>How It Works</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-dark text-balance">
            One process, six steps, no surprises.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            Every family we work with goes through the same structured
            process, regardless of programme or city. Timelines shift — MBBS
            moves faster than MBA — but the steps themselves don&apos;t.
          </p>
        </Container>
      </Section>

      <Section tone="blue" spacingTop="sm">
        <Container className="max-w-4xl">
          <AdmissionTimeline />
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <SectionHeading title="Timelines differ by programme" className="mb-0" />
          <div className="mt-8 flex flex-col gap-4">
            {programs.map((p) => (
              <div key={p.slug} className="flex flex-col gap-1 border-b border-border pb-4 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between">
                <Link href={`/management-quota/${p.slug}`} className="text-[15px] font-bold text-blue-dark hover:underline underline-offset-4">
                  {p.fullName}
                </Link>
                <p className="max-w-md text-[14px] text-ink-soft sm:text-right">{p.timelineNote}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Ready to start with a first conversation?"
        description="It's free, and it's usually enough to tell you whether management quota makes sense for your situation."
        whatsappMessage="Hi Raj Edutech, I'd like to start with a first conversation about admission guidance."
      />
    </>
  );
}
