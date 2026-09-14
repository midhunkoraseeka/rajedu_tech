import Link from "next/link";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProgramCard } from "@/components/ProgramCard";
import { ManagementQuotaSection } from "@/components/ManagementQuotaSection";
import { AdmissionTimeline } from "@/components/AdmissionTimeline";
import { CollegeExplorer } from "@/components/CollegeExplorer";
import { WhyRajEdutechEditorial } from "@/components/WhyRajEdutechEditorial";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { FaqAccordion } from "@/components/FaqAccordion";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import { programs } from "@/lib/data/programs";
import { testimonials } from "@/lib/data/testimonials";
import { faqs } from "@/lib/data/faq";
import { blogPosts } from "@/lib/data/blog";

export default function HomePage() {
  const featuredFaqs = faqs.slice(0, 4);
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Hero />

      <div className="relative bg-blue-light">
        <Container className="relative z-10 -mb-16 pb-16 sm:-mb-20 sm:pb-20">
          <Reveal className="-mt-8">
            <StatsBar />
          </Reveal>
        </Container>
      </div>

      <Section className="pt-24 sm:pt-28">
        <Container>
          <SectionHeading
            eyebrow="Our Programs"
            title={
              <>
                Choose Your <span className="text-lime-dark">Path to Success</span>
              </>
            }
            description="We provide expert guidance for management quota admissions in top colleges."
            action={
              <Button href="/admissions" variant="outline" withArrow>
                Explore All Programs
              </Button>
            }
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="blue">
        <ManagementQuotaSection />
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="A clear path from consultation to admission"
            description="Six steps, the same for every family — timelines shift by programme, but the process doesn't."
            action={
              <Link href="/admission-process" className="text-[14.5px] font-semibold text-blue hover:underline underline-offset-4">
                See the full process
              </Link>
            }
          />
          <div className="mt-12">
            <AdmissionTimeline />
          </div>
        </Container>
      </Section>

      <Section tone="blue">
        <Container>
          <SectionHeading
            eyebrow="Top Colleges"
            title="Explore Colleges by City"
            description="Discover colleges and admission opportunities across our key locations."
          />
          <div className="mt-10">
            <CollegeExplorer />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <WhyRajEdutechEditorial />
        </Container>
      </Section>

      <Section tone="blue">
        <Container>
          <SectionHeading eyebrow="Testimonials" title="What parents and students say" />
          <div className="mt-10">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="mt-8">
            <FaqAccordion items={featuredFaqs} />
          </div>
          <Link href="/faq" className="mt-6 inline-block text-[14.5px] font-semibold text-blue hover:underline underline-offset-4">
            See all frequently asked questions
          </Link>
        </Container>
      </Section>

      <Section tone="blue">
        <Container>
          <SectionHeading
            eyebrow="From the Blog"
            title="Notes on the admission process"
            action={
              <Link href="/blog" className="text-[14.5px] font-semibold text-blue hover:underline underline-offset-4">
                Read all articles
              </Link>
            }
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Ready to Find the Right College?"
        description="Talk to our admission guidance team and take the next step with confidence."
        whatsappMessage="Hi Raj Edutech, I'd like guidance on management quota admissions."
      />
    </>
  );
}
