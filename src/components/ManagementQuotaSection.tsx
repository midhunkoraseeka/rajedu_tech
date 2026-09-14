import { FileText, Search, ClipboardCheck, MessagesSquare } from "lucide-react";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { fadeUp, slideLeft } from "@/lib/motion";

const helpPoints = [
  { icon: Search, title: "College selection", description: "Realistic options matched to your score, budget and city." },
  { icon: ClipboardCheck, title: "Documentation support", description: "A checklist reviewed against your specific programme." },
  { icon: MessagesSquare, title: "Admission counselling", description: "Honest, plain-language answers at every step." },
  { icon: FileText, title: "Application support", description: "Help getting seat category and fees confirmed in writing." },
];

export function ManagementQuotaSection() {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal variants={slideLeft}>
          <Eyebrow>Management Quota, Explained</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-dark text-balance leading-[1.15]">
            A legitimate admission route — if you go in with the right information.
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-ink-soft">
            Management quota seats are filled directly by a college, within
            fee limits set by the relevant regulator — separate from
            centralised counseling. It gives you more say in college and
            branch, but more responsibility falls on you to verify what
            you&apos;re told. That&apos;s the gap Raj Edutech fills: honest
            comparisons, documentation review, and support through
            reporting — without ever promising a guaranteed seat.
          </p>
          <Button href="/management-quota" variant="outline" withArrow className="mt-7">
            Learn How It Works
          </Button>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.08}>
          {helpPoints.map((p) => (
            <Reveal key={p.title} variants={fadeUp} className="rounded-2xl border border-border bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-light text-blue">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[14.5px] font-bold text-blue-dark">{p.title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{p.description}</p>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </Container>
  );
}
