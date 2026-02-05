import { motion } from 'framer-motion';

const Research = () => {
    return (
        <div className="pt-24 pb-20 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 border-b border-slate-700 pb-4">
                    Research & Publications
                </h2>

                <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 shadow-lg">
                    <h3 className="text-2xl font-bold text-white mb-2">
                        IEEE Publication on COPD Prediction
                    </h3>
                    <p className="text-accent text-sm font-mono mb-4">
                        International Conference on Computing and Communication Systems (I3CS)
                    </p>
                    <div className="mb-6">
                        <span className="text-slate-500 font-mono text-xs uppercase tracking-wider">DOI:</span>
                        <span className="text-slate-300 text-sm ml-2">10.1109/I3CS.2024.12345678 (Placeholder)</span>
                    </div>

                    <p className="text-slate-300 mb-6 leading-relaxed">
                        This paper presents a novel approach for early detection of Chronic Obstructive Pulmonary Disease (COPD) using ensemble machine learning techniques. The system analyzes patient demographics, symptoms, and spirometry data to predict risk levels with 98% accuracy. The research highlights the effectiveness of ensemble models over individual classifiers in medical diagnosis.
                    </p>

                    <a
                        href="#"
                        className="inline-block px-6 py-3 border border-accent text-accent rounded hover:bg-accent/10 transition-colors font-medium"
                    >
                        Read Paper
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Research;
