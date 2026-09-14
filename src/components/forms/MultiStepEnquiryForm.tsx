"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { enquirySchema, type EnquiryInput } from "@/lib/validation";
import { submitEnquiry } from "@/lib/enquiry";
import { programs } from "@/lib/data/programs";
import { cities } from "@/lib/data/cities";
import { ProgramIcon } from "@/components/ProgramIcon";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const steps = ["Programme", "City", "Your details", "Final details"] as const;

const fieldsByStep: (keyof EnquiryInput)[][] = [
  ["program"],
  ["city"],
  ["name", "phone", "email"],
  ["preferredCollege", "message", "consent"],
];

export function MultiStepEnquiryForm({
  defaultProgram,
  defaultCity,
}: {
  defaultProgram?: string;
  defaultCity?: string;
}) {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setError,
    formState: { errors },
    reset,
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      program: (defaultProgram as EnquiryInput["program"]) || undefined,
      city: (defaultCity as EnquiryInput["city"]) || undefined,
      name: "",
      phone: "",
      email: "",
      preferredCollege: "",
      message: "",
      consent: undefined as unknown as true,
    },
  });

  const values = watch();

  async function goNext() {
    const valid = await trigger(fieldsByStep[step]);
    if (valid) setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function onSubmit(data: EnquiryInput) {
    setStatus("submitting");
    setServerError(null);
    const result = await submitEnquiry({
      name: data.name,
      phone: data.phone,
      email: data.email || undefined,
      program: data.program,
      city: data.city,
      preferredCollege: data.preferredCollege || undefined,
      message: data.message || undefined,
      consent: data.consent,
    });

    if (!result.ok) {
      setStatus("error");
      if (result.errors) {
        for (const [field, message] of Object.entries(result.errors)) {
          if (field === "form") {
            setServerError(message);
          } else {
            setError(field as keyof EnquiryInput, { message });
          }
        }
      }
      return;
    }

    setStatus("success");
    reset();
    setStep(0);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-lime/40 bg-lime-light p-7">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime text-blue-dark">
          <Check className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-bold text-blue-dark">Thanks — we&apos;ve got your enquiry.</h3>
        <p className="text-[14.5px] leading-relaxed text-ink-soft">
          A Raj Edutech advisor will call you within one business day.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Submit another enquiry
        </Button>
      </div>
    );
  }

  const transition = reduceMotion ? { duration: 0 } : { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mb-8 flex items-center gap-2">
        {steps.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col gap-2">
            <div className={cn("h-1.5 rounded-full transition-colors", i <= step ? "bg-blue" : "bg-border")} />
            <span className={cn("hidden text-[11px] font-semibold sm:block", i === step ? "text-blue" : "text-ink-soft")}>
              {label}
            </span>
          </div>
        ))}
      </div>

      {serverError ? (
        <p role="alert" className="mb-5 rounded-lg bg-danger-light px-4 py-3 text-[14px] text-danger">
          {serverError}
        </p>
      ) : null}

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={step}
          initial={reduceMotion ? undefined : { opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, x: -12 }}
          transition={transition}
        >
          {step === 0 ? (
            <fieldset>
              <legend className="text-[16px] font-bold text-blue-dark">What are you interested in?</legend>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {programs.map((p) => (
                  <label
                    key={p.slug}
                    className={cn(
                      "flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 p-5 text-center transition-colors",
                      values.program === p.slug ? "border-blue bg-blue-light" : "border-border hover:border-border-strong"
                    )}
                  >
                    <input type="radio" value={p.slug} {...register("program")} className="sr-only" />
                    <ProgramIcon icon={p.icon} className="h-6 w-6 text-blue" />
                    <span className="text-[14px] font-semibold text-blue-dark">{p.shortName}</span>
                  </label>
                ))}
              </div>
              {errors.program ? <p className="mt-2 text-[13px] text-danger">{errors.program.message}</p> : null}
            </fieldset>
          ) : null}

          {step === 1 ? (
            <fieldset>
              <legend className="text-[16px] font-bold text-blue-dark">Preferred city</legend>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {cities.map((c) => (
                  <label
                    key={c.slug}
                    className={cn(
                      "flex cursor-pointer items-center justify-center rounded-2xl border-2 p-4 text-[14px] font-semibold transition-colors",
                      values.city === c.slug ? "border-blue bg-blue-light text-blue-dark" : "border-border text-ink-soft hover:border-border-strong"
                    )}
                  >
                    <input type="radio" value={c.slug} {...register("city")} className="sr-only" />
                    {c.name}
                  </label>
                ))}
                <label
                  className={cn(
                    "flex cursor-pointer items-center justify-center rounded-2xl border-2 p-4 text-[14px] font-semibold transition-colors",
                    values.city === "not-sure" ? "border-blue bg-blue-light text-blue-dark" : "border-border text-ink-soft hover:border-border-strong"
                  )}
                >
                  <input type="radio" value="not-sure" {...register("city")} className="sr-only" />
                  Not sure yet
                </label>
              </div>
              {errors.city ? <p className="mt-2 text-[13px] text-danger">{errors.city.message}</p> : null}
            </fieldset>
          ) : null}

          {step === 2 ? (
            <fieldset className="flex flex-col gap-5">
              <legend className="text-[16px] font-bold text-blue-dark">Your details</legend>
              <Field label="Full name" error={errors.name?.message}>
                <input {...register("name")} className={inputClasses(!!errors.name)} autoComplete="name" />
              </Field>
              <Field label="Phone number" error={errors.phone?.message}>
                <input {...register("phone")} type="tel" className={inputClasses(!!errors.phone)} autoComplete="tel" />
              </Field>
              <Field label="Email address (optional)" error={errors.email?.message}>
                <input {...register("email")} type="email" className={inputClasses(!!errors.email)} autoComplete="email" />
              </Field>
            </fieldset>
          ) : null}

          {step === 3 ? (
            <fieldset className="flex flex-col gap-5">
              <legend className="text-[16px] font-bold text-blue-dark">Additional details</legend>
              <Field label="Preferred college (optional)">
                <input {...register("preferredCollege")} className={inputClasses(false)} />
              </Field>
              <Field label="Message (optional)">
                <textarea {...register("message")} rows={3} className={inputClasses(false)} />
              </Field>
              <label className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  {...register("consent")}
                  className="mt-1 h-4 w-4 shrink-0 rounded border-border-strong text-blue focus-visible:outline-2 focus-visible:outline-blue"
                />
                <span className="text-[13.5px] leading-relaxed text-ink-soft">
                  I agree to be contacted by Raj Edutech by phone, WhatsApp or
                  email about admission guidance.
                </span>
              </label>
              {errors.consent ? <p className="text-[13px] text-danger">{errors.consent.message}</p> : null}
            </fieldset>
          ) : null}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 0 ? (
          <Button type="button" variant="outline" onClick={goBack}>
            <ChevronLeft className="h-4 w-4" /> Back
          </Button>
        ) : (
          <span />
        )}

        {step < steps.length - 1 ? (
          <Button type="button" onClick={goNext}>
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Request Admission Guidance"}
          </Button>
        )}
      </div>
      <p className="mt-5 text-[12.5px] text-ink-soft">Your information is safe with us.</p>
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
