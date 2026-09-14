"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: Math.min(delay, 0.12) }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            {eyebrow && (
               <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent/80">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-3 text-[15px] leading-7 text-foreground/60">
                {description}
              </p>
            )}
          </div>
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
