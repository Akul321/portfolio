import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "outline";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-mono rounded px-2 py-0.5 transition-colors duration-150",
        variant === "default" &&
          "bg-white/[0.04] border border-white/[0.08] text-muted hover:border-accent/30 hover:text-accent",
        variant === "accent" &&
          "bg-accent/10 border border-accent/20 text-accent",
        variant === "outline" &&
          "border border-white/[0.12] text-muted hover:border-accent/30 hover:text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
