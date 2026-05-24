export const profile = {
  name: "Ishank Mishra",
  role: "AI/ML Engineer and Full Stack Developer",
  location: "Jaipur, India",
  email: "ishumishra2905@gmail.com",
  headline:
    "I build agentic AI products, RAG systems, and full stack applications that move from prototype to production.",
  summary:
    "AI/ML engineer specializing in LLM orchestration, multi-agent systems, and end-to-end AI application development with FastAPI, React, and modern Python stacks.",
  links: {
    github: "https://github.com/Ishank2301",
    linkedin: "https://www.linkedin.com/in/ishank2301/",
    kaggle: "https://www.kaggle.com/ishank2005",
    portfolio: "https://ishankportfolio.netlify.app/",
  },
};

export const stats = [
  { label: "B.Tech timeline", value: "2023-2027" },
  { label: "Validation accuracy", value: "92%" },
  { label: "RAG answer accuracy", value: "85%+" },
  { label: "Hackathon finish", value: "Top 10" },
];

export const skillGroups = [
  {
    title: "Agentic AI",
    skills: ["LangGraph", "CrewAI", "AutoGen", "LangChain", "OpenAI APIs", "Ollama"],
  },
  {
    title: "ML and Deep Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "OpenCV", "Transformers"],
  },
  {
    title: "Full Stack",
    skills: ["FastAPI", "React", "Next.js", "Tailwind CSS", "SQLAlchemy", "REST APIs"],
  },
  {
    title: "Data and Retrieval",
    skills: ["PostgreSQL", "SQLite", "FAISS", "ChromaDB", "Pinecone", "BM25"],
  },
  {
    title: "Deployment",
    skills: ["Docker", "GitHub API", "AWS EC2", "AWS S3", "AWS Lambda", "Streamlit"],
  },
];

export const projects = [
  {
    name: "MediAgent v5.0",
    type: "AI Medical Copilot",
    href: "https://github.com/Ishank2301/MediAgent",
    stack: ["Python", "FastAPI", "LangGraph", "CrewAI", "React", "PostgreSQL", "Docker"],
    impact:
      "Multi-agent clinical decision support with diagnosis, drug interaction, and radiology triage agents.",
  },
  {
    name: "DeepReview-AI",
    type: "AI Reviewer Agent Platform",
    href: "https://github.com/Ishank2301/DeepReview-AI",
    stack: ["LangChain", "AutoGen", "FastAPI", "Next.js", "GitHub API", "SQLite"],
    impact:
      "Autonomous pull request analysis with specialized agents for security, performance, style, and refactors.",
  },
  {
    name: "Chat With PDF RAG",
    type: "Document Intelligence Pipeline",
    href: "https://github.com/Ishank2301/chat-with-pdf-rag",
    stack: ["LangChain", "FAISS", "OpenAI API", "FastAPI", "Streamlit"],
    impact:
      "Multi-document QA with semantic chunking, hybrid retrieval, re-ranking, and streaming responses.",
  },
  {
    name: "LLM Fine-Tuning",
    type: "QLoRA on LLaMA 2",
    href: "https://github.com/Ishank2301/LLM-Fine-Tuning-QLoRA-on-LLaMA-2",
    stack: ["PyTorch", "Hugging Face", "PEFT", "LoRA", "WandB"],
    impact:
      "Domain fine-tuning with 4-bit quantization, low-rank adaptation, and BLEU/ROUGE evaluation.",
  },
  {
    name: "DBZ-Fighter",
    type: "Computer Vision Classification",
    href: "https://github.com/Ishank2301/DBZ-Fighter",
    stack: ["TensorFlow", "OpenCV", "ResNet50", "EfficientNet", "TensorFlow Lite"],
    impact:
      "Transfer learning pipeline for 50K+ images with TFLite optimization and webcam detection.",
  },
];

export const achievements = [
  "Top 10 finish out of 50+ teams at a national hackathon for MediAgent v5.0.",
  "Built JWT-authenticated FastAPI backends with SQLAlchemy, async endpoints, and AI streaming.",
  "Reduced fine-tuning memory use by 60% and improved training speed by 40% with QLoRA.",
  "Completed Deloitte Australia Data Analytics Job Simulation in 2024.",
  "Open-source contributor focused on LLM applications, RAG systems, and agentic AI workflows.",
];
