import { useTranslation } from "react-i18next"
import Icon from "./svgicons"
import { useSkills } from "../hooks/useSkills"
import { Code, Briefcase, PenTool } from "lucide-react"

const ICONS_COLOR = "#C0C1C8"
const SECOND_COLOR = "#2D2C40"

export default function Skills() {
  const { t } = useTranslation()
  const { skillsData, loading, error } = useSkills()
  const categories = ["language", "framework", "tool"]

  const categoryIcons = {
    language: <Code size={24} />,
    framework: <Briefcase size={24} />,
    tool: <PenTool size={24} />,
  }

  return (
    <section id="skills" className="my-24">
      <h2 className="flex items-center pb-4 mb-12 text-3xl font-bold border-b-2 text-lightgray border-midgray">
        <Code className="mr-2" size={28} />
        {t("skills.title").toUpperCase()}
      </h2>
      {loading ? (
        <div className="text-xl">Loading skills...</div>
      ) : error ? (
        <div className="text-xl">Error: {error}</div>
      ) : (
        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category}
              className="p-6 transition-all duration-300 border rounded-lg shadow-md bg-lightgblue border-midgray hover:shadow-lg"
            >
              <h3 className="flex items-center mb-6 text-2xl font-bold text-lightgray">
                {categoryIcons[category]}
                <span className="ml-2">{t(`skills.${category}s`)}</span>
              </h3>
              <ul className="grid grid-cols-2 gap-4">
                {skillsData
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-3 p-2 transition-all duration-300 border rounded-lg border-midgray hover:bg-gblue group"
                      title={skill.name}
                    >
                      <Icon name={skill.iconname} size="1.5rem" color={ICONS_COLOR} secondColor={SECOND_COLOR} />
                      <span className="text-sm text-lightgray group-hover:text-white">{skill.name}</span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

