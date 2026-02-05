import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { SiLeetcode, SiCodechef, SiCodeforces, SiGeeksforgeeks } from 'react-icons/si';
import { FaTrophy, FaUsers, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Leadership = () => {
    const profiles = [
        {
            name: 'LeetCode',
            icon: <SiLeetcode />,
            link: 'https://leetcode.com/u/Madhu_kosari/',
            color: 'text-yellow-500',
            stat: 'Problem Solving',
            desc: 'View Profile'
        },
        {
            name: 'CodeChef',
            icon: <SiCodechef />,
            link: 'https://www.codechef.com/users/madhusudhan_12',
            color: 'text-amber-700',
            stat: 'Competitive Coding',
            desc: 'View Profile'
        },
        {
            name: 'Codeforces',
            icon: <SiCodeforces />,
            link: 'https://codeforces.com/profile/23211a05e8',
            color: 'text-blue-500',
            stat: 'Contest Rating',
            desc: 'View Profile'
        },
        {
            name: 'GeeksforGeeks',
            icon: <SiGeeksforgeeks />,
            link: 'https://www.geeksforgeeks.org/profile/madhukosari',
            color: 'text-green-500',
            stat: 'DSA Practice',
            desc: 'View Profile'
        },
        {
            name: 'SmartInterviews',
            icon: <FaCode />,
            link: 'https://smartinterviews.in/profile/madhu_kosari',
            color: 'text-indigo-500',
            stat: 'Course & Rankings',
            desc: 'View Profile'
        },
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen bg-primary-light dark:bg-primary-dark">
            <Helmet>
                <title>Leadership & Profiles | Kosari Madhusudhan</title>
                <meta name="description" content="My professional leadership experience and competitive programming profiles." />
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto px-6 md:px-12"
            >
                {/* 1. LEADERSHIP SECTION */}
                <section className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4">Leadership & Impact</h2>
                        <p className="text-muted-light dark:text-muted-dark text-lg">Beyond code: Community building and team leadership.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <div className="bg-card-light dark:bg-card-dark p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-accent/50 transition-colors shadow-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                                <FaUsers className="text-9xl text-accent" />
                            </div>
                            <div className="flex items-start gap-4 mb-4 relative z-10">
                                <span className="p-3 bg-black/5 dark:bg-white/5 rounded-lg text-accent text-2xl border border-black/5 dark:border-white/5">
                                    <FaUsers />
                                </span>
                                <div>
                                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark leading-tight">GDG on Campus</h3>
                                    <p className="text-accent font-bold text-sm uppercase tracking-wider mt-1">Design Co-Lead</p>
                                </div>
                            </div>
                            <p className="text-text-light dark:text-text-dark leading-relaxed relative z-10">
                                Orchestrated design workshops and managed the visual identity for multiple campus-wide tech events.
                                Mentored junior designers and fostered a collaborative community of 500+ student developers.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-card-light dark:bg-card-dark p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-amber-500/50 transition-colors shadow-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                                <FaTrophy className="text-9xl text-amber-500" />
                            </div>
                            <div className="flex items-start gap-4 mb-4 relative z-10">
                                <span className="p-3 bg-black/5 dark:bg-white/5 rounded-lg text-amber-500 text-2xl border border-black/5 dark:border-white/5">
                                    <FaTrophy />
                                </span>
                                <div>
                                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark leading-tight">Hackathon Finalist</h3>
                                    <p className="text-amber-500 font-bold text-sm uppercase tracking-wider mt-1">SIH & Adobe</p>
                                </div>
                            </div>
                            <p className="text-text-light dark:text-text-dark leading-relaxed relative z-10">
                                <strong>Smart India Hackathon (SIH):</strong> Led team "FarmSyncro" to the Grand Finale (Level 2). <br />
                                <strong>Adobe Make-athon:</strong> Regional finalist for developing an AI-driven creative tool.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. CODING PROFILES */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark">Competitive Programming</h2>
                        <div className="h-px bg-black/10 dark:bg-white/10 flex-grow"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        {profiles.map((profile) => (
                            <a
                                key={profile.name}
                                href={profile.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-black/5 dark:border-white/5 flex flex-col items-center text-center hover:bg-black/5 dark:hover:bg-white/5 hover:-translate-y-1 transition-all group"
                            >
                                <div className={`text-5xl mb-4 ${profile.color} drop-shadow-md group-hover:scale-110 transition-transform`}>
                                    {profile.icon}
                                </div>
                                <h4 className="text-text-light dark:text-text-dark font-bold text-lg mb-1">{profile.name}</h4>
                                <p className="text-accent font-mono text-xs font-bold mb-2">{profile.stat}</p>
                                <div className="mt-4 text-muted-light dark:text-muted-dark group-hover:text-text-light dark:group-hover:text-text-dark transition-colors flex items-center gap-2 text-xs uppercase font-bold tracking-wide">
                                    {profile.desc} <FaExternalLinkAlt size={10} />
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </motion.div>
        </div>
    );
};

export default Leadership;
