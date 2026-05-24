"use client";

import { motion } from "framer-motion";
import type { SkillGroup as SkillGroupType } from "@/lib/data/skills";

interface SkillGroupProps {
  group: SkillGroupType;
  delay?: number;
}

export default function SkillGroup({ group, delay = 0 }: SkillGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay }}
    >
      <p className="text-[10px] font-mono uppercase tracking-widest text-muted mb-3">
        {group.label}
      </p>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + i * 0.04 }}
            className="inline-flex items-center text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-muted rounded px-2.5 py-1 cursor-default transition-all duration-150 hover:border-accent/30 hover:text-accent hover:bg-accent/[0.05]"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
