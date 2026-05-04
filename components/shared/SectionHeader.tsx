import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", align === "center" ? "text-center" : "text-left")}>
      {eyebrow && (
        <p className="font-label tracking-[0.3em] text-xs text-accent uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display font-light leading-tight",
          light ? "text-black" : "text-white",
          "text-4xl md:text-5xl lg:text-6xl"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-sm leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-muted" : "text-muted-dark"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
