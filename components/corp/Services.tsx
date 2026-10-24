import { Smartphone, Globe, PenTool, Compass } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const services = [
  {
    icon: Smartphone,
    title: "Applications mobiles",
    desc: "Applications iOS et Android performantes, pensées pour les usages et les réseaux locaux.",
    tags: ["iOS", "Android", "Cross-platform"],
  },
  {
    icon: Globe,
    title: "Plateformes web",
    desc: "Sites, portails et outils métiers sur mesure, rapides, sécurisés et faciles à faire évoluer.",
    tags: ["Sites vitrines", "SaaS", "Back-offices"],
  },
  {
    icon: PenTool,
    title: "Design UX/UI",
    desc: "Des interfaces claires et agréables, conçues avec et pour vos utilisateurs.",
    tags: ["Recherche", "Prototypes", "Design system"],
  },
  {
    icon: Compass,
    title: "Conseil & transformation numérique",
    desc: "Nous vous aidons à prioriser, cadrer et piloter vos projets numériques.",
    tags: ["Audit", "Stratégie", "Accompagnement"],
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-paper text-ink py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel index="02">Services</SectionLabel>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Ce que nous construisons pour vous.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:pt-12">
            <p className="text-lg leading-relaxed text-ink/70">
              Une équipe pluridisciplinaire, design, développement et produit, qui accompagne
              startups, PME et institutions de l&apos;idée au lancement.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 border-b border-ink/10">
          {services.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.05}>
                <div className="group grid gap-4 border-t border-ink/10 py-8 transition-colors sm:grid-cols-12 sm:items-center lg:py-10">
                  <span className="font-display text-sm text-ink/40 sm:col-span-1">0{i + 1}</span>
                  <div className="flex items-center gap-4 sm:col-span-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-2xl font-semibold sm:text-3xl">{s.title}</h3>
                  </div>
                  <div className="sm:col-span-6">
                    <p className="leading-relaxed text-ink/70">{s.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink/60 ring-1 ring-ink/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
