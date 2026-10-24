"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, MapPinned, Send, CheckCircle, Clock } from "lucide-react";
import Reveal from "@/components/corp/Reveal";
import HeroIn from "@/components/corp/HeroIn";
import SectionLabel from "@/components/corp/SectionLabel";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL, SUPPORT_EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/links";

interface ContactFormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  sujet: string;
  objet: string;
  message: string;
}

const subjects = ["Projet d'application", "Partenariat", "Support Wakalo", "Autre"];

const emptyForm: ContactFormData = {
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  sujet: subjects[0],
  objet: "",
  message: "",
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    lines: [`${CONTACT_EMAIL} · projets`, `${SUPPORT_EMAIL} · support Wakalo`],
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: Phone,
    title: "Téléphone",
    lines: [PHONE_DISPLAY],
    href: PHONE_HREF,
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
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xpwzggqv", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitStatus("success");
        setFormData(emptyForm);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-ink/15 bg-white text-ink placeholder-ink/40 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all";
  const labelClass = "block text-sm font-semibold text-ink mb-2";

  return (
    <main className="min-h-screen bg-paper text-ink">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <HeroIn>
            <SectionLabel index="—">Contact</SectionLabel>
            <h1 className="mt-8 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Parlons de votre <span className="text-brand">projet</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink/70">
              Application à créer, partenariat ou question sur Wakalo : écrivez-nous, nous
              répondons sous 48 h ouvrées.
            </p>
          </HeroIn>
        </div>
      </section>

      {/* Form + info */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto grid gap-10 px-6 sm:px-8 lg:grid-cols-12 lg:px-12">
          <Reveal className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6 rounded-[2rem] bg-white p-6 ring-1 ring-ink/10 sm:p-10">
              <fieldset>
                <legend className={labelClass}>Votre demande concerne</legend>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((s) => (
                    <label
                      key={s}
                      className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium ring-1 transition-colors ${
                        formData.sujet === s
                          ? "bg-ink text-paper ring-ink"
                          : "bg-paper text-ink/70 ring-ink/10 hover:ring-ink/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name="sujet"
                        value={s}
                        checked={formData.sujet === s}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="nom" className={labelClass}>Nom</label>
                  <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required className={inputClass} placeholder="Votre nom" />
                </div>
                <div>
                  <label htmlFor="prenom" className={labelClass}>Prénom</label>
                  <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required className={inputClass} placeholder="Votre prénom" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="vous@entreprise.com" />
                </div>
                <div>
                  <label htmlFor="telephone" className={labelClass}>Téléphone</label>
                  <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} className={inputClass} placeholder="+229 XX XX XX XX" />
                </div>
              </div>

              <div>
                <label htmlFor="objet" className={labelClass}>Objet</label>
                <input type="text" id="objet" name="objet" value={formData.objet} onChange={handleChange} required className={inputClass} placeholder="Ex. : application de réservation pour mon entreprise" />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className={inputClass + " resize-none"} placeholder="Décrivez votre besoin, vos délais, votre budget…" />
              </div>

              <div aria-live="polite">
                {submitStatus === "success" && (
                  <p className="flex items-center gap-3 rounded-xl border border-green-living/30 bg-green-living/10 px-4 py-3 text-green-living">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    Message envoyé ! Nous vous répondrons dans les plus brefs délais.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="rounded-xl border border-coral-red/30 bg-coral-red/10 px-4 py-3 text-coral-red">
                    Une erreur est survenue. Réessayez ou écrivez à {CONTACT_EMAIL}.
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitStatus === "sending"}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-brand px-8 py-4 font-semibold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-5 w-5" />
                {submitStatus === "sending" ? "Envoi en cours…" : "Envoyer le message"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6 lg:col-span-5">
            <div className="rounded-[2rem] bg-ink p-8 text-paper">
              <h2 className="font-display text-2xl font-bold">Nos coordonnées</h2>
              <ul className="mt-6 space-y-5">
                {contactInfo.map((info) => {
                  const body = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper/10 text-mint-bright">
                        <info.icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-semibold">{info.title}</span>
                        {info.lines.map((line) => (
                          <span key={line} className="block text-sm text-paper/60">{line}</span>
                        ))}
                      </span>
                    </>
                  );
                  return (
                    <li key={info.title}>
                      {info.href ? (
                        <a href={info.href} className="flex items-start gap-4 hover:text-mint-bright transition-colors">{body}</a>
                      ) : (
                        <div className="flex items-start gap-4">{body}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-white p-8 ring-1 ring-ink/10">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-brand" />
                <h3 className="font-display font-bold">Horaires d&apos;ouverture</h3>
              </div>
              <dl className="mt-4 space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <dt className="text-ink/60">{h.day}</dt>
                    <dd className="font-semibold">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="h-56 overflow-hidden rounded-[2rem] ring-1 ring-ink/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126085.86812898815!2d2.3644238!3d6.3702928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a9a3ccccc1c3%3A0xd1e4e3d0d5e76efe!2sCotonou%2C%20Benin!5e0!3m2!1sfr!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Wakalo Corp - Cotonou, Bénin"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
