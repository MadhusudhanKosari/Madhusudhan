import { motion } from 'framer-motion';
import { RESEARCH } from '../data/constants';

const Research = () => {
    return (
        <div className="pt-24 pb-20 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto px-6 text-white"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 border-b border-slate-700 pb-4">
                    Research & Publications
                </h2>

                <div className="space-y-8">
                    {RESEARCH.map((item, index) => (
                        <div key={index} className="bg-slate-800 p-8 rounded-lg border border-slate-700 shadow-lg">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-accent text-sm font-mono mb-4">
                                {item.conference}
                            </p>
                            <div className="mb-6">
                                <span className="text-slate-500 font-mono text-xs uppercase tracking-wider">DOI:</span>
                                <span className="text-slate-300 text-sm ml-2">{item.doi}</span>
                            </div>

                            <p className="text-slate-300 mb-6 leading-relaxed">
                                {item.description}
                            </p>

                            <a
                                href={item.link}
                                className="inline-block px-6 py-3 border border-accent text-accent rounded hover:bg-accent/10 transition-colors font-medium"
                            >
                                Read Paper
                            </a>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Research;
