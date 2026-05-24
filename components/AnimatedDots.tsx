"use client";

import { useEffect, useRef } from "react";

export default function AnimatedDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animFrameRef = useRef<number>(0);
  const isVisibleRef = useRef(false);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DOT_SPACING = 28;
    const DOT_RADIUS = 1.5;
    const INFLUENCE_RADIUS = 110;
    const BASE_OPACITY = 0.1;
    const HOVER_OPACITY = 0.75;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", resize);

    const draw = () => {
      if (!ctx || !canvas) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const cols = Math.ceil(w / DOT_SPACING);
      const rows = Math.ceil(h / DOT_SPACING);

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const x = c * DOT_SPACING + DOT_SPACING / 2;
          const y = r * DOT_SPACING + DOT_SPACING / 2;

          let opacity = BASE_OPACITY;

          if (!reducedMotionRef.current) {
            const dx = x - mouseRef.current.x;
            const dy = y - mouseRef.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < INFLUENCE_RADIUS) {
              const factor = 1 - dist / INFLUENCE_RADIUS;
              opacity =
                BASE_OPACITY + (HOVER_OPACITY - BASE_OPACITY) * factor * factor;
            }
          }

          ctx.beginPath();
          ctx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(168, 255, 96, ${opacity})`;
          ctx.fill();
        }
      }
    };

    const animate = () => {
      if (isVisibleRef.current) draw();
      animFrameRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting;
      },
      { threshold: 0 }
    );

    observer.observe(canvas);

    if (reducedMotionRef.current) {
      draw();
    } else {
      isVisibleRef.current = true;
      animate();
    }

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      aria-hidden="true"
      style={{ display: "block" }}
    />
  );
}
