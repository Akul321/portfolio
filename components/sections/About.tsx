"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="px-6 sm:px-10 lg:px-16 xl:px-20 py-24"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            id="about-heading"
            eyebrow="About"
            title="Who I am"
          />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
          {/* Narrative */}
          <motion.div
            variants={fadeUp}
            className="space-y-5 text-[0.95rem] text-muted leading-[1.75]"
          >
            <p>
              I&apos;m Akul Ramesh, a student developer focused on artificial
              intelligence, finance, and full-stack development.
            </p>
            <p>
              I enjoy building projects that combine clean design with practical
              functionality — from AI-powered finance tools and productivity
              systems to interactive web platforms and market simulators.
            </p>
            <p>
              My goal is to create technology that feels modern, useful, and
              genuinely impactful.
            </p>
          </motion.div>

          {/* Quick facts card */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="bg-surface border border-white/[0.06] hover:border-white/[0.14] rounded-xl p-5 transition-colors duration-200"
          >
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted mb-4">
              Quick facts
            </p>
            <dl className="space-y-3.5">
              {[
                { label: "Location", value: "Bengaluru, India 📍" },
                {
                  label: "Currently",
                  value: "building CogniIQ AI",
                },
                {
                  label: "Into",
                  value: "multi-agent systems, markets, productivity tools and quant finance",
                },
                { label: "Find me", value: "github.com/Akul321" },
              ].map(({ label, value }) => (
                <div key={label} className="grid grid-cols-[80px_1fr] gap-3">
                  <dt className="text-[10px] font-mono uppercase tracking-widest text-muted pt-0.5 shrink-0">
                    {label}
                  </dt>
                  <dd className="text-sm text-foreground leading-snug">
                    {label === "Find me" ? (
                      <a
                        href="https://github.com/Akul321"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline focus-visible:ring-2 focus-visible:ring-accent rounded"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
