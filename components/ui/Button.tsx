import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "gold";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-black hover:bg-accent-dim font-label tracking-widest text-xs uppercase px-8 py-3 transition-colors inline-flex items-center justify-center",
  secondary:
    "border border-white text-white hover:bg-white hover:text-black font-label tracking-widest text-xs uppercase px-8 py-3 transition-colors inline-flex items-center justify-center",
  ghost:
    "border border-white/20 text-white/80 hover:border-accent hover:text-accent font-label tracking-widest text-xs uppercase px-8 py-3 transition-colors inline-flex items-center justify-center",
  gold:
    "bg-gold text-black hover:bg-gold-dim font-label tracking-widest text-xs uppercase px-8 py-3 transition-colors inline-flex items-center justify-center",
};

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  external,
  type = "button",
  disabled,
}: ButtonProps) {
  const cls = cn(variants[variant], disabled && "opacity-50 pointer-events-none", className);

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    ) : (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {children}
    </button>
  );
}
