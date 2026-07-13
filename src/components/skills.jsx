import { useTranslation } from "react-i18next";
import { useSkills } from "../hooks/useSkills";
import { Loader2 } from "lucide-react";

export default function Skills() {
  const { t } = useTranslation();
  const { skillsData, loading, error } = useSkills();
  const categories = ["language", "framework", "tool"];

  if (error) {
    console.error("Error loading skills:", error);
  }

  return (
    <section id="skills" className="mb-24">
      <div className="text-xs font-semibold tracking-widest uppercase text-muted mb-2">
        {t("skills.title")}
      </div>
      <div className="w-12 h-px mb-8 bg-primary/40" />

      {loading ? (
        <div className="flex items-center justify-center py-12 text-muted">
          <Loader2 size={20} className="mr-2 animate-spin" />
          <span className="text-sm">Loading skills...</span>
        </div>
      ) : (
        <div className="border rounded-lg border-border bg-surface">
          {categories.map((cat, idx) => (
            <div
              key={cat}
              className={`flex flex-wrap items-baseline gap-2 px-6 py-5 ${
                idx < categories.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="flex-none font-semibold text-sm text-ink w-[140px]">
                {t(`skills.${cat}s`)}
              </span>
              <div className="flex flex-wrap gap-2">
                {skillsData
                  .filter((skill) => skill.category === cat)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 text-sm rounded-lg bg-primary-soft text-primary"
                    >
                      {skill.name}
                      {skill.level && (
                        <span className="ml-1 text-primary/60">
                          ({skill.level})
                        </span>
                      )}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
