import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden shadow-lg border border-black/5 dark:border-white/5 hover:border-accent/40 transition-all duration-300 flex flex-col h-full group hover:shadow-glow">
            <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* Header */}
                <div className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                        <span className="inline-block px-3 py-1 bg-black/5 dark:bg-white/5 text-accent text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                            {project.category || 'PROJECT'}
                        </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-base text-muted-light dark:text-muted-dark font-medium font-mono">
                        {project.tagline}
                    </p>
                </div>

                {/* Core Narrative */}
                <div className="space-y-4 mb-8 flex-grow">
                    <div>
                        <h4 className="text-sm font-bold text-muted-light dark:text-muted-dark uppercase tracking-wide mb-1 opacity-75">The Challenge</h4>
                        <p className="text-text-light dark:text-text-dark leading-relaxed text-sm">
                            {project.problem}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-wide mb-1 opacity-75">Impact</h4>
                        <p className="text-emerald-700 dark:text-emerald-400 font-bold font-mono text-sm border-l-2 border-emerald-500 pl-3">
                            {project.impact}
                        </p>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-muted-light dark:text-slate-300 text-xs rounded font-medium">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-4 mt-auto">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-text-light dark:text-text-dark text-sm font-bold rounded transition-colors"
                    >
                        <FaGithub size={16} /> View Code
                    </a>
                    {project.demo ? (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-accent hover:bg-accent-hover text-white text-sm font-bold rounded transition-colors shadow-lg shadow-accent/20"
                        >
                            <FaExternalLinkAlt size={14} /> Live Demo
                        </a>
                    ) : (
                        <span className="flex items-center justify-center gap-2 px-4 py-3 bg-black/5 dark:bg-white/5 text-muted-light dark:text-muted-dark text-sm font-bold rounded cursor-not-allowed opacity-50">
                            Demo Offline
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
