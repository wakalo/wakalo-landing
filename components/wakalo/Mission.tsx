import Image from "next/image";
import { Wallet, ShieldCheck, Leaf } from "lucide-react";
import Reveal from "@/components/corp/Reveal";
import SectionLabel from "@/components/corp/SectionLabel";

const problems = [
  { icon: Wallet, title: "Coûts élevés", desc: "Réduisez vos frais de transport jusqu'à 70 % en partageant vos trajets." },
  { icon: ShieldCheck, title: "Manque de sécurité", desc: "Vérification d'identité obligatoire pour tous les utilisateurs." },
  { icon: Leaf, title: "Impact environnemental", desc: "Moins de voitures sur les routes, moins de pollution et de congestion." },
];

const goals = [
  { value: "10K+", label: "Utilisateurs" },
  { value: "50K+", label: "Trajets partagés" },
  { value: "70 %", label: "D'économies visées" },
  { value: "12", label: "Villes ciblées" },
];

export default function Mission() {
  return (
    <section className="bg-ink text-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionLabel index="03" tone="dark">Pourquoi Wakalo</SectionLabel>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Des sièges vides d&apos;un côté, des voyageurs qui attendent de l&apos;autre.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Les déplacements au Bénin sont souvent coûteux et peu optimisés. Notre mission : connecter
              ces deux mondes pour une mobilité plus accessible, plus sûre et plus durable.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
              <Image
                src="/benin/adpd wakalo.png"
                alt="Présentation de Wakalo par l'équipe"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-ink/80 px-4 py-2 text-xs text-white/80 backdrop-blur">
                L&apos;équipe Wakalo présente le projet
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <ul className="mt-20 grid gap-6 md:grid-cols-3">
          {problems.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={i * 0.08} className="h-full rounded-[1.5rem] bg-white/[0.05] p-8 ring-1 ring-white/10">
                <p.icon className="h-6 w-6 text-mint-bright" />
                <h3 className="mt-6 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-white/60">{p.desc}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <div className="mt-20 border-t border-white/10 pt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Nos objectifs 2025–2026</p>
            <dl className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
              {goals.map((g) => (
                <div key={g.label} className="flex flex-col-reverse">
                  <dt className="mt-2 text-white/60">{g.label}</dt>
                  <dd className="font-display text-5xl font-bold text-mint-bright">{g.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
