import type { Metadata } from "next";
import { UserRound } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Leadership",
  description: "The people leading Raj Edutech's admission guidance team.",
  alternates: { canonical: "/about/leadership" },
};

export default function LeadershipPage() {
  return (
    <>
      <Section tone="blue" className="pb-0 sm:pb-0">
        <Container className="max-w-3xl">
          <Eyebrow>About Raj Edutech</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-dark text-balance">
            Leadership
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            Raj Edutech is run by a small team of admission advisors working
            directly with families across Hyderabad, Bangalore and Chennai.
          </p>
        </Container>
      </Section>

      <Section tone="blue" className="pt-10">
        <Container className="max-w-2xl">
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-dashed border-border-strong bg-white p-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-light text-blue">
              <UserRound className="h-6 w-6" />
            </span>
            <h2 className="text-lg font-bold text-blue-dark">Leadership profiles coming soon</h2>
            <p className="text-[14.5px] leading-relaxed text-ink-soft">
              We&apos;d rather leave this page simple than publish
              placeholder names or photos. Founder and advisor profiles will
              be added here once confirmed. In the meantime, every enquiry
              is handled personally by our advisory team.
            </p>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Talk to our team directly"
        description="Get in touch and you'll speak with an actual advisor, not a call centre."
        whatsappMessage="Hi Raj Edutech, I'd like to speak with an advisor."
      />
    </>
  );
}
