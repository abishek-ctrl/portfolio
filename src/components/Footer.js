import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = ({ portfolioData }) => (
    <footer className="py-12 bg-black border-t border-gray-800 text-slate-400">
        <div className="container mx-auto px-4">
            <div className="flex justify-center gap-8 mb-8">
                <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 rounded-full hover:bg-accent-600 hover:text-white transition-all duration-300" aria-label="GitHub"><Github size={24} /></a>
                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 rounded-full hover:bg-accent-600 hover:text-white transition-all duration-300" aria-label="LinkedIn"><Linkedin size={24} /></a>
                <a href={portfolioData.kaggle} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 rounded-full hover:bg-accent-600 hover:text-white transition-all duration-300" aria-label="Kaggle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M15.33,3.33h-10L0,13.11,5.33,23h10l5.34-9.89ZM12,18.89a6.89,6.89,0,1,1,6.89-6.89A6.89,6.89,0,0,1,12,18.89Z" /></svg>
                </a>
                <a href={portfolioData.huggingface} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 rounded-full hover:bg-accent-600 hover:text-white transition-all duration-300" aria-label="Hugging Face">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.28,15.22a2.3,2.3,0,0,1-2.29-2.29V11.41a2.3,2.3,0,0,1,4.58,0v1.52a2.3,2.3,0,0,1-2.29,2.29ZM3.72,15.22a2.3,2.3,0,0,1-2.29-2.29V11.41a2.3,2.3,0,0,1,4.58,0v1.52A2.3,2.3,0,0,1,3.72,15.22ZM15.22,20.28a2.3,2.3,0,0,1-2.29-2.29V3.72a2.3,2.3,0,0,1,4.58,0V18A2.3,2.3,0,0,1,15.22,20.28ZM8.78,20.28a2.3,2.3,0,0,1-2.29-2.29V3.72a2.3,2.3,0,1,1,4.58,0V18A2.3,2.3,0,0,1,8.78,20.28Z" /></svg>
                </a>
                <a href={`mailto:${portfolioData.email}`} className="p-3 bg-gray-900 rounded-full hover:bg-accent-600 hover:text-white transition-all duration-300" aria-label="Email"><Mail size={24} /></a>
            </div>
            <p className="text-center text-sm font-medium tracking-wide">© {new Date().getFullYear()} Abishek M. All Rights Reserved.</p>
        </div>
    </footer>
);
