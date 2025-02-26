import { useTranslation } from "react-i18next";
import { useSkills } from "../hooks/useSkills";
import { Terminal } from "lucide-react";

export default function Skills() {
  const { t } = useTranslation();
  const { skillsData, loading, error } = useSkills();
  const categories = ["language", "framework", "tool"];


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
        <div className="text-xl font-terminal text-terminal-accent">
          Loading skills...
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category}
              className="p-6 transition-all duration-300 transform border rounded-lg bg-terminal-muted/20 border-terminal-accent/20 backdrop-blur-xs hover:border-terminal-accent hover:bg-terminal-muted/30"
            >
              <h3 className="mb-4 text-3xl font-terminal text-terminal-highlight">
                {">"} {t(`skills.${category}s`)}
              </h3>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3 font-terminal">
                {skillsData
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center px-2 py-1 text-xl transition-colors rounded hover:bg-terminal-muted/30"
                    >
                      <span className="mr-2 text-base text-terminal-accent">▹</span>
                      {skill.name}
                      {skill.level && (
                        <span className="ml-2 text-sm text-terminal-accent/80">
                          ({skill.level})
                        </span>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}