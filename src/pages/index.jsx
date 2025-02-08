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
    <div className="relative min-h-screen bg-terminal-bg text-terminal-text"> {/* Removed overflow-hidden */}
      <MetaData pageTitle="Robson Santana | Software Engineer" />
      {/* CRT Overlay - Enhanced with more pronounced effect */}
      <div className="pointer-events-none fixed inset-0 bg-terminal-bg bg-[linear-gradient(rgba(18,16,16,0_50%)_50%,rgba(0,0,0,0.35)_50%)] bg-[length:100%_4px] z-50 opacity-20" />

      {/* Multiple Scanline Effects for more depth */}
      <div className="pointer-events-none fixed inset-0 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-terminal-text/50 before:animate-scanline" />
      <div className="pointer-events-none fixed inset-0 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-terminal-text/20 before:animate-[scanline_12s_linear_infinite]" />

      {/* Glitch Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-terminal-accent/5 mix-blend-overlay animate-flicker" />

      {/* Window-style Navigation Bar */}
      <Navbar />

      <main className="container px-4 py-12 mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      <footer className="py-6 text-center border-t border-midgray font-terminal">
        <p className="text-base">
          © {new Date().getFullYear()} Robson Santana. All rights reserved.
        </p>
      </footer>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed p-2 transition-all duration-300 rounded-lg shadow-lg bottom-4 right-4 bg-terminal-muted/80 backdrop-blur-xs border border-terminal-accent/20 hover:border-terminal-accent/50 hover:scale-110 group"
          aria-label="Back to top"
        >
          <div className="relative">
            <ArrowUp size={24} className="text-terminal-accent group-hover:text-terminal-highlight" />
            <div className="absolute inset-0 bg-terminal-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </button>
      )}
    </div>
  );
}