import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description: "What changes when you navigate a management quota admission with Raj Edutech instead of on your own.",
  alternates: { canonical: "/why-raj-edutech" },
};

const comparisonRows = [
  {
    aspect: "Comparing colleges",
    alone: "College brochures, word of mouth, and forum posts of unknown accuracy.",
    withUs: "Branch-level comparisons on placement, fees and past-year trends for your shortlist.",
  },
  {
    aspect: "Verifying fees",
    alone: "Often confirmed only verbally, until the admission desk.",
    withUs: "Confirmed in writing, checked against regulator fee limits, before you pay.",
  },
  {
    aspect: "Documentation",
    alone: "Gaps discovered on reporting day, when there's no time to fix them.",
    withUs: "Reviewed against a programme-specific checklist well in advance.",
  },
  {
    aspect: "Tracking deadlines",
    alone: "Manually, across multiple colleges and counseling rounds.",
    withUs: "Tracked for you, with reminders before each cut-off.",
  },
  {
    aspect: "After admission",
    alone: "On your own for any follow-up formalities.",
    withUs: "Reachable through the first term for fee receipts, transfers or other paperwork.",
  },
];

export default function WhyRajEdutechPage() {
  return (
    <>
      <Section tone="blue" className="pb-0 sm:pb-0">
        <Container className="max-w-3xl">
          <Eyebrow>Why Raj Edutech</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-dark text-balance">
            What changes when someone&apos;s actually on your side.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            You can navigate a management quota admission on your own — many
            families do. What usually changes with guidance isn&apos;t
            whether you get a seat, but how much avoidable stress, wasted
            travel and fee uncertainty you go through to get there.
          </p>
        </Container>
      </Section>

      <Section tone="blue" className="pt-10">
        <Container>
          <div className="overflow-x-auto rounded-2xl border border-border bg-white">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">Comparison between navigating admissions alone and with Raj Edutech</caption>
              <thead>
                <tr className="border-b border-border bg-blue-light">
                  <th scope="col" className="px-5 py-4 text-[13.5px] font-semibold text-ink-soft">Aspect</th>
                  <th scope="col" className="px-5 py-4 text-[13.5px] font-semibold text-ink-soft">On your own</th>
                  <th scope="col" className="px-5 py-4 text-[13.5px] font-semibold text-blue">With Raj Edutech</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.aspect} className="border-b border-border last:border-b-0">
                    <th scope="row" className="px-5 py-4 align-top text-[14.5px] font-bold text-blue-dark">{row.aspect}</th>
                    <td className="px-5 py-4 align-top text-[14px] leading-relaxed text-ink-soft">{row.alone}</td>
                    <td className="px-5 py-4 align-top text-[14px] leading-relaxed text-ink">{row.withUs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading eyebrow="Testimonials" title="In families' own words" />
          <div className="mt-10">
            <TestimonialCarousel testimonials={testimonials.slice(0, 3)} />
          </div>
        </Container>
      </Section>

      <CTASection
        title="See the difference in your first conversation"
        description="There's no charge and no obligation to continue — just an honest read on your options."
        whatsappMessage="Hi Raj Edutech, I'd like to start with a first conversation."
      />
    </>
  );
}
