export type CitySlug = "hyderabad" | "bangalore" | "chennai";

export interface City {
  slug: CitySlug;
  name: string;
  state: string;
  summary: string;
  strengths: string[];
}

export const cities: City[] = [
  {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    summary:
      "One of India's largest clusters of private engineering and medical colleges, with a wide spread of fee brackets across Telangana's counseling and management quota routes.",
    strengths: [
      "Deep bench of engineering colleges across every major branch",
      "Established government medical colleges with long teaching-hospital histories",
      "Business schools affiliated with Osmania University and other state universities",
    ],
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    summary:
      "India's largest technology hub, home to some of the country's most sought-after engineering and management institutes, alongside strong medical colleges under Karnataka's admission framework.",
    strengths: [
      "Engineering colleges with strong campus placement pipelines into IT and product companies",
      "A wide range of AICTE-approved MBA and PGDM institutes",
      "Medical colleges under Karnataka's Fee Regulatory Committee framework",
    ],
  },
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    summary:
      "A long-established higher education hub with some of the oldest private engineering and medical institutions in South India, operating under Tamil Nadu's counseling and quota structure.",
    strengths: [
      "Long-standing engineering colleges with strong core-branch reputations",
      "Reputed private medical colleges recognised by the National Medical Commission",
      "Management institutes affiliated with Anna University and other state universities",
    ],
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}
