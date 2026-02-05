import { motion } from 'framer-motion';
import { SKILLS } from '../data/skills';

const About = () => {
    return (
        <div className="pt-24 pb-20 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-slate-700 pb-4">
                    About Me
                </h2>

                <div className="text-slate-300 text-lg leading-relaxed mb-12 space-y-4">
                    <p>
                        I am a Full-Stack & Machine Learning Engineer with a research-oriented mindset. I enjoy bridging the gap between robust backend systems and intelligent data-driven applications.
                    </p>
                    <p>
                        My experience ranges from building scalable MERN stack applications to deploying deep learning models for healthcare. I am constantly learning and adapting to new technologies to solve complex problems.
                    </p>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(SKILLS).map(([category, skills]) => (
                        <div key={category} className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                            <h4 className="text-xl font-bold text-accent mb-4 capitalize">
                                {category.replace('_', ' / ')}
                            </h4>
                            <div className="space-y-3">
                                {skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between text-sm text-slate-300 mb-1">
                                            <span>{skill.name}</span>
                                            {/* <span>{skill.level}%</span> */}
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-2">
                                            <div
                                                className="bg-accent h-2 rounded-full"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default About;
