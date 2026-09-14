import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { MultiStepEnquiryForm } from "@/components/forms/MultiStepEnquiryForm";
import { CheckCircle2, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get Admission Guidance",
  description: "Share your programme, city and score to get personalised management quota admission guidance from Raj Edutech.",
  alternates: { canonical: "/enquiry" },
};

const expectations = [
  "An advisor calls you back within one business day",
  "A first conversation to understand your score, budget and city — no cost, no obligation",
  "A realistic shortlist, not a list of every college that will take your call",
];

export default async function EnquiryPage({
  searchParams,
}: {
  searchParams: Promise<{ program?: string; city?: string }>;
}) {
  const { program, city } = await searchParams;

  return (
    <Section tone="blue" className="sm:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Get Guidance</Eyebrow>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-blue-dark text-balance">
              Get admission guidance
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
              Tell us where you are in the process and we&apos;ll take it
              from there. This isn&apos;t a sales form — an advisor reads
              every submission personally.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {expectations.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lime-dark" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 border-t border-border pt-8">
              <p className="text-[13.5px] font-semibold text-ink-soft">Prefer to talk right away?</p>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 text-[15px] font-semibold text-blue-dark">
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
              <a href={whatsappLink("Hi Raj Edutech, I'd like guidance on management quota admissions.")} className="flex items-center gap-2 text-[15px] font-semibold text-blue-dark">
                <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-border bg-white p-6 sm:p-8">
            <MultiStepEnquiryForm defaultProgram={program} defaultCity={city} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
