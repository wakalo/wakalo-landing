import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import HeroIn from "./HeroIn";

const stats = [
  { value: "Web & mobile", label: "Applications sur mesure" },
  { value: "1 produit", label: "En bêta : Wakalo" },
  { value: "4 experts", label: "Basés à Cotonou" },
];

export default function CorpHero() {
  return (
    <section className="relative bg-cream text-ink overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      {/* Soft ochre glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-ochre/15 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <HeroIn>
              <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-1.5 text-sm font-medium text-ink/70">
                <span className="h-2 w-2 rounded-full bg-ochre" />
                Wakalo Corp · Cotonou, Bénin
              </p>
            </HeroIn>

            <HeroIn delay={0.1}>
              <h1 className="mt-8 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                Nous concevons les solutions{" "}
                <span className="text-ochre">numériques</span> de demain.
              </h1>
            </HeroIn>

            <HeroIn delay={0.2}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl">
                Wakalo Corp développe des applications web et mobiles sur mesure pour les
                entreprises, et crée ses propres produits pour répondre aux besoins du quotidien.
              </p>
            </HeroIn>

            <HeroIn delay={0.3}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-ochre px-7 py-4 font-semibold text-white transition-colors hover:bg-ochre-dark"
                >
                  Lancer un projet
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-7 py-4 font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
                >
                  Découvrir nos produits
                  <ArrowDown className="h-5 w-5" />
                </Link>
              </div>
            </HeroIn>
          </div>

          <HeroIn delay={0.2} className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink">
              <Image
                src="/benin/cotonou-1.jpg"
                alt="Vue de Cotonou"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-cream/95 p-5 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">Notre conviction</p>
                <p className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
                  Le numérique africain se construit ici, avec ceux qui l&apos;utilisent.
                </p>
              </div>
            </div>
          </HeroIn>
        </div>

        {/* Stat strip */}
        <HeroIn delay={0.4}>
          <dl className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-cream px-6 py-6">
                <dt className="text-sm text-ink/60">{s.label}</dt>
                <dd className="mt-1 font-display text-2xl font-bold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </HeroIn>
      </div>
    </section>
  );
}
