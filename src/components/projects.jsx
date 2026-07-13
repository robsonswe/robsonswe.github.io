import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/legacy/image";
import { useProjects } from "../hooks/useProjects";
import { sortProjects } from "../utils/sortProjects";
import { ExternalLink, Github } from "lucide-react";
import ProjectDetailsModal from "./ProjectDetailsModal";

export default function Projects() {
  const { t, i18n } = useTranslation();
  const { projectsData } = useProjects();

  const normalizeLang = (lang) => {
    if (!lang) return "default";
    const [language, country] = lang.split("-");
    return country ? `${language}-${country.toLowerCase()}` : language;
  };

  const currentLang = normalizeLang(i18n.language);

  const getProjectName = (project) => {
    return project.name[currentLang] || project.name.default || "Untitled Project";
  };

  const getProjectDescription = (project) => {
    return project.description[currentLang] || project.description.default || "No description available.";
  };

  const getProjectLongDescription = (project) => {
    return project.longDescription?.[currentLang] || project.longDescription?.default || null;
  };

  const sortedProjects = sortProjects(projectsData, getProjectName);

  if (!sortedProjects.length) return null;

  return (
    <section id="projects" className="mb-24">
      <div className="text-xs font-semibold tracking-widest uppercase text-muted mb-2">
        {t("projects.title")}
      </div>
      <div className="w-12 h-px mb-8 bg-primary/40" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {sortedProjects.map((project) => {
          if (project.featured && sortedProjects.length > 1) {
            return (
              <div
                key={project.id}
                className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 p-6 border rounded-lg border-border bg-surface transition-all duration-200 hover:bg-surface-hover hover:border-primary/20"
              >
                <div className="flex flex-col">
                  <span className="inline-block text-xs text-primary tracking-wider mb-2.5">
                    {t("projects.featured")}
                  </span>
                  <h3 className="text-base font-semibold mb-2.5">{getProjectName(project)}</h3>
                  <p className="text-sm text-muted mb-4 leading-relaxed grow">
                    {getProjectDescription(project)}
                  </p>
                  <div className="flex gap-4 text-sm">
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
                      detailsText={t("projects.details")}
                      liveText={t("projects.live")}
                      sourceText={t("projects.source")}
                    />
                    {project.preview && (
                      <Link
                        href={project.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-muted hover:text-primary transition-colors"
                      >
                        <ExternalLink size={14} />
                        {t("projects.live")}
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-muted hover:text-primary transition-colors"
                      >
                        <Github size={14} />
                        {t("projects.source")}
                      </Link>
                    )}
                  </div>
                </div>
                <div className="relative flex items-center justify-center overflow-hidden border rounded-lg border-border bg-[#030303] text-muted text-sm min-h-[140px]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={getProjectName(project)}
                      layout="fill"
                      objectFit="cover"
                      unoptimized
                    />
                  ) : (
                    "screenshot"
                  )}
                </div>
              </div>
            );
          }

          return (
            <div
              key={project.id}
              className="flex flex-col p-6 border rounded-lg border-border bg-surface transition-all duration-200 hover:bg-surface-hover hover:border-primary/20"
            >
              <h3 className="text-base font-semibold mb-2.5">{getProjectName(project)}</h3>
              <p className="text-sm text-muted mb-4 leading-relaxed grow">
                {getProjectDescription(project)}
              </p>
              <div className="flex gap-4 text-sm">
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
                  detailsText={t("projects.details")}
                  liveText={t("projects.live")}
                  sourceText={t("projects.source")}
                />
                {project.preview && (
                  <Link
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-muted hover:text-primary transition-colors"
                  >
                    <ExternalLink size={14} />
                    {t("projects.live")}
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-muted hover:text-primary transition-colors"
                  >
                    <Github size={14} />
                    {t("projects.source")}
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
