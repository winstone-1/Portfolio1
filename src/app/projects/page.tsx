import Projects from "@/components/Projects";

export const metadata = {
  title: "Projects — Winstone",
  description: "Perfect Pick, AmakaziWatch, and Elimu Mwalimu (Funza) — production work across commerce, civic safety, and curriculum tools.",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <Projects />
    </main>
  );
}
