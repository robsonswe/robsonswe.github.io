const ICONS_COLOR = "#C0C1C8"
const SECOND_COLOR = "#2D2C40"
import { useTranslation } from "react-i18next"
import Icon from "./svgicons"
import { useSkills } from "../hooks/useSkills"

export default function Skills() {
  const { t } = useTranslation()
  const { skillsData, loading, error } = useSkills()
  const categories = ["language", "framework", "tool"]

  return (
    <section id="skills" className="my-24">
      <h2 className="pb-4 mb-12 text-5xl font-bold border-b text-lightgray border-midgray">
        {t("skills.title").toUpperCase()}
      </h2>
      {loading ? (
        <div className="text-xl">Loading skills...</div>
      ) : error ? (
        <div className="text-xl">Error: {error}</div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category}
              className="p-8 border rounded-lg bg-lightgblue border-midgray"
            >
              <h3 className="mb-6 text-2xl font-bold text-center uppercase text-lightgray">
                {t(`skills.${category}s`)}
              </h3>
              <ul className="grid grid-cols-2 gap-4">
                {skillsData
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-3"
                      title={skill.name}
                    >
                      <Icon
                        name={skill.iconname}
                        size="2rem"
                        color={ICONS_COLOR}
                        secondColor={SECOND_COLOR}
                      />
                      <span className="text-lightgray">{skill.name}</span>
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