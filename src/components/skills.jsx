import { useTranslation } from "react-i18next";
import { useSkills } from "../hooks/useSkills";
import { Terminal, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function Skills() {
  const { t } = useTranslation();
  const { skillsData, loading, error } = useSkills();
  const categories = ["language", "framework", "tool"];
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      
      // Reset to showing all categories when switching to desktop
      if (window.innerWidth >= 768) {
        setActiveCategory(null);
      } else if (activeCategory === null) {
        // Set first category as active by default on mobile
        setActiveCategory(categories[0]);
      }
    };

    // Check on initial load
    checkIfMobile();
    
    // Listen for window resize
    window.addEventListener("resize", checkIfMobile);
    
    return () => window.removeEventListener("resize", checkIfMobile);
  }, [categories, activeCategory]);

  if (error) {
    console.error("Error loading skills:", error);
  }

  return (
    <section id="skills" className="mb-20">
      <div className="flex items-center mb-8 group">
        <div className="p-2 mr-4 border rounded-lg bg-terminal-accent/10 border-terminal-accent/30 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(var(--terminal-accent-rgb),0.3)]">
          <Terminal size={24} className="text-terminal-accent" />
        </div>
        <h2 className="text-2xl transition-all duration-300 font-pixel text-terminal-accent group-hover:text-terminal-highlight">
          {t("skills.title").toUpperCase()}
        </h2>
      </div>
      
      {loading ? (
        <div className="flex items-center justify-center p-12 text-xl font-terminal text-terminal-accent">
          <Loader2 size={30} className="mr-3 animate-spin" />
          <span className="animate-pulse">Loading skills...</span>
        </div>
      ) : (
        <>
          {/* Category Filter Tabs - Only visible on mobile */}
          <div className="flex flex-wrap gap-2 mb-6 md:hidden">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-terminal rounded-lg transition-all duration-200 
                  ${activeCategory === cat 
                    ? 'bg-terminal-accent/30 text-terminal-highlight border-terminal-accent border' 
                    : 'bg-terminal-muted/20 hover:bg-terminal-muted/40 border border-terminal-accent/20'}`}
              >
                {t(`skills.${cat}s`)}
              </button>
            ))}
          </div>

          {/* Desktop View - Show all categories */}
          <div className="hidden gap-6 md:grid md:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category}
                className="p-6 transition-all duration-300 transform border rounded-lg bg-terminal-muted/20 border-terminal-accent/20 backdrop-blur-xs hover:border-terminal-accent hover:bg-terminal-muted/30 hover:translate-y-[-5px]"
              >
                <h3 className="mb-4 text-3xl font-terminal text-terminal-highlight">
                  {">"} {t(`skills.${category}s`)}
                </h3>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 font-terminal">
                  {skillsData
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center px-2 py-1 text-xl transition-all duration-200 rounded group hover:bg-terminal-muted/30"
                      >
                        <span className="mr-2 text-base text-terminal-accent group-hover:text-terminal-highlight">▹</span>
                        <span className="transition-transform duration-200 group-hover:translate-x-1">{skill.name}</span>
                        {skill.level && (
                          <span className="ml-2 text-sm text-terminal-accent/80 group-hover:text-terminal-accent">
                            ({skill.level})
                          </span>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile View - Show only active category */}
          <div className="md:hidden">
            {categories
              .filter(category => category === activeCategory)
              .map((category) => (
                <div
                  key={category}
                  className="p-6 transition-all duration-300 transform border rounded-lg bg-terminal-muted/20 border-terminal-accent/20 backdrop-blur-xs"
                >
                  <h3 className="mb-4 text-3xl font-terminal text-terminal-highlight">
                    {">"} {t(`skills.${category}s`)}
                  </h3>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 font-terminal">
                    {skillsData
                      .filter((skill) => skill.category === category)
                      .map((skill) => (
                        <li
                          key={skill.name}
                          className="flex items-center px-2 py-1 text-xl transition-all duration-200 rounded group hover:bg-terminal-muted/30"
                        >
                          <span className="mr-2 text-base text-terminal-accent group-hover:text-terminal-highlight">▹</span>
                          <span className="transition-transform duration-200 group-hover:translate-x-1">{skill.name}</span>
                          {skill.level && (
                            <span className="ml-2 text-sm text-terminal-accent/80 group-hover:text-terminal-accent">
                              ({skill.level})
                            </span>
                          )}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
          </div>
        </>
      )}
    </section>
  );
}