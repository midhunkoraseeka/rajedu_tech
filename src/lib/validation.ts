import { z } from "zod";

export const programValues = ["engineering", "medical", "management"] as const;
export const cityValues = ["hyderabad", "bangalore", "chennai", "not-sure"] as const;

export const enquirySchema = z.object({
  program: z.enum(programValues, { message: "Select a programme." }),
  city: z.enum(cityValues, { message: "Select a preferred city." }),
  name: z.string().trim().min(2, "Enter your full name."),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[\d\s-]{8,15}$/, "Enter a valid phone number."),
  email: z.string().trim().email("Enter a valid email address.").optional().or(z.literal("")),
  preferredCollege: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().optional().or(z.literal("")),
  consent: z.literal(true, { message: "Please confirm you'd like us to contact you." }),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[\d\s-]{8,15}$/, "Enter a valid phone number."),
  email: z.string().trim().email("Enter a valid email address.").optional().or(z.literal("")),
  program: z.enum(programValues).optional(),
  city: z.enum(cityValues).optional(),
  message: z.string().trim().optional().or(z.literal("")),
  consent: z.literal(true, { message: "Please confirm you'd like us to contact you." }),
});

export type ContactInput = z.infer<typeof contactSchema>;
