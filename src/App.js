import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data ---
import { portfolioData } from './data/portfolio';

// --- Components ---
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// --- Helper ---
const scrollToSection = (ref) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};

// --- Main App Component ---
export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [systemState, setSystemState] = useState(200);
  const [clickSpam, setClickSpam] = useState([]);
  const [showAccessDenied, setShowAccessDenied] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sections = {
    home: homeRef,
    about: aboutRef,
    experience: experienceRef,
    projects: projectsRef,
    contact: contactRef
  };

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScrollTop(window.pageYOffset > 400);
    };
    window.addEventListener('scroll', checkScrollTop, { passive: true });
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const is403 = systemState === 403;
  const is404 = systemState === 404;
  const is429 = systemState === 429;
  const is500 = systemState === 500;

  const handleGlobalClickCapture = (e) => {
    if (e.target.closest('#monogram')) return; // Allow monogram interaction

    if (is403) {
      e.stopPropagation();
      e.preventDefault();
      setShowAccessDenied(true);
      setTimeout(() => setShowAccessDenied(false), 2000);
      return;
    }

    if (is429) {
      e.stopPropagation();
      e.preventDefault();

      const newClick = { id: Date.now() + Math.random(), x: e.clientX, y: e.clientY };
      setClickSpam(prev => [...prev, newClick]);

      setTimeout(() => {
        setClickSpam(prev => prev.filter(c => c.id !== newClick.id));
      }, 1500);
    }
  };

  return (
    <>
      <div
        className={`bg-black text-slate-100 font-sans leading-normal tracking-wide selection:bg-accent-500 selection:text-white overflow-x-hidden min-h-screen transition-all duration-700 
      ${is500 ? 'bg-red-950/20 pointer-events-none' : ''} 
      ${is403 ? 'sepia-[.8] hue-rotate-[250deg] saturate-200 invert-[0.8] mix-blend-difference' : ''} 
      ${is429 ? 'blur-[2px] opacity-70 transition-none scale-[0.98]' : ''}
    `}
        style={is429 ? { transition: 'none', transform: `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)` } : {}}
        onClickCapture={handleGlobalClickCapture}
      >
        {/* Conditional CRT scanline overlay mimicking a broken screen globally */}
        {is500 && (
          <div className="fixed inset-0 z-[100] pointer-events-none opacity-20" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #f00 2px, #f00 4px)' }}></div>
        )}

        <div className={`relative z-10 antialiased ${(is500 || is429) ? 'pointer-events-none' : ''}`}>
          <AnimatePresence>
            {!is404 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`
                ${is403 ? 'rotate-1' : ''}
              `}
              >
                <Header sections={sections} scrollToSection={scrollToSection} />
              </motion.div>
            )}
          </AnimatePresence>

          <main>
            <Hero
              sectionRef={homeRef}
              onArrowClick={() => scrollToSection(aboutRef)}
              portfolioData={portfolioData}
              systemState={systemState}
              setSystemState={setSystemState}
            />

            <AnimatePresence>
              {!is404 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`
                  ${is403 ? '-rotate-1 select-none' : ''}
                `}
                >
                  <About
                    sectionRef={aboutRef}
                    onButtonClick={() => scrollToSection(experienceRef)}
                    portfolioData={portfolioData}
                  />
                  <Experience
                    sectionRef={experienceRef}
                    portfolioData={portfolioData}
                  />
                  <Projects
                    sectionRef={projectsRef}
                    projects={portfolioData.projects}
                  />
                  <Contact
                    sectionRef={contactRef}
                    email={portfolioData.email}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          <AnimatePresence>
            {!is404 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`
                ${is403 ? 'rotate-2' : ''}
              `}
              >
                <Footer portfolioData={portfolioData} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {showScrollTop && !is404 && (
          <motion.button
            onClick={() => scrollToSection(homeRef)}
            className={`fixed bottom-8 right-8 bg-gray-900 border border-gray-800 text-white p-4 rounded-full shadow-2xl hover:bg-gray-800 transition-colors z-50 group ${(is500 || is429) ? 'pointer-events-none' : ''}`}
            aria-label="Scroll to top"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ y: -5 }}
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 429 Error Click Spam Viewer */}
      <AnimatePresence>
        {clickSpam.map(click => (
          <motion.div
            key={click.id}
            className="fixed z-[9999] text-red-500 font-mono font-bold text-sm md:text-base pointer-events-none drop-shadow-md select-none whitespace-nowrap"
            style={{ left: click.x, top: click.y, x: '-50%', y: '-100%' }}
            initial={{ opacity: 0, y: -10, scale: 0.8 }}
            animate={{ opacity: 1, y: -40, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            ERR_429: TOO MANY REQUESTS
          </motion.div>
        ))}
      </AnimatePresence>

      {/* 403 Access Denied Overlay */}
      <AnimatePresence>
        {showAccessDenied && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="text-white font-mono font-black text-5xl md:text-7xl tracking-widest bg-red-600/90 px-12 py-8 rounded-lg border-4 border-red-500 uppercase overflow-hidden relative"
              initial={{ scale: 0.8, y: 50, filter: 'blur(10px)' }}
              animate={{
                scale: [1, 1.05, 1],
                y: 0,
                filter: 'blur(0px)',
                x: [-5, 5, -5, 5, 0] // Shake effect
              }}
              exit={{ scale: 1.1, opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)' }}></div>
              <span className="relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">ACCESS DENIED</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}