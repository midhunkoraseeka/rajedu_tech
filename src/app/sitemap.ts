import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { programs } from "@/lib/data/programs";
import { cities } from "@/lib/data/cities";
import { colleges } from "@/lib/data/colleges";
import { blogPosts } from "@/lib/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/about/leadership",
    "/about/vision-mission",
    "/about/values",
    "/why-raj-edutech",
    "/management-quota",
    "/admissions",
    "/admission-process",
    "/colleges",
    "/testimonials",
    "/blog",
    "/contact",
    "/enquiry",
    "/faq",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const programRoutes = programs.map((p) => ({
    url: `${SITE_URL}/management-quota/${p.slug}`,
    lastModified: new Date(),
  }));

  const cityRoutes = cities.map((c) => ({
    url: `${SITE_URL}/colleges/${c.slug}`,
    lastModified: new Date(),
  }));

  const collegeRoutes = colleges.map((c) => ({
    url: `${SITE_URL}/colleges/${c.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...programRoutes, ...cityRoutes, ...collegeRoutes, ...blogRoutes];
}
