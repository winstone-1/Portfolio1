import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact — Winstone",
  description: "Get in touch — GitHub, LinkedIn, X, Instagram, WhatsApp, email.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <Contact />
    </main>
  );
}
