export const SITE_NAME = "Raj Edutech";
export const SITE_TAGLINE = "Management quota admission guidance for BTech, MBBS and MBA";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.rajedutech.in";

export const PHONE_DISPLAY = "+91 75595 67655";
export const PHONE_TEL = "+917559567655";
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917559567655";

// PLACEHOLDER — replace with Raj Edutech's real email before launch. The
// real rajedutech.com site could not be reached to source this (it returned
// a bot-verification wall at build time).
export const EMAIL = "info@rajedutech.in";

export const CITIES_SERVED = ["Hyderabad", "Bangalore", "Chennai"] as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
