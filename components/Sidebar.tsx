"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(id);
          });
        },
        { threshold: 0.25, rootMargin: "-10% 0px -60% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-full w-60 xl:w-64 flex-col px-8 py-10 z-40 border-r border-white/[0.04]">
      {/* Brand */}
      <div className="mb-10">
        <a href="#hero" className="block group focus-visible:ring-2 focus-visible:ring-accent rounded">
          <span className="font-mono text-sm font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors">
            Akul
          </span>
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted mt-0.5">
            AI × Finance
          </p>
        </a>
      </div>

      {/* Navigation */}
      <nav aria-label="Page sections">
        <ul className="space-y-0.5">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  "flex items-center gap-3 text-sm py-2 px-3 rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent",
                  activeSection === id
                    ? "text-accent font-medium"
                    : "text-muted hover:text-foreground"
                )}
              >
                <span
                  className={cn(
                    "w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200",
                    activeSection === id
                      ? "bg-accent scale-110"
                      : "bg-white/20"
                  )}
                />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer link */}
      <div className="mt-auto">
        <a
          href="https://github.com/Akul321"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-mono text-muted hover:text-accent transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          github.com/Akul321
        </a>
      </div>
    </aside>
  );
}
