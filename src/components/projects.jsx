import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useProjects } from "../hooks/useProjects";
import { sortProjects } from "../utils/sortProjects";
import { ExternalLink, Code, ArrowRight, ArrowLeft, Terminal, Github } from "lucide-react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import Image from "next/legacy/image";
import { useState, useRef, useEffect } from "react";

export default function Projects() {
  const { t, i18n } = useTranslation();
  const { projectsData } = useProjects();
  const projectsContainerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

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

  // Handle screen size changes
  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Calculate total pages based on screen size
      if (mobile) {
        setTotalPages(sortedProjects.length);
      } else {
        // On desktop, we show projects in a grid, so no pagination needed
        setTotalPages(1);
        setCurrentPage(0);
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    return () => window.removeEventListener("resize", checkIfMobile);
  }, [sortedProjects.length]);

  // Navigate to previous project
  const prevProject = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  // Navigate to next project
  const nextProject = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  // Scroll to position when page changes (mobile only)
  useEffect(() => {
    if (isMobile && projectsContainerRef.current) {
      const scrollPosition = currentPage * projectsContainerRef.current.offsetWidth;
      projectsContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentPage, isMobile]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isMobile) {
        if (e.key === 'ArrowLeft') {
          prevProject();
        } else if (e.key === 'ArrowRight') {
          nextProject();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobile, totalPages]);

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

      {/* Terminal-style navigation (mobile only) */}
      {isMobile && (
        <div className="flex items-center justify-between p-2 mb-4 font-mono text-sm border rounded border-terminal-accent/30 bg-terminal-muted/30">
          <div className="flex items-center">
            <span className="text-terminal-accent">total projects:</span>
          </div>
          <div>
            <span className="text-terminal-text">{currentPage + 1}/{totalPages}</span>
          </div>
        </div>
      )}

      {/* Mobile Project Navigation Controls */}
      {isMobile && (
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={prevProject}
            className="flex items-center px-3 py-2 transition-all duration-300 border rounded group border-terminal-accent/30 bg-terminal-muted/20 hover:bg-terminal-muted/40 focus:outline-none"
            aria-label="Previous project"
          >
            <ArrowLeft size={16} className="mr-1 text-terminal-accent group-hover:text-terminal-highlight" />
            <span className="text-sm font-terminal text-terminal-accent group-hover:text-terminal-highlight">{t("projects.prev").toLowerCase()}</span>
          </button>
          
          <button 
            onClick={nextProject}
            className="flex items-center px-3 py-2 transition-all duration-300 border rounded group border-terminal-accent/30 bg-terminal-muted/20 hover:bg-terminal-muted/40 focus:outline-none"
            aria-label="Next project"
          >
            <span className="text-sm font-terminal text-terminal-accent group-hover:text-terminal-highlight">{t("projects.next").toLowerCase()}</span>
            <ArrowRight size={16} className="ml-1 text-terminal-accent group-hover:text-terminal-highlight" />
          </button>
        </div>
      )}

      {/* Projects container - Grid for desktop, single item for mobile */}
      <div 
        ref={projectsContainerRef}
        className={`${isMobile ? 'overflow-hidden' : 'grid grid-cols-1 md:grid-cols-2 gap-6'}`}
      >
        {sortedProjects.map((project, index) => (
          <div
            key={project.id}
            className={`
              overflow-hidden border rounded-lg bg-terminal-muted/10 border-terminal-accent/20 backdrop-blur-xs 
              transition-all duration-300 hover:border-terminal-accent/50 hover:shadow-[0_0_20px_rgba(var(--terminal-accent-rgb),0.15)]
              hover:translate-y-[-2px] group
              ${isMobile ? 'mb-0' : 'mb-6'}
              ${isMobile && index !== currentPage ? 'hidden' : 'block'}
            `}
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
              {isMobile && (
                <span className="px-2 py-0.5 text-xs font-mono rounded-full bg-terminal-accent/20 text-terminal-accent">
                  {index + 1}/{sortedProjects.length}
                </span>
              )}
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


              {/* Project links */}
              <div className="flex flex-wrap gap-4 mt-6">
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

      {/* Mobile pagination indicator */}
      {isMobile && totalPages > 1 && (
        <div className="flex justify-center mt-4 space-x-1">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentPage
                  ? 'bg-terminal-accent'
                  : 'bg-terminal-accent/30'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Bottom links */}
      <div className="flex flex-col justify-center gap-4 mt-10 sm:flex-row">
        <Link
          href="https://robsonswe.github.io/frontend-projects/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-bold transition-all duration-300 transform border rounded-md border-terminal-accent/30 bg-terminal-accent/10 text-terminal-accent hover:bg-terminal-accent/20 hover:border-terminal-accent/50 hover:text-terminal-highlight hover:translate-y-[-2px] hover:shadow-[0_5px_15px_rgba(var(--terminal-accent-rgb),0.2)]"
        >
          <ExternalLink size={18} />
          <span className="font-terminal">{t("projects.frontend")}</span>
        </Link>
        <Link
          href="https://github.com/robsonswe?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-bold transition-all duration-300 transform border rounded-md border-terminal-accent/30 bg-terminal-accent/10 text-terminal-accent hover:bg-terminal-accent/20 hover:border-terminal-accent/50 hover:text-terminal-highlight hover:translate-y-[-2px] hover:shadow-[0_5px_15px_rgba(var(--terminal-accent-rgb),0.2)]"
        >
          <Github size={18} />
          <span className="font-terminal">{t("projects.repositories")}</span>
        </Link>
      </div>
    </section>
  );
}