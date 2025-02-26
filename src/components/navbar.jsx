import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Code, Download } from "lucide-react";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const currentLang = i18n.language;

  const resumeFile = currentLang === 'es' ? 'curriculum.pdf'
    : currentLang.startsWith('pt') ? 'curriculo.pdf'
      : 'resume.pdf';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["about", "skills", "projects", "contact"];
      const currentPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 100 && bottom >= 100) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", icon: <Code size={16} /> },
    { id: "contact", icon: <Code size={16} /> },
    { id: "skills", icon: <Code size={16} /> },
    { id: "projects", icon: <Code size={16} /> },
  ];

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-40 transition-all duration-300 border-b backdrop-blur-md ${isScrolled
        ? "bg-terminal-bg/90 border-terminal-accent/30 shadow-[0_4px_10px_rgba(0,255,196,0.1)]"
        : "bg-terminal-bg/70 border-terminal-accent/10"
      }`}>
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Window Controls */}
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-8 md:flex font-terminal">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-lg transition-all flex items-center gap-2 px-3 py-1 rounded ${currentSection === item.id
                    ? "text-terminal-accent bg-terminal-accent/10 border border-terminal-accent/30"
                    : "text-terminal-text hover:text-terminal-accent"
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection(item.id);
                }}
              >
                {item.icon}
                {t(`navbar.${item.id}`)}
              </a>
            ))}
          </div>

          {/* Language Toggle and Resume Download */}
          <div className="flex items-center gap-4">

            <a
              href={`/${resumeFile}`}
              target="_blank"
              rel="noopener noreferrer"
              className="items-center hidden gap-2 px-3 py-1 text-sm transition-colors border rounded md:flex font-terminal border-terminal-accent/30 bg-terminal-accent/10 hover:bg-terminal-accent/20 text-terminal-accent"
            >
              <Download size={16} />
              {t("navbar.resume")}
            </a>

            {/* Mobile Menu Button */}
            <button
              className="p-2 md:hidden text-terminal-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute w-full py-4 border-b shadow-lg md:hidden bg-terminal-bg border-terminal-accent/20">
          <div className="flex flex-col gap-4 px-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-lg flex items-center gap-2 py-2 px-4 rounded font-terminal ${currentSection === item.id
                    ? "text-terminal-accent bg-terminal-accent/10 border border-terminal-accent/30"
                    : "text-terminal-text hover:text-terminal-accent"
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection(item.id);
                }}
              >
                {item.icon}
                {t(`navbar.${item.id}`)}
              </a>
            ))}

            <a
              href={`/${resumeFile}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 mt-2 text-sm transition-colors border rounded font-terminal border-terminal-accent/30 bg-terminal-accent/10 hover:bg-terminal-accent/20 text-terminal-accent"
            >
              <Download size={16} />
              {t("navbar.resume")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}