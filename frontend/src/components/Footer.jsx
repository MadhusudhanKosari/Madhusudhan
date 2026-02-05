import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';
import { PROFILE } from '../data/constants';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 bg-primary-light dark:bg-primary-dark border-t border-muted-light/10 dark:border-muted-dark/10">
            <div className="container mx-auto px-6 text-center">
                <div className="mb-6 flex justify-center space-x-6">
                    <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-muted-light dark:text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors" aria-label="GitHub">
                        <FaGithub size={24} />
                    </a>
                    <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-light dark:text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors" aria-label="LinkedIn">
                        <FaLinkedin size={24} />
                    </a>
                    <a href={PROFILE.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-light dark:text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors" aria-label="Instagram">
                        <FaInstagram size={24} />
                    </a>
                </div>

                <p className="text-muted-light dark:text-muted-dark font-medium mb-2">
                    Designed & Built by <span className="text-text-light dark:text-text-dark font-bold">{PROFILE.name}</span>
                </p>
                <p className="text-sm text-muted-light dark:text-muted-dark opacity-75">
                    &copy; {currentYear} • Built with React, Tailwind & <FaHeart className="inline text-red-500 mx-1" size={12} />
                </p>
            </div>
        </footer>
    );
};

export default Footer;
