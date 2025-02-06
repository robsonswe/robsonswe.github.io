import { useTranslation } from "react-i18next";
import Image from "next/legacy/image";
import Link from "next/link";
import Icon from "./svgicons";
import { useProjects } from "../hooks/useProjects";
import { sortProjects } from "../utils/sortProjects";
import { ExternalLink, Code, Folder } from "lucide-react";

const ICONS_COLOR = "#C0C1C8";
const SECOND_COLOR = "#2D2C40";

export default function Projects() {
  const { t, i18n } = useTranslation();
  const { projectsData, loading, error } = useProjects();

  // Normalize language code to match data keys
  const normalizeLang = (lang) => {
    if (!lang) return "default";
    const [language, country] = lang.split("-");
    return country ? `${language}-${country.toLowerCase()}` : language;
  };

  const currentLang = normalizeLang(i18n.language);

  const getProjectName = (project) => {
    return (
      project.name[currentLang] || project.name.default || "Untitled Project"
    );
  };

  const getProjectDescription = (project) => {
    return (
      project.description[currentLang] ||
      project.description.default ||
      "No description available."
    );
  };

  // Log the error if it exists
  if (error) {
    console.error("Error loading projects:", error);
  }

  const sortedProjects = sortProjects(projectsData, getProjectName);

  return (
    <section id="projects" className="my-16">
      <h2 className="flex items-center pb-4 mb-8 text-3xl font-bold border-b-2 text-lightgray border-midgray">
        <Folder className="mr-2" size={28} />
        {t("projects.title").toUpperCase()}
      </h2>
      {loading ? (
        <div className="text-xl">Loading projects...</div>
      ) : (
        <>
          <div className="flex gap-6 pb-4 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 flex-nowrap scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {sortedProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col h-full overflow-hidden transition-all duration-300 border rounded-lg shadow-lg bg-lightgblue border-midgray hover:shadow-xl hover:scale-105 min-w-[320px] sm:min-w-0"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.screenshot || "/placeholder.svg"}
                    layout="fill"
                    objectFit="cover"
                    alt={`Screenshot of ${getProjectName(project)}`}
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="mb-3 text-xl font-bold text-lightgray">
                    {getProjectName(project)}
                  </h3>
                  <p className="mb-4 text-sm text-lightgray">
                    {getProjectDescription(project)}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs?.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-gblue"
                      >
                        <Icon
                          name={tech}
                          size="1rem"
                          color={ICONS_COLOR}
                          secondColor={SECOND_COLOR}
                        />
                        <span className="text-lightgray">{tech}</span>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    {project.preview && (
                      <Link
                        href={project.preview}
                        target="_blank"
                        className="flex items-center justify-center flex-1 gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-md border-midgray text-lightgray hover:bg-midgray"
                      >
                        <ExternalLink size={18} />
                        <span>{t("projects.live")}</span>
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="flex items-center justify-center flex-1 gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-md border-midgray text-lightgray hover:bg-midgray"
                      >
                        <Code size={18} />
                        <span>{t("projects.source")}</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="https://robsonswe.github.io/frontend-projects/"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-md border-midgray text-lightgray hover:bg-midgray"
            >
              <ExternalLink size={18} />
              Frontend Projects
            </Link>
            <Link
              href="https://github.com/robsonswe?tab=repositories"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-md border-midgray text-lightgray hover:bg-midgray"
            >
              <Code size={18} />
              Repositories
            </Link>
          </div>
        </>
      )}
    </section>
  );
}