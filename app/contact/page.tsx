"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPinned, Send, CheckCircle, Clock } from "lucide-react";

interface ContactFormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  objet: string;
  message: string;
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    lines: ["contact@wakalo.online", "support@wakalo.online"],
    href: "mailto:contact@wakalo.online",
  },
  {
    icon: Phone,
    title: "Téléphone",
    lines: ["+229 XX XX XX XX"],
    href: "tel:+22900000000",
  },
  {
    icon: MapPinned,
    title: "Adresse",
    lines: ["Cotonou, Bénin"],
    href: null,
  },
];

const hours = [
  { day: "Lundi – Vendredi", time: "8h00 – 18h00" },
  { day: "Samedi", time: "9h00 – 14h00" },
  { day: "Dimanche", time: "Fermé" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    objet: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xpwzggqv", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          telephone: formData.telephone,
          objet: formData.objet,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ nom: "", prenom: "", email: "", telephone: "", objet: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-forest-deep placeholder-slate-400 focus:outline-none focus:border-mint-bright focus:ring-2 focus:ring-mint-bright/20 transition-all";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-forest-deep via-forest-mid to-green-living overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
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
            On est à votre écoute
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-tight"
          >
            Contactez{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-bright to-amber-gold">
              -nous
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-200 max-w-2xl mx-auto"
          >
            Une question ? Notre équipe est là pour vous répondre.
          </motion.p>
        </div>
      </section>

      {/* Formulaire + Infos */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl text-forest-deep mb-8">
              Envoyez-nous un message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-forest-deep mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="prenom" className="block text-sm font-semibold text-forest-deep mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Votre prénom"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-forest-deep mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-semibold text-forest-deep mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="+229 XX XX XX XX"
                />
              </div>

              <div>
                <label htmlFor="objet" className="block text-sm font-semibold text-forest-deep mb-2">
                  Objet
                </label>
                <input
                  type="text"
                  id="objet"
                  name="objet"
                  value={formData.objet}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Objet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-forest-deep mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={inputClass + " resize-none"}
                  placeholder="Votre message..."
                />
              </div>

              <AnimatePresence mode="wait">
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-mint-bright/10 text-green-living border border-mint-bright/30"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Message envoyé ! Nous vous répondrons dans les plus brefs délais.</span>
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-coral-red/10 text-coral-red border border-coral-red/30"
                  >
                    <span>Une erreur est survenue. Réessayez ou écrivez à contact@wakalo.online.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={submitStatus === "sending"}
                whileHover={{ scale: submitStatus === "sending" ? 1 : 1.02, boxShadow: submitStatus === "sending" ? "none" : "0 0 30px rgba(52, 211, 153, 0.4)" }}
                whileTap={{ scale: submitStatus === "sending" ? 1 : 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-forest-deep to-green-living text-white font-bold rounded-2xl shadow-xl shadow-forest-deep/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {submitStatus === "sending" ? "Envoi en cours…" : "Envoyer le message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Infos contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-xl h-56">
              <div className="absolute inset-0 bg-gradient-to-br from-forest-deep to-green-living opacity-80" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
                <h3 className="font-display font-bold text-2xl mb-2">Nous sommes à votre écoute</h3>
                <p className="text-mint-bright">Disponible 6j/7 pour répondre à vos questions</p>
              </div>
            </div>

            {/* Coordonnées */}
            <div>
              <h3 className="font-display font-bold text-2xl text-forest-deep mb-6">Nos coordonnées</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Wrapper = info.href ? motion.a : motion.div;
                  return (
                    <Wrapper
                      key={info.title}
                      {...(info.href ? { href: info.href } : {})}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-mint-bright/10 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-forest-deep to-green-living flex items-center justify-center flex-shrink-0 shadow-md">
                        <info.icon className="w-5 h-5 text-mint-bright" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-deep mb-1">{info.title}</h4>
                        {info.lines.map((line) => (
                          <p key={line} className="text-slate-600 text-sm">{line}</p>
                        ))}
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-green-living" />
                <h4 className="font-display font-bold text-forest-deep">Horaires d&apos;ouverture</h4>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-slate-600">{h.day}</span>
                    <span className="font-semibold text-forest-deep">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Carte */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126085.86812898815!2d2.3644238!3d6.3702928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a9a3ccccc1c3%3A0xd1e4e3d0d5e76efe!2sCotonou%2C%20Benin!5e0!3m2!1sfr!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Wakalo - Cotonou, Bénin"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
