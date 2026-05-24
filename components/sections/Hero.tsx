"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedDots from "@/components/AnimatedDots";

const FULL_TEXT = "Building at the intersection of AI and financial markets.";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [doneTyping, setDoneTyping] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    if (mq.matches) {
      setDisplayText(FULL_TEXT);
      setDoneTyping(true);
      return;
    }

    let i = 0;
    const delay = setTimeout(() => {
      const timer = setInterval(() => {
        i++;
        setDisplayText(FULL_TEXT.slice(0, i));
        if (i >= FULL_TEXT.length) {
          clearInterval(timer);
          setDoneTyping(true);
        }
      }, 38);
      return () => clearInterval(timer);
    }, 700);

    return () => clearTimeout(delay);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    show: (d: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: d },
    }),
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center px-6 sm:px-10 lg:px-16 xl:px-20 pt-20 lg:pt-0"
    >
      <div className="flex items-center gap-16 w-full max-w-5xl">
        {/* Text content */}
        <div className="flex-1">
          {/* Eyebrow */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <span className="inline-flex items-center font-mono text-xs tracking-widest text-accent uppercase border border-accent/30 rounded-full px-3 py-1">
              AI × Finance · Builder
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            id="hero-heading"
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 font-bold tracking-tight text-foreground leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Akul.
          </motion.h1>

          {/* Typed subhead */}
          <motion.div
            custom={0.25}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-4 h-8 flex items-center"
          >
            <p className="text-lg text-muted font-light">
              {displayText}
              <span
                className={`inline-block w-0.5 h-5 bg-accent ml-0.5 align-middle ${
                  !doneTyping || !reducedMotion
                    ? "animate-[cursor-blink_1s_step-end_infinite]"
                    : "opacity-0"
                }`}
                aria-hidden="true"
              />
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            custom={0.35}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 text-muted leading-[1.75] max-w-xl text-[0.95rem]"
          >
            Full-stack developer focused on AI-powered simulators, agentic
            systems, and tools that make markets and routines more intelligible.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={0.45}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex items-center flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="px-5 py-2.5 bg-accent text-bg font-semibold text-sm rounded-lg hover:bg-accent/90 transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              View Projects
            </a>
            <a
              href="https://github.com/Akul321"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-white/[0.12] text-foreground text-sm rounded-lg hover:border-white/[0.28] hover:text-accent transition-all duration-150 focus-visible:ring-2 focus-visible:ring-accent"
            >
              GitHub ↗
            </a>
          </motion.div>
        </div>

        {/* Animated dots — desktop only */}
        <motion.div
          className="hidden lg:block flex-shrink-0 w-72 h-72 xl:w-80 xl:h-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          aria-hidden="true"
        >
          <AnimatedDots />
        </motion.div>
      </div>
    </section>
  );
}
