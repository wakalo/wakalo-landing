"use client";

import { motion } from "framer-motion";
import { Search, Calendar, MessageCircle, CheckCircle, Car, Users } from "lucide-react";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const passengerSteps: Step[] = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Recherchez votre trajet",
    description: "Indiquez votre destination et la date de voyage",
    color: "mint-bright",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Choisissez votre conducteur",
    description: "Consultez les profils et les avis vérifiés",
    color: "green-living",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Réservez en un clic",
    description: "Confirmez votre place et discutez avec le conducteur",
    color: "amber-gold",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Voyagez sereinement",
    description: "Profitez du trajet en toute sécurité",
    color: "coral-red",
  },
];

const driverSteps: Step[] = [
  {
    icon: <Car className="w-6 h-6" />,
    title: "Publiez votre trajet",
    description: "Renseignez votre itinéraire et le prix par place",
    color: "mint-bright",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Gérez vos réservations",
    description: "Acceptez les passagers qui vous conviennent",
    color: "green-living",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Partagez le trajet",
    description: "Conduisez et faites de nouvelles rencontres",
    color: "amber-gold",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Gagnez de l'argent",
    description: "Recevez votre paiement directement",
    color: "coral-red",
  },
];

function StepCard({ step, index }: { step: Step; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Connecting Line (not for last item) */}
      {index < passengerSteps.length - 1 && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          className="hidden md:block absolute top-20 left-8 w-0.5 h-full bg-gradient-to-b from-mint-bright/50 to-transparent origin-top"
        />
      )}

      <div className="flex gap-4 group">
        {/* Icon Circle */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-${step.color} to-forest-mid flex items-center justify-center shadow-lg shadow-${step.color}/30 group-hover:shadow-${step.color}/50 transition-all relative z-10`}
        >
          <div className="text-white">{step.icon}</div>
        </motion.div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-display font-bold text-xl text-forest-deep mb-2">
            {step.title}
          </h3>
          <p className="text-slate-600 leading-relaxed">{step.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-0 w-96 h-96 bg-mint-bright rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-amber-gold rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-mint-bright/10 text-green-living font-semibold text-sm mb-6"
          >
            Simple et rapide
          </motion.div>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-forest-deep mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Que vous soyez passager ou conducteur, rejoindre Wakalo est simple et rapide
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Passenger Journey */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-mint-bright to-green-living text-white font-bold text-lg shadow-lg">
                <Users className="w-6 h-6" />
                Pour les passagers
              </div>
            </motion.div>

            <div className="space-y-12">
              {passengerSteps.map((step, index) => (
                <StepCard key={index} step={step} index={index} />
              ))}
            </div>
          </div>

          {/* Driver Journey */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-gold to-coral-red text-white font-bold text-lg shadow-lg">
                <Car className="w-6 h-6" />
                Pour les conducteurs
              </div>
            </motion.div>

            <div className="space-y-12">
              {driverSteps.map((step, index) => (
                <StepCard key={index} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(52, 211, 153, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-forest-deep to-green-living text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            Commencer maintenant
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
