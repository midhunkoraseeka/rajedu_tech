import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical, specific guidance on management quota admissions — documentation, fees, timelines and college selection for BTech, MBBS and MBA.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const [featured, ...rest] = sorted;

  return (
    <>
      <Section tone="blue" className="pb-0 sm:pb-0">
        <Container className="max-w-3xl">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-dark text-balance">
            Notes on the admission process.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            Practical, specific writing on documentation, fees and college
            selection — the kind of detail that usually only surfaces after
            you&apos;ve already made a mistake.
          </p>
        </Container>
      </Section>

      <Section tone="blue" className="pt-10">
        <Container>
          {featured ? <BlogCard post={featured} featured /> : null}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Have a question these articles don't answer?"
        description="Ask us directly — most questions are specific to your score, budget or city anyway."
        whatsappMessage="Hi Raj Edutech, I have a question about the admission process."
      />
    </>
  );
}
