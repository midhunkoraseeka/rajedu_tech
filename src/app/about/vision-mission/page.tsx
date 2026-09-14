import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description: "Raj Edutech's vision and mission for guiding students and parents through management quota admissions.",
  alternates: { canonical: "/about/vision-mission" },
};

export default function VisionMissionPage() {
  return (
    <>
      <Section tone="blue" className="pb-0 sm:pb-0">
        <Container className="max-w-3xl">
          <Eyebrow>About Raj Edutech</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-dark text-balance">
            Vision &amp; Mission
          </h1>
        </Container>
      </Section>

      <Section tone="blue" className="pt-10">
        <Container className="max-w-3xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-8">
              <h2 className="text-[13px] font-bold uppercase tracking-wide text-lime-dark">Our Vision</h2>
              <p className="mt-4 text-[18px] font-semibold leading-relaxed text-blue-dark">
                A management quota admission process that families can
                navigate with clarity instead of guesswork.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-8">
              <h2 className="text-[13px] font-bold uppercase tracking-wide text-lime-dark">Our Mission</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
                Raj Edutech simplifies the management-quota admission journey
                and guides students and parents through college selection,
                documentation, financial planning, and the overall admission
                process — with honest information, not sales pressure.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="See how this plays out in practice"
        description="Talk to an advisor about your own programme, city and score."
        whatsappMessage="Hi Raj Edutech, I'd like to know more about how you work."
      />
    </>
  );
}
