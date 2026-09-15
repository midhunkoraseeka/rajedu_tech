import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/CTASection";
import { ProgramIcon } from "@/components/ProgramIcon";
import { colleges, getCollege } from "@/lib/data/colleges";
import { getCity } from "@/lib/data/cities";
import { getProgram } from "@/lib/data/programs";
import { whatsappLink } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function generateStaticParams() {
  return colleges.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const college = getCollege(slug);
  if (!college) return {};
  return {
    title: college.name,
    description: college.summary,
    alternates: { canonical: `/colleges/${college.slug}` },
  };
}

export default async function CollegeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const college = getCollege(slug);
  if (!college) notFound();

  const city = getCity(college.city)!;

  return (
    <>
      <Section tone="blue" className="pb-0 sm:pb-0">
        <Container className="max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-[13.5px] text-ink-soft">
            <Link href="/colleges" className="hover:text-blue">
              Colleges
            </Link>
            {" / "}
            <Link href={`/colleges/${city.slug}`} className="hover:text-blue">
              {city.name}
            </Link>
          </nav>

          {college.image ? (
            <div className="relative mt-5 aspect-[16/8] w-full overflow-hidden rounded-2xl border border-border shadow-sm sm:aspect-[16/6]">
              <Image
                src={college.image}
                alt={college.name}
                fill
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}

          <div className="mt-5 flex items-center gap-3">
            {college.image ? null : (
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue shadow-sm">
                <Building2 className="h-6 w-6" />
              </span>
            )}
            <div className="flex flex-wrap gap-2">
              {college.programs.map((p) => (
                <span key={p} className="rounded-full bg-white px-3 py-1 text-[12.5px] font-semibold text-blue-dark shadow-sm">
                  {getProgram(p)!.shortName}
                </span>
              ))}
            </div>
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-dark text-balance">
            {college.name}
          </h1>
          <p className="mt-4 flex items-center gap-1.5 text-[15px] text-ink-soft">
            <MapPin className="h-4 w-4" />
            {college.location} · Established {college.established} · {college.type}
          </p>
          <p className="mt-1 text-[14px] text-ink-soft">{college.approval}</p>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">{college.summary}</p>
        </Container>
      </Section>

      <Section tone="blue" className="pt-10">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading title="Highlights" className="mb-0" />
              <ul className="mt-6 flex flex-col gap-3">
                {college.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lime-dark" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading title="Seats and indicative fees" className="mb-0" />
              <div className="mt-6 flex flex-col gap-4">
                {college.seats.map((seat) => {
                  const program = getProgram(seat.program)!;
                  return (
                    <div key={seat.program} className="rounded-2xl border border-border bg-white p-5">
                      <div className="flex items-center gap-2">
                        <ProgramIcon icon={program.icon} className="h-4 w-4 text-blue" />
                        <span className="text-[13.5px] font-bold text-blue-dark">{program.shortName}</span>
                      </div>
                      <p className="mt-3 text-[14px] font-medium text-ink">
                        {seat.branchesOrSpecialisations.join(" · ")}
                      </p>
                      <p className="mt-1 text-[14px] text-ink-soft">
                        {/^contact/i.test(seat.indicativeAnnualFee)
                          ? seat.indicativeAnnualFee
                          : `Indicative annual fee: ${seat.indicativeAnnualFee}`}
                      </p>
                    </div>
                  );
                })}
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-ink-soft">
                Fees shown are indicative and change year to year. We confirm
                the current, exact fee structure in writing before you
                commit to any seat.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title={`Considering ${college.name}?`}
        description="We'll verify current seat availability, confirm the fee structure in writing, and prepare your documentation checklist."
        whatsappMessage={`Hi Raj Edutech, I'd like guidance on admission to ${college.name}.`}
      />

      <Section className="pt-0 sm:pt-0">
        <Container>
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-dashed border-border-strong p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-[14px] leading-relaxed text-ink-soft">
              College information is illustrative and reviewed regularly
              during counseling season. Raj Edutech is not affiliated with
              or an official representative of {college.name}.
            </p>
            <Button href={whatsappLink(`Hi Raj Edutech, I'd like to verify current details for ${college.name}.`)} variant="outline" className="w-full sm:w-auto">
              <WhatsAppIcon className="h-4 w-4" />
              Verify Current Details
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
