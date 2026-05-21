"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Shield, Users, MapPin, Star } from "lucide-react";
import { useEffect, useRef } from "react";

interface StatProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return <span ref={ref} />;
}

function Stat({ value, label, icon, suffix, prefix }: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center gap-3 group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-mint-bright to-green-living flex items-center justify-center shadow-lg shadow-mint-bright/30 group-hover:shadow-mint-bright/50 transition-shadow"
      >
        <div className="text-white">{icon}</div>
      </motion.div>
      <div className="text-center">
        <div className="font-mono font-bold text-3xl md:text-4xl text-forest-deep">
          <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
        </div>
        <div className="text-slate-600 font-medium text-sm mt-1">{label}</div>
      </div>
    </motion.div>
  );
}

export default function TrustBar() {
  const stats: StatProps[] = [
    {
      value: 10000,
      label: "Membres — Objectif 2025",
      icon: <Users className="w-8 h-8" />,
      suffix: "+",
    },
    {
      value: 12,
      label: "Villes Couvertes",
      icon: <MapPin className="w-8 h-8" />,
    },
    {
      value: 70,
      label: "Économies ciblées",
      icon: <Star className="w-8 h-8" />,
      suffix: "%",
    },
    {
      value: 100,
      label: "Vérification d'identité",
      icon: <Shield className="w-8 h-8" />,
      suffix: "%",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      {/* Decorative Element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mint-bright to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-forest-deep mb-4">
            Rejoignez le mouvement dès le lancement
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Wakalo arrive bientôt au Bénin. Inscrivez-vous en bêta et soyez parmi les premiers à profiter d&apos;une mobilité plus accessible.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Stat {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
