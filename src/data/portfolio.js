// src/data/portfolio.js

export const portfolioData = {
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
            role: "Founding AI Engineer",
            company: "KronosX AI Labs",
            date: "September 2025 - Present",
            location: "Bengaluru, India",
            description: "Building the core platform for understanding data and synthetic data generation, ensuring strict privacy and compliance. Implementing advanced functionality utilizing ML models."
        },
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
            title: "Multi-Agent SOC Simulation",
            description: "A simulation of a Red Team vs. Blue Team operation using autonomous agents powered by LLMs to process, classify, and respond to cyber threats from real-world logs.",
            link: "https://github.com/abishek-ctrl/Multi-Agent-SOC-Simulation"
        },
        {
            title: "LiteVec: A Minimal, Extensible Vector Database",
            description: "A lightweight, local vector database built on FAISS and Hugging Face embeddings for storing, indexing, and searching high-dimensional vector data with metadata support.",
            link: "https://github.com/abishek-ctrl/LiteVec"
        },
        {
            title: "PII Masker for Documents",
            description: "A web application to detect and redact Personally Identifiable Information (PII) from documents using a fine-tuned DistilBERT-based NER model, featuring a React frontend and FastAPI backend.",
            link: "https://github.com/abishek-ctrl/PII-Masker"
        },
        {
            title: "Read-Viz: Agentic Paper Visualizer",
            description: "Read-Viz is a agentic based application that transforms dense PDF documents, such as research papers, into interactive, digestible visualizations. By leveraging Google's Gemini AI model, it automatically extracts section summaries, tables, and images, presenting them in an intuitive graph-based interface.",
            link: "https://github.com/abishek-ctrl/read-viz"
        },
        {
            title: "Hiring Scout",
            description: "A Streamlit-based chatbot application designed to automate the initial screening process for technical candidates.",
            link: "https://github.com/abishek-ctrl/hiring-scout"
        },
        {
            title: "Agentic RAG Using LangGraph",
            description: "A Langgraph-based LLM application allowing users to upload documents and ask questions, leveraging an agentic RAG workflow for accurate, context-aware answers.",
            link: "https://github.com/abishek-ctrl/Agentic-RAG-Thru-Langgraph"
        },
        {
            title: "GeoToll - GPS Based Toll System",
            description: "Introduces GPS technology for toll collection via an On-Board Unit (OBU) to calculate precise fees based on distance, eliminating physical toll plazas.",
            link: "https://github.com/abishek-ctrl/GeoToll-Link"
        },
        {
            title: "Lung Cancer Detection with ML",
            description: "This project detects lung cancer using various machine learning models, evaluating multiple classifiers like Logistic Regression, Gradient Boosting, KNN, and XGBoost.",
            link: "https://github.com/abishek-ctrl/Lung-Cancer-Detection-Thru-ML"
        }
    ]
};
