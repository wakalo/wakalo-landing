import type { Metadata } from "next";
import DocHero from "@/components/corp/DocHero";
import Reveal from "@/components/corp/Reveal";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL } from "@/lib/links";
import { Building2, User, Server, Globe, Mail, Phone, MapPin, Briefcase } from "lucide-react";


export const metadata: Metadata = {
  title: "Mentions légales — Wakalo Corp",
  description: "Informations légales concernant Wakalo Corp et l'application Wakalo.",
};

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
              <item.icon className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-ink text-sm">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-ink/70 hover:text-brand transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-ink/70">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-mint-bright/10 border-l-4 border-mint-bright p-4 rounded-xl">
          <p className="text-brand font-semibold">ℹ️ Statut actuel : Projet en développement</p>
          <p className="text-ink/70 text-sm mt-2">
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
        <p className="text-ink/70 mb-2">
          <span className="font-semibold text-ink">Samir ALE</span> – Co-fondateur
        </p>
        <p className="text-ink/70">
          Email :{" "}
          <a href="mailto:contact@wakalo.online" className="text-brand hover:underline">
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
      <div className="space-y-1 text-ink/70">
        <p><span className="font-semibold text-ink">Site web :</span> Hostinger International Ltd.</p>
        <p className="ml-4">61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
        <p className="ml-4">
          <a
            href="https://www.hostinger.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline"
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
        <p className="text-ink/70 leading-relaxed mb-4">
          L&apos;ensemble du contenu de ce site (textes, images, logos, graphismes, vidéos, code source) est la
          propriété exclusive de Wakalo, sauf mention contraire.
        </p>
        <p className="text-ink/70 leading-relaxed mb-4">
          Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments
          du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l&apos;autorisation écrite préalable
          de Wakalo.
        </p>
        <p className="text-ink/70 leading-relaxed">
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
        <p className="text-ink/70 leading-relaxed mb-3">
          Conformément à la loi n°2017-20 du 20 avril 2018 portant code du numérique en République du Bénin,
          Wakalo s&apos;engage à protéger les données personnelles de ses utilisateurs.
        </p>
        <p className="text-ink/70 leading-relaxed">
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
        <p className="text-ink/70 leading-relaxed mb-3">
          Conformément à la réglementation en vigueur, vous disposez des droits suivants :
        </p>
        <ul className="list-disc list-inside text-ink/70 space-y-2 mb-3">
          <li>Droit d&apos;accès à vos données personnelles</li>
          <li>Droit de rectification de vos données</li>
          <li>Droit de suppression de vos données</li>
          <li>Droit d&apos;opposition au traitement de vos données</li>
        </ul>
        <p className="text-ink/70">
          Pour exercer ces droits, contactez-nous à :{" "}
          <a href="mailto:contact@wakalo.online" className="text-brand hover:underline">
            contact@wakalo.online
          </a>
        </p>
      </>
    ),
  },
  {
    subtitle: "5.3. Conservation des données",
    content: (
      <p className="text-ink/70 leading-relaxed">
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
        <p className="text-ink/70 leading-relaxed mb-4">
          Ce site peut utiliser des cookies techniques nécessaires au bon fonctionnement du site (navigation,
          préférences de thème).
        </p>
        <p className="text-ink/70 leading-relaxed">
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
        <p className="text-ink/70 leading-relaxed mb-4">
          Wakalo s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site.
          Toutefois, Wakalo ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations disponibles.
        </p>
        <p className="text-ink/70 leading-relaxed">
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
        <p className="text-ink/70 leading-relaxed mb-3">
          Les présentes mentions légales sont régies par le droit béninois.
        </p>
        <p className="text-ink/70 leading-relaxed">
          En cas de litige et à défaut d&apos;accord amiable, le litige sera porté devant les tribunaux compétents
          de la République du Bénin.
        </p>
      </>
    ),
  },
];

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <DocHero
        eyebrow="Dernière mise à jour : janvier 2025"
        title="Mentions légales"
        subtitle="Informations légales concernant Wakalo Corp et l'application Wakalo."
      />

      <section className="pb-24">
        <div className="max-w-4xl mx-auto space-y-6 px-6 sm:px-8">
          {sections.map((section) => (
            <Reveal key={section.num}>
              <article className="rounded-[1.5rem] bg-white p-8 ring-1 ring-ink/10 sm:p-10">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-mint-bright/20 text-brand">
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
            <article className="rounded-[1.5rem] bg-white p-8 ring-1 ring-ink/10 sm:p-10">
              <h2 className="font-display text-xl font-bold sm:text-2xl">5. DONNÉES PERSONNELLES</h2>
              <div className="mt-6 space-y-6">
                {dataSections.map((sub, i) => (
                  <div key={sub.subtitle} className={i > 0 ? "pt-6 border-t border-ink/10" : ""}>
                    <h3 className="mb-3 text-lg font-bold">{sub.subtitle}</h3>
                    {sub.content}
                  </div>
                ))}
                <div className="rounded-xl border-l-4 border-brand bg-mint-bright/10 p-4">
                  <p className="font-semibold text-brand-dark">Engagement de confidentialité</p>
                  <p className="mt-2 text-sm text-ink/70">
                    Wakalo ne vend, ne loue et ne partage jamais vos données personnelles avec des tiers à des fins
                    commerciales.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal>
            <article className="space-y-8 rounded-[1.5rem] bg-white p-8 ring-1 ring-ink/10 sm:p-10">
              {lastSections.map((section, index) => (
                <div key={section.num} className={index > 0 ? "pt-8 border-t border-ink/10" : ""}>
                  <h2 className="mb-4 font-display text-xl font-bold sm:text-2xl">
                    {section.num}. {section.title}
                  </h2>
                  {section.content}
                </div>
              ))}
            </article>
          </Reveal>

          <Reveal>
            <div className="rounded-[1.5rem] bg-forest-deep p-8 text-center text-white sm:p-10">
              <Mail className="mx-auto h-10 w-10 text-mint-bright" />
              <h3 className="mt-4 font-display text-2xl font-bold">Une question ?</h3>
              <p className="mt-2 text-white/70">Pour toute question concernant ces mentions légales, contactez-nous :</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-6 inline-block rounded-full bg-mint-bright px-6 py-3 font-bold text-ink transition-colors hover:bg-mint-soft"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
