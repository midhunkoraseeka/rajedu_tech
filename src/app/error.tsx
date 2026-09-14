"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section tone="blue" className="py-24 sm:py-32">
      <Container className="max-w-xl">
        <p className="text-[13.5px] font-bold text-danger">Something went wrong</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-dark text-balance">
          That page hit a snag.
        </h1>
        <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft">
          It&apos;s on our end, not yours. Try again, or head back to the
          homepage.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button onClick={reset}>Try again</Button>
          <Button href="/" variant="outline">
            Go to homepage
          </Button>
        </div>
      </Container>
    </Section>
  );
}
