"use client";

import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="px-6 sm:px-10 lg:px-16 xl:px-20 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <SectionHeading
          id="projects-heading"
          eyebrow="Projects"
          title="Things I've built"
          subtitle="Six deployed projects across AI, finance, and productivity."
        />
      </motion.div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 0.06} />
        ))}
      </div>
    </section>
  );
}
