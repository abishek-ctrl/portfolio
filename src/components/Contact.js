import React from 'react';
import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = ({ sectionRef, email }) => (
    <section ref={sectionRef} id="contact" className="py-32 sm:py-40 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-500/5 blur-[100px] rounded-full w-[800px] h-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <motion.div
            className="container mx-auto px-4 text-center relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight">Get In Touch</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                I'm always open to new opportunities and collaborations. Feel free to reach out if you have a question or just want to connect.
            </p>
            <motion.a
                href={`mailto:${email}`}
                className="inline-flex items-center px-10 py-5 bg-accent-600 text-lg rounded-full text-white shadow-xl shadow-accent-500/20 hover:bg-white hover:text-black transition-all duration-300 group font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Terminal className="mr-3 h-6 w-6" />
                <span>{`> git checkout -b next`}</span>
            </motion.a>
        </motion.div>
    </section>
);
