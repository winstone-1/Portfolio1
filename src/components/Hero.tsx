"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-20 py-10 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.9fr]">
          {/* Left copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for collaborations — Nairobi, Kenya
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-[64px] lg:leading-[0.95]"
            >
              Winstone
              <span className="block text-gradient-hero">
                Software Engineer
              </span>
              <span className="block text-3xl font-semibold tracking-tight text-white/90 sm:text-4xl">
                <span className="text-white/30 font-light">|</span> Founder
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-xl text-[15px] leading-7 text-white/60 sm:text-base"
            >
              A full-stack software engineer passionate in founding a startup in
              today&apos;s Gen while leveraging AI to improve Africa&apos;s
              ecosystem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full btn-gradient px-6 py-3 text-sm font-semibold shadow-lg shadow-[rgba(36,0,200,0.25)] transition hover:brightness-110"
              >
                View Projects <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/[0.10]"
              >
                <Mail size={16} /> Contact
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex items-center gap-6 text-xs text-white/35"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} /> Nairobi, Kenya
              </span>
              <span className="h-3 w-px bg-white/10" />
              <span>Building Sentari</span>
            </motion.div>
          </div>

          {/* Right — glass stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="glass rounded-3xl p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300/70">
                  At a glance
                </p>
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { k: "2", v: "Production apps shipped" },
                  { k: "5", v: "Roles & RBAC systems built" },
                  { k: "1", v: "Startup in progress" },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-3 py-4 text-center"
                  >
                    <div className="text-xl font-bold text-white">{s.k}</div>
                    <div className="mt-1 text-[11px] leading-3 text-white/50">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                  <div className="h-9 w-9 rounded-xl bg-emerald-400/15 flex items-center justify-center text-emerald-300 text-xs font-bold">
                    PP
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white truncate">
                      Perfect Pick
                    </p>
                    <p className="text-xs text-white/50">Production · Retail commerce</p>
                  </div>
                  <span className="ml-auto rounded-full bg-emerald-400/15 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                    Live
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                  <div className="h-9 w-9 rounded-xl bg-lime-400/15 flex items-center justify-center text-lime-300 text-xs font-bold">
                    AW
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white truncate">
                      AmakaziWatch
                    </p>
                    <p className="text-xs text-white/50">Civic safety · Live</p>
                  </div>
                  <span className="ml-auto rounded-full bg-emerald-400/15 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                    Live
                  </span>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-br from-emerald-500/15 via-emerald-400/10 to-lime-400/10 border border-emerald-400/15 p-4">
                <p className="text-xs font-semibold tracking-widest text-emerald-200/70 uppercase">
                  Thesis
                </p>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  Civic and community safety systems as durable infrastructure — starting with
                  AmakaziWatch and scaling through Sentari.
                </p>
              </div>
            </div>

            {/* subtle outer glow */}
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[28px] bg-emerald-500/10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
