"use client";

import { useState, useMemo } from "react";
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
  Plus,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import DocHero from "@/components/corp/DocHero";
import Reveal from "@/components/corp/Reveal";
import SectionLabel from "@/components/corp/SectionLabel";
import Footer from "@/components/Footer";
import { SUPPORT_EMAIL } from "@/lib/links";

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
  { icon: Book, label: "Questions fréquentes", desc: "Les réponses aux questions les plus posées", href: "#faq" },
  { icon: Shield, label: "Sécurité", desc: "Nos dispositifs pour des trajets sereins", href: "#securite" },
  { icon: MessageCircle, label: "Contacter le support", desc: "Notre équipe vous répond rapidement", href: "/contact" },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold [&::-webkit-details-marker]:hidden">
        {question}
        <Plus className="h-5 w-5 shrink-0 text-brand transition-transform group-open:rotate-45" />
      </summary>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink/70">{answer}</p>
    </details>
  );
}

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");

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

  const searching = searchQuery.trim().length > 0;

  return (
    <main className="min-h-screen bg-paper text-ink">
      <DocHero eyebrow="Support Wakalo" title="Centre d'aide" subtitle="Trouvez rapidement les réponses à vos questions.">
        <div className="relative mt-10 max-w-2xl">
          <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40" />
          <label htmlFor="help-search" className="sr-only">
            Rechercher dans la FAQ
          </label>
          <input
            id="help-search"
            type="search"
            placeholder="Rechercher dans la FAQ…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-ink/15 bg-white py-4 pl-14 pr-6 text-lg placeholder-ink/40 transition-all focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>
      </DocHero>

      {searching ? (
        <section className="pb-24">
          <div className="max-w-4xl mx-auto px-6 sm:px-8">
            {filteredFaqs.length > 0 ? (
              <ul className="space-y-4">
                {filteredFaqs.flatMap((section) =>
                  section.questions.map((item) => (
                    <li key={`${section.id}-${item.q}`} className="rounded-[1.5rem] bg-white p-6 ring-1 ring-ink/10">
                      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
                        <section.icon className="h-4 w-4" />
                        {section.category}
                      </p>
                      <h3 className="mt-2 font-semibold">{item.q}</h3>
                      <p className="mt-2 text-sm text-ink/70">{item.a}</p>
                    </li>
                  ))
                )}
              </ul>
            ) : (
              <div className="rounded-[1.5rem] bg-white p-12 text-center ring-1 ring-ink/10">
                <HelpCircle className="mx-auto h-10 w-10 text-ink/30" />
                <h3 className="mt-4 font-display text-xl font-bold">Aucun résultat trouvé</h3>
                <p className="mt-2 text-ink/60">Essayez de reformuler votre recherche ou contactez notre support.</p>
              </div>
            )}
          </div>
        </section>
      ) : (
        <>
          {/* Quick links */}
          <section className="pb-24">
            <div className="max-w-7xl mx-auto grid gap-6 px-6 sm:px-8 md:grid-cols-3 lg:px-12">
              {quickCards.map((card, i) => (
                <Reveal key={card.label} delay={i * 0.08}>
                  <Link
                    href={card.href}
                    className="group flex h-full flex-col rounded-[1.5rem] bg-white p-8 ring-1 ring-ink/10 transition-shadow hover:shadow-lg"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-bright/20 text-brand">
                      <card.icon className="h-6 w-6" />
                    </span>
                    <h2 className="mt-6 flex items-center gap-2 font-display text-xl font-semibold">
                      {card.label}
                      <ArrowUpRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h2>
                    <p className="mt-2 text-ink/60">{card.desc}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Security */}
          <section id="securite" className="scroll-mt-16 bg-ink py-24 text-white lg:py-32">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <Reveal>
                <SectionLabel index="01" tone="dark">
                  Sécurité
                </SectionLabel>
                <h2 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight">
                  Des dispositifs pensés pour votre tranquillité.
                </h2>
              </Reveal>
              <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {securityFeatures.map((f, i) => (
                  <li key={f.title}>
                    <Reveal delay={i * 0.06} className="h-full rounded-[1.5rem] bg-white/[0.05] p-6 ring-1 ring-white/10">
                      <f.icon className="h-6 w-6 text-mint-bright" />
                      <h3 className="mt-4 font-semibold">{f.title}</h3>
                      <p className="mt-2 text-sm text-white/60">{f.desc}</p>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Community rules */}
          <section className="bg-white py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <Reveal>
                <SectionLabel index="02">Règles de la communauté</SectionLabel>
                <h2 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight">
                  Les engagements de chacun.
                </h2>
              </Reveal>
              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {categories.map((category, ci) => (
                  <Reveal key={category.id} delay={ci * 0.1}>
                    <div className="h-full rounded-[2rem] bg-paper p-8 sm:p-10">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-white">
                          <category.icon className="h-5 w-5" />
                        </span>
                        <h3 className="font-display text-2xl font-bold">{category.title}</h3>
                      </div>
                      <ul className="mt-8 space-y-4">
                        {category.items.map((item) => (
                          <li key={item} className="flex gap-3 text-ink/80">
                            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-16 py-24 lg:py-32">
            <div className="max-w-7xl mx-auto grid gap-12 px-6 sm:px-8 lg:grid-cols-12 lg:px-12">
              <Reveal className="lg:col-span-4">
                <SectionLabel index="03">FAQ</SectionLabel>
                <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight">Parcourir par catégorie</h2>
                <p className="mt-4 text-ink/60">Tout ce que vous devez savoir sur Wakalo.</p>
              </Reveal>
              <div className="space-y-10 lg:col-span-8">
                {faqs.map((section) => (
                  <Reveal key={section.id}>
                    <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                      <section.icon className="h-4 w-4" />
                      {section.category}
                    </h3>
                    <div className="mt-2 divide-y divide-ink/10 border-y border-ink/10">
                      {section.questions.map((item) => (
                        <FAQItem key={item.q} question={item.q} answer={item.a} />
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Support CTA */}
      <section className="px-4 pb-4 sm:px-6 sm:pb-6">
        <div className="rounded-[2rem] bg-forest-deep px-6 py-20 text-center text-white sm:px-8">
          <h2 className="font-display text-4xl font-bold">Vous ne trouvez pas de réponse ?</h2>
          <p className="mt-4 text-lg text-white/70">Notre équipe est là pour vous aider.</p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-mint-bright px-7 py-4 font-bold text-forest-deep transition-colors hover:bg-mint-soft"
          >
            Contacter le support
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
