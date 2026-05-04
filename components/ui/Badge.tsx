import { cn } from "@/lib/utils";

type BadgeVariant = "accent" | "gold" | "dark" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  accent: "bg-accent text-black",
  gold: "bg-gold text-black",
  dark: "bg-surface-2 text-white border border-border",
  outline: "border border-white/20 text-white/70",
};

export function Badge({ children, variant = "dark", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "font-label tracking-widest text-[10px] uppercase px-3 py-1 inline-block",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
