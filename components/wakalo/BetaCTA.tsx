import { ArrowUpRight, CheckCircle } from "lucide-react";
import { BETA_FORM_URL } from "@/lib/links";
import Reveal from "@/components/corp/Reveal";

const perks = [
  "Accès gratuit avant tout le monde",
  "0 % de commission pendant les 3 premiers mois",
  "Votre avis façonne l'application",
];

export default function BetaCTA() {
  return (
    <section id="beta" className="scroll-mt-16 bg-paper px-4 py-4 sm:px-6 sm:py-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-forest-deep text-white">
        <div aria-hidden className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-mint-bright/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto grid gap-12 px-6 py-20 sm:px-8 lg:grid-cols-12 lg:items-center lg:px-12 lg:py-28">
          <Reveal className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint-bright">Programme bêta</p>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Devenez l&apos;un des premiers membres.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              Conducteurs et passagers : inscrivez-vous en deux minutes. Nous vous contactons dès
              l&apos;ouverture dans votre ville.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <ul className="space-y-4">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-3 text-white/80">
                  <CheckCircle className="h-5 w-5 shrink-0 text-mint-bright" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href={BETA_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-mint-bright px-7 py-4 font-bold text-forest-deep transition-colors hover:bg-mint-soft sm:w-auto"
            >
              Rejoindre la bêta gratuite
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
