import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = ({ sections, scrollToSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = (ref) => {
        scrollToSection(ref);
        setIsOpen(false);
    };

    const navLinks = (
        <>
            <button onClick={() => handleNavClick(sections.about)} className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">About</button>
            <button onClick={() => handleNavClick(sections.experience)} className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">Experience</button>
            <button onClick={() => handleNavClick(sections.projects)} className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">Projects</button>
        </>
    );

    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-4">
            <motion.div
                className="container mx-auto flex justify-between items-center bg-gray-950/60 backdrop-blur-xl border border-gray-800/50 rounded-2xl px-6 py-3"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick(sections.home)}>
                    <span className="text-white font-bold text-2xl font-serif">AK</span>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                    {navLinks}
                    <button onClick={() => handleNavClick(sections.contact)} className="ml-4 flex items-center px-5 py-2.5 bg-accent-600 text-white rounded-full text-sm font-medium hover:bg-accent-500 transition-colors group shadow-lg shadow-accent-500/20">
                        Let's Talk <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white p-2">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden mt-3 bg-gray-950/90 backdrop-blur-2xl border border-gray-800/50 rounded-2xl p-4 flex flex-col items-center space-y-3"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        {navLinks}
                        <button onClick={() => handleNavClick(sections.contact)} className="w-full flex items-center justify-center px-5 py-3 bg-accent-600 rounded-full text-sm font-medium text-white hover:bg-accent-500 transition-colors group">
                            Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
