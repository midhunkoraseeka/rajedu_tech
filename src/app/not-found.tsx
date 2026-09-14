import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Section tone="blue" className="py-24 sm:py-32">
      <Container className="max-w-xl">
        <p className="text-[13.5px] font-bold text-blue">404</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-dark text-balance">
          This page isn&apos;t part of our file.
        </h1>
        <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft">
          The page you&apos;re looking for may have moved, or the link may
          be out of date. Try one of these instead.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Go to homepage</Button>
          <Button href="/colleges" variant="outline">
            Browse colleges
          </Button>
          <Button href={whatsappLink("Hi Raj Edutech, I couldn't find the page I was looking for.")} variant="outline">
            <WhatsAppIcon className="h-4 w-4" />
            Ask us directly
          </Button>
        </div>
      </Container>
    </Section>
  );
}
