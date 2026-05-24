export interface Project {
  id: string;
  name: string;
  status: "Live";
  tagline: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "ai-market-reaction-simulator",
    name: "AI Market Reaction Simulator",
    status: "Live",
    tagline: "Multi-agent LLM simulator that models how markets react to news.",
    description:
      "A full-stack financial intelligence platform that converts market news into structured event signals, simulates five participant types (retail, hedge fund, institutional, analyst, market maker) across three interaction rounds, and renders a dashboard with sentiment, price direction, volatility, and reversal probability. Uses FinBERT for NLP with a deterministic finance-aware fallback.",
    stack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "Pydantic",
      "yfinance",
      "Hugging Face (FinBERT)",
      "Next.js 14",
      "TypeScript",
      "Tailwind",
      "Recharts",
    ],
    liveUrl: "https://ai-market-reaction-simulator.vercel.app",
    githubUrl: "https://github.com/Akul321/ai-market-reaction-simulator",
  },
  {
    id: "agent-arena",
    name: "Agent Arena",
    status: "Live",
    tagline:
      "Bloomberg-style dashboard where heterogeneous agents react to live market news.",
    description:
      "A multi-agent market simulation where retail traders, hedge funds, quants, and a central bank react to live RSS-driven financial news and to each other. Prices, sentiment, and per-agent reasoning unfold in real time with bounded order-flow impact and a finance-tuned two-pass sentiment scorer.",
    stack: [
      "Python",
      "FastAPI",
      "Pydantic",
      "SQLite",
      "feedparser",
      "Next.js 14",
      "TypeScript",
      "Tailwind",
      "Recharts",
      "Docker",
      "Render",
    ],
    liveUrl: "https://agent-arena-beta.vercel.app",
    githubUrl: "https://github.com/Akul321/Agent-Arena",
  },
  {
    id: "flowstate-ai",
    name: "FlowState AI",
    status: "Live",
    tagline:
      "AI-powered routine planner that combines structured scheduling with LLM suggestions.",
    description:
      "A productivity tool that turns natural-language goals into realistic schedules, auto-inserts breaks, detects overloaded days, and tracks how time is actually spent. Uses Groq for fast inference and Firebase for auth and per-user storage.",
    stack: [
      "Next.js",
      "React",
      "Tailwind",
      "FastAPI",
      "Groq (LLaMA)",
      "Firebase Auth",
      "Firestore",
      "Hugging Face Spaces",
    ],
    liveUrl: "https://flowstate-ai-xi.vercel.app",
    githubUrl: "https://github.com/Akul321/FlowState-AI",
  },
  {
    id: "ai-routine-optimizer",
    name: "AI Routine Optimizer",
    status: "Live",
    tagline: "AI-powered daily routine planner — goals in, optimized schedule out.",
    description:
      "A Streamlit app that takes goals, constraints, and habits and generates an optimized daily routine via Groq. Includes habit tracking, reminders, and personalized efficiency metrics. The lighter, prompt-driven predecessor to FlowState AI.",
    stack: ["Python", "Streamlit", "Groq", "LLM Prompting"],
    liveUrl: "https://routine-optimizer.streamlit.app/",
    githubUrl: "https://github.com/Akul321/ai-routine-optimizer",
  },
  {
    id: "pocket-brain",
    name: "Pocket Brain",
    status: "Live",
    tagline: "A lightweight personal knowledge companion for fleeting ideas.",
    description:
      "A web app for capturing and revisiting half-thoughts, snippets, and references. Built with TypeScript and Next.js and optimized for fast capture and frictionless retrieval.",
    stack: ["TypeScript", "Next.js", "React", "Tailwind", "Vercel"],
    liveUrl: "https://pocket-brain-pearl.vercel.app/",
    githubUrl: "https://github.com/Akul321/pocket-brain",
  },
  {
    id: "apple-stock-analysis",
    name: "Apple Stock Analysis",
    status: "Live",
    tagline: "Exploratory analysis of AAPL price action from 2020–2024.",
    description:
      "A Jupyter-notebook study of Apple's stock over a five-year window — returns, volatility regimes, drawdowns, and rolling correlations. Foundational quantitative work that informed the later market simulator. Rendered notebook viewable directly on GitHub.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
    liveUrl:
      "https://github.com/Akul321/apple-stock-analysis/blob/main/apple_stock_analysis.ipynb",
    githubUrl: "https://github.com/Akul321/apple-stock-analysis",
  },
];
