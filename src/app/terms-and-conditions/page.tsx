import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern your use of the Raj Edutech website and admission guidance services.",
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "14 September 2026";

export default function TermsPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-[800] tracking-tight text-ink">Terms & conditions</h1>
        <p className="mt-3 text-[14px] text-ink-soft">Last updated: {LAST_UPDATED}</p>

        <div className="mt-10 flex flex-col gap-10 text-[15px] leading-relaxed text-ink-soft">
          <section>
            <h2 className="text-lg font-[700] text-ink">1. Who we are</h2>
            <p className="mt-3">
              Raj Edutech is an independent admission guidance consultancy.
              We are not a college, university, or an official representative
              of any educational institution. These terms govern your use of
              this website and any admission guidance services you request
              from us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-[700] text-ink">2. The nature of our services</h2>
            <p className="mt-3">
              We provide guidance on management quota admissions — including
              college and branch shortlisting, fee and seat verification
              support, documentation review, and assistance through the
              reporting process. Our role is advisory. We do not control, and
              cannot guarantee, admission outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-[700] text-ink">3. No guarantee of admission</h2>
            <p className="mt-3">
              Seat allocation, eligibility verification and final admission
              decisions rest solely with the respective college and, where
              applicable, the relevant regulatory or counseling authority. We
              do not guarantee admission, a specific seat, a specific fee, or
              any placement or career outcome, and any statement to the
              contrary made by any individual does not represent our
              position.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-[700] text-ink">4. Accuracy of information</h2>
            <p className="mt-3">
              We make reasonable efforts to keep college, fee and process
              information on this website current and accurate. However,
              admission rules, fee structures and seat availability change
              frequently and are set by third parties outside our control.
              Information on this website, including our colleges directory,
              is illustrative and should be verified directly with us or the
              relevant institution before you rely on it for a decision.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-[700] text-ink">5. Fees for our services</h2>
            <p className="mt-3">
              Where we charge a consultancy fee for our guidance, it will be
              communicated to you clearly and agreed in writing before any
              payment is made. Our consultancy fee, where applicable, is
              separate from any fee charged by a college, and payment of a
              college&apos;s admission fee is a matter directly between you and
              that college.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-[700] text-ink">6. Your responsibilities</h2>
            <p className="mt-3">
              You are responsible for the accuracy of the information and
              documents you share with us, and for meeting eligibility
              criteria, deadlines and reporting requirements set by the
              relevant college or authority. We will flag deadlines and
              documentation issues we identify, but final responsibility for
              timely compliance rests with you.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-[700] text-ink">7. Limitation of liability</h2>
            <p className="mt-3">
              To the extent permitted by law, Raj Edutech is not liable for
              admission outcomes, decisions made by colleges or regulatory
              authorities, or losses arising from changes to fees, seat
              availability, or admission rules that are outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-[700] text-ink">8. Changes to these terms</h2>
            <p className="mt-3">
              We may update these terms from time to time. Continued use of
              this website or our services after an update constitutes
              acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-[700] text-ink">9. Contact us</h2>
            <p className="mt-3">
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${EMAIL}`} className="text-blue underline underline-offset-4">
                {EMAIL}
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
}
