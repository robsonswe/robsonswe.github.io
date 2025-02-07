import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog";
import { Eye, ExternalLink, Code } from "lucide-react";
import Image from "next/legacy/image";
import Link from "next/link";

/**
 * @typedef {Object} ProjectDetailsModalProps
 * @property {Object} project
 * @property {string} project.title
 * @property {string} project.description
 * @property {string} [project.longDescription]
 * @property {string[]} project.tech
 * @property {string} project.live
 * @property {string} project.source
 * @property {string} [project.image]
 * @property {string} detailsText
 * @property {string} liveText
 * @property {string} sourceText
 */

const ProjectDetailsModal = ({ project, detailsText, liveText, sourceText }) => {
    return (
        <Dialog>
            <DialogTrigger className="flex items-center gap-2 transition-colors font-terminal text-terminal-accent hover:text-terminal-highlight">
                <Eye size={16} />
                {detailsText}
            </DialogTrigger>
            <DialogContent className="border bg-terminal-bg border-terminal-accent/20 text-terminal-text">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-pixel text-terminal-accent">
                        {project.title}
                    </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                    {project.image && (
                        <div className="relative w-full h-48 mb-4">
                            <Image
                                src={project.image}
                                alt={project.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    )}
                    <p className="mb-4 text-lg font-terminal">
                        {project.longDescription || project.description}
                    </p>
                    <div className='flex flex-col gap-4'>
                        <p className='py-1 text-sm font-bold rounded-sm font-pixel'>Tech Stack</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.techs.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 rounded-sm font-terminal bg-terminal-accent/20"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center gap-2 transition-colors font-terminal text-terminal-accent hover:text-terminal-highlight"
                        >
                            <ExternalLink size={16} />
                            {liveText}
                        </Link>
                        <Link
                            href={project.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center gap-2 transition-colors font-terminal text-terminal-accent hover:text-terminal-highlight"
                        >
                            <Code size={16} /> {sourceText}
                        </Link>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProjectDetailsModal;
