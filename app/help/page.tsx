"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  HelpCircle,
  MessageCircle,
  Book,
  Shield,
  CreditCard,
  UserCheck,
  AlertCircle,
  CheckCircle,
  Bell,
  MapPin,
  Phone,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

const CONTACT_EMAIL = "mailto:contact@wakalo.online";

const categories = [
  {
    id: "drivers",
    title: "Obligations des conducteurs",
    icon: UserCheck,
    items: [
      "Vérification d'identité complète (KYC) avant activation du compte",
      "Permis de conduire valide et carte grise obligatoires",
      "Respect strict du Code de la route et des limitations de vitesse",
      "Interdiction de conduire sous influence d'alcool ou de drogues",
      "Véhicule en bon état avec assurance à jour",
      "Respect et courtoisie envers tous les passagers",
      "Transparence sur les frais et trajets proposés",
    ],
  },
  {
    id: "passengers",
    title: "Règles pour les passagers",
    icon: Shield,
    items: [
      "Vérification d'identité (KYC) requise avant toute réservation",
      "Respect du conducteur et des autres passagers",
      "Interdiction de fumer, consommer de l'alcool ou drogues dans le véhicule",
      "Ponctualité au point de rendez-vous",
      "Paiement du montant convenu sans négociation abusive",
      "Respect de la propreté du véhicule",
      "Utilisation responsable du système de notation",
    ],
  },
];

const faqs = [
  {
    id: "general",
    category: "Général",
    icon: HelpCircle,
    questions: [
      {
        q: "Comment fonctionne Wakalo ?",
        a: "Wakalo connecte les conducteurs ayant des places disponibles dans leur véhicule avec des passagers se rendant dans la même direction.",
      },
      {
        q: "Est-ce gratuit de s'inscrire ?",
        a: "Oui, l'inscription est 100% gratuite pour tous les utilisateurs.",
      },
      {
        q: "Dans quelles villes Wakalo est-il disponible ?",
        a: "Wakalo est actuellement disponible au Bénin et continue d'étendre sa couverture. Nous sommes présents dans 12 villes dont Cotonou, Porto-Novo et Parakou.",
      },
    ],
  },
  {
    id: "verification-drivers",
    category: "Vérification des conducteurs",
    icon: UserCheck,
    questions: [
      {
        q: "Comment sont vérifiés les conducteurs ?",
        a: "Tous les conducteurs passent une vérification d'identité complète (KYC) incluant carte d'identité, permis de conduire valide, carte grise du véhicule et photo récente.",
      },
      {
        q: "Les conducteurs sont-ils formés à la sécurité ?",
        a: "Oui, tous les conducteurs doivent suivre une formation sur les règles de sécurité et de conduite avant d'être autorisés sur la plateforme.",
      },
      {
        q: "Comment signaler un conducteur non conforme ?",
        a: "Vous pouvez signaler tout comportement suspect via le bouton de signalement dans l'application. Wakalo enquêtera immédiatement.",
      },
    ],
  },
  {
    id: "verification-passengers",
    category: "Vérification des passagers",
    icon: Shield,
    questions: [
      {
        q: "Les passagers sont-ils vérifiés ?",
        a: "Oui, tous les passagers doivent compléter la vérification KYC avec une pièce d'identité valide et une photo avant de pouvoir réserver un trajet.",
      },
      {
        q: "Que se passe-t-il si un passager a un comportement inapproprié ?",
        a: "Les conducteurs peuvent signaler tout comportement inapproprié. Wakalo prendra des mesures disciplinaires incluant avertissement, suspension ou exclusion définitive.",
      },
    ],
  },
  {
    id: "safety",
    category: "Sécurité en trajet",
    icon: AlertCircle,
    questions: [
      {
        q: "Quelles sont les fonctionnalités de sécurité disponibles ?",
        a: "Wakalo offre un bouton SOS accessible 24/7, un système de suivi en temps réel, la vérification des profils, et un support d'urgence immédiat.",
      },
      {
        q: "Comment utiliser le bouton SOS ?",
        a: "En cas d'urgence, appuyez sur le bouton SOS dans l'application. Notre équipe sera alertée instantanément et vous contactera immédiatement.",
      },
      {
        q: "Mes trajets sont-ils suivis ?",
        a: "Oui, tous les trajets sont suivis en temps réel pour votre sécurité. Vous pouvez partager votre trajet avec vos proches.",
      },
    ],
  },
  {
    id: "payment",
    category: "Paiement",
    icon: CreditCard,
    questions: [
      {
        q: "Comment payer mon trajet ?",
        a: "Vous pouvez payer directement via l'application avec Mobile Money ou en espèces au conducteur.",
      },
      {
        q: "Puis-je annuler ma réservation ?",
        a: "Oui, vous pouvez annuler jusqu'à 2 heures avant le départ pour un remboursement complet.",
      },
      {
        q: "Les paiements sont-ils sécurisés ?",
        a: "Oui, tous les paiements sont cryptés et sécurisés. Wakalo ne stocke jamais vos informations bancaires complètes.",
      },
    ],
  },
];

const securityFeatures = [
  { icon: Bell, title: "Bouton SOS 24/7", desc: "Assistance d'urgence accessible à tout moment" },
  { icon: MapPin, title: "Suivi en temps réel", desc: "Tous les trajets sont géolocalisés et suivis" },
  { icon: UserCheck, title: "Vérification d'identité", desc: "KYC obligatoire pour conducteurs et passagers" },
  { icon: Phone, title: "Support immédiat", desc: "Équipe disponible pour toute urgence ou question" },
];

const quickCards = [
  { icon: Book, label: "Guide d'utilisation", desc: "Apprenez à utiliser Wakalo étape par étape" },
  { icon: MessageCircle, label: "Chat en direct", desc: "Discutez avec notre équipe support" },
  { icon: Shield, label: "Sécurité", desc: "Consultez nos conseils de sécurité" },
];

function AccordionItem({
  id,
  content,
  isOpen,
  toggle,
  index,
}: {
  id: string;
  content: string;
  isOpen: boolean;
  toggle: () => void;
  index: number;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={toggle}
        className="w-full px-6 py-4 flex justify-between items-start text-left hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-start gap-3 flex-1">
          <span className="font-bold text-mint-bright text-lg flex-shrink-0">{index + 1}.</span>
          <span className="text-base font-semibold text-forest-deep pr-4 leading-relaxed">{content}</span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
          <ChevronDown className="w-5 h-5 text-green-living" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 pt-2 flex items-center gap-2 text-green-living bg-mint-bright/10">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">Obligation essentielle pour tous les utilisateurs</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQItem({
  question,
  answer,
  isOpen,
  toggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={toggle}
        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
      >
        <span className="text-base font-semibold text-forest-deep pr-4">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
          <ChevronDown className="w-5 h-5 text-green-living" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: number | null }>({});

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return faqs;
    const q = searchQuery.toLowerCase();
    return faqs
      .map((section) => ({
        ...section,
        questions: section.questions.filter(
          (item) => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
        ),
      }))
      .filter((section) => section.questions.length > 0);
  }, [searchQuery]);

  const toggle = (sectionKey: string, index: number) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [sectionKey]: prev[sectionKey] === index ? null : index,
    }));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero + Recherche */}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <a href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-mint-bright text-sm font-medium transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              Retour à l&apos;accueil
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-mint-bright text-sm font-semibold mb-8"
          >
            Support Wakalo
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-tight"
          >
            Centre d&apos;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-bright to-amber-gold">
              aide
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-200 max-w-2xl mx-auto mb-10"
          >
            Trouvez rapidement les réponses à vos questions
          </motion.p>

          {/* Barre de recherche */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher dans la FAQ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:border-mint-bright focus:bg-white/15 transition-all text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Résultats de recherche */}
      {searchQuery.trim() && (
        <section className="py-16 px-6 sm:px-8 lg:px-12 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((section) =>
                  section.questions.map((item, qIndex) => (
                    <motion.div
                      key={`${section.id}-${qIndex}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: qIndex * 0.05 }}
                      className="bg-white border border-slate-200 rounded-2xl p-6"
                    >
                      <div className="flex items-start gap-3">
                        <section.icon className="w-5 h-5 text-green-living flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-xs font-semibold text-green-living mb-1">{section.category}</p>
                          <h3 className="font-semibold text-forest-deep mb-2">{item.q}</h3>
                          <p className="text-slate-600 text-sm">{item.a}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
                <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="font-display font-bold text-xl text-forest-deep mb-2">Aucun résultat trouvé</h3>
                <p className="text-slate-500">Essayez de reformuler votre recherche ou contactez notre support</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Contenu principal (affiché seulement si pas de recherche) */}
      {!searchQuery.trim() && (
        <>
          {/* Cards rapides */}
          <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-20">
                {quickCards.map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-slate-50 rounded-3xl p-8 text-center border-2 border-transparent hover:border-mint-bright/30 transition-all cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-forest-deep to-green-living flex items-center justify-center mx-auto mb-6 shadow-lg shadow-forest-deep/20">
                      <card.icon className="w-8 h-8 text-mint-bright" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-forest-deep mb-3">{card.label}</h3>
                    <p className="text-slate-600">{card.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Fonctionnalités de sécurité */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <h2 className="font-display font-black text-3xl text-forest-deep text-center mb-12">
                  Fonctionnalités de sécurité Wakalo
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {securityFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-slate-50 border-2 border-slate-100 rounded-2xl p-6 text-center hover:border-mint-bright/30 transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-forest-deep to-green-living flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-6 h-6 text-mint-bright" />
                      </div>
                      <h3 className="font-bold text-forest-deep mb-2">{feature.title}</h3>
                      <p className="text-sm text-slate-500">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* FAQ par catégorie */}
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <span className="inline-block px-4 py-2 rounded-full bg-mint-bright/10 text-green-living font-semibold text-sm mb-6">
                    FAQ complète
                  </span>
                  <h2 className="font-display font-black text-4xl text-forest-deep mb-4">
                    Parcourir par catégorie
                  </h2>
                  <p className="text-slate-600 text-xl">Tout ce que vous devez savoir sur Wakalo</p>
                </div>

                <div className="space-y-6">
                  {/* Obligations */}
                  {categories.map((category, catIndex) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: catIndex * 0.05 }}
                      className="border-2 border-slate-100 rounded-3xl overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-gradient-to-r from-forest-deep to-green-living flex items-center gap-3">
                        <category.icon className="w-6 h-6 text-mint-bright" />
                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                        <span className="ml-auto bg-white/20 px-3 py-1 rounded-full text-white text-sm font-semibold">
                          {category.items.length} obligations
                        </span>
                      </div>
                      <div className="p-4 space-y-3 bg-slate-50">
                        {category.items.map((item, itemIndex) => (
                          <AccordionItem
                            key={itemIndex}
                            id={category.id}
                            content={item}
                            isOpen={openAccordions[category.id] === itemIndex}
                            toggle={() => toggle(category.id, itemIndex)}
                            index={itemIndex}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}

                  {/* FAQ */}
                  {faqs.map((section, sectionIndex) => (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: sectionIndex * 0.05 }}
                      className="border-2 border-slate-100 rounded-3xl overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-gradient-to-r from-forest-deep to-green-living flex items-center gap-3">
                        <section.icon className="w-6 h-6 text-mint-bright" />
                        <h3 className="text-xl font-bold text-white">{section.category}</h3>
                        <span className="ml-auto bg-white/20 px-3 py-1 rounded-full text-white text-sm font-semibold">
                          {section.questions.length} questions
                        </span>
                      </div>
                      <div className="p-4 space-y-3 bg-slate-50">
                        {section.questions.map((item, qIndex) => (
                          <FAQItem
                            key={qIndex}
                            question={item.q}
                            answer={item.a}
                            isOpen={openAccordions[section.id] === qIndex}
                            toggle={() => toggle(section.id, qIndex)}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA Support */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-forest-deep via-forest-mid to-green-living">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display font-black text-4xl text-white mb-4">
            Vous ne trouvez pas de réponse ?
          </h2>
          <p className="text-xl text-slate-200 mb-8">Notre équipe est là pour vous aider</p>
          <motion.a
            href={CONTACT_EMAIL}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(52, 211, 153, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-mint-bright text-forest-deep font-bold text-lg rounded-2xl shadow-xl shadow-mint-bright/30 transition-all"
          >
            Contacter le support
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
