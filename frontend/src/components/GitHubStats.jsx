import { PROFILE } from '../data/constants';

const GitHubStats = () => {
    const username = "MadhusudhanKosari";

    return (
        <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-8 relative inline-block">
                Open Source Contributions
                <span className="absolute -bottom-3 left-0 w-1/3 h-1 bg-accent rounded-full"></span>
            </h2>

            {/* Contribution Graph Only */}
            <div className="bg-white dark:bg-[#0d1117] p-4 rounded-xl border border-black/5 dark:border-white/5 shadow-lg overflow-x-auto flex justify-center">
                <img
                    src={`https://ghchart.rshah.org/${username}`}
                    alt="GitHub Contribution Graph"
                    className="min-w-[700px]"
                />
            </div>
        </div>
    );
};

export default GitHubStats;
