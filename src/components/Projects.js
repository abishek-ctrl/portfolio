import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ number, title, description, link }) => (
    <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block border border-gray-800 rounded-3xl p-10 hover:border-accent-500 hover:shadow-2xl hover:shadow-accent-500/10 transition-all duration-500 group bg-gray-900 overflow-hidden relative"
        whileHover={{ y: -5 }}
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150"></div>
        <div className="flex flex-col h-full relative z-10">
            <span className="text-6xl font-serif text-gray-800 transition-colors duration-300 group-hover:text-accent-500/20">{number.toString().padStart(2, '0')}</span>
            <div className="mt-8 flex-grow">
                <h3 className="text-3xl font-semibold text-white tracking-tight">{title}</h3>
                <p className="mt-5 text-slate-400 leading-relaxed text-lg">{description}</p>
            </div>
            <div className="mt-8 flex justify-end">
                <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-accent-400 group-hover:bg-accent-500 group-hover:text-white group-hover:border-accent-500 transition-all duration-300">
                    <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </div>
    </motion.a>
);

export const Projects = ({ sectionRef, projects }) => (
    <section ref={sectionRef} id="projects" className="py-24 sm:py-32 bg-black">
        <div className="container mx-auto px-4">
            <motion.h2
                className="text-4xl md:text-5xl font-serif text-white text-center mb-20 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Selected Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                        <ProjectCard number={index + 1} {...project} />
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);
