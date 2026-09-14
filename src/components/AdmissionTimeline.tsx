import { admissionProcessSteps } from "@/lib/data/process";
import { RevealGroup, Reveal } from "@/components/motion/Reveal";
import { fadeUp } from "@/lib/motion";

export function AdmissionTimeline() {
  return (
    <>
      {/* Desktop: horizontal */}
      <RevealGroup className="hidden lg:grid lg:grid-cols-6 lg:gap-4" stagger={0.08}>
        {admissionProcessSteps.map((step, index) => (
          <Reveal key={step.title} variants={fadeUp} className="relative flex flex-col gap-4">
            <div className="flex items-center">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue text-[14px] font-extrabold text-white tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              {index < admissionProcessSteps.length - 1 ? (
                <span className="ml-2 h-[2px] flex-1 bg-border" aria-hidden />
              ) : null}
            </div>
            <div>
              <h3 className="text-[15.5px] font-bold text-blue-dark">{step.title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </RevealGroup>

      {/* Mobile / tablet: vertical */}
      <RevealGroup className="flex flex-col lg:hidden" stagger={0.06}>
        {admissionProcessSteps.map((step, index) => (
          <Reveal key={step.title} variants={fadeUp} as="div" className="flex gap-5">
            <div className="flex flex-col items-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue text-[13px] font-extrabold text-white tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              {index < admissionProcessSteps.length - 1 ? <span className="mt-1 w-[2px] flex-1 bg-border" aria-hidden /> : null}
            </div>
            <div className="pb-8">
              <h3 className="text-[15.5px] font-bold text-blue-dark">{step.title}</h3>
              <p className="mt-1.5 max-w-md text-[14px] leading-relaxed text-ink-soft">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </RevealGroup>
    </>
  );
}
