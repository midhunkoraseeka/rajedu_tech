import { Container } from "./ui/Container";
import { Eyebrow, Highlight } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { TrustPoints } from "./TrustPoints";
import { HeroVisual } from "./HeroVisual";
import { HeroForm } from "./forms/HeroForm";
import { Reveal } from "@/components/motion/Reveal";
import { fadeDown, fadeUp } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue-light">
      <span className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-blue/10 blur-3xl" aria-hidden />
      <Container className="relative grid grid-cols-1 gap-12 py-10 sm:py-12 lg:grid-cols-[1.05fr_0.85fr_0.85fr] lg:items-start lg:gap-8 lg:py-12">
        <div>
          <Reveal variants={fadeDown}>
            <Eyebrow>Your Future. Our Guidance.</Eyebrow>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.08}>
            <h1 className="mt-4 text-[2.4rem] leading-[1.12] font-extrabold tracking-tight text-blue-dark text-balance sm:text-5xl">
              Get Into The Right College With <Highlight>Confidence</Highlight>
            </h1>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.16}>
            <p className="mt-5 max-w-lg text-[16.5px] leading-relaxed text-ink-soft">
              Expert guidance for management quota admissions in BTech, MBBS
              and BBA/MBA across colleges in Hyderabad, Bangalore and Chennai.
            </p>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/enquiry" size="lg" withArrow>
                Get Admission Guidance
              </Button>
              <Button href="/colleges" variant="outline" size="lg">
                Explore Colleges
              </Button>
            </div>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.32} className="mt-9">
            <TrustPoints />
          </Reveal>
        </div>

        <HeroVisual />

        <Reveal variants={fadeUp} delay={0.2} className="rounded-[1.75rem] border border-white bg-white p-6 shadow-2xl shadow-blue-dark/10 sm:p-7">
          <HeroForm />
        </Reveal>
      </Container>
    </section>
  );
}
