"use client";

import { motion } from "framer-motion";
import { Building2, User, Server, Globe, Mail, Phone, MapPin, Briefcase } from "lucide-react";

const sections = [
  {
    icon: Building2,
    num: "1",
    title: "ÉDITEUR DU SITE",
    content: (
      <>
        <div className="space-y-4 mb-6">
          {[
            { icon: Briefcase, label: "Nom de l'entreprise", value: "Wakalo (en cours de création)" },
            { icon: User, label: "Fondateurs", value: "Samir ALE & Mardochée ATCHADE" },
            { icon: MapPin, label: "Siège social (futur)", value: "Cotonou, République du Bénin" },
            { icon: Mail, label: "Email de contact", value: "contact@wakalo.online", href: "mailto:contact@wakalo.online" },
            { icon: Phone, label: "Téléphone", value: "+229 97 97 95 91", href: "tel:+22997979591" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <item.icon className="w-5 h-5 text-green-living flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-forest-deep text-sm">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-slate-600 hover:text-green-living transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-slate-600">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-mint-bright/10 border-l-4 border-mint-bright p-4 rounded-xl">
          <p className="text-green-living font-semibold">ℹ️ Statut actuel : Projet en développement</p>
          <p className="text-slate-600 text-sm mt-2">
            La société Wakalo est en cours de création et sera officiellement enregistrée en avril 2025.
            Le programme bêta de l&apos;application sera lancé en mars 2025.
          </p>
        </div>
      </>
    ),
  },
  {
    icon: User,
    num: "2",
    title: "DIRECTEUR DE PUBLICATION",
    content: (
      <>
        <p className="text-slate-600 mb-2">
          <span className="font-semibold text-forest-deep">Samir ALE</span> – Co-fondateur
        </p>
        <p className="text-slate-600">
          Email :{" "}
          <a href="mailto:contact@wakalo.online" className="text-green-living hover:underline">
            contact@wakalo.online
          </a>
        </p>
      </>
    ),
  },
  {
    icon: Server,
    num: "3",
    title: "HÉBERGEMENT",
    content: (
      <div className="space-y-1 text-slate-600">
        <p><span className="font-semibold text-forest-deep">Site web :</span> Hostinger International Ltd.</p>
        <p className="ml-4">61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
        <p className="ml-4">
          <a
            href="https://www.hostinger.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-living hover:underline"
          >
            hostinger.com
          </a>
        </p>
      </div>
    ),
  },
  {
    icon: Globe,
    num: "4",
    title: "PROPRIÉTÉ INTELLECTUELLE",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          L&apos;ensemble du contenu de ce site (textes, images, logos, graphismes, vidéos, code source) est la
          propriété exclusive de Wakalo, sauf mention contraire.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments
          du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l&apos;autorisation écrite préalable
          de Wakalo.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Toute exploitation non autorisée du site ou de son contenu engagerait la responsabilité civile et/ou pénale
          de l&apos;utilisateur.
        </p>
      </>
    ),
  },
];

const dataSections = [
  {
    subtitle: "5.1. Collecte des données",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-3">
          Conformément à la loi n°2017-20 du 20 avril 2018 portant code du numérique en République du Bénin,
          Wakalo s&apos;engage à protéger les données personnelles de ses utilisateurs.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Les données collectées via le formulaire d&apos;inscription au programme bêta (email, téléphone) sont
          uniquement utilisées pour vous contacter concernant le lancement de l&apos;application.
        </p>
      </>
    ),
  },
  {
    subtitle: "5.2. Droits des utilisateurs",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-3">
          Conformément à la réglementation en vigueur, vous disposez des droits suivants :
        </p>
        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-3">
          <li>Droit d&apos;accès à vos données personnelles</li>
          <li>Droit de rectification de vos données</li>
          <li>Droit de suppression de vos données</li>
          <li>Droit d&apos;opposition au traitement de vos données</li>
        </ul>
        <p className="text-slate-600">
          Pour exercer ces droits, contactez-nous à :{" "}
          <a href="mailto:contact@wakalo.online" className="text-green-living hover:underline">
            contact@wakalo.online
          </a>
        </p>
      </>
    ),
  },
  {
    subtitle: "5.3. Conservation des données",
    content: (
      <p className="text-slate-600 leading-relaxed">
        Vos données sont conservées uniquement le temps nécessaire pour vous contacter concernant le programme bêta.
        Si vous ne souhaitez plus recevoir d&apos;informations, vous pouvez nous demander la suppression de vos données
        à tout moment.
      </p>
    ),
  },
];

const lastSections = [
  {
    num: "6",
    title: "COOKIES",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          Ce site peut utiliser des cookies techniques nécessaires au bon fonctionnement du site (navigation,
          préférences de thème).
        </p>
        <p className="text-slate-600 leading-relaxed">
          Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais cela peut affecter
          certaines fonctionnalités du site.
        </p>
      </>
    ),
  },
  {
    num: "7",
    title: "LIMITATION DE RESPONSABILITÉ",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          Wakalo s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site.
          Toutefois, Wakalo ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations disponibles.
        </p>
        <p className="text-slate-600 leading-relaxed">
          En conséquence, Wakalo décline toute responsabilité pour toute imprécision, inexactitude ou omission
          portant sur des informations disponibles sur ce site.
        </p>
      </>
    ),
  },
  {
    num: "8",
    title: "DROIT APPLICABLE",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-3">
          Les présentes mentions légales sont régies par le droit béninois.
        </p>
        <p className="text-slate-600 leading-relaxed">
          En cas de litige et à défaut d&apos;accord amiable, le litige sera porté devant les tribunaux compétents
          de la République du Bénin.
        </p>
      </>
    ),
  },
];

export default function LegalPage() {
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
            Dernière mise à jour : Janvier 2025
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl text-white mb-6 leading-tight"
          >
            Mentions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-bright to-amber-gold">
              Légales
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-200 max-w-2xl mx-auto"
          >
            Informations légales concernant Wakalo
          </motion.p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Sections 1-4 */}
          {sections.map((section, index) => (
            <motion.div
              key={section.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-slate-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-forest-deep to-green-living flex items-center justify-center flex-shrink-0 shadow-md">
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

          {/* Section 5: Données personnelles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-lg border-2 border-slate-100"
          >
            <h2 className="font-display font-bold text-2xl text-forest-deep mb-6">5. DONNÉES PERSONNELLES</h2>
            <div className="space-y-6">
              {dataSections.map((sub, i) => (
                <div key={sub.subtitle} className={i > 0 ? "pt-6 border-t border-slate-100" : ""}>
                  <h3 className="font-bold text-forest-deep text-lg mb-3">{sub.subtitle}</h3>
                  {sub.content}
                </div>
              ))}
              <div className="pt-6 border-t border-slate-100">
                <div className="bg-mint-bright/10 border-l-4 border-mint-bright p-4 rounded-xl">
                  <p className="text-green-living font-semibold">🔒 Engagement de confidentialité</p>
                  <p className="text-slate-600 text-sm mt-2">
                    Wakalo ne vend, ne loue et ne partage jamais vos données personnelles avec des tiers à des fins
                    commerciales.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sections 6-8 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-lg border-2 border-slate-100 space-y-8"
          >
            {lastSections.map((section, index) => (
              <div key={section.num} className={index > 0 ? "pt-8 border-t border-slate-100" : ""}>
                <h2 className="font-display font-bold text-2xl text-forest-deep mb-4">
                  {section.num}. {section.title}
                </h2>
                {section.content}
              </div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-forest-deep to-green-living rounded-3xl p-8 text-white text-center shadow-xl"
          >
            <Mail className="w-12 h-12 mx-auto mb-4 text-mint-bright" />
            <h3 className="font-display font-bold text-2xl mb-2">Une question ?</h3>
            <p className="text-slate-200 mb-6">
              Pour toute question concernant ces mentions légales, contactez-nous :
            </p>
            <motion.a
              href="mailto:contact@wakalo.online"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-mint-bright text-forest-deep px-6 py-3 rounded-xl font-bold hover:bg-mint-soft transition-all"
            >
              contact@wakalo.online
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
