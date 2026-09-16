import type { Metadata } from "next";
import { CityPageContent } from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "Colleges in Chennai",
  description: "Management quota BTech, MBBS and BBA/MBA colleges in Chennai, Tamil Nadu — guided by Raj Edutech.",
  alternates: { canonical: "/colleges/chennai" },
};

export default function ChennaiCollegesPage() {
  return <CityPageContent citySlug="chennai" />;
}
