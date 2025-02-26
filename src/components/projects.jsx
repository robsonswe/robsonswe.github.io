import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useProjects } from "../hooks/useProjects";
import { sortProjects } from "../utils/sortProjects";
import { ExternalLink, Code, ArrowRight, Terminal, Github } from "lucide-react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import Image from "next/legacy/image";

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
      {/* Projects section header */}
      <div className="flex items-center mb-8 group">
        <div className="p-2 mr-4 border rounded-lg bg-terminal-accent/10 border-terminal-accent/30 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(var(--terminal-accent-rgb),0.3)]">
          <Terminal size={24} className="text-terminal-accent" />
        </div>
        <h2 className="text-2xl transition-all duration-300 font-pixel text-terminal-accent group-hover:text-terminal-highlight">
          {t("projects.title").toUpperCase()}
        </h2>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {sortedProjects.map((project) => (
          <div
            key={project.id}
            className="overflow-hidden border rounded-lg bg-terminal-muted/10 border-terminal-accent/20 backdrop-blur-xs transition-all duration-300 hover:border-terminal-accent/50 hover:shadow-[0_0_20px_rgba(var(--terminal-accent-rgb),0.15)] hover:translate-y-[-2px] group"
          >
            {/* Project header with terminal style */}
            <div className="flex items-center justify-between px-4 py-2 border-b bg-terminal-muted/30 border-terminal-accent/30">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1.5">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
                </div>
                <Code size={14} className="ml-2 text-terminal-accent" />
                <span className="text-xs font-terminal text-terminal-accent/80">{getProjectName(project).toLowerCase().replace(/\s+/g, '_')}</span>
              </div>
            </div>

            {/* Project content */}
            <div className="p-6">
  
              <h3 className="mb-3 text-xl transition-colors font-terminal text-terminal-highlight group-hover:text-terminal-accent">
                <span className="mr-2 text-terminal-accent">{">"}</span>
                {getProjectName(project)}
              </h3>
              
              <p className="mb-4 font-terminal text-terminal-text">
                {getProjectDescription(project)}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techs.slice(0, 4).map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs transition-all duration-300 border rounded-md font-terminal bg-terminal-accent/10 border-terminal-accent/20 group-hover:bg-terminal-accent/20"
                  >
                    {tech}
                  </span>
                ))}
                {project.techs.length > 4 && (
                  <span className="px-2 py-1 text-xs border rounded-md font-terminal bg-terminal-accent/10 border-terminal-accent/20">
                    +{project.techs.length - 4}
                  </span>
                )}
              </div>

              {/* Project links */}
              <div className="flex gap-4 mt-6">
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
                  detailsText={`${t("projects.details")}`}
                  liveText={t("projects.live")}
                  sourceText={t("projects.source")}
                />
                {project.preview && (
                  <Link
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-2 transition-colors font-terminal text-terminal-accent hover:text-terminal-highlight"
                  >
                    <ExternalLink size={16} />
                    {t("projects.live")}
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-2 transition-colors font-terminal text-terminal-accent hover:text-terminal-highlight"
                  >
                    <Code size={16} />
                    {t("projects.source")}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom links */}
      <div className="flex flex-col justify-center gap-4 mt-10 sm:flex-row">
        <Link
          href="https://robsonswe.github.io/frontend-projects/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-bold transition-all duration-300 transform border rounded-md border-terminal-accent/30 bg-terminal-accent/10 text-terminal-accent hover:bg-terminal-accent/20 hover:border-terminal-accent/50 hover:text-terminal-highlight hover:translate-y-[-2px] hover:shadow-[0_5px_15px_rgba(var(--terminal-accent-rgb),0.2)]"
        >
          <ExternalLink size={18} />
          <span className="font-terminal">Frontend Projects</span>
        </Link>
        <Link
          href="https://github.com/robsonswe?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-bold transition-all duration-300 transform border rounded-md border-terminal-accent/30 bg-terminal-accent/10 text-terminal-accent hover:bg-terminal-accent/20 hover:border-terminal-accent/50 hover:text-terminal-highlight hover:translate-y-[-2px] hover:shadow-[0_5px_15px_rgba(var(--terminal-accent-rgb),0.2)]"
        >
          <Github size={18} />
          <span className="font-terminal">Repositories</span>
        </Link>
      </div>
    </section>
  );
}