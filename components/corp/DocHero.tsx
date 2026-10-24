import type { ReactNode } from "react";
import HeroIn from "./HeroIn";

type DocHeroProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
};

// Shared hero for text-heavy pages (help, terms, legal)
export default function DocHero({ eyebrow, title, subtitle, children }: DocHeroProps) {
  return (
    <section className="bg-paper text-ink pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <HeroIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
        </HeroIn>
        <HeroIn delay={0.1}>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">{title}</h1>
        </HeroIn>
        {subtitle && (
          <HeroIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-ink/70">{subtitle}</p>
          </HeroIn>
        )}
        {children && <HeroIn delay={0.3}>{children}</HeroIn>}
      </div>
    </section>
  );
}
