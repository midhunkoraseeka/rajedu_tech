"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function LoadingScreen() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 py-20">
      <div className="relative flex h-16 w-16 items-center justify-center">
        {!reduceMotion ? (
          <motion.span
            className="absolute inset-0 rounded-2xl bg-blue/20"
            animate={{ scale: [1, 1.7, 1.7], opacity: [0.55, 0, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
            aria-hidden
          />
        ) : null}
        <motion.span
          className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-blue shadow-lg shadow-blue/30"
          animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
          transition={reduceMotion ? undefined : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <GraduationCap className="h-7 w-7 text-white" aria-hidden />
          <motion.span
            className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-lime"
            animate={reduceMotion ? undefined : { scale: [1, 1.3, 1] }}
            transition={reduceMotion ? undefined : { duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            aria-hidden
          />
        </motion.span>
      </div>

      <div className="flex flex-col items-center gap-1 text-center">
        <span className="text-[14.5px] font-bold text-blue-dark">Raj EduTech</span>
        <span className="text-[13px] text-ink-soft">Getting your admission guidance ready…</span>
      </div>

      <div className="h-1 w-40 overflow-hidden rounded-full bg-blue-light">
        <motion.div
          className="h-full w-1/3 rounded-full bg-gradient-to-r from-blue to-lime"
          animate={reduceMotion ? { x: 0 } : { x: [-60, 170] }}
          transition={reduceMotion ? undefined : { duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <span role="status" aria-live="polite" className="sr-only">
        Loading page content
      </span>
    </div>
  );
}
