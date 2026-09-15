import type { Metadata } from "next";
import { Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, whatsappLink, CITIES_SERVED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Talk to Raj Edutech about management quota BTech, MBBS and MBA admission guidance in Hyderabad, Bangalore and Chennai — by phone, WhatsApp or email.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { icon: Phone, title: "Call Now", detail: PHONE_DISPLAY, href: `tel:${PHONE_TEL}`, note: "Mon–Sat, 9:30am – 7:00pm IST" },
  { icon: WhatsAppIcon, title: "WhatsApp", detail: "Message us directly", href: whatsappLink("Hi Raj Edutech, I'd like guidance on management quota admissions."), note: "Usually the fastest response" },
  { icon: Mail, title: "Email", detail: EMAIL, href: `mailto:${EMAIL}`, note: "For documents and detailed queries" },
];

export default function ContactPage() {
  return (
    <>
      <Section tone="blue" className="pb-0 sm:pb-0">
        <Container className="max-w-3xl">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-dark text-balance">
            Talk to an advisor.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            We guide families across {CITIES_SERVED.join(", ")} — most of
            the conversation happens over phone or WhatsApp, with in-person
            document verification only where a college requires it.
          </p>
        </Container>
      </Section>

      <Section tone="blue" className="pt-10">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {channels.map((c) => (
              <a key={c.title} href={c.href} className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-6 transition-colors hover:border-blue/30">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-light text-blue">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[15px] font-bold text-blue-dark">{c.title}</h3>
                  <p className="mt-1 break-all text-[15px] text-ink">{c.detail}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-[12.5px] text-ink-soft">
                    <Clock className="h-3.5 w-3.5" /> {c.note}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-2xl">
          <SectionHeading eyebrow="Get in Touch" title="Or send us your details" description="Tell us a bit about your situation and an advisor will call you back." align="left" />
          <div className="mt-8 rounded-2xl border border-border bg-white p-6 sm:p-8">
            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
