import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { PROFILE } from '../data/constants';

const Resume = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-primary-light dark:bg-primary-dark">
            <Helmet>
                <title>Resume | Kosari Madhusudhan</title>
                <meta name="description" content="Professional Resume of Kosari Madhusudhan - Full Stack & ML Engineer." />
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto px-6"
            >
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">Resume</h2>
                        <p className="text-muted-light dark:text-muted-dark mt-2">Professional Experience & Academic History</p>
                    </div>
                    <a
                        href={PROFILE.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-bold hover:bg-accent-hover transition-all shadow-lg shadow-accent/20 transform hover:-translate-y-0.5"
                    >
                        <FaDownload /> Download PDF
                    </a>
                </div>

                {/* RESUME DOCUMENT CONTAINER */}
                <div className="bg-white text-slate-900 p-8 md:p-16 rounded-xl shadow-2xl overflow-hidden font-sans border-t-8 border-accent">

                    {/* Header */}
                    <div className="border-b-2 border-slate-100 pb-8 mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-slate-900 mb-2">
                            {PROFILE.name}
                        </h1>
                        <p className="text-xl text-slate-600 font-medium mb-6">{PROFILE.role}</p>

                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 font-medium">
                            <span className="flex items-center gap-2"><FaEnvelope className="text-slate-400" /> {PROFILE.email}</span>
                            <span className="flex items-center gap-2"><FaGithub className="text-slate-400" /> github.com/MadhusudhanKosari</span>
                            <span className="flex items-center gap-2"><FaLinkedin className="text-slate-400" /> linkedin.com/in/kosarimadhusudhan</span>
                        </div>
                    </div>

                    <div className="space-y-10">
                        {/* Summary */}
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
                                Professional Summary
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                Full-Stack Engineer and Machine Learning enthusiast with a strong foundation in building scalable web applications and intelligent prediction systems.
                                Proven ability to lead technical teams and publish research in international conferences. Passionate about solving complex problems through code, from optimizing frontend performance to deploying deep learning models.
                            </p>
                        </section>

                        {/* Education */}
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
                                Education
                            </h3>
                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                                    <h4 className="font-bold text-slate-900 text-lg">B.Tech in Computer Science & Engineering</h4>
                                    <span className="text-slate-500 text-sm font-bold bg-white px-3 py-1 rounded-full shadow-sm">2021 - 2025</span>
                                </div>
                                <p className="text-slate-700 font-medium">BVRIT Hyderabad College of Engineering for Women</p>
                            </div>
                        </section>

                        {/* Skills */}
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
                                Technical Skills
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                                <div>
                                    <h5 className="font-bold text-slate-900 mb-2 border-l-2 border-accent pl-3">Languages & Frontend</h5>
                                    <p className="text-slate-700 leading-relaxed pl-3.5">
                                        Python, JavaScript (ES6+), C++, Dart, SQL <br />
                                        React.js, Tailwind CSS, Flutter, Redux, HTML5/CSS3
                                    </p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900 mb-2 border-l-2 border-accent pl-3">Backend & AI</h5>
                                    <p className="text-slate-700 leading-relaxed pl-3.5">
                                        Node.js, Express.js, Flask, MongoDB <br />
                                        TensorFlow, Scikit-Learn, Pandas, OpenCV, Docker
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Projects (Select Top 2-3 for Resume) */}
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
                                Key Projects
                            </h3>

                            <div className="mb-8">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="font-bold text-slate-900 text-lg">COPD Prediction Web App</h4>
                                    <span className="text-slate-500 text-xs font-mono bg-slate-100 px-2 py-1 rounded">Flask, React, ML</span>
                                </div>
                                <ul className="list-disc list-outside ml-4 text-slate-700 text-sm space-y-2 marker:text-accent">
                                    <li>Developed an early detection system for COPD using ensemble machine learning models, achieving <strong>98% accuracy</strong>.</li>
                                    <li>Built a user-friendly React frontend and a Flask backend to serve real-time predictions.</li>
                                    <li>Published findings in IEEE International Conference (I3CS).</li>
                                </ul>
                            </div>

                            <div className="mb-0">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="font-bold text-slate-900 text-lg">PDF Intelligence Engine</h4>
                                    <span className="text-slate-500 text-xs font-mono bg-slate-100 px-2 py-1 rounded">React, Node, NLP</span>
                                </div>
                                <ul className="list-disc list-outside ml-4 text-slate-700 text-sm space-y-2 marker:text-accent">
                                    <li>Engineered a document processing system that summarizes content based on user personas (Executive vs Technical).</li>
                                    <li>Achieved <strong>91% accuracy</strong> in extracting document structure and hierarchy.</li>
                                    <li>Containerized the application using Docker for consistent deployment.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Leadership & Awards */}
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
                                Leadership & Achievements
                            </h3>
                            <ul className="list-disc list-outside ml-4 text-slate-700 text-sm space-y-3 marker:text-emerald-500">
                                <li><strong>Design Co-Lead, GDG On Campus:</strong> Led design workshops and managed branding for campus tech events, impacting 500+ students.</li>
                                <li><strong>Finalist, Smart India Hackathon (SIH):</strong> Led a team of 6 to build a digital farming solution (FarmSyncro), selected for the regional finals.</li>
                                <li><strong>Publication:</strong> "Ensemble Machine Learning for Early COPD Prediction" - IEEE I3CS 2024.</li>
                            </ul>
                        </section>

                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Resume;
