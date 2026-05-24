import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", className)}>
      {eyebrow && (
        <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-3xl font-semibold text-foreground tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted text-sm leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
