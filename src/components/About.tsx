"use client";

import { MapPin, Rocket, Heart, Compass } from "lucide-react";
import { Reveal, SectionShell } from "./Section";

export default function About() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="Ambitions"
      description="Where I'm headed and what draws me forward."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="glass rounded-3xl p-7 sm:p-8">
            <div className="flex items-center gap-3">
               <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-[#0B1F14] font-bold text-sm">
                 W
               </span>
              <div>
                <p className="text-sm font-bold text-white">Winstone</p>
                <p className="text-xs text-white/50">Software Engineer | Founder — Nairobi, Kenya</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-7 text-white/65">
              <p>
                I&apos;m working toward self-employment — building Sentari into a sustainable,
                independent studio for civic and community systems. I want to own the full arc:
                problem discovery, product, distribution, and the responsibility that comes with it.
              </p>
              <p>
                I&apos;m based in Nairobi and open to building in any industry where software can
                compound real-world outcomes. I&apos;m genuinely drawn to community safety — systems
                that help people report, coordinate, and protect each other when institutions are thin.
              </p>
              <p className="text-white/50">
                If you&apos;re working on coordination, safety, or civic infrastructure — or just
                want to compare notes on building in Africa with AI in the loop — I&apos;d love to
                talk.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                { icon: MapPin, label: "Nairobi, Kenya" },
                { icon: Rocket, label: "Building Sentari" },
                { icon: Heart, label: "Community safety" },
                { icon: Compass, label: "Open to any industry" },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 text-xs text-white/60"
                >
                  <chip.icon size={12} /> {chip.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-2">
          <div className="flex h-full flex-col gap-4">
            <div className="glass rounded-3xl p-6">
               <p className="text-xs font-semibold uppercase tracking-widest text-accent/60">
                 What I optimize for
               </p>
               <ul className="mt-4 space-y-3 text-sm leading-6 text-white/60">
                 <li className="flex gap-2.5">
                   <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                   Shipping — real users, real feedback, quickly.
                 </li>
                 <li className="flex gap-2.5">
                   <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                   Ownership — decisions that survive scale and scrutiny.
                 </li>
                 <li className="flex gap-2.5">
                   <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                   Usefulness — software that matters outside the demo.
                 </li>
               </ul>
            </div>

            <div className="glass rounded-3xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30">Currently</p>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Leading builds end-to-end — backend, frontend, infra, and AI integrations. Comfortable
                as solo-founder and as the engineer who makes cross-functional teams ship on time.
              </p>
              <div className="mt-4 h-px bg-white/[0.06]" />
              <p className="mt-4 text-xs text-white/35">
                Stack-agnostic, constraint-aware. Prefer Django/DRF + Postgres when reliability matters,
                Node + Mongo when speed matters.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
