import { useEffect, useState } from "react";
import i18n from "../locales/i18n";
import MetaData from "../components/metadata";
import Navbar from "../components/navbar";
import About from "../components/about";
import Projects from "../components/projects";
import Skills from "../components/skills";
import { ArrowUp } from "lucide-react";
import Hero from "../components/hero";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-canvas text-ink">
      <MetaData pageTitle="Robson Santana | Software Engineer" />
      <Navbar />

      <main className="px-4 py-12 mx-auto max-w-[920px]">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      <footer className="py-8 text-center border-t border-border text-muted text-sm">
        &copy; {new Date().getFullYear()} Robson Santana. All rights reserved.
      </footer>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed p-3 transition-all duration-300 border rounded-full shadow-lg bottom-6 right-6 bg-surface border-border text-muted hover:text-ink hover:border-primary/30 hover:shadow-primary/5 group"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="transition-colors group-hover:text-primary" />
        </button>
      )}
    </div>
  );
}