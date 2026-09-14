import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/lib/site";

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

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Sentari", href: "/sentari" },
  { label: "About", href: "/about" },
] as const;

export default function Footer() {
  const socials = [
    { label: "GitHub", href: siteConfig.links.github, Icon: GithubIcon },
    { label: "LinkedIn", href: siteConfig.links.linkedin, Icon: LinkedinIcon },
    { label: "X", href: siteConfig.links.x, Icon: XIcon },
    { label: "Instagram", href: siteConfig.links.instagram, Icon: InstagramIcon },
    { label: "WhatsApp", href: getWhatsAppLink(), Icon: MessageCircle },
    { label: "Email", href: `mailto:${siteConfig.email}`, Icon: Mail },
  ] as const;

  return (
    <footer className="relative z-10 mt-8 border-t border-[var(--card-border)] bg-[var(--background)]/80 backdrop-blur-sm">
      {/* gradient top accent line — off-white → navy */}
      <div className="h-px w-full bg-gradient-to-r from-[#EEEEEC] to-[#050B3A] opacity-25" aria-hidden />
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr_0.9fr]">
          {/* Brand + tagline */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-foreground text-xs font-bold text-background">
                W
              </span>
              <span className="text-sm font-semibold text-foreground">Winstone</span>
              <span className="text-xs font-normal text-foreground/50 hidden sm:inline">Software Engineer | Founder</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-foreground/60">
              A full-stack software engineer passionate in founding a startup in today&apos;s Gen while
              leveraging AI to improve Africa&apos;s ecosystem.
            </p>
            <p className="mt-2 text-xs text-foreground/40">Nairobi, Kenya</p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground/30">Explore</p>
            <nav className="mt-3 flex flex-col gap-1.5">
              {quickLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="w-fit text-sm text-foreground/60 transition hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social icons */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground/30">Connect</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--card)] text-foreground/60 transition hover:bg-[var(--card-hover)] hover:text-foreground hover:border-[var(--accent)]/20"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[var(--card-border)] pt-6 text-xs text-foreground/35 sm:flex-row">
          <p>© 2026 Winstone. All rights reserved.</p>
          <p className="text-foreground/25">Built with Next.js &amp; Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
