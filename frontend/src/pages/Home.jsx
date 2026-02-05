import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowRight, FaDownload, FaGraduationCap, FaJava } from 'react-icons/fa';
import { SiPython, SiJavascript, SiReact, SiNodedotjs, SiFlutter, SiTensorflow, SiDocker, SiGit, SiMongodb, SiPostgresql, SiCplusplus, SiHtml5, SiCss3, SiFlask, SiOpencv, SiLatex } from 'react-icons/si';
import { PROFILE, SKILLS, EDUCATION } from '../data/constants';
import { PROJECTS } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import GitHubStats from '../components/GitHubStats';
import CodingProfiles from '../components/CodingProfiles';

// Enhanced Icon Map
const SkillIcon = ({ name }) => {
    const icons = {
        "Java (DSA)": <FaJava className="text-red-500" />,
        "Python": <SiPython className="text-blue-400" />,
        "JavaScript": <SiJavascript className="text-yellow-400" />,
        "React.js": <SiReact className="text-cyan-400" />,
        "Node.js": <SiNodedotjs className="text-green-500" />,
        "Flutter": <SiFlutter className="text-cyan-500" />,
        "Deep Learning": <SiTensorflow className="text-orange-500" />,
        "Machine Learning": <SiTensorflow className="text-orange-400" />,
        "Docker": <SiDocker className="text-blue-500" />,
        "Git": <SiGit className="text-red-500" />,
        "GitHub": <SiGit className="text-white" />,
        "MongoDB": <SiMongodb className="text-green-500" />,
        "PostgreSQL": <SiPostgresql className="text-blue-300" />,
        "C++": <SiCplusplus className="text-blue-600" />,
        "SQL": <SiPostgresql className="text-blue-400" />,
        "Dart": <SiFlutter className="text-blue-400" />,
        "Flask": <SiFlask className="text-white" />,
        "OpenCV": <SiOpencv className="text-red-500" />,
        "Overleaf": <SiLatex className="text-green-600" />,
        "HTML5": <SiHtml5 className="text-orange-600" />,
        "CSS3": <SiCss3 className="text-blue-500" />
    };
    return icons[name] || <span className="text-xs">●</span>;
};

const SectionHeading = ({ children }) => (
    <h2 className="text-3xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-12 relative inline-block">
        {children}
        <span className="absolute -bottom-3 left-0 w-1/3 h-1 bg-accent rounded-full"></span>
    </h2>
);

const Home = () => {
    return (
        <div className="min-h-screen bg-primary-light dark:bg-primary-dark overflow-x-hidden">
            <Helmet>
                <title>{PROFILE.name} | {PROFILE.role}</title>
                <meta name="description" content={PROFILE.tagline} />
            </Helmet>

            {/* 1. HERO SECTION */}
            <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-20 pt-20">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-bl-full pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl z-10"
                >
                    <p className="text-accent font-mono text-lg mb-4 tracking-wide font-medium">Hello, my name is</p>
                    <h1 className="text-6xl md:text-8xl font-bold text-text-light dark:text-text-dark mb-6 tracking-tight leading-tight">
                        {PROFILE.name}
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-text-light dark:text-text-dark opacity-80 mb-8 max-w-3xl leading-snug">
                        {PROFILE.role}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-light dark:text-muted-dark max-w-2xl mb-12 leading-relaxed">
                        {PROFILE.tagline}
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <Link
                            to="/projects"
                            className="px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent-hover transition-all transform hover:-translate-y-1 font-bold text-lg shadow-lg shadow-accent/20 flex items-center gap-2"
                        >
                            View My Projects <FaArrowRight />
                        </Link>
                        <a
                            href={PROFILE.resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-transparent border-2 border-text-light dark:border-text-dark text-text-light dark:text-text-dark rounded-lg hover:border-accent hover:text-accent dark:hover:text-accent transition-all font-bold text-lg flex items-center gap-2"
                        >
                            Download Resume <FaDownload />
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* 2. EDUCATION SECTION (DETAILED) */}
            <section className="py-20 px-6 md:px-20 bg-primary-light dark:bg-primary-dark border-t border-muted-light/10 dark:border-muted-dark/10">
                <div className="max-w-6xl mx-auto">
                    <SectionHeading>Education Journey</SectionHeading>
                    <div className="space-y-6">
                        {EDUCATION.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card-light dark:bg-card-dark p-8 rounded-2xl border border-black/5 dark:border-white/5 shadow-lg flex flex-col md:flex-row items-start md:items-center gap-6 hover:border-accent/30 transition-colors"
                            >
                                <div className="p-4 bg-accent/10 rounded-xl text-accent text-3xl hidden md:block">
                                    <FaGraduationCap />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                                        <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">{edu.degree}</h3>
                                        <span className="inline-block px-4 py-1 bg-accent/10 text-accent font-bold rounded-full text-sm mt-2 md:mt-0">
                                            {edu.year}
                                        </span>
                                    </div>
                                    <p className="text-xl text-muted-light dark:text-muted-dark mb-2">{edu.college}</p>
                                    <div className="flex flex-wrap gap-4 text-sm font-bold opacity-80">
                                        <span className="text-text-light dark:text-text-dark bg-black/5 dark:bg-white/5 px-3 py-1 rounded">
                                            {edu.status}
                                        </span>
                                        <span className="text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded border border-emerald-200 dark:border-emerald-800">
                                            {edu.score}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. SKILLS */}
            <section className="py-24 px-6 md:px-20 bg-primary-light dark:bg-primary-dark border-t border-muted-light/10 dark:border-muted-dark/10">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading>Technical Skills</SectionHeading>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {SKILLS.map((skillGroup) => (
                            <motion.div
                                key={skillGroup.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-black/5 dark:border-white/5 hover:border-accent/30 transition-all"
                            >
                                <h3 className="text-accent font-bold uppercase tracking-widest mb-6 border-b border-white/5 pb-2">
                                    {skillGroup.category}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {skillGroup.items.map((item) => (
                                        <span key={item} className="flex items-center gap-2 px-3 py-2 bg-black/5 dark:bg-white/5 rounded-lg text-text-light dark:text-text-dark font-medium text-sm">
                                            <span className="text-lg"><SkillIcon name={item} /></span> {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. ABOUT & CODING PROFILES (Stacked Layout) */}
            <section className="py-24 px-6 md:px-20 bg-primary-light dark:bg-primary-dark">
                <div className="max-w-6xl mx-auto">
                    {/* About */}
                    <div className="mb-20">
                        <SectionHeading>About Me</SectionHeading>
                        <div className="prose prose-lg prose-slate dark:prose-invert text-muted-light dark:text-muted-dark leading-relaxed space-y-6 max-w-4xl">
                            <p>{PROFILE.bio_intro}</p>
                            <p>{PROFILE.bio_expanded}</p>
                        </div>
                    </div>

                    {/* Coding Profiles (Below About Me) */}
                    <div>
                        <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-8">Competitive Programming</h3>
                        <CodingProfiles />
                    </div>
                </div>
            </section>

            {/* 5. GITHUB STATS */}
            <section className="py-20 px-6 md:px-20 bg-primary-light dark:bg-primary-dark border-t border-muted-light/10 dark:border-muted-dark/10">
                <div className="max-w-7xl mx-auto">
                    <GitHubStats />
                </div>
            </section>

            {/* 6. FEATURED PROJECTS */}
            <section className="py-24 px-6 md:px-20 bg-primary-light dark:bg-primary-dark border-t border-muted-light/10 dark:border-muted-dark/10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <SectionHeading>Featured Projects</SectionHeading>
                        <p className="text-muted-light dark:text-muted-dark text-xl max-w-2xl">
                            Selected works that demonstrate my ability to solve complex problems with code and data.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {PROJECTS.slice(0, 3).map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="h-full"
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
