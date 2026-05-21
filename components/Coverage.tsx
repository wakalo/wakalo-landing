"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import Link from "next/link";

const BETA_FORM_URL =
  "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__tkL-LRUNTZaVjA2QjVLMjVLTEFPREhRMUtOQTY1Ni4u";

const mainCities = [
  { name: "Cotonou", subtitle: "Capitale économique", color: "from-mint-bright to-green-living" },
  { name: "Porto-Novo", subtitle: "Capitale administrative", color: "from-amber-gold to-mint-bright" },
  { name: "Parakou", subtitle: "Ville du nord", color: "from-coral-red to-amber-gold" },
];

const otherCities = [
  "Abomey-Calavi", "Djougou", "Bohicon", "Natitingou",
  "Lokossa", "Ouidah", "Kandi", "Savalou", "Malanville",
];

export default function Coverage() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-forest-deep via-forest-mid to-green-living overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(52,211,153,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(52,211,153,0.15) 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
        }}
      />

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
            className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-mint-bright font-semibold text-sm mb-6"
          >
            Couverture nationale
          </motion.div>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Présent dans tout le{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-bright to-amber-gold">
              Bénin
            </span>
          </h2>
          <p className="text-slate-200 text-xl max-w-2xl mx-auto">
            12 villes connectées pour une mobilité accessible à tous
          </p>
        </motion.div>

        {/* 3 villes principales */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {mainCities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 hover:bg-white/15 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${city.color} flex items-center justify-center shadow-lg`}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <span className="text-mint-bright text-sm font-bold bg-mint-bright/10 px-3 py-1 rounded-full">
                  Disponible
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-1">{city.name}</h3>
              <p className="text-slate-400 text-sm">{city.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* 9 autres villes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 mb-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mint-bright to-green-living flex items-center justify-center">
              <Navigation className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">9 autres villes couvertes</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {otherCities.map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 rounded-xl p-3 hover:border-mint-bright/30 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-mint-bright rounded-full flex-shrink-0" />
                  <span className="text-sm font-semibold text-white truncate">{city}</span>
                </div>
                <p className="text-xs text-slate-500 pl-4">Disponible</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10"
        >
          <h3 className="font-display font-bold text-3xl text-white mb-3">
            Votre ville arrive bientôt !
          </h3>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Nous élargissons constamment notre réseau. Soyez les premiers informés du lancement dans votre ville.
          </p>
          <motion.a
            href={BETA_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(52, 211, 153, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-mint-bright text-forest-deep font-bold text-lg rounded-2xl shadow-xl shadow-mint-bright/30 transition-all"
          >
            M&apos;informer de l&apos;arrivée de Wakalo
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
