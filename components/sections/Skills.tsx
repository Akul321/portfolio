"use client";

import SectionHeading from "@/components/SectionHeading";
import SkillGroup from "@/components/SkillGroup";
import { skillGroups } from "@/lib/data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="px-6 sm:px-10 lg:px-16 xl:px-20 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <SectionHeading
          id="skills-heading"
          eyebrow="Skills"
          title="What I work with"
        />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group, i) => (
          <SkillGroup key={group.label} group={group} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}
