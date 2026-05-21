"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Users, DollarSign, Shield, Leaf } from "lucide-react";
import Link from "next/link";

const objectives = [
  { value: "10K+", label: "Utilisateurs", sub: "Objectif 2025" },
  { value: "50K+", label: "Trajets partagés", sub: "Objectif 2025–26" },
  { value: "70%", label: "Économies ciblées", sub: "Pour nos utilisateurs" },
  { value: "12", label: "Villes couvertes", sub: "À travers le Bénin" },
];

const problems = [
  {
    icon: DollarSign,
    title: "Coûts élevés",
    desc: "Réduisez vos frais de transport jusqu'à 70% en partageant vos trajets",
    color: "from-mint-bright to-green-living",
  },
  {
    icon: Shield,
    title: "Manque de sécurité",
    desc: "Vérification d'identité obligatoire pour tous les utilisateurs",
    color: "from-amber-gold to-coral-red",
  },
  {
    icon: Leaf,
    title: "Impact environnemental",
    desc: "Moins de voitures sur les routes = moins de pollution et de congestion",
    color: "from-green-living to-forest-mid",
  },
];

export default function Impact() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 20%, rgba(52, 211, 153, 0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.08) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-deep/10 text-forest-deep font-semibold text-sm mb-6"
          >
            <Award className="w-4 h-4" />
            Notre impact
          </motion.div>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-forest-deep mb-4">
            Notre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-bright to-amber-gold">
              Vision
            </span>
          </h2>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto">
            Transformer la mobilité au Bénin en créant une communauté de voyageurs solidaires
          </p>
        </motion.div>

        {/* Pourquoi Wakalo + Engagement */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-slate-50 rounded-3xl p-8 border-l-4 border-mint-bright hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-forest-deep to-green-living flex items-center justify-center shadow-lg">
                <TrendingUp className="w-7 h-7 text-mint-bright" />
              </div>
              <h3 className="font-display font-bold text-2xl text-forest-deep">Pourquoi Wakalo ?</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Nous avons constaté que les déplacements au Bénin sont souvent coûteux et peu optimisés.
              Des milliers de voitures circulent quotidiennement avec des sièges vides, pendant que d&apos;autres
              cherchent désespérément un moyen de transport abordable.
            </p>
            <p className="text-slate-600 leading-relaxed">
              <strong className="text-green-living">Notre mission :</strong> Connecter ces deux mondes pour
              créer une mobilité plus accessible, économique et écologique.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-slate-50 rounded-3xl p-8 border-l-4 border-amber-gold hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-gold to-coral-red flex items-center justify-center shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl text-forest-deep">Notre engagement</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Nous développons Wakalo depuis 2024 avec une obsession : la sécurité et la confiance.
              Chaque fonctionnalité est pensée pour garantir des trajets sûrs et agréables.
            </p>
            <p className="text-slate-600 leading-relaxed">
              <strong className="text-amber-gold">Notre promesse :</strong> Une application 100% adaptée au
              contexte béninois, avec vérification d&apos;identité, paiement sécurisé et support client réactif.
            </p>
          </motion.div>
        </div>

        {/* Problèmes résolus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-forest-deep to-green-living rounded-3xl p-10 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-3xl text-white mb-3">
              Les problèmes que nous résolvons
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Wakalo apporte des solutions concrètes aux défis quotidiens de mobilité
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((p, index) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <p.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-white text-xl mb-2">{p.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Objectifs 2025-2026 */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h3 className="font-display font-bold text-3xl text-forest-deep mb-2">
              Nos Objectifs 2025–2026
            </h3>
            <p className="text-slate-600">Construisons ensemble l&apos;avenir de la mobilité au Bénin</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {objectives.map((obj, index) => (
              <motion.div
                key={obj.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 hover:border-mint-bright/30 transition-all"
              >
                <div className="font-display font-black text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-forest-deep to-green-living mb-2">
                  {obj.value}
                </div>
                <p className="font-semibold text-forest-deep text-sm">{obj.label}</p>
                <p className="text-xs text-slate-500 mt-1">{obj.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
