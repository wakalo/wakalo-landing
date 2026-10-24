"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { useState, FormEvent } from "react";

export default function BetaSignup() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !phone) {
      setStatus("error");
      setErrorMessage("Veuillez remplir tous les champs");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setPhone("");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="beta" className="scroll-mt-16 relative py-32 bg-gradient-to-br from-white via-cream-soft/30 to-mint-bright/10 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-mint-bright/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-amber-gold/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-deep/10 text-forest-deep font-semibold text-sm mb-6"
          >
            <span className="w-2 h-2 bg-mint-bright rounded-full animate-pulse" />
            Lancement • Avril 2025
          </motion.div>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-forest-deep mb-6">
            Rejoignez le programme bêta
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Soyez parmi les premiers à tester Wakalo et profitez d'avantages exclusifs
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl border-2 border-slate-100 overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Left Side - Benefits */}
            <div className="p-10 md:p-12 bg-gradient-to-br from-forest-deep to-green-living text-white">
              <h3 className="font-display font-bold text-2xl mb-6">
                Avantages exclusifs
              </h3>
              <ul className="space-y-4">
                {[
                  "Accès anticipé à l'application",
                  "0% de commission pendant 3 mois",
                  "Support prioritaire 24/7",
                  "Badge \"Membre Fondateur\"",
                  "Influence sur les nouvelles fonctionnalités",
                ].map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-mint-bright flex-shrink-0 mt-0.5" />
                    <span className="text-slate-100 leading-relaxed">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-10 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <div className="text-mint-bright font-mono font-bold text-3xl mb-2">
                  500
                </div>
                <div className="text-slate-200 text-sm">
                  Places limitées restantes
                </div>
              </motion.div>
            </div>

            {/* Right Side - Form */}
            <div className="p-10 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-forest-deep mb-2">
                    Adresse email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 focus:border-mint-bright focus:outline-none transition-colors text-forest-deep placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-forest-deep mb-2">
                    Numéro de téléphone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+229 XX XX XX XX"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 focus:border-mint-bright focus:outline-none transition-colors text-forest-deep placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                {/* Error Message */}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-coral-red/10 border border-coral-red/20 text-coral-red"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">{errorMessage}</span>
                  </motion.div>
                )}

                {/* Success Message */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-mint-bright/10 border border-mint-bright/20 text-green-living"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">
                      Inscription réussie ! Nous vous contacterons bientôt.
                    </span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  whileHover={status === "idle" ? { scale: 1.02 } : {}}
                  whileTap={status === "idle" ? { scale: 0.98 } : {}}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-mint-bright to-green-living text-white font-bold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group"
                >
                  {status === "loading" ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                    />
                  ) : status === "success" ? (
                    "Inscrit !"
                  ) : (
                    <>
                      Rejoindre la bêta
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-slate-500 text-center">
                  En vous inscrivant, vous acceptez nos{" "}
                  <a href="#" className="text-forest-deep hover:text-mint-bright transition-colors">
                    conditions d'utilisation
                  </a>{" "}
                  et notre{" "}
                  <a href="#" className="text-forest-deep hover:text-mint-bright transition-colors">
                    politique de confidentialité
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
