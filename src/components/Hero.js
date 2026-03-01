import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InteractiveMonogram } from './InteractiveMonogram';

export const Hero = ({ sectionRef, onArrowClick, portfolioData, systemState, setSystemState }) => {
    const is404 = systemState === 404;
    const is500 = systemState === 500;

    return (
        <section ref={sectionRef} id="home" className={`min-h-screen flex items-center px-4 relative bg-transparent transition-colors duration-700`}>

            <div className={`container mx-auto grid grid-cols-1 ${is404 ? 'md:grid-cols-1 place-items-center' : 'md:grid-cols-2'} gap-8 items-center relative z-10 transition-all duration-500`}>
                <AnimatePresence mode="wait">
                    {!is404 && (
                        <motion.div
                            key="hero-content"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{
                                opacity: 1,
                                x: is500 ? [-5, 5, -5, 5, 0] : 0,
                            }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className={`w-full ${is500 ? 'pointer-events-none' : ''}`}
                        >
                            <motion.div
                                className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 mb-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                <h1 className="text-5xl sm:text-6xl md:text-7xl text-white font-serif tracking-tight whitespace-nowrap">
                                    {portfolioData.name}
                                </h1>
                                <div className="flex flex-wrap gap-3 text-sm font-mono text-accent-500 mt-2 lg:mt-0">
                                    <span className="px-3 py-1.5 bg-accent-500/10 rounded-md border border-accent-500/20 whitespace-nowrap">temperature=0.0</span>
                                    <span className="px-3 py-1.5 bg-accent-500/10 rounded-md border border-accent-500/20 whitespace-nowrap">backpropagate()</span>
                                </div>
                            </motion.div>
                            <motion.p
                                className="mt-6 text-xl sm:text-2xl text-slate-300 font-light"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                {portfolioData.degree}
                            </motion.p>
                            <motion.p
                                className="mt-8 text-lg text-slate-400 max-w-xl leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                Building NLP systems and synthetic data pipelines as an <span className="text-accent-400 font-medium">AI Engineer</span> at <span className="text-accent-400 font-medium">KronosX AI Labs</span>.
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className={`${is404 ? 'flex col-span-1 md:col-span-2' : 'hidden md:flex'} items-center justify-center relative z-20 transition-all duration-500`}>
                    <InteractiveMonogram systemState={systemState} setSystemState={setSystemState} />
                </div>
            </div>

            <AnimatePresence>
                {!is404 && (
                    <motion.div
                        className={`absolute bottom-10 left-0 right-0 px-4 ${is500 ? 'pointer-events-none' : ''}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <div className="container mx-auto">
                            <div className="cursor-pointer w-fit p-3 rounded-full hover:bg-gray-800 transition-colors" onClick={onArrowClick}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
                                    <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
