import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { footerColumns } from "@/lib/data/navigation";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, whatsappLink, CITIES_SERVED } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-blue-dark text-white">
      <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-white/65">
              Independent admission guidance for management quota BTech, MBBS
              and BBA/MBA seats in {CITIES_SERVED.join(", ")}.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 text-[14.5px]">
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 text-white/80 hover:text-white">
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
              <a
                href={whatsappLink("Hi Raj Edutech, I'd like guidance on management quota admissions.")}
                className="flex items-center gap-2 text-white/80 hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp us
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-start gap-2 text-white/80 hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" /> <span className="break-all">{EMAIL}</span>
              </a>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[13px] font-bold uppercase tracking-wide text-lime">{col.heading}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[14.5px] text-white/80 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-[13.5px] leading-relaxed text-white/60">
          Raj Edutech is an independent admission guidance consultancy. We are
          not a college, university, or official representative of any
          educational institution, and we do not guarantee admission, seat
          allocation, or placement outcomes. Seats are offered and allocated
          solely by the respective colleges and regulatory authorities as per
          applicable rules.
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 text-[13.5px] text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Raj Edutech. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms & conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
