import { NextResponse } from "next/server";
import { cityValues, programValues } from "@/lib/validation";
import { sendEnquiryEmail } from "@/lib/mail";

interface EnquiryPayload {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  program?: string;
  preferredCollege?: string;
  message?: string;
  consent?: boolean;
}

const cityValueSet = new Set<string>(cityValues);
const programValueSet = new Set<string>(programValues);
const phonePattern = /^[+]?[\d\s-]{8,15}$/;

export async function POST(request: Request) {
  let body: EnquiryPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const errors: Record<string, string> = {};

  if (!body.name || body.name.trim().length < 2) {
    errors.name = "Enter your full name.";
  }
  if (!body.phone || !phonePattern.test(body.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }
  if (body.email && !/^\S+@\S+\.\S+$/.test(body.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!body.city || !cityValueSet.has(body.city)) {
    errors.city = "Select a preferred city.";
  }
  if (!body.program || !programValueSet.has(body.program)) {
    errors.program = "Select a programme.";
  }
  if (!body.consent) {
    errors.consent = "Please confirm you'd like us to contact you.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const enquiry = {
    name: body.name as string,
    phone: body.phone as string,
    email: body.email || undefined,
    city: body.city as string,
    program: body.program as string,
    preferredCollege: body.preferredCollege || undefined,
    message: body.message || undefined,
    receivedAt: new Date().toISOString(),
  };

  // Email the enquiry to the company inbox when SMTP is configured (see
  // .env.example). Also forward to a webhook (CRM/Zapier/etc.) when set.
  // If neither is configured, the enquiry is only logged server-side.
  let emailed = false;
  try {
    emailed = await sendEnquiryEmail(enquiry);
  } catch (err) {
    console.error("Failed to email enquiry:", err);
  }

  const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiry),
      });
    } catch (err) {
      console.error("Failed to forward enquiry to webhook:", err);
    }
  }

  if (!emailed && !webhookUrl) {
    console.log("New admission enquiry (no SMTP_USER/SMTP_PASS or ENQUIRY_WEBHOOK_URL configured):", enquiry);
  }

  return NextResponse.json({ ok: true });
}
