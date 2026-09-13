"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Hammer,
  ArrowRight,
  Bus,
  ShieldAlert,
  Check,
  Smartphone,
  MapPin,
} from "lucide-react";
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
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0B1F14] hover:bg-white/90 transition"
                  >
                    See AmakaziWatch <ArrowRight size={14} />
                  </Link>
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

        {/* SafeSignal — in-build MVP */}
        <Reveal delay={0.08}>
          <div className="mt-8 overflow-hidden rounded-3xl glass glass-hover">
            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-6 sm:p-7 lg:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] border border-white/[0.06] text-emerald-300">
                    <ShieldAlert size={20} />
                  </div>
                  <span className="inline-flex items-center rounded-full border bg-amber-400/15 text-amber-300 border-amber-400/20 px-2.5 py-1 text-xs font-medium">
                    In build — MVP
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Bus size={14} className="text-white/40" />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300/70">
                    SafeSignal — Nairobi–Kiambu corridors
                  </p>
                </div>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                  A Kenya-first safety signal for matatu &amp; boda passengers
                </h3>
                <p className="mt-2 text-sm font-medium italic text-emerald-200/70">
                  &ldquo;Get discreet support during or after an unsafe matatu or boda incident. You
                  decide what happens next.&rdquo;
                </p>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  Starting with Nairobi–Kiambu commuter corridors: a discreet first action when you
                  feel threatened — no confrontation with crew, no forced police report. Signal,
                  get calm guidance, choose next steps on your terms.
                </p>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/35">The wedge</p>
                  <ul className="mt-3 space-y-2.5">
                    {[
                      "Discreet signal — one tap when you feel unsafe, without alerting the vehicle",
                      "Support during or after — guidance in the moment + follow-up options when you're safe",
                      "You decide — no auto-escalation; you choose whether to share, report, or just get advice",
                    ].map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-6 text-white/70">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15">
                          <Check size={12} className="text-emerald-300" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {["React", "Vite", "Tailwind CSS", "React Router", "Supabase"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.06] bg-white/[0.04] px-2.5 py-1 text-xs text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative flex flex-col justify-between border-t border-white/[0.06] bg-white/[0.02] p-6 sm:p-7 lg:border-l lg:border-t-0">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/30">Scope</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
                      <MapPin size={16} className="mt-0.5 shrink-0 text-emerald-300" />
                      <div>
                        <p className="text-sm font-semibold text-white">Nairobi–Kiambu first</p>
                        <p className="mt-1 text-xs leading-5 text-white/50">
                          Matatu and boda corridors where commuter volume is highest.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
                      <Smartphone size={16} className="mt-0.5 shrink-0 text-emerald-300" />
                      <div>
                        <p className="text-sm font-semibold text-white">No confrontation required</p>
                        <p className="mt-1 text-xs leading-5 text-white/50">
                          Designed for low-friction, private action from the passenger seat.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
                      <Hammer size={16} className="mt-0.5 shrink-0 text-emerald-300" />
                      <div>
                        <p className="text-sm font-semibold text-white">MVP in build</p>
                        <p className="mt-1 text-xs leading-5 text-white/50">
                          Core signal flow now; expanding guidance and corridor coverage next.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.06] px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300/70">Status</p>
                  <p className="mt-1.5 text-sm leading-6 text-white/70">
                    In build — MVP stage. Short, focused wedge before broader safety tooling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
