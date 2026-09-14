import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { CollegeExplorer } from "@/components/CollegeExplorer";

export const metadata: Metadata = {
  title: "Colleges Directory",
  description:
    "Browse engineering, medical and management colleges under management quota admission in Hyderabad, Bangalore and Chennai.",
  alternates: { canonical: "/colleges" },
};

export default function CollegesPage() {
  return (
    <>
      <Section tone="blue" className="pb-0 sm:pb-0">
        <Container className="max-w-3xl">
          <Eyebrow>Top Colleges</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-dark text-balance">
            Explore Colleges by City
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            A working directory of colleges we track for management quota
            admissions across Hyderabad, Bangalore and Chennai. This is
            illustrative and updated as counseling season progresses —
            contact us for the current, verified shortlist for your score
            and budget.
          </p>
        </Container>
      </Section>

      <Section tone="blue" className="pt-10">
        <Container>
          <CollegeExplorer />
        </Container>
      </Section>

      <CTASection
        title="Don't see your target college listed?"
        description="Our directory is a starting point. Tell us the college you have in mind and we'll verify current seat availability and fees."
        whatsappMessage="Hi Raj Edutech, I'd like to check on a specific college's availability."
      />
    </>
  );
}
