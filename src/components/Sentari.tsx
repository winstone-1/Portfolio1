"use client";

import { motion } from "framer-motion";
import { Lightbulb, Hammer, ArrowRight } from "lucide-react";
import { Reveal } from "./Section";

export default function Sentari() {
  return (
    <section id="sentari" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-emerald-400/15 bg-gradient-to-br from-emerald-500/[0.08] via-white/[0.04] to-lime-400/[0.05] backdrop-blur">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 sm:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold tracking-widest text-emerald-200 uppercase">
                  <Lightbulb size={14} /> Sentari — Early stage · Solo founder
                </div>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Civic safety as infrastructure.
                </h2>

                <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/65">
                  Sentari&apos;s thesis is simple: community safety systems should be durable,
                  inclusive, and locally built. Not a one-off campaign — infrastructure that
                  communities can own and extend.
                </p>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/50">
                  AmakaziWatch is the first proof point — a reporting and awareness platform that
                  meets people where they are: SMS, USSD, WhatsApp. The same patterns apply to
                  other safety and civic coordination problems across the continent.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0B1F14] hover:bg-white/90 transition"
                  >
                    See AmakaziWatch <ArrowRight size={14} />
                  </a>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white/70">
                    <Hammer size={14} /> Building in public
                  </span>
                </div>

                <p className="mt-6 text-xs leading-5 text-white/30">
                  Solo-founder, building in the open. Thesis first, pitch deck later.
                </p>
              </div>

              <div className="relative border-t border-white/[0.06] bg-white/[0.02] p-8 sm:p-10 lg:border-l lg:border-t-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
                  How we think about it
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      n: "01",
                      t: "Report anywhere",
                      d: "SMS / USSD / WhatsApp — no smartphone or data required.",
                    },
                    {
                      n: "02",
                      t: "Triage with care",
                      d: "AI-assisted intake (Groq / LLaMA 3.3) with human escalation.",
                    },
                    {
                      n: "03",
                      t: "Community-owned data",
                      d: "Crowdsourced awareness, auditable RBAC, privacy by design.",
                    },
                  ].map((step) => (
                    <div
                      key={step.n}
                      className="flex gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4"
                    >
                      <span className="text-xs font-bold tracking-widest text-emerald-300">{step.n}</span>
                      <div>
                        <p className="text-sm font-semibold text-white">{step.t}</p>
                        <p className="mt-1 text-xs leading-5 text-white/50">{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-8 rounded-2xl border border-amber-400/15 bg-amber-400/[0.06] px-4 py-3"
                >
                  <p className="text-xs font-semibold text-amber-200">Status</p>
                  <p className="mt-1 text-sm leading-6 text-white/70">
                    Early-stage, pre-product. Sharing learnings as we build — follow along or reach
                    out if you&apos;re working on adjacent problems.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
