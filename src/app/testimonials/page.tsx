import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What parents and students say about navigating management quota BTech, MBBS and MBA admissions with Raj Edutech.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <Section tone="blue" spacingBottom="none">
        <Container className="max-w-3xl">
          <Eyebrow>Testimonials</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-dark text-balance">
            Families who&apos;ve been through it.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            Admission season is stressful for everyone. Here&apos;s how it
            went for some of the students and parents we&apos;ve guided.
          </p>
        </Container>
      </Section>

      <Section tone="blue" spacingTop="sm">
        <Container>
          <TestimonialCarousel testimonials={testimonials} />
        </Container>
      </Section>

      <CTASection
        title="Want to be the next one to say this went smoothly?"
        description="Start with a short conversation about your programme, city and score."
        whatsappMessage="Hi Raj Edutech, I'd like guidance on management quota admissions."
      />
    </>
  );
}
