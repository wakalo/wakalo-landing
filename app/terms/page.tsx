"use client";

import { motion } from "framer-motion";
import { FileText, Shield, Users, Scale, Eye, AlertTriangle, Ban } from "lucide-react";

const sections = [
  {
    icon: FileText,
    num: "1",
    title: "OBJET DE L'APPLICATION",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">Wakalo est une plateforme numérique permettant :</p>
        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
          <li>La mise en relation entre conducteurs et passagers</li>
          <li>L&apos;organisation de trajets</li>
          <li>L&apos;évaluation des utilisateurs</li>
          <li>La vérification d&apos;identité</li>
        </ul>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-xl">
          <p className="text-amber-700 font-semibold">⚠️ Wakalo n&apos;est pas une société de transport</p>
          <p className="text-amber-600 text-sm mt-2">
            Wakalo ne fournit aucun service de transport et n&apos;emploie ni conducteurs ni passagers.
            Wakalo se limite à mettre à disposition une interface technique.
          </p>
        </div>
      </>
    ),
  },
  {
    icon: Shield,
    num: "2",
    title: "ACCEPTATION DES CGU",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">L&apos;inscription sur Wakalo nécessite :</p>
        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
          <li>L&apos;acceptation explicite des présentes CGU</li>
          <li>La vérification du numéro de téléphone</li>
          <li>La vérification d&apos;identité (KYC)</li>
          <li>L&apos;engagement de respecter les règles de sûreté</li>
        </ul>
        <p className="text-slate-700 font-semibold">Tout refus entraîne l&apos;impossibilité d&apos;utiliser Wakalo.</p>
      </>
    ),
  },
  {
    icon: Users,
    num: "3",
    title: "CONDITIONS D'ACCÈS",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">Pour utiliser Wakalo, l&apos;utilisateur doit :</p>
        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
          <li>Être âgé d&apos;au moins 18 ans</li>
          <li>Posséder une pièce d&apos;identité valide</li>
          <li>Fournir un numéro de téléphone personnel enregistré auprès d&apos;un opérateur</li>
          <li>Fournir un selfie conforme (liveness)</li>
          <li><strong>Pour les conducteurs :</strong> disposer d&apos;un permis de conduire en cours de validité</li>
        </ul>
        <p className="text-coral-red font-semibold">⚠️ Toute fausse information entraîne la suspension immédiate du compte.</p>
      </>
    ),
  },
  {
    icon: Scale,
    num: "4",
    title: "OBLIGATIONS DES UTILISATEURS",
    content: (
      <>
        <h3 className="font-bold text-forest-deep text-lg mb-3">4.1. Obligations générales</h3>
        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
          <li>Utiliser Wakalo conformément à la loi</li>
          <li>Respecter les autres utilisateurs</li>
          <li>Ne pas utiliser l&apos;application pour des activités illégales</li>
          <li>Ne pas importuner, harceler, intimider, ou menacer d&apos;autres personnes</li>
          <li>Ne pas usurper l&apos;identité d&apos;une autre personne</li>
          <li>Ne pas créer de comptes frauduleux</li>
        </ul>
        <h3 className="font-bold text-forest-deep text-lg mb-3">4.2. Obligations des conducteurs</h3>
        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
          <li>Fournir un véhicule en bon état</li>
          <li>Respecter le code de la route</li>
          <li>Ne pas transporter de substances illégales</li>
          <li>Ne pas se livrer à des comportements dangereux ou inappropriés</li>
          <li>Ne pas proposer des trajets fictifs ou frauduleux</li>
        </ul>
        <h3 className="font-bold text-forest-deep text-lg mb-3">4.3. Obligations des passagers</h3>
        <ul className="list-disc list-inside text-slate-600 space-y-2">
          <li>Adopter un comportement respectueux</li>
          <li>Ne pas dégrader le véhicule</li>
          <li>Ne pas mettre en danger le conducteur ou les autres passagers</li>
        </ul>
      </>
    ),
  },
  {
    icon: Ban,
    num: "5",
    title: "COMPORTEMENTS STRICTEMENT INTERDITS",
    highlight: "danger",
    content: (
      <>
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-xl mb-6">
          <p className="text-red-700 font-bold">⚠️ Toute violation entraîne une désactivation immédiate du compte</p>
        </div>
        <p className="text-slate-700 font-semibold mb-4">Sont strictement interdits :</p>
        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
          <li className="font-semibold text-red-600">Harcèlement verbal, moral ou sexuel</li>
          <li className="font-semibold text-red-600">Violence physique ou verbale</li>
          <li className="font-semibold text-red-600">Kidnapping, séquestration, filature</li>
          <li className="font-semibold text-red-600">Tentative d&apos;agression</li>
          <li>Discrimination (genre, religion, ethnie, orientation sexuelle, handicap, etc.)</li>
          <li>Menaces de mort ou d&apos;agression</li>
          <li>Enregistrement ou prise de photos dans le véhicule sans consentement</li>
          <li>Consommation de drogues dans le véhicule</li>
          <li>Transport de substances interdites</li>
          <li>Création de faux trajets pour piéger des utilisateurs</li>
          <li>Usurpation d&apos;identité ou fraude documentaire</li>
        </ul>
        <div className="bg-mint-bright/10 border-l-4 border-mint-bright p-4 rounded-xl">
          <p className="text-green-living font-semibold">
            Wakalo se réserve le droit de signaler tout comportement criminel aux forces de l&apos;ordre.
          </p>
        </div>
      </>
    ),
  },
  {
    icon: Eye,
    num: "6",
    title: "VÉRIFICATION DES IDENTITÉS (KYC)",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">Pour des raisons de sûreté, Wakalo procède à :</p>
        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
          <li>La vérification du numéro de téléphone</li>
          <li>La vérification d&apos;identité (pièce + selfie)</li>
          <li>La vérification du permis pour les conducteurs</li>
        </ul>
        <p className="text-coral-red font-semibold">⚠️ Toute tentative de fraude est signalée aux autorités compétentes.</p>
      </>
    ),
  },
  {
    icon: AlertTriangle,
    num: "7",
    title: "RESPONSABILITÉS DE WAKALO",
    content: (
      <>
        <h3 className="font-bold text-forest-deep text-lg mb-3">7.1. Wakalo n&apos;est pas responsable :</h3>
        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
          <li>De la conduite du conducteur</li>
          <li>Du comportement du passager</li>
          <li>Des incidents survenus lors d&apos;un trajet</li>
          <li>Des retards, pertes, vols, agressions, conflits personnels</li>
          <li>Des dommages matériels ou corporels entre utilisateurs</li>
        </ul>
        <div className="bg-mint-bright/10 border-l-4 border-mint-bright p-4 rounded-xl mb-6">
          <p className="text-green-living font-semibold">
            Wakalo est un intermédiaire technique. Chaque utilisateur est seul responsable de son comportement et de ses actes.
          </p>
        </div>
        <h3 className="font-bold text-forest-deep text-lg mb-3">7.2. Wakalo peut :</h3>
        <ul className="list-disc list-inside text-slate-600 space-y-2">
          <li>Suspendre ou supprimer un compte</li>
          <li>Annuler un trajet en cas de suspicion d&apos;activité illégale</li>
          <li>Coopérer avec la police en cas d&apos;enquête</li>
          <li>Transmettre les informations d&apos;identité aux forces de l&apos;ordre en cas de réquisition</li>
        </ul>
      </>
    ),
  },
];

const otherSections = [
  {
    num: "8",
    title: "SÛRETÉ ET PRÉVENTION",
    content: (
      <>
        <p className="text-slate-600 mb-4">Wakalo met en place des mesures de sûreté :</p>
        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
          <li>Vérification des identités</li>
          <li>Système de notation des utilisateurs</li>
          <li>Signalement d&apos;incidents</li>
          <li>Suspension automatique en cas de comportements à risque</li>
          <li>Géolocalisation optionnelle (si activée par l&apos;utilisateur)</li>
        </ul>
        <p className="text-slate-700 font-semibold mb-2">Les utilisateurs doivent :</p>
        <ul className="list-disc list-inside text-slate-600 space-y-2">
          <li>Vérifier les informations du conducteur/passager avant le trajet</li>
          <li>Partager leur trajet avec un proche (option intégrée dans Wakalo)</li>
          <li>Signaler immédiatement tout comportement suspect</li>
        </ul>
      </>
    ),
  },
  {
    num: "9",
    title: "SANCTIONS",
    content: (
      <>
        <p className="text-slate-600 mb-4">En cas d&apos;infraction aux CGU, Wakalo peut :</p>
        <ul className="list-disc list-inside text-slate-600 space-y-2">
          <li>Émettre un avertissement</li>
          <li>Suspendre temporairement le compte</li>
          <li>Désactiver définitivement le compte</li>
          <li>Transmettre le dossier aux forces de l&apos;ordre en cas d&apos;infraction grave</li>
        </ul>
      </>
    ),
  },
  {
    num: "10",
    title: "DONNÉES PERSONNELLES",
    content: (
      <>
        <p className="text-slate-600 mb-4">Wakalo collecte les données nécessaires à :</p>
        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
          <li>L&apos;identification</li>
          <li>La sécurité des utilisateurs</li>
          <li>La gestion des trajets</li>
        </ul>
        <p className="text-slate-700 font-semibold">Les données ne sont jamais revendues.</p>
        <p className="text-slate-600 mt-2">
          Conformément à la loi 2017-20 du Bénin, l&apos;utilisateur peut exercer ses droits (accès, rectification, suppression).
        </p>
      </>
    ),
  },
  {
    num: "11",
    title: "MODIFICATION DES CGU",
    content: (
      <p className="text-slate-600">
        Wakalo peut mettre à jour les CGU à tout moment. En continuant d&apos;utiliser l&apos;application, l&apos;utilisateur accepte les nouvelles conditions.
      </p>
    ),
  },
  {
    num: "12",
    title: "LITIGES",
    content: (
      <p className="text-slate-600">
        En cas de litige, les tribunaux compétents sont ceux du Bénin, sauf dispositions légales contraires.
      </p>
    ),
  },
];

export default function TermsPage() {
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
            Version 2025 · République du Bénin
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl text-white mb-6 leading-tight"
          >
            Conditions Générales{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-bright to-amber-gold">
              d&apos;Utilisation
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 text-base mt-2"
          >
            En créant un compte, vous acceptez intégralement les présentes Conditions Générales d&apos;Utilisation
          </motion.p>
        </div>
      </section>

      {/* Sections principales */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border-2 ${
                section.highlight === "danger" ? "border-red-200" : "border-slate-100"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md ${
                  section.highlight === "danger"
                    ? "bg-gradient-to-br from-red-500 to-red-600"
                    : "bg-gradient-to-br from-forest-deep to-green-living"
                }`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display font-bold text-2xl text-forest-deep mb-4">
                    {section.num}. {section.title}
                  </h2>
                  {section.content}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Sections 8-12 groupées */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-lg border-2 border-slate-100 space-y-8"
          >
            {otherSections.map((section, index) => (
              <div key={section.num} className={index > 0 ? "pt-8 border-t border-slate-100" : ""}>
                <h2 className="font-display font-bold text-2xl text-forest-deep mb-4">
                  {section.num}. {section.title}
                </h2>
                {section.content}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
