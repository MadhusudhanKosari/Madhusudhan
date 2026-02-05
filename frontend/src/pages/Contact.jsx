import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaEnvelope, FaPaperPlane, FaGithub, FaLinkedin, FaInstagram, FaCheckCircle } from 'react-icons/fa';
import { PROFILE } from '../data/constants';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="pt-32 pb-20 min-h-screen bg-primary-light dark:bg-primary-dark">
            <Helmet>
                <title>Contact | Kosari Madhusudhan</title>
                <meta name="description" content="Get in touch with Kosari Madhusudhan for opportunities and collaborations." />
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto px-6 md:px-12"
            >
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-6">Let's Connect</h1>
                    <p className="text-muted-light dark:text-muted-dark text-lg md:text-xl max-w-2xl mx-auto">
                        I'm currently looking for <strong>Internship opportunities</strong>.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-card-light dark:bg-card-dark p-8 rounded-2xl border border-black/5 dark:border-white/5 shadow-lg">
                            <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-4 text-muted-light dark:text-muted-dark hover:text-accent transition-colors group">
                                    <div className="p-3 bg-black/5 dark:bg-white/5 rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <span className="font-medium break-all">{PROFILE.email}</span>
                                </a>

                                <div className="h-px bg-black/10 dark:bg-white/10 my-4"></div>

                                <div className="flex gap-4">
                                    <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/5 dark:bg-white/5 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors" aria-label="GitHub">
                                        <FaGithub size={20} />
                                    </a>
                                    <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/5 dark:bg-white/5 rounded-full hover:bg-[#0077b5] hover:text-white transition-colors" aria-label="LinkedIn">
                                        <FaLinkedin size={20} />
                                    </a>
                                    <a href={PROFILE.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/5 dark:bg-white/5 rounded-full hover:bg-[#E1306C] hover:text-white transition-colors" aria-label="Instagram">
                                        <FaInstagram size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6 bg-card-light dark:bg-card-dark p-8 rounded-2xl border border-black/5 dark:border-white/5 shadow-lg">
                        {status === 'success' ? (
                            <div className="text-center py-12">
                                <FaCheckCircle className="text-emerald-500 text-5xl mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">Message Sent!</h3>
                                <p className="text-muted-light dark:text-muted-dark">Thanks for reaching out. I'll get back to you soon.</p>
                                <button onClick={() => setStatus(null)} className="mt-6 text-accent font-bold hover:underline">Send another message</button>
                            </div>
                        ) : (
                            <>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-text-light dark:text-text-dark mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-transparent focus:border-accent rounded-lg text-text-light dark:text-text-dark focus:outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-text-light dark:text-text-dark mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-transparent focus:border-accent rounded-lg text-text-light dark:text-text-dark focus:outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-text-light dark:text-text-dark mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-transparent focus:border-accent rounded-lg text-text-light dark:text-text-dark focus:outline-none transition-all"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/20 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'sending' ? 'Sending...' : <>Send Message <FaPaperPlane /></>}
                                </button>
                                {status === 'error' && (
                                    <p className="text-red-500 text-sm text-center mt-2 font-medium">
                                        Something went wrong. Please try again later or email me directly.
                                    </p>
                                )}
                            </>
                        )}
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
