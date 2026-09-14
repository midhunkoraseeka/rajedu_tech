export interface EnquiryPayload {
  name: string;
  phone: string;
  email?: string;
  program: string;
  city: string;
  preferredCollege?: string;
  message?: string;
  consent: boolean;
}

export interface EnquiryResult {
  ok: boolean;
  errors?: Record<string, string>;
}

/**
 * Single entry point every form on the site uses to submit an enquiry.
 * Today this posts to our own /api/enquiry route, which just validates and
 * logs. Swapping in a real CRM/email delivery later (see .env.example) only
 * requires changing that route handler — no UI code needs to change.
 */
export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResult> {
  const res = await fetch("/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) {
    return { ok: false, errors: data.errors || { form: "Something went wrong. Please try again." } };
  }
  return { ok: true };
}
