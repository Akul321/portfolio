export interface Certification {
  id: string;
  name: string;
  issuer: string;
  monogram: string;
  verifyUrl: string;
}

export const certifications: Certification[] = [
  {
    id: "prompt-engineering",
    name: "Prompt Engineering for Developers",
    issuer: "DeepLearning.AI",
    monogram: "DL",
    verifyUrl: "#",
  },
  {
    id: "ai-fluency",
    name: "AI Fluency for Students",
    issuer: "Anthropic",
    monogram: "AN",
    verifyUrl: "#",
  },
  {
    id: "claude-code-action",
    name: "Claude Code in Action",
    issuer: "Anthropic",
    monogram: "AN",
    verifyUrl: "#",
  },
  {
    id: "claude-cowork",
    name: "Introduction to Claude Cowork",
    issuer: "Anthropic",
    monogram: "AN",
    verifyUrl: "#",
  },
];
