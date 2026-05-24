"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -2, transition: { duration: 0.2, ease: "easeOut" } }}
      className="group flex flex-col gap-4 bg-surface border border-white/[0.06] hover:border-white/[0.14] rounded-xl p-6 transition-colors duration-200 hover:shadow-[0_0_40px_-10px_rgba(168,255,96,0.08)]"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-foreground leading-snug">
          {project.name}
        </h3>
        <span className="shrink-0 text-xs font-mono bg-accent/10 text-accent border border-accent/20 rounded-full px-2.5 py-0.5">
          {project.status}
        </span>
      </div>

      {/* Tagline */}
      <p className="text-sm font-medium text-foreground/70 leading-snug">
        {project.tagline}
      </p>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-1">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-semibold text-bg bg-accent rounded-lg px-4 py-2 hover:bg-accent/90 transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          Live Demo <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-muted border border-white/[0.12] rounded-lg px-4 py-2 hover:border-white/[0.28] hover:text-foreground transition-all duration-150 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          GitHub <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.article>
  );
}
