"use client";

import SectionHeading from "@/components/SectionHeading";
import CertificationCard from "@/components/CertificationCard";
import { certifications } from "@/lib/data/certifications";
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="px-6 sm:px-10 lg:px-16 xl:px-20 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <SectionHeading
          id="certifications-heading"
          eyebrow="Certifications"
          title="Coursework & credentials"
          subtitle="Selected coursework and certifications across AI, ML, and quantitative finance."
        />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, i) => (
          <CertificationCard key={cert.id} cert={cert} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}
