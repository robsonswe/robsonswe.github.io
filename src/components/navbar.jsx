import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hero = document.querySelector(".hero-name");
    if (!hero) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setLogoVisible(!entry.isIntersecting);
      },
      { rootMargin: "-64px 0px 0px 0px" }
    );

    io.observe(hero);
    return () => io.disconnect();
  }, []);

  const navItems = [
    { id: "about" },
    { id: "skills" },
    { id: "projects" },
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
    <nav className={`sticky top-0 z-40 transition-all duration-300 border-b backdrop-blur-md ${
      isScrolled ? "bg-canvas/85 border-border/50" : "bg-canvas/85 border-transparent"
    }`}>
      <div className="px-4 mx-auto max-w-[920px]">
        <div className="flex items-center justify-between h-16">
          <span
            ref={logoRef}
            className={`text-base font-semibold tracking-tight transition-opacity duration-250 ease-out ${
              logoVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Robson Santana
          </span>

          <div className="flex items-center gap-1">
            <div className="items-center hidden gap-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-3 py-1.5 text-sm rounded-lg transition-all text-muted hover:text-ink hover:bg-surface"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection(item.id);
                  }}
                >
                  {t(`navbar.${item.id}`)}
                </a>
              ))}
            </div>

            <button
              className="p-2 ml-2 text-muted hover:text-ink transition-colors md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute w-full border-b md:hidden bg-canvas/95 backdrop-blur-md border-border">
          <div className="flex flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-3 py-2 text-sm rounded-lg transition-colors text-muted hover:text-ink hover:bg-surface"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection(item.id);
                }}
              >
                {t(`navbar.${item.id}`)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
