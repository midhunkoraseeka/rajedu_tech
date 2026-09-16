import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Raj Edutech collects, uses and protects your information.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "14 September 2026";

export default function PrivacyPolicyPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-[800] tracking-tight text-ink">Privacy policy</h1>
        <p className="mt-3 text-[14px] text-ink-soft">Last updated: {LAST_UPDATED}</p>

        <div className="mt-10 flex flex-col gap-10 text-[15px] leading-relaxed text-ink-soft">
          <section>
            <h2 className="text-lg font-[700] text-ink">1. What this policy covers</h2>
            <p className="mt-3">
              This policy explains what information Raj Edutech (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;) collects when you use this website or contact us
              about admission guidance, and how we use, store and protect it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-[700] text-ink">2. Information we collect</h2>
            <p className="mt-3">When you submit an enquiry, contact form, or message us directly, we may collect:</p>
            <ul className="mt-3 flex flex-col gap-2">
              <li>Your name, phone number and email address</li>
              <li>Your preferred programme (BTech, MBBS or BBA/MBA) and city</li>
              <li>Academic details you choose to share, such as exam scores, to help us give relevant guidance</li>
              <li>Any documents you share with us during the admission process, for the purpose of verification and guidance</li>
            </ul>
            <p className="mt-3">
              We do not knowingly collect sensitive information beyond what is
              reasonably necessary for admission guidance, and we do not
              collect payment card details on this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-[700] text-ink">3. How we use your information</h2>
            <p className="mt-3">We use the information you share with us to:</p>
            <ul className="mt-3 flex flex-col gap-2">
              <li>Respond to your enquiry and provide admission guidance</li>
              <li>Prepare and review documentation relevant to your admission</li>
              <li>Contact you by phone, WhatsApp or email about your enquiry or ongoing guidance</li>
              <li>Improve the accuracy and usefulness of the guidance we provide</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information to third parties. We
              may share relevant details with a specific college, strictly
              where necessary to progress your admission, and only with your
              knowledge.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-[700] text-ink">4. Cookies and analytics</h2>
            <p className="mt-3">
              This website does not use third-party advertising cookies. If
              we introduce analytics tools in the future to understand how
              visitors use the site, we will update this policy accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-[700] text-ink">5. Data retention</h2>
            <p className="mt-3">
              We retain enquiry and admission-related information for as long
              as reasonably necessary to provide guidance and maintain
              admission records, or as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-[700] text-ink">6. Your rights</h2>
            <p className="mt-3">
              You may ask us to review, correct, or delete the personal
              information we hold about you, subject to any legal or
              administrative requirement to retain admission-related records.
              To make a request, contact us at{" "}
              <a href={`mailto:${EMAIL}`} className="break-all text-blue underline underline-offset-4">
                {EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-[700] text-ink">7. Changes to this policy</h2>
            <p className="mt-3">
              We may update this policy from time to time. The &ldquo;last
              updated&rdquo; date at the top of this page reflects the most
              recent revision.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-[700] text-ink">8. Contact us</h2>
            <p className="mt-3">
              If you have questions about this policy or how your information
              is handled, write to us at{" "}
              <a href={`mailto:${EMAIL}`} className="break-all text-blue underline underline-offset-4">
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
