import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Scale, FileCheck, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { fadeUp } from "@/lib/motion";
import { CITIES_SERVED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Raj Edutech is an independent admission guidance consultancy for management quota BTech, MBBS and MBA seats — not a college, and not affiliated with one.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    icon: ShieldCheck,
    title: "We're independent",
    description: "We are not owned by, or affiliated with, any college. Our advice isn't shaped by which institution benefits most from your decision.",
  },
  {
    icon: Scale,
    title: "We put fees in writing",
    description: "Verbal promises about fees and seats are where most admission disputes start. We insist on getting the fee structure confirmed in writing before you pay anything.",
  },
  {
    icon: FileCheck,
    title: "We take documentation seriously",
    description: "A missing or mismatched certificate is the most common reason a reporting-day trip goes wrong. We review every document against a checklist built for your programme.",
  },
  {
    icon: Compass,
    title: "We stay in it with you",
    description: "Admission season is not a single transaction for us. We stay reachable from your first question through to settling in after admission.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section tone="blue" className="pb-0 sm:pb-0">
        <Container className="max-w-3xl">
          <Eyebrow>About Raj Edutech</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-dark text-balance">
            Admission guidance, without the sales pitch.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            Raj Edutech exists because management quota admissions are hard
            to navigate on your own — not because the process is complicated
            by nature, but because the information you need is scattered,
            inconsistent, and often comes from people with something to sell
            you. We help students and parents in {CITIES_SERVED.join(", ")}{" "}
            cut through that, with honest comparisons and steady support
            through documentation and reporting.
          </p>
        </Container>
      </Section>

      <Section tone="blue" className="pt-10">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-5 rounded-2xl border border-border bg-white p-7 text-[15.5px] leading-relaxed text-ink-soft sm:p-9">
            <p>
              We are an independent admission guidance consultancy. We are
              not a college, a university, or an official representative of
              any educational institution — and we don&apos;t present
              ourselves as one. Our role is to sit on your side of the
              table: understanding your academic profile, budget and city
              preference, and matching that against realistic options
              across BTech, MBBS and MBA management quota seats.
            </p>
            <p>
              That also means we won&apos;t tell you what you want to hear
              just to close a conversation. If a college doesn&apos;t fit
              your budget, or your score doesn&apos;t realistically support
              a seat you&apos;re hoping for, we&apos;ll say so — and show
              you what does fit, instead.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title="What guides how we work"
            description="Four principles that shape every conversation, whether it's your first call or your reporting day."
          />
          <RevealGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.08}>
            {principles.map((p) => (
              <Reveal key={p.title} variants={fadeUp} className="flex gap-4 rounded-2xl border border-border bg-white p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-light text-blue">
                  <p.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[16px] font-bold text-blue-dark">{p.title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section tone="blue">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Why We Exist" title="What we don't do" className="mb-0" />
          <ul className="mt-8 flex flex-col gap-4">
            <li className="rounded-2xl border-l-4 border-blue bg-white p-5 text-[15px] leading-relaxed text-ink-soft">
              We don&apos;t guarantee admission, a specific seat, or a
              placement outcome. Nobody honestly can — allocation is always
              controlled by the college and, where applicable, the
              regulatory authority.
            </li>
            <li className="rounded-2xl border-l-4 border-blue bg-white p-5 text-[15px] leading-relaxed text-ink-soft">
              We don&apos;t ask you to pay a college before its fee
              structure and seat category are confirmed to you in writing.
            </li>
            <li className="rounded-2xl border-l-4 border-blue bg-white p-5 text-[15px] leading-relaxed text-ink-soft">
              We don&apos;t claim to be a college, a university, or an
              official partner of one, and we&apos;ll correct anyone who
              assumes otherwise.
            </li>
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <p className="text-[15px] text-ink-soft">
            Want the fuller picture?{" "}
            <Link href="/about/vision-mission" className="font-semibold text-blue hover:underline underline-offset-4">
              Read our vision &amp; mission
            </Link>
            ,{" "}
            <Link href="/about/values" className="font-semibold text-blue hover:underline underline-offset-4">
              our values
            </Link>
            , or{" "}
            <Link href="/about/leadership" className="font-semibold text-blue hover:underline underline-offset-4">
              who leads the team
            </Link>
            .
          </p>
        </Container>
      </Section>

      <CTASection
        title="Have a specific situation you'd like to talk through?"
        description="Tell us your programme, city and score, and we'll give you a straight answer on what's realistic."
        whatsappMessage="Hi Raj Edutech, I'd like to know more about how you work."
      />
    </>
  );
}
