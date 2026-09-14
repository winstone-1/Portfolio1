"use client";

import { Mail, MessageCircle } from "lucide-react";
import { Reveal, SectionShell } from "./Section";
import { getWhatsAppLink } from "@/lib/site";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.553V9h3.566v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const links = [
  {
    label: "GitHub",
    handle: "github.com/winstone-1",
    href: "https://github.com/winstone-1",
    icon: GithubIcon,
    isBrand: true as const,
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/winstone-mwangi",
    href: "https://linkedin.com/in/winstone-mwangi",
    icon: LinkedinIcon,
    isBrand: true as const,
  },
  {
    label: "X",
    handle: "x.com/winstone_dev",
    href: "https://x.com/winstone_dev",
    icon: XIcon,
    isBrand: true as const,
  },
  {
    label: "Instagram",
    handle: "instagram.com/spear.stone_",
    href: "https://instagram.com/spear.stone_",
    icon: InstagramIcon,
    isBrand: true as const,
  },
  {
    label: "WhatsApp",
    handle: "Chat on WhatsApp",
    href: getWhatsAppLink(),
    icon: MessageCircle,
    isBrand: false as const,
  },
  {
    label: "Email",
    handle: "winstonemuna404@gmail.com",
    href: "mailto:winstonemuna404@gmail.com",
    icon: Mail,
    isBrand: false as const,
  },
] as const;

export default function Contact() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Let's build something useful."
      description="Based in Nairobi, open to collaborations across industries — especially community safety and civic systems."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="glass rounded-3xl p-7 sm:p-8">
            <h3 className="text-sm font-bold text-white">Reach out</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Fastest way is email or WhatsApp. I read everything — even if I&apos;m heads-down in a
              build, I&apos;ll get back within a day.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {links.map((l) => {
                const Icon = l.icon as React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number }>;
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                     className="group flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3.5 transition hover:border-accent/20 hover:bg-white/[0.06]"
                   >
                     <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.06] text-white group-hover:bg-accent/15 group-hover:text-accent transition-colors">
                       <Icon className="h-4 w-4" />
                     </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-white">{l.label}</span>
                      <span className="block truncate text-xs text-white/40">{l.handle}</span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
               <a
                 href="mailto:winstonemuna404@gmail.com"
                 className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition"
               >
                <Mail size={16} /> Email me
              </a>
              <a
                href="https://github.com/winstone-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/[0.10] transition"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-2">
          <div className="glass rounded-3xl p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30">What to expect</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/60">
              <li className="flex gap-2.5">
                 <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                 Reply within 24 hours — Nairobi time (EAT, UTC+3).
               </li>
               <li className="flex gap-2.5">
                 <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                 Happy to jump on a call, or keep it async — your call.
               </li>
               <li className="flex gap-2.5">
                 <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Building in public — follow progress on GitHub and X.
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30">Find me elsewhere</p>
              <p className="mt-2 text-sm leading-6 text-white/60">
                GitHub, LinkedIn, X, Instagram, WhatsApp, and email — all direct links, no third-party hub.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
