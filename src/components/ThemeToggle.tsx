"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

function getStoredTheme(): Theme | null {
  try {
    const v = localStorage.getItem("theme");
    if (v === "light" || v === "dark") return v;
  } catch {}
  return null;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const attr = document.documentElement.getAttribute("data-theme") as Theme | null;
    const stored = getStoredTheme();
    const initial = stored ?? attr ?? "light";
    setTheme(initial);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white backdrop-blur"
        disabled
      >
        <Moon size={16} />
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--card)] text-[var(--foreground)] backdrop-blur transition hover:bg-[var(--card-hover)]"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
