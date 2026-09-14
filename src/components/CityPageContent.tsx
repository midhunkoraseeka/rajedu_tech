import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { CollegeCard } from "@/components/CollegeCard";
import { getCity, type CitySlug } from "@/lib/data/cities";
import { collegesByCity } from "@/lib/data/colleges";
import { programs } from "@/lib/data/programs";

export function CityPageContent({ citySlug }: { citySlug: CitySlug }) {
  const city = getCity(citySlug)!;
  const cityColleges = collegesByCity(city.slug);

  return (
    <>
      <Section tone="blue" className="pb-0 sm:pb-0">
        <Container className="max-w-3xl">
          <Eyebrow>{city.state}</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-dark text-balance">
            Colleges in {city.name}
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">{city.summary}</p>
        </Container>
      </Section>

      <Section tone="blue" className="pt-10">
        <Container>
          <SectionHeading title="Why families choose colleges here" className="mb-0" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {city.strengths.map((s) => (
              <li key={s} className="rounded-2xl border border-border bg-white p-5 text-[14.5px] leading-relaxed text-ink-soft">
                {s}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Colleges"
            title={`${city.name} colleges on our radar`}
            description="Filter by programme, or browse our full multi-city directory."
            action={
              <div className="flex flex-wrap gap-2">
                {programs.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/colleges?city=${city.slug}&program=${p.slug}`}
                    className="rounded-full border border-border-strong px-3.5 py-1.5 text-[13px] font-medium text-ink-soft hover:border-blue hover:text-blue"
                  >
                    {p.shortName}
                  </Link>
                ))}
              </div>
            }
          />
          {cityColleges.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cityColleges.map((college) => (
                <CollegeCard key={college.slug} college={college} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-border-strong p-8">
              <p className="text-[14.5px] leading-relaxed text-ink-soft">
                We&apos;re expanding our {city.name} directory. Talk to an
                advisor for current options in this city.
              </p>
            </div>
          )}
        </Container>
      </Section>

      <CTASection
        title={`Comparing colleges in ${city.name}?`}
        description="We'll match your score and budget against current, verified options — not just the names you've already heard of."
        whatsappMessage={`Hi Raj Edutech, I'd like guidance on colleges in ${city.name}.`}
      />
    </>
  );
}
