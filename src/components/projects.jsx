import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useProjects } from "../hooks/useProjects";
import { sortProjects } from "../utils/sortProjects";
import { ExternalLink, Code, ArrowRight } from "lucide-react";
import ProjectDetailsModal from "./ProjectDetailsModal";

export default function Projects() {
  const { t, i18n } = useTranslation();
  const { projectsData } = useProjects();

  // Normalize language code
  const normalizeLang = (lang) => {
    if (!lang) return "default";
    const [language, country] = lang.split("-");
    return country ? `${language}-${country.toLowerCase()}` : language;
  };

  const currentLang = normalizeLang(i18n.language);

  // Get project name, handling missing translations
  const getProjectName = (project) => {
    return project.name[currentLang] || project.name.default || "Untitled Project";
  };

  // Get project description, handling missing translations
  const getProjectDescription = (project) => {
    return project.description[currentLang] || project.description.default || "No description available.";
  };

  const getProjectLongDescription = (project) => {
    return project.longDescription?.[currentLang] || project.longDescription?.default || null;
  };

  const sortedProjects = sortProjects(projectsData, getProjectName);

  return (
    <section id="projects" className="mb-20">
      <h2 className="flex items-center mb-6 text-2xl font-pixel text-terminal-accent">
        <ArrowRight className="mr-2" size={16} />
        {t("projects.title").toUpperCase()}
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {sortedProjects.map((project) => (
          <div
            key={project.id}
            className="bg-terminal-muted/20 p-6 rounded-lg border border-terminal-accent/20 backdrop-blur-xs transform transition-all duration-300 hover:scale-[1.02] hover:border-terminal-accent group"
          >
            <h3 className="mb-2 text-xl transition-colors font-terminal text-terminal-highlight group-hover:text-terminal-accent">
              <span className="mr-2 text-terminal-accent">{">"}</span>
              {getProjectName(project)}
            </h3>
            <p className="mb-4 font-terminal text-terminal-text">
              {getProjectDescription(project)}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techs?.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 text-sm transition-colors rounded-sm font-terminal bg-terminal-accent/20 group-hover:bg-terminal-accent/30"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <ProjectDetailsModal
                project={{
                  title: getProjectName(project),
                  description: getProjectDescription(project),
                  longDescription: getProjectLongDescription(project),
                  techs: project.techs,
                  live: project.preview,
                  source: project.github,
                  image: project.screenshot,
                }}
                detailsText={`$ ${t("projects.details")}`}
                liveText={t("projects.live")}
                sourceText={t("projects.source")}

              />
              {project.preview && (
                <Link
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors font-terminal text-terminal-accent hover:text-terminal-highlight"
                >
                  $ {t("projects.live")}
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors font-terminal text-terminal-accent hover:text-terminal-highlight"
                >
                  $ {t("projects.source")}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <Link
          href="https://robsonswe.github.io/frontend-projects/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-md border-terminal-accent/20 text-terminal-accent hover:text-terminal-highlight hover:bg-terminal-muted/20"
        >
          <ExternalLink size={16} />
          <span className="font-terminal">$ Frontend Projects</span>
        </Link>
        <Link
          href="https://github.com/robsonswe?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-md border-terminal-accent/20 text-terminal-accent hover:text-terminal-highlight hover:bg-terminal-muted/20"
        >
          <Code size={16} />
          <span className="font-terminal">$ Repositories</span>
        </Link>
      </div>
    </section>
  );
}
