"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/validation";
import { submitEnquiry } from "@/lib/enquiry";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactInput) {
    setStatus("submitting");
    setServerError(null);
    const result = await submitEnquiry({
      name: data.name,
      phone: data.phone,
      email: data.email || undefined,
      program: data.program || "engineering",
      city: data.city || "not-sure",
      message: data.message || undefined,
      consent: data.consent,
    });

    if (!result.ok) {
      setStatus("error");
      if (result.errors) {
        for (const [field, message] of Object.entries(result.errors)) {
          if (field === "form") setServerError(message);
          else setError(field as keyof ContactInput, { message });
        }
      }
      return;
    }
    setStatus("success");
    reset();
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-lime/40 bg-lime-light p-7">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime text-blue-dark">
          <Check className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-bold text-blue-dark">Message sent.</h3>
        <p className="text-[14.5px] leading-relaxed text-ink-soft">We&apos;ll get back to you shortly.</p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {serverError ? (
        <p role="alert" className="rounded-lg bg-danger-light px-4 py-3 text-[14px] text-danger">
          {serverError}
        </p>
      ) : null}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name?.message}>
          <input {...register("name")} autoComplete="name" className={inputClasses(!!errors.name)} />
        </Field>
        <Field label="Phone number" error={errors.phone?.message}>
          <input {...register("phone")} type="tel" autoComplete="tel" className={inputClasses(!!errors.phone)} />
        </Field>
      </div>
      <Field label="Email (optional)" error={errors.email?.message}>
        <input {...register("email")} type="email" autoComplete="email" className={inputClasses(!!errors.email)} />
      </Field>
      <Field label="Message">
        <textarea {...register("message")} rows={4} className={inputClasses(false)} placeholder="Tell us a bit about your situation…" />
      </Field>
      <label className="flex items-start gap-2.5">
        <input type="checkbox" {...register("consent")} className="mt-1 h-4 w-4 shrink-0 rounded border-border-strong text-blue" />
        <span className="text-[13.5px] leading-relaxed text-ink-soft">
          I agree to be contacted by Raj Edutech about my enquiry.
        </span>
      </label>
      {errors.consent ? <p className="-mt-3 text-[13px] text-danger">{errors.consent.message}</p> : null}
      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-fit">
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[14px] font-medium text-ink">{label}</label>
      {children}
      {error ? <p className="text-[13px] text-danger">{error}</p> : null}
    </div>
  );
}

function inputClasses(hasError: boolean) {
  return cn(
    "rounded-xl border bg-white px-4 py-2.5 text-[15px] text-ink outline-none focus:border-blue",
    hasError ? "border-danger" : "border-border"
  );
}
