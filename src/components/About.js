import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const About = ({ sectionRef, onButtonClick, portfolioData }) => (
    <section ref={sectionRef} id="about" className="py-24 sm:py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-8">About Me</h2>
                    <p className="text-slate-300 leading-relaxed text-lg">{portfolioData.about}</p>
                    <div className="mt-12 space-y-8">
                        {portfolioData.skills.map((skillCategory, idx) => (
                            <motion.div
                                key={skillCategory.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2, duration: 0.5 }}
                            >
                                <h4 className="font-semibold text-accent-400 mb-4 tracking-wide uppercase text-sm">{skillCategory.name}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillCategory.items.map(item => (
                                        <span key={item} className="bg-gray-900 border border-gray-800 text-slate-300 text-sm font-medium px-4 py-2 rounded-lg hover:border-gray-600 transition-colors">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <button onClick={onButtonClick} className="mt-12 flex items-center px-6 py-3 border border-gray-700 bg-gray-900 rounded-full text-sm font-medium text-white hover:bg-white hover:text-black transition-all group duration-300">
                        View My Experience <ArrowRight className="ml-3 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                    </button>
                </motion.div>
                <motion.div
                    className="flex items-center justify-center relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 bg-accent-500/10 blur-3xl -z-10 rounded-full w-3/4 h-3/4 m-auto"></div>
                    <img src={`${process.env.PUBLIC_URL}/images/pointer.png`} alt={portfolioData.name} className="w-full max-w-sm h-auto mix-blend-screen" />
                </motion.div>
            </div>
        </div>
    </section>
);
