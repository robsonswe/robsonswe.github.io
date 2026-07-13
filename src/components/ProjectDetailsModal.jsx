import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Eye, ExternalLink, Github } from "lucide-react"
import Image from "next/legacy/image"
import Link from "next/link"

const ProjectDetailsModal = ({ project, detailsText, liveText, sourceText }) => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-1.5 text-sm transition-colors text-muted hover:text-primary">
        <Eye size={14} />
        {detailsText}
      </DialogTrigger>
      <DialogContent className="overflow-hidden p-0">
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">{project.title}</DialogTitle>
          </DialogHeader>

          <div className="mt-5 space-y-5">
            {project.image && (
              <div className="relative w-full overflow-hidden border rounded-lg aspect-video border-border">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}

            <p className="text-sm leading-relaxed text-muted">
              {project.longDescription || project.description}
            </p>

            <div>
              <h4 className="mb-2 text-xs font-semibold tracking-wider uppercase text-muted">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techs.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 text-xs rounded bg-primary-soft text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-all border rounded-md border-primary/30 text-primary bg-primary-soft hover:bg-primary/20"
              >
                <ExternalLink size={14} />
                {liveText}
              </Link>
              <Link
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-all border rounded-md border-border text-muted hover:text-ink hover:border-ink/30"
              >
                <Github size={14} />
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
