"use client";

import { Code2, Layout, Database, Cpu, UsersRound } from "lucide-react";
import { Reveal, SectionShell } from "./Section";

const groups = [
  {
    title: "Backend",
    icon: Code2,
    items: ["Django", "Django REST Framework", "Node.js", "Express", "SimpleJWT"],
    accent: "emerald" as const,
  },
  {
    title: "Frontend",
    icon: Layout,
    items: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    accent: "lime" as const,
  },
  {
    title: "Data / Infra",
    icon: Database,
    items: ["PostgreSQL", "MongoDB Atlas", "Firebase", "Redis", "Cloudinary"],
    accent: "teal" as const,
  },
  {
    title: "AI / Integrations",
    icon: Cpu,
    items: ["Groq API (LLaMA 3.3 70B)", "Africa's Talking (SMS/USSD)", "Paystack", "WhatsApp API"],
    accent: "amber" as const,
  },
  {
    title: "Leadership & Collaboration",
    icon: UsersRound,
    items: [
      "Led cross-functional teams across backend / frontend / infra sub-leads",
      "Technical decision-making across the stack",
      "Collaborative problem-solving under hackathon time pressure",
    ],
    accent: "emerald" as const,
    wide: true,
  },
];

export default function Skills() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Capabilities"
      title="Skills"
      description="Built from what was actually shipped across Perfect Pick and AmakaziWatch — not a wishlist."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g, idx) => (
          <Reveal key={g.title} delay={idx * 0.06} className={g.wide ? "sm:col-span-2 lg:col-span-4" : ""}>
            <div
              className={`group flex h-full flex-col rounded-3xl glass glass-hover p-6 transition ${
                g.wide ? "lg:flex-row lg:items-start lg:gap-8" : ""
              }`}
            >
              <div className={g.wide ? "lg:w-[260px] lg:shrink-0" : ""}>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.04] text-emerald-300">
                  <g.icon size={18} />
                </div>
                <h3 className="mt-4 text-sm font-bold tracking-tight text-white">{g.title}</h3>
                {!g.wide && (
                  <p className="mt-1 text-xs leading-5 text-white/40">
                    {g.title === "Backend" && "APIs, auth, and business logic that holds up in production."}
                    {g.title === "Frontend" && "Component systems that stay fast and legible."}
                    {g.title === "Data / Infra" && "Persistence, caching, and media that scales."}
                    {g.title === "AI / Integrations" && "Model and telco plumbing for real-world reach."}
                  </p>
                )}
                {g.wide && (
                  <p className="mt-2 text-xs leading-5 text-white/50">
                    How the team ships — decisions, ownership, and pace under constraint.
                  </p>
                )}
              </div>

              <div className={g.wide ? "mt-6 flex-1 lg:mt-0" : "mt-5 flex-1"}>
                <div className={`flex flex-wrap gap-1.5 ${g.wide ? "lg:gap-2" : ""}`}>
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full border bg-white/[0.04] px-3 py-1.5 text-xs leading-none text-white/70 border-white/[0.06] group-hover:border-emerald-400/15 group-hover:bg-white/[0.06] transition-colors ${
                        g.wide ? "py-2 text-[13px]" : ""
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
