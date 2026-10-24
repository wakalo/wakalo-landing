import Image from "next/image";
import { MapPin } from "lucide-react";
import Reveal from "@/components/corp/Reveal";
import SectionLabel from "@/components/corp/SectionLabel";

const cities = [
  { name: "Cotonou", subtitle: "Capitale économique" },
  { name: "Porto-Novo", subtitle: "Capitale administrative" },
  { name: "Parakou", subtitle: "Ville du nord" },
];

export default function Coverage() {
  return (
    <section id="coverage" className="scroll-mt-16 bg-white text-ink py-24 lg:py-32">
      <div className="max-w-7xl mx-auto grid gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
        <Reveal>
          <SectionLabel index="04">Couverture</SectionLabel>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Du sud au nord, à travers tout le Bénin.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            Nous démarrons par les grands axes et étendons le réseau ville après ville.
          </p>
          <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {cities.map((c) => (
              <li key={c.name} className="flex items-center justify-between py-5">
                <span className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-brand" />
                  <span className="font-display text-xl font-semibold">{c.name}</span>
                </span>
                <span className="text-sm text-ink/50">{c.subtitle}</span>
              </li>
            ))}
            <li className="py-5 text-ink/60">+ 9 autres villes ciblées</li>
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative mx-auto aspect-[2/3] w-full max-w-sm rounded-[2rem] bg-paper p-6">
            <Image
              src="/benin/carte du benin.png"
              alt="Carte du Bénin avec les villes desservies par Wakalo"
              fill
              sizes="(min-width: 1024px) 24rem, 80vw"
              className="object-contain p-6"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
