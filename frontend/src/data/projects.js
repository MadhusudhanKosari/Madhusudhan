export const PROJECTS = [
    {
        id: "copd-prediction",
        title: "COPD Prediction Web App",
        tagline: "Early detection system for respiratory health",
        problem: "Chronic Obstructive Pulmonary Disease (COPD) is often diagnosed too late due to lack of accessible screening tools, leading to severe health complications.",
        solution: "A web-accessible tool that uses patient data (symptoms, demographics) to predict COPD risk instantly. It uses an ensemble of machine learning models to improve prediction accuracy over standard methods.",
        impact: "Achieved 98% accuracy in tests, offering a low-cost, accessible screening tool for early intervention.",
        tech: ["Flask", "React", "Scikit-Learn", "Ensemble Learning"],
        features: [
            "Instant risk assessment questionnaire",
            "Medical-grade prediction accuracy",
            "Simple, non-technical user interface"
        ],
        github: "https://github.com/MadhusudhanKosari/COPD_prediction",
        demo: "https://copd-prediction.vercel.app/",
        category: "ML"
    },
    {
        id: "pcos-detection",
        title: "PCOS Detection System",
        tagline: "AI-powered diagnostic assistance",
        problem: "PCOS diagnosis typically involves subjective analysis of ultrasound scans, which can lead to errors and delays in treatment.",
        solution: "This project automates the analysis of medical imaging using Deep Learning. It identifies markers of PCOS in ultrasound images and correlates them with patient clinical data.",
        impact: "Reduces diagnosis time and provides a second opinion for medical professionals with high sensitivity.",
        tech: ["Deep Learning", "CNNs", "Python", "Medical Imaging"],
        features: [
            "Automated ultrasound image analysis",
            "Hybrid data processing (Image + Text)",
            "Detailed diagnostic report generation"
        ],
        github: "https://github.com/MadhusudhanKosari/pcos-detection-system",
        demo: null, // No live demo
        category: "DL"
    },
    {
        id: "pdf-intelligence",
        title: "PDF Intelligence Engine",
        tagline: "Smart document summarization",
        problem: "Professionals waste countless hours manually reading and extracting key information from lengthy technical documents and reports.",
        solution: "A smart document engine that doesn't just read text, but understands structure. It generates summaries tailored to specific user personas (e.g., 'Executive Summary' vs 'Technical Detail').",
        impact: "91% accuracy in structure extraction, significantly reducing document review time.",
        tech: ["React", "Flask", "NLP", "Docker"],
        features: [
            "Persona-based summary generation",
            "Intelligent table & chart extraction",
            "Dockerized for on-premise deployment"
        ],
        github: "https://github.com/MadhusudhanKosari/Adobe_Hackathon",
        demo: null,
        category: "Full Stack"
    },
    {
        id: "farmsyncro",
        title: "FarmSyncro",
        tagline: "Digital contract farming platform",
        problem: "Contract farming suffers from lack of transparency and coordination between farmers and corporate buyers, leading to disputes.",
        solution: "A centralized platform that manages the entire farming lifecycle. It tracks agreements, crop progress, and payments in one transparent dashboard.",
        impact: "Selected as SIH Level-2 Project. Streamlines communication and builds trust in agritech supply chains.",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        features: [
            "Digital contract management",
            "Real-time crop progress tracking",
            "Direct farmer-buyer communication channel"
        ],
        github: "https://github.com/MadhusudhanKosari/farmsyncro",
        demo: "https://farmsyncro.vercel.app/",
        category: "Full Stack"
    },
    {
        id: "dsa-learning",
        title: "Interactive DSA Tool",
        tagline: "Web-based learning platform",
        problem: "Learning Data Structures & Algorithms (DSA) is often dry and theoretical, lacking immediate feedback for students.",
        solution: "An interactive web platform where students can write, run, and test code against test cases in real-time. It gamifies the learning process.",
        impact: "Provides an environment for students to practice over 50+ core algorithms with instant execution feedback.",
        tech: ["React", "Node.js", "Judge0 API", "Code Execution"],
        features: [
            "In-browser code compilation & execution",
            "Curated problem sets with test cases",
            "Visual progress tracking"
        ],
        github: "https://github.com/MadhusudhanKosari/23C13",
        demo: "https://dsalearning.netlify.app/",
        category: "Education"
    }
];
