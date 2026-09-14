import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CTASection } from "@/components/CTASection";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts, getBlogPost } from "@/lib/data/blog";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, publishedTime: post.date },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Raj Edutech" },
    publisher: { "@type": "Organization", name: "Raj Edutech" },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Section tone="blue" className="pb-0 sm:pb-0">
        <Container className="max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-[13.5px] text-ink-soft">
            <Link href="/blog" className="hover:text-blue">Blog</Link>
          </nav>
          <p className="mt-4 text-[13px] font-bold uppercase tracking-wide text-lime-dark">{post.category}</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-dark text-balance">{post.title}</h1>
          <p className="mt-4 text-[14px] text-ink-soft">
            {formatDate(post.date)} · {post.readMinutes} min read
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-5">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-[16px] leading-relaxed text-ink-soft">{paragraph}</p>
            ))}
          </div>
        </Container>
      </Section>

      {related.length > 0 ? (
        <Section tone="blue">
          <Container className="max-w-3xl">
            <h2 className="text-2xl font-extrabold tracking-tight text-blue-dark">Related reading</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <CTASection
        title="Want this kind of guidance applied to your own situation?"
        description="Talk to an advisor about your programme, city and score."
        whatsappMessage="Hi Raj Edutech, I have a question about the admission process."
      />
    </>
  );
}
