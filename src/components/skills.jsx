import { useTranslation } from "react-i18next";
import { useSkills } from "../hooks/useSkills";
import { ArrowRight } from "lucide-react";

export default function Skills() {
  const { t } = useTranslation();
  const { skillsData, loading, error } = useSkills();
  const categories = ["language", "framework", "tool"];


  if (error) {
    console.error("Error loading skills:", error);
  }

  return (
    <section id="skills" className="mb-20">
      <h2 className="flex items-center mb-6 text-2xl font-pixel text-terminal-accent">
        <ArrowRight className="mr-2" size={16} />
        {t("skills.title").toUpperCase()}
      </h2>
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
              <h3 className="mb-4 text-xl font-terminal text-terminal-highlight">
                {">"} {t(`skills.${category}s`)}
              </h3>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3 font-terminal">
                {skillsData
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <li key={skill.name} className="flex items-center">
                      <span className="mr-2 text-terminal-accent">$</span>
                      {skill.name}
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