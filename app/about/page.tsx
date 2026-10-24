"use client";

import { motion } from "framer-motion";
import { Target, Users, Heart, Globe, Lightbulb, Award, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BETA_FORM_URL } from "@/lib/links";
import { team } from "@/lib/team";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const teamMembers = team;

const values = [
  {
    icon: Heart,
    title: "Communauté",
    desc: "Nous créons du lien social et favorisons les rencontres entre les Béninois. Chaque trajet est une opportunité de partage et d'échange.",
  },
  {
    icon: Globe,
    title: "Durabilité",
    desc: "En optimisant l'utilisation des véhicules, nous réduisons l'empreinte carbone et contribuons à un avenir plus écologique pour le Bénin.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Nous développons constamment de nouvelles fonctionnalités pour améliorer l'expérience de covoiturage et répondre aux besoins de nos utilisateurs.",
  },
];

const stats = [
  { value: "10K+", label: "Utilisateurs", sub: "Objectif 2025" },
  { value: "50K+", label: "Trajets", sub: "Objectif 2025-26" },
  { value: "4", label: "Membres fondateurs", sub: "En croissance" },
  { value: "12", label: "Villes ciblées", sub: "À travers le Bénin" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-forest-deep via-forest-mid to-green-living overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(52,211,153,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(52,211,153,0.1) 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-mint-bright text-sm font-semibold mb-8"
          >
            Notre histoire
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-tight"
          >
            À propos de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-bright to-amber-gold">
              Wakalo
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed"
          >
            Nous révolutionnons le transport au Bénin en connectant les conducteurs et les passagers
            pour des trajets plus économiques, écologiques et conviviaux.
          </motion.p>
        </div>
      </section>

      {/* Histoire + Stats */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-mint-bright/10 text-green-living font-semibold text-sm mb-6">
              Notre Histoire
            </span>
            <h2 className="font-display font-black text-4xl text-forest-deep mb-6">
              Née d&apos;un constat simple
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              En cours de développement depuis 2024, Wakalo est née d&apos;un constat simple : les déplacements
              au Bénin sont souvent coûteux et peu optimisés. Nous avons imaginé une solution qui
              permettrait à chacun de voyager mieux, pour moins cher, tout en créant du lien social.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong className="text-green-living">Lancement prévu en avril 2025.</strong> Nous finalisons
              actuellement notre application mobile et préparons le lancement de notre service. Notre
              objectif : connecter plus de 10 000 utilisateurs et faciliter plus de 50 000 trajets dans
              les deux premières années.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Notre équipe, basée à Cotonou, travaille chaque jour pour finaliser l&apos;application et créer
              une expérience utilisateur exceptionnelle.{" "}
              <strong>Rejoignez notre programme bêta pour tester l&apos;application en avant-première !</strong>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-forest-deep to-green-living rounded-3xl p-10 text-white shadow-2xl"
          >
            <div className="text-center mb-8">
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full font-bold text-sm">
                Nos Objectifs 2025–2026
              </span>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center"
                >
                  <div className="font-display font-black text-4xl text-mint-bright mb-1">{stat.value}</div>
                  <div className="text-slate-200 font-medium text-sm">{stat.label}</div>
                  <div className="text-slate-400 text-xs mt-1">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-mint-bright/10 text-green-living font-semibold text-sm mb-6">
              L&apos;équipe
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-forest-deep mb-4">
              Notre équipe de direction
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto">
              Une équipe passionnée et expérimentée qui travaille chaque jour pour révolutionner la
              mobilité au Bénin
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className={`aspect-square bg-gradient-to-br ${member.color} overflow-hidden`}>
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} Wakalo`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-forest-deep mb-1">{member.name}</h3>
                  <p className="text-green-living font-semibold text-sm mb-1">{member.role}</p>
                  <p className="text-slate-500 text-sm mb-4">{member.title}</p>
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-100 rounded-lg hover:bg-mint-bright/20 hover:text-green-living transition-colors text-slate-500"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={member.email}
                      className="p-2 bg-slate-100 rounded-lg hover:bg-mint-bright/20 hover:text-green-living transition-colors text-slate-500"
                      aria-label={`Email de ${member.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-mint-bright/10 text-green-living font-semibold text-sm mb-6">
              Ce qui nous guide
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-forest-deep mb-4">
              Nos Valeurs
            </h2>
            <p className="text-slate-600 text-xl">Les principes qui guident notre action au quotidien</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, index) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-slate-50 rounded-3xl p-8 border-2 border-transparent hover:border-mint-bright/30 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-forest-deep to-green-living flex items-center justify-center mb-6 shadow-lg shadow-forest-deep/20">
                  <val.icon className="w-8 h-8 text-mint-bright" />
                </div>
                <h3 className="font-display font-bold text-2xl text-forest-deep mb-4">{val.title}</h3>
                <p className="text-slate-600 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-black text-4xl md:text-5xl text-forest-deep">
              Notre Mission
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border-l-4 border-mint-bright shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-forest-deep to-green-living flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-mint-bright" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-forest-deep mb-3">Notre Mission</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Rendre le transport accessible et abordable pour tous les Béninois en facilitant le
                    partage de trajets. Nous voulons que chacun puisse se déplacer facilement, en toute
                    sécurité, tout en faisant des économies.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border-l-4 border-amber-gold shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-gold to-coral-red flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-forest-deep mb-3">Notre Vision</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Devenir la plateforme de référence pour la mobilité partagée en Afrique de l&apos;Ouest.
                    Nous aspirons à créer un réseau où le covoiturage devient la norme, réduisant ainsi la
                    congestion urbaine et l&apos;impact environnemental.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Bêta */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-forest-deep via-forest-mid to-green-living">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-6">
              <span className="font-semibold text-white text-sm">Lancement : Avril 2025</span>
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-6">
              Soyez les premiers à bord !
            </h2>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Rejoignez notre programme bêta et profitez d&apos;un accès anticipé exclusif à Wakalo.
              Ensemble, nous transformons la façon de se déplacer au Bénin.
            </p>
            <motion.a
              href={BETA_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(52, 211, 153, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-mint-bright text-forest-deep font-bold text-lg rounded-2xl shadow-xl shadow-mint-bright/30 transition-all"
            >
              <Users className="w-5 h-5" />
              Rejoindre le programme bêta
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
