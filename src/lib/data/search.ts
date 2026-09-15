import { programs } from "./programs";
import { cities } from "./cities";
import { colleges } from "./colleges";
import { blogPosts } from "./blog";

export type SearchCategory = "Programme" | "City" | "College" | "Admissions" | "Blog" | "Page";

export interface SearchItem {
  id: string;
  title: string;
  category: SearchCategory;
  description?: string;
  href: string;
  keywords: string[];
}

function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  for (const p of programs) {
    items.push({
      id: `program-${p.slug}`,
      title: p.fullName,
      category: "Programme",
      description: p.summary,
      href: `/management-quota/${p.slug}`,
      keywords: [p.shortName, p.name],
    });
  }

  for (const c of cities) {
    items.push({
      id: `city-${c.slug}`,
      title: `Colleges in ${c.name}`,
      category: "City",
      description: c.summary,
      href: `/colleges/${c.slug}`,
      keywords: [c.name, c.state],
    });
  }

  for (const college of colleges) {
    items.push({
      id: `college-${college.slug}`,
      title: college.name,
      category: "College",
      description: `${college.location} · ${college.type}`,
      href: `/colleges/${college.slug}`,
      keywords: [college.shortName, college.location, ...college.programs],
    });
  }

  for (const post of blogPosts) {
    items.push({
      id: `blog-${post.slug}`,
      title: post.title,
      category: "Blog",
      description: post.excerpt,
      href: `/blog/${post.slug}`,
      keywords: [post.category],
    });
  }

  items.push(
    {
      id: "page-enquiry",
      title: "Get admission guidance",
      category: "Admissions",
      description: "Share your programme, city and score to get personalised guidance.",
      href: "/enquiry",
      keywords: ["enquiry", "contact advisor", "guidance"],
    },
    {
      id: "page-admission-process",
      title: "Admission process",
      category: "Admissions",
      description: "The step-by-step process from consultation to admission.",
      href: "/admission-process",
      keywords: ["process", "steps", "timeline"],
    },
    {
      id: "page-management-quota",
      title: "Management quota, explained",
      category: "Admissions",
      description: "What management quota is and how it differs from counseling seats.",
      href: "/management-quota",
      keywords: ["management quota", "quota"],
    },
    {
      id: "page-colleges",
      title: "Top colleges",
      category: "Page",
      description: "Browse our full college directory by city and programme.",
      href: "/colleges",
      keywords: ["directory", "top colleges", "browse colleges"],
    },
    {
      id: "page-faq",
      title: "Frequently asked questions",
      category: "Page",
      description: "Answers to common questions about management quota admissions.",
      href: "/faq",
      keywords: ["faq", "questions", "help"],
    },
    {
      id: "page-about",
      title: "About Raj Edutech",
      category: "Page",
      description: "Who we are and how we help with admission guidance.",
      href: "/about",
      keywords: ["about", "who we are"],
    },
    {
      id: "page-contact",
      title: "Contact us",
      category: "Page",
      description: "Phone, WhatsApp and email details, plus a contact form.",
      href: "/contact",
      keywords: ["contact", "phone", "whatsapp", "email"],
    }
  );

  return items;
}

export const searchIndex = buildSearchIndex();

export const popularSearches = [
  "BTech",
  "MBBS",
  "MBA",
  "Hyderabad",
  "Bangalore",
  "Chennai",
  "Admission Process",
  "Top Colleges",
];

export function searchSite(query: string, limit = 8): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const scored: { item: SearchItem; score: number }[] = [];

  for (const item of searchIndex) {
    const title = item.title.toLowerCase();
    const haystack = [title, item.description ?? "", item.category, ...item.keywords].join(" ").toLowerCase();

    let score = 0;
    if (title === q) score = 5;
    else if (title.startsWith(q)) score = 4;
    else if (item.keywords.some((k) => k.toLowerCase() === q)) score = 3.5;
    else if (title.includes(q)) score = 3;
    else if (item.keywords.some((k) => k.toLowerCase().includes(q))) score = 2;
    else if (haystack.includes(q)) score = 1;

    if (score > 0) scored.push({ item, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.item);
}
