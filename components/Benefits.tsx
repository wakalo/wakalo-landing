"use client";

import { motion } from "framer-motion";
import { Wallet, Leaf, Shield, Heart, TrendingDown, Clock } from "lucide-react";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const benefits: Benefit[] = [
  {
    icon: <Wallet className="w-8 h-8" />,
    title: "Économisez jusqu'à 70%",
    description:
      "Partagez les frais de carburant et de péage. Voyagez pour moins cher qu'en bus ou taxi.",
    gradient: "from-mint-bright to-green-living",
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Éco-responsable",
    description: "Réduisez votre empreinte carbone en partageant vos trajets.",
    gradient: "from-green-living to-forest-mid",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "100% Sécurisé",
    description: "Vérification d'identité, assurance et support 24/7.",
    gradient: "from-amber-gold to-coral-red",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Communauté de confiance",
    description:
      "Rencontrez de nouvelles personnes, partagez des moments et construisez des amitiés sur la route.",
    gradient: "from-coral-red to-amber-gold",
  },
  {
    icon: <TrendingDown className="w-8 h-8" />,
    title: "Frais réduits",
    description: "Seulement 10% de commission sur chaque trajet.",
    gradient: "from-mint-bright to-mint-soft",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Flexibilité totale",
    description: "Voyagez quand vous voulez, où vous voulez.",
    gradient: "from-forest-mid to-green-living",
  },
];

function BenefitCard({ benefit, index }: { benefit: Benefit; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`relative rounded-2xl bg-gradient-to-br ${benefit.gradient} p-1 overflow-hidden group cursor-pointer`}
    >
      {/* Inner Content */}
      <div className="h-full w-full bg-white rounded-[calc(1rem-4px)] p-6 md:p-7 flex flex-col min-h-[220px]">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white shadow-lg mb-4 flex-shrink-0`}
        >
          {benefit.icon}
        </motion.div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-display font-bold text-xl md:text-2xl text-forest-deep mb-3 line-clamp-2">
            {benefit.title}
          </h3>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed line-clamp-3">
            {benefit.description}
          </p>
        </div>

        {/* Hover Gradient Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.05 }}
          className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-[calc(1rem-4px)] pointer-events-none`}
        />
      </div>
    </motion.div>
  );
}

export default function Benefits() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(52, 211, 153, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)
            `,
          }}
        />
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
            className="inline-block px-4 py-2 rounded-full bg-forest-deep/10 text-forest-deep font-semibold text-sm mb-6"
          >
            Pourquoi choisir Wakalo ?
          </motion.div>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-forest-deep mb-6">
            Bien plus qu'un trajet
          </h2>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Découvrez tous les avantages de voyager avec Wakalo
          </p>
        </motion.div>

        {/* Benefits Grid - Better Balanced Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { value: "6,200 XOF", label: "Prix moyen par trajet" },
            { value: "2.5 heures", label: "Temps moyen Parakou-Cotonou" },
            { value: "45%", label: "Réduction CO₂ moyenne" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-white border-2 border-slate-100 hover:border-mint-bright/30 transition-colors"
            >
              <div className="font-mono font-bold text-3xl text-forest-deep mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
