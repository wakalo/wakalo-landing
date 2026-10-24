import Link from "next/link";
import { ArrowUpRight, MapPin, Search, ShieldCheck, Wallet } from "lucide-react";
import { BETA_FORM_URL } from "@/lib/links";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const features = [
  {
    icon: Search,
    screen: "search" as const,
    title: "Trouvez un trajet en quelques secondes",
    desc: "Indiquez votre départ et votre destination : Wakalo vous montre les conducteurs qui font déjà la route.",
  },
  {
    icon: ShieldCheck,
    screen: "trip" as const,
    title: "Voyagez en confiance",
    desc: "Profils vérifiés, avis de la communauté et suivi du trajet en temps réel pour chaque réservation.",
  },
  {
    icon: Wallet,
    screen: "match" as const,
    title: "Partagez les frais, pas les soucis",
    desc: "Un prix juste fixé à l'avance, jusqu'à 70 % moins cher qu'un taxi, et un conducteur qui amortit son trajet.",
  },
];

const cities = ["Cotonou", "Porto-Novo", "Parakou", "Abomey-Calavi"];

export default function WakaloShowcase() {
  return (
    <section
      id="products"
      className="scroll-mt-16 relative overflow-hidden bg-gradient-to-b from-forest-deep via-[#04382b] to-[#021a14] text-white py-24 lg:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-mint-bright/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionLabel index="04" tone="dark">Notre produit phare</SectionLabel>
            <div className="mt-8 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-bright font-display text-xl font-black text-forest-deep">
                W
              </span>
              <span className="font-display text-2xl font-black">
                <span className="text-mint-bright">Wak</span>alo
              </span>
              <span className="rounded-full border border-mint-bright/40 px-3 py-1 text-xs font-semibold text-mint-bright">
                Bêta
              </span>
            </div>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Le covoiturage pensé pour le Bénin.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-white/70">
              Wakalo met en relation conducteurs et passagers qui vont dans la même direction.
              Moins cher, plus sûr et plus convivial que de voyager seul.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {cities.map((c) => (
                <span key={c} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/80">
                  <MapPin className="h-3.5 w-3.5 text-mint-bright" />
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Feature rows */}
        <div className="mt-20 space-y-20 lg:mt-28 lg:space-y-28">
          {features.map((f, i) => (
            <div key={f.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative flex justify-center rounded-[2rem] bg-white/[0.04] px-6 py-12 ring-1 ring-white/10">
                  <PhoneMockup screen={f.screen} />
                </div>
              </Reveal>
              <Reveal delay={0.1} className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-bright/15 text-mint-bright">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-3xl font-bold sm:text-4xl">{f.title}</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">{f.desc}</p>
              </Reveal>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-24 flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-white/[0.06] p-8 ring-1 ring-white/10 sm:p-10 lg:flex-row lg:items-center">
            <div>
              <h3 className="font-display text-2xl font-bold sm:text-3xl">Rejoignez les premiers utilisateurs.</h3>
              <p className="mt-2 text-white/70">La bêta est gratuite et ouverte aux conducteurs comme aux passagers.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/wakalo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-mint-bright px-7 py-4 font-bold text-forest-deep transition-colors hover:bg-mint-soft"
              >
                Découvrir Wakalo
                <ArrowUpRight className="h-5 w-5" />
              </Link>
              <a
                href={BETA_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Rejoindre la bêta
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
