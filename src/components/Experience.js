import React from 'react';
import { Building } from 'lucide-react';
import { motion } from 'framer-motion';

export const Experience = ({ sectionRef, portfolioData }) => (
    <section ref={sectionRef} id="experience" className="py-24 sm:py-32 bg-gray-950">
        <div className="container mx-auto px-4">
            <motion.h2
                className="text-4xl md:text-5xl font-serif text-white tracking-tight text-center mb-20"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Experience
            </motion.h2>
            <div className="relative max-w-5xl mx-auto">
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gray-800 hidden md:block" aria-hidden="true"></div>
                {portfolioData.experience.map((job, index) => (
                    <motion.div
                        key={index}
                        className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${index > 0 ? 'mt-24' : ''}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* --- Left Side (even index) or Right Side (odd index) --- */}
                        <div className={`text-center md:text-left ${index % 2 !== 0 ? 'md:order-2 md:text-left' : 'md:text-right'}`}>
                            <div className="text-4xl md:text-6xl font-serif text-accent-500 mb-3">{job.date}</div>
                            <div className="text-lg text-slate-400 font-medium tracking-wide uppercase">{job.location}</div>
                        </div>

                        {/* --- Card --- */}
                        <div className={`relative mt-8 md:mt-0 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                            <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-accent-500 rounded-full hidden md:block ring-4 ring-gray-950 ${index % 2 !== 0 ? 'left-full -ml-2' : 'right-full -mr-2'}`} aria-hidden="true"></div>
                            <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl hover:border-gray-700 transition-colors duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 rounded-xl bg-gray-950 border border-gray-800 flex items-center justify-center flex-shrink-0 mr-5">
                                        <Building className="text-accent-500" size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold text-white tracking-tight">{job.role}</h3>
                                        <p className="text-lg text-slate-400 mt-1">{job.company}</p>
                                    </div>
                                </div>
                                <p className="text-slate-300 leading-relaxed text-lg">{job.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);
