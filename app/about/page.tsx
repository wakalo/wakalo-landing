import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Lightbulb, Target, HeartHandshake } from "lucide-react";
import Reveal from "@/components/corp/Reveal";
import HeroIn from "@/components/corp/HeroIn";
import SectionLabel from "@/components/corp/SectionLabel";
import TeamSection from "@/components/corp/TeamSection";
import ProjectCTA from "@/components/corp/ProjectCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "À propos — Wakalo Corp",
  description:
    "Wakalo Corp est une entreprise du numérique basée à Cotonou qui conçoit des applications sur mesure et développe ses propres produits.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Nous cherchons la solution la plus simple et la plus utile, pas la plus spectaculaire.",
  },
  {
    icon: Target,
    title: "Exigence",
    desc: "Qualité du code, sécurité, accessibilité : nous livrons des produits robustes et durables.",
  },
  {
    icon: HeartHandshake,
    title: "Impact local",
    desc: "Nous construisons pour les réalités du Bénin et de l'Afrique de l'Ouest, avec leurs utilisateurs.",
  },
];

const products = [
  {
    name: "Wakalo",
    tag: "Covoiturage · Bêta",
    desc: "L'application qui met en relation conducteurs et passagers pour voyager moins cher et en confiance.",
    href: "/wakalo",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <HeroIn>
            <SectionLabel index="—">À propos</SectionLabel>
            <h1 className="mt-8 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Nous construisons le numérique <span className="text-brand">utile</span>, depuis Cotonou.
            </h1>
          </HeroIn>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto grid gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src="/benin/cotonou-1.jpg"
                alt="Cotonou"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionLabel index="01">Notre mission</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Rendre la technologie accessible et utile à chacun.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/70">
              <p>
                Wakalo Corp est une entreprise du numérique fondée au Bénin. Nous accompagnons
                entreprises et institutions dans la conception et le développement de leurs
                applications web et mobiles.
              </p>
              <p>
                En parallèle, nous créons nos propres produits pour répondre à des problèmes concrets
                du quotidien. Le premier, Wakalo, réinvente la mobilité partagée au Bénin.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <SectionLabel index="02">Nos valeurs</SectionLabel>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-[1.5rem] border border-ink/10 bg-white p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-mint-bright">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/70">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <SectionLabel index="03">Nos produits</SectionLabel>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {products.map((p) => (
              <Reveal key={p.name}>
                <Link
                  href={p.href}
                  className="group flex h-full flex-col justify-between rounded-[2rem] bg-forest-deep p-8 text-white sm:p-10"
                >
                  <div>
                    <p className="text-sm font-semibold text-mint-bright">{p.tag}</p>
                    <h3 className="mt-3 font-display text-4xl font-black">
                      <span className="text-mint-bright">Wak</span>alo
                    </h3>
                    <p className="mt-4 max-w-sm text-white/70">{p.desc}</p>
                  </div>
                  <span className="mt-10 inline-flex items-center gap-2 font-semibold text-mint-bright">
                    Découvrir
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={0.1}>
              <div className="flex h-full min-h-64 flex-col justify-center rounded-[2rem] border-2 border-dashed border-ink/15 p-8 text-ink/50 sm:p-10">
                <p className="font-display text-2xl font-semibold">Prochain produit</p>
                <p className="mt-2">En préparation dans nos ateliers…</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <TeamSection index="04" />
      <ProjectCTA />
      <Footer />
    </main>
  );
}
