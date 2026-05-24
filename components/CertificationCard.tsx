"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Certification } from "@/lib/data/certifications";

interface CertificationCardProps {
  cert: Certification;
  delay?: number;
}

export default function CertificationCard({
  cert,
  delay = 0,
}: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -2, transition: { duration: 0.2, ease: "easeOut" } }}
      className="flex items-start gap-4 bg-surface border border-white/[0.06] hover:border-white/[0.14] rounded-xl p-5 transition-colors duration-200 hover:shadow-[0_0_30px_-8px_rgba(168,255,96,0.06)]"
    >
      {/* Monogram */}
      <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
        <span className="text-xs font-mono font-bold text-accent">
          {cert.monogram}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-foreground leading-snug">
          {cert.name}
        </h4>
        <p className="text-xs text-muted mt-0.5">{cert.issuer}</p>
      </div>

      {/* Verify link */}
      <a
        href={cert.verifyUrl}
        aria-label={`Verify ${cert.name}`}
        className="shrink-0 text-muted hover:text-accent transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-accent rounded"
      >
        <ExternalLink className="w-4 h-4" />
      </a>
    </motion.div>
  );
}
