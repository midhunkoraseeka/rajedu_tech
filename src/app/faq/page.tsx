import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about management quota admissions, fees, documentation and how Raj Edutech works.",
  alternates: { canonical: "/faq" },
};

const categories = ["General", "Process", "Fees", "Documentation"] as const;

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Section tone="blue" spacingBottom="none">
        <Container className="max-w-3xl">
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-dark text-balance">
            Frequently asked questions.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            If your question isn&apos;t answered here, it&apos;s probably
            specific to your situation — reach out and we&apos;ll answer it
            directly.
          </p>
        </Container>
      </Section>

      <Section tone="blue" spacingTop="sm">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-14">
            {categories.map((category) => {
              const items = faqs.filter((f) => f.category === category);
              if (items.length === 0) return null;
              return (
                <div key={category}>
                  <h2 className="text-xl font-extrabold tracking-tight text-blue-dark">{category}</h2>
                  <div className="mt-4">
                    <FaqAccordion items={items} />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Still have a question?"
        description="Message us — most admission questions depend on your specific score, city and budget anyway."
        whatsappMessage="Hi Raj Edutech, I have a question that wasn't covered in your FAQ."
      />
    </>
  );
}
