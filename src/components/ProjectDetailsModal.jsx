import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Eye, ExternalLink, Code } from "lucide-react"
import Image from "next/legacy/image"
import Link from "next/link"

const ProjectDetailsModal = ({ project, detailsText, liveText, sourceText }) => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2 transition-colors font-terminal text-terminal-accent hover:text-terminal-highlight">
        <Eye size={16} />
        {detailsText}
      </DialogTrigger>
      <DialogContent className="p-0 overflow-hidden">
        {/* Terminal Window Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b bg-terminal-muted/20 border-terminal-accent/20">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="absolute flex items-center transform -translate-x-1/2 left-1/2">
            <Code size={14} className="mr-2 text-terminal-accent/70" />
            <span className="font-mono text-sm text-terminal-accent/70">
              {project.title.toLowerCase().replace(/\s+/g, "_")}
            </span>
          </div>
        </div>

        {/* Terminal Window Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-pixel text-terminal-accent">{project.title}</DialogTitle>
          </DialogHeader>

          <div className="mt-4 space-y-6">
            {/* Project Image */}
            {project.image && (
              <div className="relative w-full aspect-video">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="border rounded-lg border-terminal-accent/20"
                />
              </div>
            )}

            {/* Project Description */}
            <div className="text-lg leading-relaxed font-terminal">
              <span className="text-terminal-accent">$ cat description.txt</span>
              <p className="pl-4 mt-2">{project.longDescription || project.description}</p>
            </div>

            {/* Tech Stack */}
            <div className="p-4 border rounded-lg border-terminal-accent/20 bg-terminal-muted/10 backdrop-blur-xs">
              <div className="flex items-center gap-2 mb-3">
                <Code size={16} className="text-terminal-accent" />
                <span className="font-pixel text-terminal-accent">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 font-mono text-sm rounded-sm bg-terminal-accent/20 text-terminal-highlight"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="flex flex-wrap gap-4 pt-2 border-t border-terminal-accent/20">
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 font-mono text-sm transition-colors rounded-sm border border-terminal-accent/30 hover:border-terminal-accent bg-terminal-accent/10 text-terminal-accent hover:text-terminal-highlight"
              >
                <ExternalLink size={14} />
                {liveText}
              </Link>
              <Link
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 font-mono text-sm transition-colors rounded-sm border border-terminal-accent/30 hover:border-terminal-accent bg-terminal-accent/10 text-terminal-accent hover:text-terminal-highlight"
              >
                <Code size={14} />
                {sourceText}
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectDetailsModal

