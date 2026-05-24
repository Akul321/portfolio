export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "mail";
}

export const profile = {
  name: "Akul",
  fullName: "Akul Ramesh",
  eyebrow: "AI × Finance · Builder",
  headline: "Akul.",
  subhead: "Building at the intersection of AI and financial markets.",
  bio: "Full-stack developer focused on AI-powered simulators, agentic systems, and tools that make markets and routines more intelligible.",
  location: "Bengaluru, India",
  currentProject: "CogniIQ AI",
  interests: "multi-agent systems, markets, productivity tools and quant finance",
  githubHandle: "Akul321",
  githubUrl: "https://github.com/Akul321",
  socials: [
    { label: "GitHub", href: "https://github.com/Akul321", icon: "github" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "X / Twitter", href: "#", icon: "twitter" },
    { label: "Email", href: "mailto:#", icon: "mail" },
  ] satisfies SocialLink[],
  narrative: [
    "I'm Akul Ramesh, a student developer focused on artificial intelligence, finance, and full-stack development.",
    "I enjoy building projects that combine clean design with practical functionality — from AI-powered finance tools and productivity systems to interactive web platforms and market simulators.",
    "My goal is to create technology that feels modern, useful, and genuinely impactful.",
  ],
};
