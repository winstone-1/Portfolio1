import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Sentari from "@/components/Sentari";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Projects />
      <Skills />
      <Sentari />
      <About />
      <Contact />
    </main>
  );
}
