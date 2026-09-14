import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { ProgramCard } from "@/components/ProgramCard";
import { programs } from "@/lib/data/programs";

export const metadata: Metadata = {
  title: "Management Quota Admissions Explained",
  description:
    "What management quota admission actually means for BTech, MBBS and MBA seats — how it differs from counseling, who it suits, and what to verify before you commit.",
  alternates: { canonical: "/management-quota" },
};

export default function ManagementQuotaPage() {
  return (
    <>
      <Section tone="blue" className="pb-0 sm:pb-0">
        <Container className="max-w-3xl">
          <Eyebrow>Management Quota</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-dark text-balance">
            Management quota, explained plainly.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            &ldquo;Management quota&rdquo; describes seats that a college
            fills directly, outside the centralised state or national
            counseling process — within limits and fee caps set by the
            relevant regulatory authority. It is a legitimate admission
            route, but one where the burden of comparing colleges, verifying
            fees and completing documentation correctly falls much more on
            you.
          </p>
        </Container>
      </Section>

      <Section tone="blue" className="pt-10">
        <Container className="max-w-3xl">
          <SectionHeading title="How it differs from counseling seats" className="mb-0" />
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-[16px] font-bold text-blue-dark">Counseling seats</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                Allocated centrally based on your entrance exam rank,
                category and preferences. The fee is regulated and the
                process is transparent, but your choice of college is
                limited by your rank.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-[16px] font-bold text-blue-dark">Management quota seats</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                Filled directly by the college, within regulator-approved
                fee limits. You have more say in college and branch, as long
                as you meet minimum eligibility — but you carry more
                responsibility for verifying what you&apos;re told.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <SectionHeading title="Who this route usually suits" className="mb-0" />
          <ul className="mt-8 flex flex-col gap-4">
            {[
              "Students whose entrance exam rank limits their counseling options at colleges or branches they'd prefer.",
              "Families with a strong preference for a specific city or college, where counseling allocation is uncertain.",
              "Anyone who missed a counseling round or deadline and still has a genuine, time-bound option through management quota.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-[15.5px] leading-relaxed text-ink-soft">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lime-dark" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="blue">
        <Container className="max-w-3xl">
          <SectionHeading title="Before you commit to any management quota seat" className="mb-0" />
          <ol className="mt-8 flex flex-col gap-5">
            {[
              "Get the seat category (management, NRI, or otherwise) confirmed in writing, matching what was discussed verbally.",
              "Get the fee structure on the college's letterhead, and check it against the regulator's approved fee cap where one applies.",
              "Confirm the college's approval is current for the specific programme and academic year — not just accredited historically.",
              "Get a written admission or provisional offer letter before any payment changes hands.",
            ].map((item, i) => (
              <li key={item} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue text-[13px] font-bold text-white tabular-nums">
                  {i + 1}
                </span>
                <p className="text-[15px] leading-relaxed text-ink-soft">{item}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Explore by Programme"
            title="Choose Your Path"
            description="Eligibility, seat categories and documentation differ across BTech, MBBS and MBA. Start with yours."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Want to know if management quota is right for you?"
        description="Tell us your exam, score and target city — we'll give you an honest read on your realistic options."
        whatsappMessage="Hi Raj Edutech, I'd like to understand if management quota admission is right for me."
      />
    </>
  );
}
