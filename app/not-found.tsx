"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-forest-deep via-forest-mid to-green-living flex items-center justify-center px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(52,211,153,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(52,211,153,0.15) 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="relative z-10 text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="font-display font-black text-[10rem] leading-none text-transparent bg-clip-text bg-gradient-to-r from-mint-bright to-amber-gold mb-4 select-none"
        >
          404
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-3xl text-white mb-4"
        >
          Page introuvable
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-300 text-lg mb-10"
        >
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <motion.span
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(52, 211, 153, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-mint-bright text-forest-deep font-bold text-lg rounded-2xl shadow-xl shadow-mint-bright/30 transition-all cursor-pointer"
            >
              <Home className="w-5 h-5" />
              Retour à l&apos;accueil
            </motion.span>
          </Link>
          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-bold text-lg rounded-2xl hover:bg-white/20 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
              Nous contacter
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
