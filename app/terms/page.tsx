import type { Metadata } from "next";
import DocHero from "@/components/corp/DocHero";
import Reveal from "@/components/corp/Reveal";
import Footer from "@/components/Footer";
import { FileText, Shield, Users, Scale, Eye, AlertTriangle, Ban } from "lucide-react";


export const metadata: Metadata = {
  title: "Conditions générales d'utilisation — Wakalo",
  description: "Conditions générales d'utilisation de l'application de covoiturage Wakalo.",
};

const sections = [
  {
    icon: FileText,
    num: "1",
    title: "OBJET DE L'APPLICATION",
    content: (
      <>
        <p className="text-ink/70 leading-relaxed mb-4">Wakalo est une plateforme numérique permettant :</p>
        <ul className="list-disc list-inside text-ink/70 space-y-2 mb-4">
          <li>La mise en relation entre conducteurs et passagers</li>
          <li>L&apos;organisation de trajets</li>
          <li>L&apos;évaluation des utilisateurs</li>
          <li>La vérification d&apos;identité</li>
        </ul>
        <div className="bg-mint-bright/10 border-l-4 border-brand p-4 rounded-xl">
          <p className="text-brand-dark font-semibold">Wakalo n&apos;est pas une société de transport</p>
          <p className="text-ink/70 text-sm mt-2">
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
        <p className="text-ink/70 leading-relaxed mb-4">L&apos;inscription sur Wakalo nécessite :</p>
        <ul className="list-disc list-inside text-ink/70 space-y-2 mb-4">
          <li>L&apos;acceptation explicite des présentes CGU</li>
          <li>La vérification du numéro de téléphone</li>
          <li>La vérification d&apos;identité (KYC)</li>
          <li>L&apos;engagement de respecter les règles de sûreté</li>
        </ul>
        <p className="text-ink/80 font-semibold">Tout refus entraîne l&apos;impossibilité d&apos;utiliser Wakalo.</p>
      </>
    ),
  },
  {
    icon: Users,
    num: "3",
    title: "CONDITIONS D'ACCÈS",
    content: (
      <>
        <p className="text-ink/70 leading-relaxed mb-4">Pour utiliser Wakalo, l&apos;utilisateur doit :</p>
        <ul className="list-disc list-inside text-ink/70 space-y-2 mb-4">
          <li>Être âgé d&apos;au moins 18 ans</li>
          <li>Posséder une pièce d&apos;identité valide</li>
          <li>Fournir un numéro de téléphone personnel enregistré auprès d&apos;un opérateur</li>
          <li>Fournir un selfie conforme (liveness)</li>
          <li><strong>Pour les conducteurs :</strong> disposer d&apos;un permis de conduire en cours de validité</li>
        </ul>
        <p className="text-coral-red font-semibold">Toute fausse information entraîne la suspension immédiate du compte.</p>
      </>
    ),
  },
  {
    icon: Scale,
    num: "4",
    title: "OBLIGATIONS DES UTILISATEURS",
    content: (
      <>
        <h3 className="font-bold text-ink text-lg mb-3">4.1. Obligations générales</h3>
        <ul className="list-disc list-inside text-ink/70 space-y-2 mb-6">
          <li>Utiliser Wakalo conformément à la loi</li>
          <li>Respecter les autres utilisateurs</li>
          <li>Ne pas utiliser l&apos;application pour des activités illégales</li>
          <li>Ne pas importuner, harceler, intimider, ou menacer d&apos;autres personnes</li>
          <li>Ne pas usurper l&apos;identité d&apos;une autre personne</li>
          <li>Ne pas créer de comptes frauduleux</li>
        </ul>
        <h3 className="font-bold text-ink text-lg mb-3">4.2. Obligations des conducteurs</h3>
        <ul className="list-disc list-inside text-ink/70 space-y-2 mb-6">
          <li>Fournir un véhicule en bon état</li>
          <li>Respecter le code de la route</li>
          <li>Ne pas transporter de substances illégales</li>
          <li>Ne pas se livrer à des comportements dangereux ou inappropriés</li>
          <li>Ne pas proposer des trajets fictifs ou frauduleux</li>
        </ul>
        <h3 className="font-bold text-ink text-lg mb-3">4.3. Obligations des passagers</h3>
        <ul className="list-disc list-inside text-ink/70 space-y-2">
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
          <p className="text-red-700 font-bold">Toute violation entraîne une désactivation immédiate du compte</p>
        </div>
        <p className="text-ink/80 font-semibold mb-4">Sont strictement interdits :</p>
        <ul className="list-disc list-inside text-ink/70 space-y-2 mb-6">
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
          <p className="text-brand font-semibold">
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
        <p className="text-ink/70 leading-relaxed mb-4">Pour des raisons de sûreté, Wakalo procède à :</p>
        <ul className="list-disc list-inside text-ink/70 space-y-2 mb-4">
          <li>La vérification du numéro de téléphone</li>
          <li>La vérification d&apos;identité (pièce + selfie)</li>
          <li>La vérification du permis pour les conducteurs</li>
        </ul>
        <p className="text-coral-red font-semibold">Toute tentative de fraude est signalée aux autorités compétentes.</p>
      </>
    ),
  },
  {
    icon: AlertTriangle,
    num: "7",
    title: "RESPONSABILITÉS DE WAKALO",
    content: (
      <>
        <h3 className="font-bold text-ink text-lg mb-3">7.1. Wakalo n&apos;est pas responsable :</h3>
        <ul className="list-disc list-inside text-ink/70 space-y-2 mb-6">
          <li>De la conduite du conducteur</li>
          <li>Du comportement du passager</li>
          <li>Des incidents survenus lors d&apos;un trajet</li>
          <li>Des retards, pertes, vols, agressions, conflits personnels</li>
          <li>Des dommages matériels ou corporels entre utilisateurs</li>
        </ul>
        <div className="bg-mint-bright/10 border-l-4 border-mint-bright p-4 rounded-xl mb-6">
          <p className="text-brand font-semibold">
            Wakalo est un intermédiaire technique. Chaque utilisateur est seul responsable de son comportement et de ses actes.
          </p>
        </div>
        <h3 className="font-bold text-ink text-lg mb-3">7.2. Wakalo peut :</h3>
        <ul className="list-disc list-inside text-ink/70 space-y-2">
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
        <p className="text-ink/70 mb-4">Wakalo met en place des mesures de sûreté :</p>
        <ul className="list-disc list-inside text-ink/70 space-y-2 mb-4">
          <li>Vérification des identités</li>
          <li>Système de notation des utilisateurs</li>
          <li>Signalement d&apos;incidents</li>
          <li>Suspension automatique en cas de comportements à risque</li>
          <li>Géolocalisation optionnelle (si activée par l&apos;utilisateur)</li>
        </ul>
        <p className="text-ink/80 font-semibold mb-2">Les utilisateurs doivent :</p>
        <ul className="list-disc list-inside text-ink/70 space-y-2">
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
        <p className="text-ink/70 mb-4">En cas d&apos;infraction aux CGU, Wakalo peut :</p>
        <ul className="list-disc list-inside text-ink/70 space-y-2">
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
        <p className="text-ink/70 mb-4">Wakalo collecte les données nécessaires à :</p>
        <ul className="list-disc list-inside text-ink/70 space-y-2 mb-4">
          <li>L&apos;identification</li>
          <li>La sécurité des utilisateurs</li>
          <li>La gestion des trajets</li>
        </ul>
        <p className="text-ink/80 font-semibold">Les données ne sont jamais revendues.</p>
        <p className="text-ink/70 mt-2">
          Conformément à la loi 2017-20 du Bénin, l&apos;utilisateur peut exercer ses droits (accès, rectification, suppression).
        </p>
      </>
    ),
  },
  {
    num: "11",
    title: "MODIFICATION DES CGU",
    content: (
      <p className="text-ink/70">
        Wakalo peut mettre à jour les CGU à tout moment. En continuant d&apos;utiliser l&apos;application, l&apos;utilisateur accepte les nouvelles conditions.
      </p>
    ),
  },
  {
    num: "12",
    title: "LITIGES",
    content: (
      <p className="text-ink/70">
        En cas de litige, les tribunaux compétents sont ceux du Bénin, sauf dispositions légales contraires.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <DocHero
        eyebrow="Version 2025 · République du Bénin"
        title="Conditions générales d'utilisation"
        subtitle="En créant un compte, vous acceptez intégralement les présentes Conditions Générales d'Utilisation."
      />

      <section className="pb-24">
        <div className="max-w-4xl mx-auto space-y-6 px-6 sm:px-8">
          {sections.map((section) => (
            <Reveal key={section.num}>
              <article
                className={`rounded-[1.5rem] bg-white p-8 ring-1 sm:p-10 ${
                  section.highlight === "danger" ? "ring-red-200" : "ring-ink/10"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                      section.highlight === "danger" ? "bg-red-50 text-red-600" : "bg-mint-bright/20 text-brand"
                    }`}
                  >
                    <section.icon className="h-5 w-5" />
                  </span>
                  <h2 className="font-display text-xl font-bold sm:text-2xl">
                    {section.num}. {section.title}
                  </h2>
                </div>
                <div className="mt-6">{section.content}</div>
              </article>
            </Reveal>
          ))}

          <Reveal>
            <article className="space-y-8 rounded-[1.5rem] bg-white p-8 ring-1 ring-ink/10 sm:p-10">
              {otherSections.map((section, index) => (
                <div key={section.num} className={index > 0 ? "pt-8 border-t border-ink/10" : ""}>
                  <h2 className="mb-4 font-display text-xl font-bold sm:text-2xl">
                    {section.num}. {section.title}
                  </h2>
                  {section.content}
                </div>
              ))}
            </article>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
