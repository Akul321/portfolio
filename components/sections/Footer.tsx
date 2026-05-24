import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Akul321",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: Twitter,
  },
  {
    label: "Email",
    href: "mailto:#",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 sm:px-10 lg:px-16 xl:px-20 py-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Copyright */}
        <p className="text-xs font-mono text-muted">
          © 2026 Akul. Built with Next.js &amp; deployed on Vercel.
        </p>

        {/* Social icons */}
        <nav aria-label="Social links">
          <ul className="flex items-center gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  className="text-muted hover:text-accent transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-accent rounded p-1 block"
                >
                  <Icon className="w-4 h-4" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
