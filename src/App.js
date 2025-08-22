import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowUp, Menu, X, ArrowRight, Building, MapPin, Calendar } from 'lucide-react';

// --- Data Object ---
const portfolioData = {
  name: "Abishek M",
  degree: "Integrated Masters of Technology in Artificial Intelligence",
  roles: ["Machine Learning Engineer", "Backend Developer", "Data Scientist"],
  email: "amabishek02@gmail.com",
  linkedin: "https://linkedin.com/in/abishekcodes",
  github: "https://github.com/abishek-ctrl",
  kaggle: "https://www.kaggle.com/abishekak",
  huggingface: "https://huggingface.co/abishekcodes",
  about: "A passionate and results-driven Computer Science Engineer specializing in Artificial Intelligence and Machine Learning. With hands-on experience in developing and deploying scalable data science solutions, I thrive on building intelligent systems that solve real-world problems. My expertise spans from creating advanced RAG pipelines to architecting multi-agent simulations, always with a focus on performance, efficiency, and innovation.",
  skills: [
    { name: "AI/ML", items: ["Large Language Models", "PyTorch", "TensorFlow", "Scikit-learn", "Langchain", "Deep Learning", "NLP", "Computer Vision"] },
    { name: "Backend & Cloud", items: ["FastAPI", "Node.js", "Python", "REST APIs", "MongoDB", "Docker", "Kubernetes", "Azure ML"] },
    { name: "Data Tools", items: ["Pandas", "Numpy", "Spark", "Power BI", "SQL", "Vector Databases"] }
  ],
  experience: [
    {
      role: "Data Scientist Intern",
      company: "Genpact India",
      date: "July 2024 - Dec 2024",
      location: "India - Remote",
      description: "Designed and enhanced a Multimodal RAG pipeline, improving data retrieval accuracy by 15%. Validated pipeline responses using frameworks like RAGAS and researched model deployment on Azure ML, reducing infrastructure costs."
    },
    {
      role: "AI Engineer Intern",
      company: "Mintosh Advisory",
      date: "Jan 2024 - April 2024",
      location: "Bengaluru - Remote",
      description: "Led the development of a digital avatar platform using LLMs. Implemented a scalable FastAPI backend, reducing latency and inference costs by 16%. Conducted experiments with Llama models to improve accuracy by 12%."
    }
  ],
  projects: [
    {
      title: "Agentic RAG Using LangGraph",
      description: "A Langgraph-based LLM application allowing users to upload documents (PDF/DOCX) and ask questions. It leverages an agentic RAG workflow for accurate, context-aware answers, handling complex multi-step reasoning.",
      link: "https://github.com/abishek-ctrl/Agentic-RAG-Thru-Langgraph"
    },
    {
      title: "Read-Viz: Agentic Paper Visualizer",
      description: "An agentic application that transforms dense PDFs into interactive visualizations. Using Google's Gemini AI, it extracts summaries, tables, and images, presenting them in an intuitive graph-based interface.",
      link: "https://github.com/abishek-ctrl/read-viz"
    },
    {
      title: "GeoToll - GPS Based Toll System",
      description: "Introduces GPS technology for toll collection via an On-Board Unit (OBU). It calculates precise toll fees based on distance traveled and automates collection, eliminating the need for physical toll plazas and reducing traffic.",
      link: "https://github.com/abishek-ctrl/GeoToll-Link"
    },
    {
      title: "Lung Cancer Detection with ML",
      description: "This repository contains code for detecting lung cancer using various machine learning models. The project evaluates Linear & Logistic Regression, Gradient Boosting, KNN, Decision Tree, Random Forest, CATBoost, and XGBoost classifiers.",
      link: "https://github.com/abishek-ctrl/Lung-Cancer-Detection-Thru-ML"
    }
  ]
};


// --- Helper Functions ---
const scrollToSection = (ref) => {
    if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }
};

// --- UI Components ---

const InteractiveMonogram = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY, currentTarget } = event;
      const { left, top, width, height } = currentTarget.getBoundingClientRect();
      const x = (clientX - left - width / 2) / 25;
      const y = (clientY - top - height / 2) / 25;
      setMousePos({ x, y });
    };

    const target = document.getElementById('monogram-container');
    target.addEventListener('mousemove', handleMouseMove);

    return () => {
      target.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id="monogram-container" className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center cursor-pointer">
        <div 
            className="absolute text-[12rem] md:text-[14rem] font-serif text-gray-700 transition-transform duration-200 ease-out"
            style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        >
            AK
        </div>
        <div 
            className="absolute text-[12rem] md:text-[14rem] font-serif text-gray-500 transition-transform duration-200 ease-out"
            style={{ transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)` }}
        >
            AK
        </div>
        <div className="absolute text-[12rem] md:text-[14rem] font-serif text-white">AK</div>
    </div>
  )
}

const Header = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setIsOpen(false);
  };

  const navLinks = (
    <>
      <button onClick={() => handleNavClick(sections.about)} className="px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors">About</button>
      <button onClick={() => handleNavClick(sections.experience)} className="px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors">Experience</button>
      <button onClick={() => handleNavClick(sections.projects)} className="px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors">Projects</button>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick(sections.home)}>
          <span className="text-white font-bold text-2xl font-serif">AK</span>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          {navLinks}
          <button onClick={() => handleNavClick(sections.contact)} className="ml-4 flex items-center px-5 py-2 border border-white rounded-full text-sm text-white hover:bg-white hover:text-black transition-colors group">
            Let's Talk <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-3 bg-black/80 backdrop-blur-md rounded-lg p-4 flex flex-col items-center space-y-2">
          {navLinks}
           <button onClick={() => handleNavClick(sections.contact)} className="w-full flex items-center justify-center px-5 py-2 border border-white rounded-full text-sm text-white hover:bg-white hover:text-black transition-colors group">
            Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      )}
    </header>
  );
};

const Hero = ({ sectionRef, onArrowClick }) => (
  <section ref={sectionRef} id="home" className="min-h-screen flex items-center px-4 relative">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl text-white font-serif">
          {portfolioData.name}
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-slate-300">{portfolioData.degree}</p>
        <p className="mt-6 text-lg text-slate-400 max-w-xl">
          Seeking full-time roles in <span className="text-accent-400">Machine Learning</span>, <span className="text-accent-400">Backend Development</span>, and <span className="text-accent-400">Data Science</span>.
        </p>
      </div>
      <div className="hidden md:flex items-center justify-center">
        <InteractiveMonogram/>
      </div>
    </div>
     <div className="absolute bottom-10 left-0 right-0 px-4">
      <div className="container mx-auto">
        <div className="cursor-pointer w-fit" onClick={onArrowClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
            <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
);

const About = ({ sectionRef, onButtonClick }) => (
  <section ref={sectionRef} id="about" className="py-24 sm:py-32">
    <div className="container mx-auto px-4 sm:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8">About Me</h2>
          <p className="text-slate-300 leading-relaxed">{portfolioData.about}</p>
          <div className="mt-10">
            {portfolioData.skills.map(skillCategory => (
              <div key={skillCategory.name} className="mb-6">
                <h4 className="font-semibold text-accent-400 mb-3">{skillCategory.name}</h4>
                <div className="flex flex-wrap gap-2">
                   {skillCategory.items.map(item => (
                    <span key={item} className="bg-gray-800 text-slate-300 text-sm font-medium px-3 py-1 rounded-md">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button onClick={onButtonClick} className="mt-8 flex items-center px-5 py-2 border border-white rounded-full text-sm text-white hover:bg-white hover:text-black transition-colors group">
            View My Experience <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        <div className="flex items-center justify-center">
           <img src={`${process.env.PUBLIC_URL}/images/pointer.png`} alt="Abishek M" className="w-full max-w-sm h-auto rounded-lg shadow-2xl"/>
        </div>
      </div>
    </div>
  </section>
);

const Experience = ({ sectionRef }) => (
  <section ref={sectionRef} id="experience" className="py-24 sm:py-32 bg-gray-900/50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-serif text-white text-center mb-20">Experience</h2>
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700 hidden md:block" aria-hidden="true"></div>
        {portfolioData.experience.map((job, index) => (
          <div key={index} className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${index > 0 ? 'mt-20' : ''}`}>
            {/* --- Left Side (even index) or Right Side (odd index) --- */}
            <div className={`text-center md:text-left ${index % 2 !== 0 ? 'md:order-2 md:text-left' : 'md:text-right'}`}>
                <div className="text-5xl md:text-7xl font-serif text-accent-400 mb-2">{job.date}</div>
                <div className="text-xl text-slate-400">{job.location}</div>
            </div>
            
            {/* --- Card --- */}
            <div className={`relative mt-4 md:mt-0 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
              <div className={`absolute top-8 w-4 h-4 bg-accent-500 rounded-full hidden md:block ${index % 2 !== 0 ? 'left-full -ml-2' : 'right-full -mr-2'}`} aria-hidden="true"></div>
               <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center flex-shrink-0 mr-4">
                      <Building className="text-gray-500"/>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{job.role}</h3>
                    <p className="text-lg font-normal text-slate-300">{job.company}</p>
                  </div>
                </div>
                <p className="mt-4 text-slate-400 leading-relaxed">{job.description}</p>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


const ProjectCard = ({ number, title, description, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block border border-gray-800 rounded-3xl p-8 hover:border-accent-500 transition-colors duration-300 group bg-gray-900/30">
        <div className="flex flex-col h-full">
            <span className="text-5xl font-serif text-white">{number.toString().padStart(2, '0')}</span>
            <div className="mt-6 flex-grow">
                <h3 className="text-2xl font-medium text-white">{title}</h3>
                <p className="mt-4 text-slate-400 leading-relaxed">{description}</p>
            </div>
            <div className="mt-6 text-right text-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight/>
            </div>
        </div>
    </a>
);

const Projects = ({ sectionRef, projects }) => (
  <section ref={sectionRef} id="projects" className="py-24 sm:py-32">
     <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-serif text-white text-center mb-16">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} number={index + 1} {...project} />
        ))}
      </div>
     </div>
  </section>
);

const Contact = ({ sectionRef }) => (
  <section ref={sectionRef} id="contact" className="py-24 sm:py-32">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Get In Touch</h2>
      <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
        I'm currently open to new opportunities and collaborations. My inbox is always open!
      </p>
      <a href={`mailto:${portfolioData.email}`} className="inline-flex items-center px-8 py-3 border border-accent-400 text-lg font-medium rounded-full text-accent-400 hover:bg-accent-400 hover:text-black transition-colors">
        <Mail className="mr-3 h-5 w-5" /> Say Hello
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 text-center text-slate-400">
    <div className="container mx-auto px-4">
      <div className="flex justify-center gap-6 mb-4">
        <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub"><Github size={24} /></a>
        <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={24} /></a>
        <a href={portfolioData.kaggle} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Kaggle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M15.33,3.33h-10L0,13.11,5.33,23h10l5.34-9.89ZM12,18.89a6.89,6.89,0,1,1,6.89-6.89A6.89,6.89,0,0,1,12,18.89Z"/></svg>
        </a>
        <a href={portfolioData.huggingface} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Hugging Face">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.28,15.22a2.3,2.3,0,0,1-2.29-2.29V11.41a2.3,2.3,0,0,1,4.58,0v1.52a2.3,2.3,0,0,1-2.29,2.29ZM3.72,15.22a2.3,2.3,0,0,1-2.29-2.29V11.41a2.3,2.3,0,0,1,4.58,0v1.52A2.3,2.3,0,0,1,3.72,15.22ZM15.22,20.28a2.3,2.3,0,0,1-2.29-2.29V3.72a2.3,2.3,0,0,1,4.58,0V18A2.3,2.3,0,0,1,15.22,20.28ZM8.78,20.28a2.3,2.3,0,0,1-2.29-2.29V3.72a2.3,2.3,0,1,1,4.58,0V18A2.3,2.3,0,0,1,8.78,20.28Z"/></svg>
        </a>
        <a href={`mailto:${portfolioData.email}`} className="hover:text-white transition-colors" aria-label="Email"><Mail size={24} /></a>
      </div>
      <p className="text-sm text-slate-500">© {new Date().getFullYear()} Abishek M. All Rights Reserved.</p>
    </div>
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
      setShowScrollTop(window.pageYOffset > 400);
    };
    window.addEventListener('scroll', checkScrollTop, { passive: true });
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <div className="bg-black text-slate-100 font-sans leading-normal tracking-wide">
      <div className="relative z-10">
        <Header sections={sections} />
        <main>
          <Hero 
            sectionRef={homeRef} 
            onArrowClick={() => scrollToSection(aboutRef)}
          />
          <About 
            sectionRef={aboutRef} 
            onButtonClick={() => scrollToSection(experienceRef)} 
          />
          <Experience sectionRef={experienceRef} />
          <Projects sectionRef={projectsRef} projects={portfolioData.projects} />
          <Contact sectionRef={contactRef} />
        </main>
        <Footer />
      </div>

      {showScrollTop && (
        <button
          onClick={() => scrollToSection(homeRef)}
          className="fixed bottom-8 right-8 bg-white/20 text-white p-3 rounded-full shadow-lg hover:bg-white/30 transition-colors backdrop-blur-sm"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}