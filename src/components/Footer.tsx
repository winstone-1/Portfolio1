export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-white/40 sm:flex-row lg:px-8">
        <p>
          {new Date().getFullYear()} Winstone — Nairobi, Kenya. Built with
          Next.js, Tailwind & Framer Motion.
        </p>
        <p className="text-white/30">Crafted in public, shipped with care.</p>
      </div>
    </footer>
  );
}
