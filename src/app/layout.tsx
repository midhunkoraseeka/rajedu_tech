import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "@/lib/fonts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Raj Edutech is an independent admission guidance consultancy helping students and parents navigate management quota BTech, MBBS and BBA/MBA admissions in Hyderabad, Bangalore and Chennai.",
  keywords: [
    "management quota admission",
    "BTech management quota",
    "MBBS management quota",
    "BBA/MBA admission guidance",
    "admission consultancy Hyderabad",
    "admission consultancy Bangalore",
    "admission consultancy Chennai",
  ],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Independent guidance through management quota BTech, MBBS and BBA/MBA admissions — college selection, documentation and the full admission process, explained clearly.",
    url: SITE_URL,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Independent guidance through management quota BTech, MBBS and BBA/MBA admissions in Hyderabad, Bangalore and Chennai.",
  },
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  description:
    "Independent admission guidance consultancy for management quota BTech, MBBS and BBA/MBA admissions in Hyderabad, Bangalore and Chennai.",
  url: SITE_URL,
  areaServed: ["Hyderabad", "Bangalore", "Chennai"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-ink">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
