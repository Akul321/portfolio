export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Bash"],
  },
  {
    label: "AI & ML",
    items: [
      "LLM Application Development",
      "Multi-Agent Systems",
      "LangChain",
      "LangGraph",
      "Groq",
      "Ollama",
      "Hugging Face",
      "Prompt Engineering",
      "RAG",
      "Fine-tuning fundamentals",
    ],
  },
  {
    label: "Backend",
    items: [
      "FastAPI",
      "SQLAlchemy 2.0",
      "aiosqlite",
      "REST APIs",
      "WebSockets",
      "Async Python",
      "Pydantic",
    ],
  },
  {
    label: "Frontend",
    items: [
      "Next.js 14 (App Router)",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Recharts",
      "Streamlit",
    ],
  },
  {
    label: "Data & Finance",
    items: [
      "Pandas",
      "NumPy",
      "yfinance",
      "Time-series analysis",
      "Financial modeling",
      "Jupyter",
      "Matplotlib",
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Streamlit Cloud",
      "Render",
      "Hugging Face Spaces",
      "Firebase",
      "Docker",
      "VS Code",
      "Linux",
    ],
  },
];
