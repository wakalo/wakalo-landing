import { Car, User } from "lucide-react";
import Reveal from "@/components/corp/Reveal";
import SectionLabel from "@/components/corp/SectionLabel";

const journeys = [
  {
    icon: User,
    title: "Je suis passager",
    dark: false,
    steps: [
      { title: "Recherchez votre trajet", desc: "Indiquez votre destination et la date de voyage." },
      { title: "Choisissez votre conducteur", desc: "Consultez les profils et les avis vérifiés." },
      { title: "Réservez en un clic", desc: "Confirmez votre place et discutez avec le conducteur." },
      { title: "Voyagez sereinement", desc: "Profitez du trajet en toute sécurité." },
    ],
  },
  {
    icon: Car,
    title: "Je suis conducteur",
    dark: true,
    steps: [
      { title: "Publiez votre trajet", desc: "Renseignez votre itinéraire et le prix par place." },
      { title: "Gérez vos réservations", desc: "Acceptez les passagers qui vous conviennent." },
      { title: "Partagez le trajet", desc: "Conduisez et faites de nouvelles rencontres." },
      { title: "Amortissez vos frais", desc: "Recevez votre paiement directement." },
    ],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 bg-white text-ink py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel index="01">Comment ça marche</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Simple pour les passagers, utile pour les conducteurs.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {journeys.map((j, ji) => (
            <Reveal key={j.title} delay={ji * 0.1}>
              <div className={`h-full rounded-[2rem] p-8 sm:p-10 ${j.dark ? "bg-forest-deep text-white" : "bg-paper"}`}>
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      j.dark ? "bg-mint-bright text-forest-deep" : "bg-brand text-white"
                    }`}
                  >
                    <j.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-2xl font-bold">{j.title}</h3>
                </div>
                <ol className="mt-8 space-y-6">
                  {j.steps.map((s, i) => (
                    <li key={s.title} className="flex gap-5">
                      <span className={`font-display text-2xl font-bold ${j.dark ? "text-mint-bright" : "text-brand"}`}>
                        0{i + 1}
                      </span>
                      <div>
                        <p className="font-semibold">{s.title}</p>
                        <p className={`mt-1 text-sm ${j.dark ? "text-white/60" : "text-ink/60"}`}>{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
