import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}

export function Marquee({ children, reverse = false, className }: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "flex gap-8 whitespace-nowrap",
          reverse ? "animate-scroll-right" : "animate-scroll-left"
        )}
        style={{ width: "max-content" }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
