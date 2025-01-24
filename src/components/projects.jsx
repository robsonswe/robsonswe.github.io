const ICONS_COLOR = "#C0C1C8"
const SECOND_COLOR = "#2D2C40"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import Link from "next/link"
import Icon from "./svgicons"
import { useProjects } from "../hooks/useProjects"
import { sortProjects } from "../utils/sortProjects"
import { BoxArrowUpRight, Github, CodeSlash } from "react-bootstrap-icons"

export default function Projects() {
  const { t } = useTranslation()
  const { projectsData, loading, error } = useProjects()
  const getProjectName = (project) => project.name[t("language")] || project.name.default || "Untitled Project"

  const sortedProjects = sortProjects(projectsData, getProjectName)

  return (
    <section id="projects" className="my-24">
      <h2 className="pb-4 mb-12 text-5xl font-bold border-b text-lightgray border-midgray">
        {t("projects.title").toUpperCase()}
      </h2>
      {loading ? (
        <div className="text-xl">Loading projects...</div>
      ) : error ? (
        <div className="text-xl">Error: {error}</div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {sortedProjects.map((project) => (
            <div 
              key={project.id} 
              className="flex flex-col h-full p-6 border rounded-lg bg-lightgblue border-midgray"
            >
              <div className="flex-1">
                <h3 className="mb-4 text-2xl font-bold text-lightgray">{getProjectName(project)}</h3>
                <div className="relative mb-6 overflow-hidden rounded-lg aspect-video">
                  <Image
                    src={project.screenshot || "/placeholder.svg"}
                    fill
                    alt={`Screenshot of ${getProjectName(project)}`}
                    className="object-cover"
                  />
                </div>
                <p className="mb-6 text-lightgray">{project.description[t("language")] || project.description.default}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.techs?.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-2 px-3 py-1 rounded-full bg-gblue"
                    >
                      <Icon
                        name={tech}
                        size="1.25rem"
                        color={ICONS_COLOR}
                        secondColor={SECOND_COLOR}
                      />
                      <span className="text-sm text-lightgray">{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex gap-4">
                  {project.preview && (
                    <Link
                      href={project.preview}
                      target="_blank"
                      className="flex items-center justify-center w-full gap-2 px-4 py-2 text-center border rounded-lg border-midgray text-lightgray hover:bg-midgray"
                    >
                      <BoxArrowUpRight className="w-5 h-5" />
                      <span>{t("projects.live")}</span>
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex items-center justify-center w-full gap-2 px-4 py-2 text-center border rounded-lg border-midgray text-lightgray hover:bg-midgray"
                    >
                      <CodeSlash className="w-5 h-5" />
                      <span>{t("projects.source")}</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}