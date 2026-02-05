import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PROJECTS } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-primary-light dark:bg-primary-dark">
            <Helmet>
                <title>Projects | Kosari Madhusudhan</title>
                <meta name="description" content="A showcase of technical projects in Full-Stack Web Development, Machine Learning, and AI." />
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto px-6 md:px-12"
            >
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-6">Built to Solve Problems</h1>
                    <p className="text-muted-light dark:text-muted-dark text-lg md:text-xl leading-relaxed">
                        A collection of projects covering Full-Stack Web Development, Machine Learning, and Deep Learning.
                        Each project represents a specific challenge explicitly chosen to push my technical boundaries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="h-full"
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;
