import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/constants";

export function CTASection({
  title,
  description,
  whatsappMessage,
}: {
  title: string;
  description: string;
  whatsappMessage: string;
}) {
  return (
    <section className="relative overflow-hidden bg-blue-dark py-16 sm:py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue/40 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-lime/20 blur-3xl" aria-hidden />
      <Container className="relative">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white text-balance">{title}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/70">{description}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href="/enquiry" variant="lime" size="lg" withArrow className="w-full sm:w-auto">
              Get Admission Guidance
            </Button>
            <Button
              href={whatsappLink(whatsappMessage)}
              variant="outline-white"
              size="lg"
              className="w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Talk to an Advisor
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
