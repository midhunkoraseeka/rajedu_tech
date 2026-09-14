import Link from "next/link";
import { Newspaper } from "lucide-react";
import type { BlogPost } from "@/lib/data/blog";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-200 hover:-translate-y-1 hover:border-blue/30 hover:shadow-lg hover:shadow-blue-dark/10 " +
        (featured ? "sm:flex-row" : "")
      }
    >
      <div className={"flex items-center justify-center bg-blue-light " + (featured ? "h-48 sm:h-auto sm:w-2/5" : "h-40")}>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue shadow-sm">
          <Newspaper className="h-5 w-5" />
        </span>
      </div>
      <div className={"flex flex-1 flex-col gap-2 p-6 " + (featured ? "sm:justify-center" : "")}>
        <span className="text-[12px] font-bold uppercase tracking-wide text-lime-dark">{post.category}</span>
        <h3 className={"font-bold leading-snug text-blue-dark " + (featured ? "text-2xl" : "text-[16.5px]")}>
          {post.title}
        </h3>
        <p className="text-[14px] leading-relaxed text-ink-soft line-clamp-2">{post.excerpt}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-[12.5px] text-ink-soft">
            {formatDate(post.date)} · {post.readMinutes} min read
          </span>
          <span className="text-[13.5px] font-semibold text-blue group-hover:underline underline-offset-4">
            Read Article →
          </span>
        </div>
      </div>
    </Link>
  );
}
