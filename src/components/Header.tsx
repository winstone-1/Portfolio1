"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Sentari", href: "#sentari" },
  { label: "About", href: "#about" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    NAV.forEach(({ href }) => {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-colors ${
        scrolled
          ? "border-white/[0.06] bg-[#0B1F14]/70 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[64px] max-w-6xl items-center justify-between px-6 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-400 text-[13px] font-bold text-[#0B1F14]">
            W
          </span>
          <span className="text-[#ECFDF5]">Winstone</span>
          <span className="hidden text-xs font-normal text-white/40 sm:inline">
            / Software Engineer
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "bg-white/[0.08] text-white"
                    : "text-white/60 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="ml-2 rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-[#0B1F14] transition hover:bg-emerald-300"
          >
            Contact
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white backdrop-blur md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/[0.06] bg-[#0B1F14]/95 backdrop-blur-xl md:hidden"
          >
            <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-6">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-[15px] font-medium text-white/80 hover:bg-white/[0.06] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-emerald-400 px-4 py-3 text-center text-sm font-semibold text-[#0B1F14]"
              >
                Get in touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
