import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowUp, Menu, X } from 'lucide-react';

// --- Data Object: All your portfolio content is here for easy updates ---
const portfolioData = {
  name: "Abishek M",
  title: "AI & Machine Learning Engineer",
  email: "amabishek02@gmail.com",
  linkedin: "https://linkedin.com/in/abishekcodes",
  github: "https://github.com/abishek-ctrl",
  about: "A passionate and results-driven Computer Science Engineer specializing in Artificial Intelligence and Machine Learning. With hands-on experience in developing and deploying scalable data science solutions, I thrive on building intelligent systems that solve real-world problems. My expertise spans from creating advanced RAG pipelines to architecting multi-agent simulations, always with a focus on performance, efficiency, and innovation.",
  skills: [
    { name: "AI/ML", items: ["Large Language Models", "PyTorch", "TensorFlow", "Scikit-learn", "Langchain", "Deep Learning", "NLP", "Computer Vision"] },
    { name: "Backend & Cloud", items: ["FastAPI", "Node.js", "Python", "REST APIs", "MongoDB", "Docker", "Kubernetes", "Azure ML"] },
    { name: "Data Tools", items: ["Pandas", "Numpy", "Spark", "Power BI", "SQL", "Vector Databases"] }
  ],
  experience: [
    {
      role: "Data Science Intern",
      company: "Genpact",
      date: "July 2024 - Dec 2024",
      description: "Designed and enhanced a Multimodal RAG pipeline, improving data retrieval accuracy by 15%. Validated pipeline responses using frameworks like RAGAS and researched model deployment on Azure ML, reducing infrastructure costs."
    },
    {
      role: "Software Developer Intern",
      company: "Mintosh Advisory",
      date: "Jan 2024 - April 2024",
      description: "Led the development of a digital avatar platform using LLMs. Implemented a scalable FastAPI backend, reducing latency and inference costs by 16%. Conducted experiments with Llama models to improve accuracy by 12%."
    }
  ],
  projects: [
    {
      title: "LiteVec - Lightweight Vector Database",
      description: "A high-performance vector database built from scratch, supporting multiple ANN backends like FAISS and HNSWlib. Features metadata-aware semantic search, persistent indexing, and a CLI for easy data ingestion, achieving ~250ms query latency on a 1000+ vector corpus.",
      tags: ["Python", "FAISS", "HNSWlib", "Vector Search", "CLI"],
      link: "https://github.com/abishek-ctrl/litevec"
    },
    {
      title: "Multi-Agent Security Operations Simulation",
      description: "A Red Team vs. Blue Team simulation using Ollama and real-world network datasets. Four autonomous agents perform threat generation, classification, and mitigation, leveraging a FAISS-based threat memory to improve response reliability against DDoS and PortScan attacks.",
      tags: ["Multi-Agent Systems", "Ollama", "Cybersecurity", "FAISS", "Python"],
      link: "https://github.com/abishek-ctrl/multiagent-soc"
    }
  ]
};

// --- Helper function for smooth scrolling ---
const scrollToSection = (ref) => {
    if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }
};

// --- Glassmorphism Card Component ---
const GlassCard = ({ children, className = '' }) => (
  <div className={`bg-slate-800/40 backdrop-blur-lg border border-slate-400/20 shadow-lg rounded-2xl p-6 sm:p-8 ${className}`}>
    {children}
  </div>
);

// --- Header/Navigation Component ---
const Header = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2.5;
        let currentSection = 'home';
        for (const sectionId in sections) {
            const sectionElement = sections[sectionId].current;
            if (sectionElement && scrollPosition >= sectionElement.offsetTop) {
                currentSection = sectionId;
            }
        }
        setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setIsOpen(false);
  };

  const navLinks = (
    <>
      <button onClick={() => handleNavClick(sections.about)} className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'about' ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`}>About</button>
      <button onClick={() => handleNavClick(sections.experience)} className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'experience' ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`}>Experience</button>
      <button onClick={() => handleNavClick(sections.projects)} className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'projects' ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`}>Projects</button>
      <button onClick={() => handleNavClick(sections.contact)} className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-black bg-cyan-400 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 transition-colors">
        Contact
      </button>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 bg-slate-900/70 backdrop-blur-md rounded-b-2xl px-6 border-b border-slate-400/20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick(sections.home)}>
            <span className="text-white font-bold text-xl">Abishek M</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden mt-2 mx-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/80 backdrop-blur-md rounded-xl flex flex-col items-center">
            {navLinks}
          </div>
        </div>
      )}
    </header>
  );
};

// --- Hero Section ---
const Hero = ({ sectionRef, contactRef }) => (
  <section ref={sectionRef} id="home" className="min-h-screen flex items-center justify-center text-center px-4">
    <div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
        Hi, I'm <span className="text-cyan-400">{portfolioData.name}</span>
      </h1>
      <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl text-slate-300">
        {portfolioData.title}
      </h2>
      <div className="mt-8 flex justify-center gap-4">
         <button onClick={() => scrollToSection(contactRef)} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-black bg-cyan-400 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 transition-colors">
          Get In Touch
        </button>
        <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-slate-600 text-base font-medium rounded-full text-white bg-slate-800/40 hover:bg-slate-700/60 transition-colors">
          <Github className="mr-2 -ml-1 h-5 w-5" />
          GitHub
        </a>
      </div>
    </div>
  </section>
);

// --- About Section ---
const About = ({ sectionRef }) => (
  <section ref={sectionRef} id="about" className="py-24 sm:py-32">
    <GlassCard>
      <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
      <p className="text-slate-300 leading-relaxed mb-8">{portfolioData.about}</p>
      <h3 className="text-2xl font-bold text-white mb-6">Core Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolioData.skills.map(skillCategory => (
          <div key={skillCategory.name}>
            <h4 className="font-semibold text-cyan-400 mb-3">{skillCategory.name}</h4>
            <ul className="space-y-2">
              {skillCategory.items.map(item => (
                <li key={item} className="text-slate-300">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </GlassCard>
  </section>
);

// --- Experience Section ---
const Experience = ({ sectionRef }) => (
  <section ref={sectionRef} id="experience" className="py-24 sm:py-32">
    <h2 className="text-3xl font-bold text-white mb-12 text-center">Professional Experience</h2>
    <div className="relative border-l-2 border-cyan-800/50 ml-6 md:ml-0 md:border-l-0 md:border-t-2 md:w-full md:flex">
        <div className="absolute top-0 -left-[9px] w-4 h-4 bg-cyan-600 rounded-full md:hidden"></div>
        {portfolioData.experience.map((job, index) => (
            <div key={index} className="mb-10 ml-8 md:ml-0 md:mb-0 md:w-1/2 md:relative md:pt-8">
                <div className="md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:-mt-2">
                    <div className="hidden md:block w-4 h-4 bg-cyan-600 rounded-full ring-8 ring-slate-900"></div>
                </div>
                <div className={`md:w-full ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <GlassCard className="text-left">
                        <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                        <p className="text-md font-normal text-cyan-400">{job.company}</p>
                        <time className="block mb-2 text-sm font-normal leading-none text-slate-400">{job.date}</time>
                        <p className="text-base font-normal text-slate-300">{job.description}</p>
                    </GlassCard>
                </div>
            </div>
        ))}
    </div>
</section>
);


// --- Projects Section ---
const Projects = ({ sectionRef }) => (
  <section ref={sectionRef} id="projects" className="py-24 sm:py-32">
    <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {portfolioData.projects.map(project => (
        <GlassCard key={project.title} className="flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-slate-300 mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold mt-auto">
            View on GitHub &rarr;
          </a>
        </GlassCard>
      ))}
    </div>
  </section>
);

// --- Contact Section ---
const Contact = ({ sectionRef }) => (
  <section ref={sectionRef} id="contact" className="py-24 sm:py-32">
    <GlassCard className="text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
      <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
        I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. My inbox is always open!
      </p>
      <a href={`mailto:${portfolioData.email}`} className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-black bg-cyan-400 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 transition-colors">
        <Mail className="mr-3 h-6 w-6" /> Say Hello
      </a>
    </GlassCard>
  </section>
);

// --- Footer ---
const Footer = () => (
  <footer className="py-8 text-center text-slate-400">
    <div className="flex justify-center gap-6 mb-4">
      <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
      <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
      <a href={`mailto:${portfolioData.email}`} className="hover:text-white transition-colors"><Mail size={24} /></a>
    </div>
    <p className="text-sm text-slate-500">© 2025 Abishek M. All Rights Reserved.</p>
  </footer>
);

// --- Main App Component ---
export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

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
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop, { passive: true });
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);

  return (
    <div className="bg-slate-900 text-slate-100 font-sans leading-normal tracking-wide">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black"></div>
          <div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl opacity-30 animate-blob"
            style={{animationDelay: '0s'}}>
          </div>
          <div 
            className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-30 animate-blob"
            style={{animationDelay: '4s'}}>
          </div>
      </div>
      
      <div className="relative z-10">
        <Header sections={sections} />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero sectionRef={homeRef} contactRef={contactRef} />
          <About sectionRef={aboutRef} />
          <Experience sectionRef={experienceRef} />
          <Projects sectionRef={projectsRef} />
          <Contact sectionRef={contactRef} />
        </main>
        <Footer />
      </div>

      {showScrollTop && (
        <button
          onClick={() => scrollToSection(homeRef)}
          className="fixed bottom-8 right-8 bg-cyan-500/50 text-white p-3 rounded-full shadow-lg hover:bg-cyan-500 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}