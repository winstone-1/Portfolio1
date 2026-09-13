import Skills from "@/components/Skills";

export const metadata = {
  title: "Skills — Winstone",
  description: "Backend, frontend, data/infra, AI/integrations, and leadership — built from what was actually shipped.",
};

export default function SkillsPage() {
  return (
    <main className="flex-1">
      <Skills />
    </main>
  );
}
