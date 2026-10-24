import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const steps = [
  {
    title: "Comprendre",
    desc: "Ateliers, analyse de vos utilisateurs et de vos contraintes pour cadrer le bon produit.",
  },
  {
    title: "Concevoir",
    desc: "Parcours, maquettes et prototypes testés avant d'écrire la première ligne de code.",
  },
  {
    title: "Développer",
    desc: "Des cycles courts, des démos régulières et un code robuste, documenté et sécurisé.",
  },
  {
    title: "Lancer & accompagner",
    desc: "Mise en ligne, suivi, maintenance et évolutions : nous restons à vos côtés.",
  },
];

export default function Method() {
  return (
    <section id="method" className="scroll-mt-16 bg-white text-ink py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel index="03">Notre méthode</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            De l&apos;idée au lancement, en quatre étapes.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 0.08} className="h-full">
                <div className="relative h-full rounded-[1.5rem] border border-ink/10 bg-paper p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-5xl font-bold text-brand/90">{i + 1}</span>
                    {i < steps.length - 1 && (
                      <span aria-hidden className="hidden h-px flex-1 ml-6 bg-gradient-to-r from-ink/20 to-transparent lg:block" />
                    )}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{step.desc}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
