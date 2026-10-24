import Link from "next/link";
import { ArrowDown, ArrowUpRight, ShieldCheck } from "lucide-react";
import { BETA_FORM_URL } from "@/lib/links";
import HeroIn from "@/components/corp/HeroIn";
import PhoneMockup from "@/components/corp/PhoneMockup";

export default function WakaloHero() {
  return (
    <section className="relative overflow-hidden bg-paper text-ink pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-mint-bright/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid gap-16 px-6 sm:px-8 lg:grid-cols-12 lg:items-center lg:px-12">
        <div className="lg:col-span-7">
          <HeroIn>
            <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-sm font-medium text-ink/70">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Un produit Wakalo Corp · Bêta ouverte
            </p>
          </HeroIn>
          <HeroIn delay={0.1}>
            <h1 className="mt-8 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Le covoiturage pensé pour le <span className="text-brand">Bénin</span>.
            </h1>
          </HeroIn>
          <HeroIn delay={0.2}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl">
              Wakalo met en relation conducteurs et passagers qui vont dans la même direction.
              Partagez vos trajets, économisez et voyagez en confiance.
            </p>
          </HeroIn>
          <HeroIn delay={0.3}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={BETA_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Rejoindre la bêta gratuite
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-7 py-4 font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                Comment ça marche
                <ArrowDown className="h-5 w-5" />
              </Link>
            </div>
          </HeroIn>
          <HeroIn delay={0.4}>
            <p className="mt-8 flex items-center gap-2 text-sm text-ink/60">
              <ShieldCheck className="h-4 w-4 text-brand" />
              Identité vérifiée pour chaque membre de la communauté
            </p>
          </HeroIn>
        </div>

        <HeroIn delay={0.2} className="lg:col-span-5">
          <div className="relative flex justify-center rounded-[2rem] bg-forest-deep px-6 py-12">
            <div aria-hidden className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(52,211,153,0.25),transparent_60%)]" />
            <PhoneMockup screen="search" className="relative" />
          </div>
        </HeroIn>
      </div>
    </section>
  );
}
