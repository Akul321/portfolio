"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = () => setOpen(false);

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 h-14 border-b border-white/[0.06] bg-bg/90 backdrop-blur-sm">
      {/* Brand */}
      <a
        href="#hero"
        onClick={handleNav}
        className="font-mono text-sm font-semibold text-foreground hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded"
      >
        Akul
      </a>

      {/* Hamburger */}
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg text-muted hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-accent"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Drawer */}
      {open && (
        <div
          className="fixed inset-0 top-14 bg-bg/95 backdrop-blur-md z-50 flex flex-col px-6 pt-8 pb-12"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav>
            <ul className="space-y-2">
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={handleNav}
                    className={cn(
                      "flex items-center gap-3 text-lg font-medium py-3 px-2 rounded-xl transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-accent",
                      "text-muted hover:text-accent"
                    )}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto">
            <a
              href="https://github.com/Akul321"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNav}
              className="text-xs font-mono text-muted hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded"
            >
              github.com/Akul321
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
