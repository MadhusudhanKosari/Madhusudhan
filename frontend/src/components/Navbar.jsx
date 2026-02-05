import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        // { name: 'Research', path: '/research' }, // Hidden based on complexity preference, can re-enable
        { name: 'Resume', path: '/resume' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-primary-light/90 dark:bg-primary-dark/90 backdrop-blur-md shadow-lg py-3 border-b border-muted-light/20 dark:border-muted-dark/20'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight text-text-light dark:text-text-dark hover:text-accent transition-colors font-sans">
                    Kosari Madhusudhan
                </Link>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-8">
                    {/* Links */}
                    <div className="flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-all duration-300 relative group ${isActive ? 'text-accent' : 'text-muted-light dark:text-muted-dark hover:text-text-light dark:hover:text-text-dark'
                                    }`
                                }
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                            </NavLink>
                        ))}
                    </div>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-text-light dark:text-text-dark transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-slate-600" />}
                    </button>

                    {/* CTA */}
                    <Link
                        to="/contact"
                        className="px-5 py-2.5 text-sm font-bold bg-accent text-white rounded hover:bg-accent-hover transition-all transform hover:-translate-y-0.5 shadow-lg shadow-accent/20"
                    >
                        Hire Me
                    </Link>
                </div>

                {/* Mobile Actions */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-text-light dark:text-text-dark transition-colors"
                    >
                        {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-slate-600" />}
                    </button>

                    <button
                        className="text-text-light dark:text-text-dark text-2xl focus:outline-none p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-primary-light dark:bg-primary-dark absolute top-full left-0 w-full overflow-hidden border-t border-muted-light/20 dark:border-muted-dark/20"
                    >
                        <div className="flex flex-col items-center justify-center h-full space-y-8 pb-32">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `text-2xl font-bold transition-colors ${isActive ? 'text-accent' : 'text-muted-light dark:text-muted-dark hover:text-text-light dark:hover:text-text-dark'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="px-8 py-4 text-lg font-bold bg-accent text-white rounded hover:bg-accent-hover transition-all w-3/4 text-center"
                            >
                                Hire Me
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
