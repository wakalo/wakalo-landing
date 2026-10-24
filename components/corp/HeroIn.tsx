import type { CSSProperties, ReactNode } from "react";

type HeroInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

// Above-the-fold entrance: pure CSS animation (.hero-in in globals.css), so the hero
// never depends on JavaScript to become visible.
export default function HeroIn({ children, delay = 0, className = "" }: HeroInProps) {
  return (
    <div className={`hero-in ${className}`} style={{ "--hero-delay": `${delay}s` } as CSSProperties}>
      {children}
    </div>
  );
}
