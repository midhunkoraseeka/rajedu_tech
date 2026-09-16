import type { Metadata } from "next";
import { CityPageContent } from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "Colleges in Hyderabad",
  description: "Management quota BTech, MBBS and BBA/MBA colleges in Hyderabad, Telangana — guided by Raj Edutech.",
  alternates: { canonical: "/colleges/hyderabad" },
};

export default function HyderabadCollegesPage() {
  return <CityPageContent citySlug="hyderabad" />;
}
