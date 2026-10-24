import Link from "next/link";
import { Plus } from "lucide-react";
import Reveal from "@/components/corp/Reveal";
import SectionLabel from "@/components/corp/SectionLabel";

const faqs = [
  {
    question: "Comment fonctionne Wakalo ?",
    answer:
      "Wakalo est une plateforme de covoiturage qui met en relation conducteurs et passagers pour partager des trajets. Les conducteurs publient leurs trajets, les passagers réservent une place, et tout le monde économise.",
  },
  {
    question: "Quand l'application sera-t-elle disponible ?",
    answer:
      "Wakalo est actuellement en bêta. Inscrivez-vous au programme pour faire partie des premiers testeurs et être prévenu dès l'ouverture dans votre ville.",
  },
  {
    question: "Wakalo est-il sécurisé ?",
    answer:
      "Oui. Nous vérifions l'identité de tous les utilisateurs, proposons une assurance pour chaque trajet, et notre équipe support est disponible 24/7. Les avis et évaluations garantissent aussi la transparence.",
  },
  {
    question: "Quels sont les frais de service ?",
    answer:
      "Wakalo prélève une commission de 10 % sur chaque trajet. Les membres du programme bêta profitent de 0 % de commission pendant les 3 premiers mois.",
  },
  {
    question: "Puis-je annuler une réservation ?",
    answer:
      "Oui, vous pouvez annuler gratuitement jusqu'à 24 h avant le départ. Les annulations tardives peuvent entraîner des frais selon notre politique d'annulation.",
  },
  {
    question: "Comment devenir conducteur ?",
    answer:
      "Inscrivez-vous, faites vérifier votre identité et vos documents (permis, assurance, carte grise), puis publiez votre premier trajet.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-16 bg-paper text-ink py-24 lg:py-32">
      <div className="max-w-7xl mx-auto grid gap-12 px-6 sm:px-8 lg:grid-cols-12 lg:px-12">
        <Reveal className="lg:col-span-4">
          <SectionLabel index="05">FAQ</SectionLabel>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight">Questions fréquentes</h2>
          <p className="mt-4 text-ink/60">
            Vous ne trouvez pas votre réponse ?{" "}
            <Link href="/help" className="font-semibold text-brand underline-offset-4 hover:underline">
              Centre d&apos;aide
            </Link>{" "}
            ou{" "}
            <Link href="/contact" className="font-semibold text-brand underline-offset-4 hover:underline">
              contactez-nous
            </Link>
            .
          </p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-8">
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((f) => (
              <details key={f.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {f.question}
                  <Plus className="h-5 w-5 shrink-0 text-brand transition-transform group-open:rotate-45" />
                </summary>
                <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">{f.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
