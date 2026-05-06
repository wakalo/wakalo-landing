"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-forest-deep via-forest-mid to-green-living"
    >
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          {/* Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-mint-bright/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -80, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] bg-amber-gold/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 50, 0],
              y: [0, -80, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute top-1/2 right-1/3 w-80 h-80 bg-coral-red/20 rounded-full blur-3xl"
          />
        </motion.div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(52, 211, 153, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(52, 211, 153, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "4rem 4rem",
          }}
        />
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 text-center"
      >
        {/* Beta Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-mint-bright mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Programme Bêta • Avril 2025</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1] tracking-tight"
        >
          Voyagez
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-bright via-mint-soft to-amber-gold">
            Ensemble
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-slate-100 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          Rejoignez la révolution du covoiturage au Bénin.
          <br />
          <span className="text-mint-bright font-medium">
            Partagez vos trajets, économisez, connectez.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(52, 211, 153, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-mint-bright text-forest-deep font-bold text-lg rounded-2xl shadow-xl shadow-mint-bright/30 overflow-hidden transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              Rejoindre la Bêta
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-mint-soft to-mint-bright"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold text-lg rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all"
          >
            En savoir plus
          </motion.button>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { label: "Trajets", value: "500+", color: "mint-bright" },
            { label: "Membres", value: "2K+", color: "amber-gold" },
            { label: "Villes", value: "12", color: "coral-red" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div
                className={`font-mono font-bold text-3xl sm:text-4xl mb-1 text-${stat.color}`}
              >
                {stat.value}
              </div>
              <div className="text-slate-300 text-sm font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-mint-bright rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
