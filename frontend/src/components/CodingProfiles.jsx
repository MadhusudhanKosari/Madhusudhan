import { SiLeetcode, SiCodechef, SiCodeforces, SiGeeksforgeeks } from 'react-icons/si';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const CodingProfiles = () => {
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {profiles.map((profile) => (
                <a
                    key={profile.name}
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-black/5 dark:border-white/5 flex flex-col items-center text-center hover:bg-black/5 dark:hover:bg-white/5 hover:-translate-y-2 transition-all duration-300 group shadow-lg hover:shadow-xl hover:border-accent/30"
                >
                    <div className={`text-5xl mb-4 ${profile.color} drop-shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        {profile.icon}
                    </div>
                    <h4 className="text-text-light dark:text-text-dark font-bold text-sm mb-2">{profile.name}</h4>
                    <p className="text-accent font-mono text-xs font-bold mb-4 bg-accent/10 px-2 py-1 rounded-full">{profile.stat}</p>
                    <div className="text-muted-light dark:text-muted-dark group-hover:text-accent transition-colors flex items-center gap-2 text-[10px] uppercase font-bold tracking-wide mt-auto">
                        {profile.desc} <FaExternalLinkAlt size={10} />
                    </div>
                </a>
            ))}
        </div>
    );
};

export default CodingProfiles;
