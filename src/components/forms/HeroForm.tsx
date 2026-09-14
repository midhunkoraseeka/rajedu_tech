"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Lock } from "lucide-react";
import { enquirySchema, type EnquiryInput } from "@/lib/validation";
import { submitEnquiry } from "@/lib/enquiry";
import { programs } from "@/lib/data/programs";
import { cities } from "@/lib/data/cities";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

export function HeroForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
  });

  async function onSubmit(data: EnquiryInput) {
    setStatus("submitting");
    setServerError(null);
    const result = await submitEnquiry({ ...data, email: data.email || undefined });

    if (!result.ok) {
      setStatus("error");
      if (result.errors) {
        for (const [field, message] of Object.entries(result.errors)) {
          if (field === "form") setServerError(message);
          else setError(field as keyof EnquiryInput, { message });
        }
      }
      return;
    }
    setStatus("success");
    reset();
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl bg-lime-light p-6">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime text-blue-dark">
          <Check className="h-5 w-5" />
        </span>
        <h3 className="text-base font-bold text-blue-dark">Thanks — we&apos;ve got it.</h3>
        <p className="text-[13.5px] leading-relaxed text-ink-soft">
          An advisor will call you within one business day.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="text-[13.5px] font-semibold text-blue underline underline-offset-4">
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
      <div>
        <h3 className="text-lg font-extrabold text-blue-dark">Start Your Admission Journey</h3>
        <p className="mt-1 text-[13.5px] text-ink-soft">Get expert guidance from our counselling team.</p>
      </div>

      {serverError ? (
        <p role="alert" className="rounded-lg bg-danger-light px-3.5 py-2.5 text-[13px] text-danger">
          {serverError}
        </p>
      ) : null}

      <div className="flex flex-col gap-3">
        <input
          {...register("name")}
          placeholder="Full Name"
          autoComplete="name"
          aria-invalid={!!errors.name}
          className={inputClasses(!!errors.name)}
        />
        {errors.name ? <FieldError message={errors.name.message} /> : null}

        <input
          {...register("phone")}
          type="tel"
          placeholder="Phone Number"
          autoComplete="tel"
          aria-invalid={!!errors.phone}
          className={inputClasses(!!errors.phone)}
        />
        {errors.phone ? <FieldError message={errors.phone.message} /> : null}

        <input
          {...register("email")}
          type="email"
          placeholder="Email Address"
          autoComplete="email"
          aria-invalid={!!errors.email}
          className={inputClasses(!!errors.email)}
        />
        {errors.email ? <FieldError message={errors.email.message} /> : null}

        <select {...register("program")} defaultValue="" aria-invalid={!!errors.program} className={inputClasses(!!errors.program)}>
          <option value="" disabled>
            Select Program
          </option>
          {programs.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.shortName}
            </option>
          ))}
        </select>
        {errors.program ? <FieldError message={errors.program.message} /> : null}

        <select {...register("city")} defaultValue="" aria-invalid={!!errors.city} className={inputClasses(!!errors.city)}>
          <option value="" disabled>
            Select Preferred City
          </option>
          {cities.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
          <option value="not-sure">Not sure yet</option>
        </select>
        {errors.city ? <FieldError message={errors.city.message} /> : null}

        <label className="flex items-start gap-2 pt-1">
          <input type="checkbox" {...register("consent")} className="mt-0.5 h-4 w-4 shrink-0 rounded border-border-strong text-blue" />
          <span className="text-[12px] leading-relaxed text-ink-soft">
            I agree to be contacted about admission guidance.
          </span>
        </label>
        {errors.consent ? <FieldError message={errors.consent.message} /> : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-blue px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-blue-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request Guidance →"}
      </button>
      <p className="flex items-center justify-center gap-1.5 text-center text-[11.5px] text-ink-soft">
        <Lock className="h-3 w-3" /> Your information is safe with us.
      </p>
    </form>
  );
}

function FieldError({ message }: { message?: string }) {
  return <p className="-mt-2 text-[12px] text-danger">{message}</p>;
}

function inputClasses(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-white px-4 py-2.5 text-[14.5px] text-ink outline-none focus:border-blue",
    hasError ? "border-danger" : "border-border"
  );
}
