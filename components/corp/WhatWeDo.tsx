import Link from "next/link";
import { ArrowUpRight, Code2, Rocket } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="scroll-mt-16 bg-white text-ink py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel index="01">Ce que nous faisons</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Deux métiers, une même exigence : des outils numériques utiles et bien faits.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="group flex h-full flex-col justify-between rounded-[2rem] bg-ink p-8 text-cream sm:p-10">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ochre">
                  <Code2 className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-8 font-display text-3xl font-bold">Solutions sur mesure</h3>
                <p className="mt-4 max-w-md leading-relaxed text-cream/70">
                  Vous avez une idée, un besoin métier ou un processus à digitaliser ? Nous concevons
                  et développons votre application web ou mobile, du cadrage jusqu&apos;à la mise en ligne.
                </p>
              </div>
              <Link
                href="#services"
                className="mt-10 inline-flex items-center gap-2 font-semibold text-ochre"
              >
                Voir nos services
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="group flex h-full flex-col justify-between rounded-[2rem] border border-ink/10 bg-cream p-8 sm:p-10">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink">
                  <Rocket className="h-7 w-7 text-ochre" />
                </div>
                <h3 className="mt-8 font-display text-3xl font-bold">Nos propres produits</h3>
                <p className="mt-4 max-w-md leading-relaxed text-ink/70">
                  Nous identifions des problèmes concrets du quotidien et y répondons avec nos propres
                  solutions. Notre premier produit, Wakalo, réinvente le covoiturage au Bénin.
                </p>
              </div>
              <Link
                href="#products"
                className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 font-semibold shadow-sm ring-1 ring-ink/10"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-forest-deep text-xs font-bold text-mint-bright">
                  W
                </span>
                Découvrir Wakalo
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
