import type { Metadata } from "next";
import { CityPageContent } from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "Colleges in Bangalore",
  description: "Management quota BTech, MBBS and BBA/MBA colleges in Bangalore, Karnataka — guided by Raj Edutech.",
  alternates: { canonical: "/colleges/bangalore" },
};

export default function BangaloreCollegesPage() {
  return <CityPageContent citySlug="bangalore" />;
}
