"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ShoppingBag,
  Shield,
  ExternalLink,
  Check,
  Users,
  CreditCard,
  Database,
  Cpu,
  MessageSquare,
  GraduationCap,
  BookOpen,
  WifiOff,
} from "lucide-react";
import { Reveal, SectionShell } from "./Section";

const projects = [
  {
    id: "perfect-pick",
    title: "Perfect Pick",
    subtitle: "Production e-commerce for a family retail store",
    status: "Live — Production",
    statusTone: "emerald" as const,
    icon: ShoppingBag,
    href: undefined as string | undefined,
    problem:
      "A family retail store needed to move beyond manual sales and WhatsApp orders — handling per-variant inventory, authenticated checkout, and mobile money without losing trust.",
    highlights: [
      "M-Pesa STK Push via Paystack for seamless mobile checkout",
      "Firebase Auth with Google Sign-In + role gates (admin / manager / customer)",
      "Per-variant inventory tracking and admin dashboard",
      "Cloudinary for resilient product media",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB Atlas", "Firebase", "Cloudinary", "Paystack"],
    outcome: "Live and serving real customers — orders, payments, and inventory managed end-to-end.",
    meta: [
      { icon: CreditCard, label: "M-Pesa STK Push" },
      { icon: Users, label: "Admin & Manager roles" },
      { icon: Database, label: "Variant-level inventory" },
    ],
  },
  {
    id: "amakaziwatch",
    title: "AmakaziWatch",
    subtitle: "Kenya's first crowdsourced GBV awareness & reporting platform",
    status: "Live",
    statusTone: "emerald" as const,
    icon: Shield,
    href: "https://amakazi-watch.pages.dev/",
    problem:
      "Gender-based violence reporting in Kenya is fragmented and hard to access. Survivors need low-friction, private channels — and communities need credible, crowdsourced awareness.",
    highlights: [
      "5-role RBAC (survivor, responder, moderator, analyst, admin) with audited access",
      "AI intelligence module for triage and insight",
      "Multi-channel reporting: SMS, USSD & WhatsApp via Africa's Talking",
      "Secure, privacy-first reporting flow with escalation paths",
    ],
    stack: [
      "Django 5",
      "Django REST Framework",
      "PostgreSQL",
      "SimpleJWT",
"AI Model Integration",
       "Language Model API",
      "Africa's Talking",
      "Paystack",
      "Cloudinary",
      "Redis",
    ],
    outcome:
      "Live at amakazi-watch.pages.dev — first proof point for Sentari's civic safety thesis. Designed to scale beyond a single issue area.",
    meta: [
      { icon: Shield, label: "5-role RBAC" },
      { icon: Cpu, label: "AI Integration" },
      { icon: MessageSquare, label: "SMS / USSD / WhatsApp" },
    ],
  },
  {
    id: "elimu-mwalimu",
    title: "Elimu Mwalimu (Funza)",
    subtitle: "Offline-first teacher preparation for Grade 10",
    status: "Live",
    statusTone: "emerald" as const,
    icon: GraduationCap,
    href: "https://funza-peach.vercel.app/",
    problem:
      "Teachers need to turn a curriculum strand into a classroom-ready lesson quickly — with plain-language understanding, key concepts, a lesson guide, and quick formative checks, even offline.",
    highlights: [
      "Strand overview → ready-to-teach workflow: plain-language explainer, key concepts, lesson guide, formative-assessment checks",
      "Current pack: Grade 10 Biology — Cell Biology",
      "Built in a Claude buildathon (Sept 2026): Haiku for execution/content generation, Sonnet for brainstorming",
      "Offline-first PWA — service worker + IndexedDB caching for low-connectivity classrooms",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "React Router",
      "Tailwind CSS 4",
      "shadcn-style components",
      "Lucide icons",
      "PWA",
      "IndexedDB",
      "Supabase",
    ],
    outcome: "Live at funza-peach.vercel.app — teacher-tested flow from strand overview to lesson-ready in minutes.",
    meta: [
      { icon: BookOpen, label: "Grade 10 Biology" },
      { icon: WifiOff, label: "Offline-first PWA" },
      { icon: GraduationCap, label: "Claude buildathon" },
    ],
  },
];

function StatusBadge({ tone, children }: { tone: "emerald" | "amber"; children: React.ReactNode }) {
  const cls =
    tone === "emerald"
       ? "bg-accent/15 text-accent border-accent/20"
       : "bg-amber-400/15 text-amber-300 border-amber-400/20";
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${cls}`}>
      {children}
    </span>
  );
}

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <SectionShell
      id="projects"
      eyebrow="Selected work"
      title="Projects"
      description="Three case studies — production commerce, civic safety, and curriculum tools. Each card expands for the full breakdown."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, idx) => (
          <Reveal key={p.id} delay={idx * 0.08}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 380, damping: 24 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl glass glass-hover"
            >
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] border border-white/[0.06] text-white">
                     <p.icon size={20} className="text-accent" />
                  </div>
                  <StatusBadge tone={p.statusTone}>{p.status}</StatusBadge>
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-tight text-white">{p.title}</h3>
                 <p className="mt-1 text-sm font-medium text-accent/70">{p.subtitle}</p>

                <p className="mt-4 text-sm leading-6 text-white/60">{p.problem}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.meta.map((m) => (
                    <span
                      key={m.label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.04] px-2.5 py-1 text-xs text-white/60"
                    >
                      <m.icon size={12} /> {m.label}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => setExpanded((v) => (v === p.id ? null : p.id))}
                    aria-expanded={expanded === p.id}
                    className="inline-flex w-full items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm font-medium text-white transition hover:bg-white/[0.06]"
                  >
                    <span>{expanded === p.id ? "Hide details" : "View details"}</span>
                    <motion.span animate={{ rotate: expanded === p.id ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={16} className="text-white/50" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {expanded === p.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5">
                          <p className="text-xs font-semibold uppercase tracking-widest text-white/35">What was built</p>
                          <ul className="mt-3 space-y-2.5">
                            {p.highlights.map((h) => (
                              <li key={h} className="flex gap-2.5 text-sm leading-6 text-white/70">
                                 <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                                   <Check size={12} className="text-accent" />
                                </span>
                                {h}
                              </li>
                            ))}
                          </ul>

                          <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-white/35">Stack</p>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {p.stack.map((s) => (
                              <span
                                key={s}
                                className="rounded-full border border-white/[0.06] bg-white/[0.04] px-2.5 py-1 text-xs text-white/60"
                              >
                                {s}
                              </span>
                            ))}
                          </div>

                           <div className="mt-5 rounded-2xl border border-accent/10 bg-accent/[0.06] px-4 py-3">
                             <p className="text-xs font-semibold uppercase tracking-widest text-accent/70">Outcome</p>
                            <p className="mt-1.5 text-sm leading-6 text-white/70">{p.outcome}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Stack preview when collapsed */}
                {expanded !== p.id && (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 5).map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/[0.06] bg-white/[0.04] px-2.5 py-1 text-xs text-white/50"
                      >
                        {s}
                      </span>
                    ))}
                    {p.stack.length > 5 && (
                      <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs text-white/40">
                        +{p.stack.length - 5} more
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] px-6 py-4 text-xs text-white/30 sm:px-7">
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white transition"
                  >
                    <ExternalLink size={12} /> Live — {new URL(p.href).host}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5">
                    <ExternalLink size={12} /> Case study
                  </span>
                )}
                <span className="text-white/20">Hover to lift</span>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
