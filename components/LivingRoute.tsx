"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, TrendingUp } from "lucide-react";
import { useRef } from "react";

interface Route {
  from: string;
  to: string;
  price: string;
  duration: string;
  popularity: number;
}

const popularRoutes: Route[] = [
  {
    from: "Cotonou",
    to: "Parakou",
    price: "6,200 XOF",
    duration: "2h 30min",
    popularity: 95,
  },
  {
    from: "Porto-Novo",
    to: "Cotonou",
    price: "1,500 XOF",
    duration: "45min",
    popularity: 88,
  },
  {
    from: "Cotonou",
    to: "Abomey",
    price: "3,500 XOF",
    duration: "1h 45min",
    popularity: 72,
  },
  {
    from: "Parakou",
    to: "Djougou",
    price: "4,800 XOF",
    duration: "2h 00min",
    popularity: 65,
  },
];

function RouteCard({ route, index }: { route: Route; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, x: 10 }}
      className="relative p-6 rounded-2xl bg-white border-2 border-slate-100 hover:border-mint-bright/50 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
    >
      {/* Route Arrow */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2 flex-1">
          <MapPin className="w-5 h-5 text-green-living" />
          <span className="font-bold text-forest-deep text-lg">{route.from}</span>
        </div>
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex-shrink-0"
        >
          <svg
            width="40"
            height="20"
            viewBox="0 0 40 20"
            fill="none"
            className="text-mint-bright"
          >
            <path
              d="M2 10 L 30 10 M 25 5 L 30 10 L 25 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
        <div className="flex items-center gap-2 flex-1 justify-end">
          <span className="font-bold text-forest-deep text-lg">{route.to}</span>
          <MapPin className="w-5 h-5 text-coral-red" />
        </div>
      </div>

      {/* Route Details */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-sm text-slate-500 mb-1">Prix</div>
          <div className="font-mono font-bold text-forest-deep">{route.price}</div>
        </div>
        <div>
          <div className="text-sm text-slate-500 mb-1">Durée</div>
          <div className="font-mono font-bold text-forest-deep">{route.duration}</div>
        </div>
      </div>

      {/* Popularity Bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
          <span>Popularité</span>
          <span className="flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            {route.popularity}%
          </span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${route.popularity}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
            className="h-full bg-gradient-to-r from-mint-bright to-green-living rounded-full"
          />
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-mint-bright/0 to-mint-bright/0 group-hover:from-mint-bright/5 group-hover:to-green-living/5 transition-all pointer-events-none" />
    </motion.div>
  );
}

export default function LivingRoute() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-gradient-to-br from-forest-deep via-forest-mid to-green-living overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 30%, rgba(52, 211, 153, 0.1) 30%, rgba(52, 211, 153, 0.1) 70%, transparent 70%),
              linear-gradient(-45deg, transparent 30%, rgba(52, 211, 153, 0.1) 30%, rgba(52, 211, 153, 0.1) 70%, transparent 70%)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Flowing SVG Path */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0,400 Q 300,200 600,400 T 1200,400"
          stroke="url(#routeGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <defs>
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34D399" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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
            className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-mint-bright font-semibold text-sm mb-6"
          >
            Routes populaires
          </motion.div>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Voyagez partout au Bénin
          </h2>
          <p className="text-slate-200 text-xl max-w-3xl mx-auto leading-relaxed">
            Découvrez les trajets les plus demandés et rejoignez des milliers de voyageurs
          </p>
        </motion.div>

        {/* Routes Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {popularRoutes.map((route, index) => (
            <RouteCard key={index} route={route} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-slate-200 text-lg mb-6">
            Plus de 50 trajets disponibles chaque jour
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(52, 211, 153, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-white text-forest-deep font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            Voir tous les trajets
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
