"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Comment fonctionne Wakalo ?",
    answer:
      "Wakalo est une plateforme de covoiturage qui met en relation conducteurs et passagers pour partager des trajets. Les conducteurs publient leurs trajets, les passagers réservent une place, et tout le monde économise !",
  },
  {
    question: "Quand sera lancée l'application ?",
    answer:
      "Le programme bêta débutera en avril 2025. Inscrivez-vous dès maintenant pour être parmi les premiers testeurs et profiter d'avantages exclusifs.",
  },
  {
    question: "Wakalo est-il sécurisé ?",
    answer:
      "Absolument ! Nous vérifions l'identité de tous les utilisateurs, proposons une assurance pour chaque trajet, et notre équipe support est disponible 24/7. Vos avis et évaluations garantissent également la transparence.",
  },
  {
    question: "Quels sont les frais de service ?",
    answer:
      "Wakalo prélève une commission de 10% sur chaque trajet. Les membres du programme bêta profiteront de 0% de commission pendant les 3 premiers mois !",
  },
  {
    question: "Puis-je annuler une réservation ?",
    answer:
      "Oui, vous pouvez annuler gratuitement jusqu'à 24h avant le départ. Les annulations tardives peuvent entraîner des frais selon notre politique d'annulation.",
  },
  {
    question: "Comment devenir conducteur ?",
    answer:
      "Il suffit de vous inscrire, de vérifier votre identité et vos documents (permis, assurance, carte grise), puis de publier votre premier trajet. C'est simple et rapide !",
  },
];

function FAQAccordion({ faq, index }: { faq: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-slate-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group"
      >
        <span className="font-display font-bold text-lg text-forest-deep group-hover:text-green-living transition-colors pr-8">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-mint-bright/20 flex items-center justify-center text-forest-deep group-hover:text-mint-bright transition-colors"
        >
          <Plus className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed pr-12">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="relative py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-mint-bright/10 text-green-living font-semibold text-sm mb-6"
          >
            Questions fréquentes
          </motion.div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-forest-deep mb-6">
            Vous avez des questions ?
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed">
            Nous avons les réponses
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="bg-white rounded-3xl border-2 border-slate-100 shadow-xl p-8 md:p-12">
          {faqs.map((faq, index) => (
            <FAQAccordion key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-4">Vous ne trouvez pas votre réponse ?</p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-forest-deep/5 text-forest-deep font-semibold hover:bg-mint-bright/10 hover:text-green-living transition-all"
          >
            Contactez-nous
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
