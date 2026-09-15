import nodemailer from "nodemailer";
import { EMAIL } from "@/lib/constants";

export interface EnquiryEmailData {
  name: string;
  phone: string;
  email?: string;
  city: string;
  program: string;
  preferredCollege?: string;
  message?: string;
  receivedAt: string;
}

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) return null;

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE !== "false",
      auth: { user, pass },
    });
  }
  return transporter;
}

/**
 * Emails a new admission enquiry to the company inbox. No-op (returns false)
 * when SMTP_USER/SMTP_PASS aren't configured — see .env.example.
 */
export async function sendEnquiryEmail(data: EnquiryEmailData): Promise<boolean> {
  const client = getTransporter();
  if (!client) return false;

  const to = process.env.ENQUIRY_TO_EMAIL || EMAIL;
  const from = process.env.SMTP_USER as string;

  const lines = [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email || "—"}`,
    `City: ${data.city}`,
    `Programme: ${data.program}`,
    `Preferred college: ${data.preferredCollege || "—"}`,
    `Message: ${data.message || "—"}`,
    `Received at: ${data.receivedAt}`,
  ];

  await client.sendMail({
    from: `"Raj Edutech Website" <${from}>`,
    to,
    replyTo: data.email || undefined,
    subject: `New enquiry: ${data.name} (${data.program}, ${data.city})`,
    text: lines.join("\n"),
    html: `<div style="font-family:sans-serif;font-size:14px;line-height:1.6">${lines
      .map((l) => `<p style="margin:0 0 6px">${l}</p>`)
      .join("")}</div>`,
  });

  return true;
}
