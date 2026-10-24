import { Wallet, Leaf, ShieldCheck, Users, Percent, CalendarClock } from "lucide-react";
import Reveal from "@/components/corp/Reveal";
import SectionLabel from "@/components/corp/SectionLabel";

const features = [
  { icon: Wallet, title: "Économisez jusqu'à 70 %", desc: "Partagez les frais de carburant et de péage. Voyagez pour moins cher qu'en bus ou en taxi." },
  { icon: ShieldCheck, title: "Sécurité d'abord", desc: "Vérification d'identité, assurance et support 24/7." },
  { icon: Users, title: "Communauté de confiance", desc: "Rencontrez de nouvelles personnes et partagez de bons moments sur la route." },
  { icon: Leaf, title: "Éco-responsable", desc: "Réduisez votre empreinte carbone en partageant vos trajets." },
  { icon: Percent, title: "Frais réduits", desc: "Seulement 10 % de commission sur chaque trajet." },
  { icon: CalendarClock, title: "Flexibilité totale", desc: "Voyagez quand vous voulez, où vous voulez." },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-16 bg-paper text-ink py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <SectionLabel index="02">Fonctionnalités</SectionLabel>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Tout ce qu&apos;il faut pour voyager mieux.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="text-lg leading-relaxed text-ink/70">
              Wakalo est conçu pour les réalités des routes béninoises : prix justes, confiance et simplicité.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <li key={f.title} className="bg-white">
              <Reveal delay={(i % 3) * 0.06} className="h-full p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-bright/20 text-brand">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/60">{f.desc}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
