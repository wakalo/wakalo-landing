import Image from "next/image";
import { Mail } from "lucide-react";
import { team } from "@/lib/team";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const formatName = (name: string) =>
  name
    .toLowerCase()
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

export default function TeamSection({ index = "05" }: { index?: string }) {
  return (
    <section id="team" className="scroll-mt-16 bg-cream text-ink py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionLabel index={index}>L&apos;équipe</SectionLabel>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Une équipe béninoise, des standards internationaux.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-ink/70">
              Basés à Cotonou, nous réunissons produit, design, technologie et opérations pour
              construire des solutions qui fonctionnent vraiment sur le terrain.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <li key={m.name}>
              <Reveal delay={i * 0.06}>
                <article className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-ink/5">
                    <Image
                      src={m.image}
                      alt={formatName(m.name)}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-x-3 bottom-3 flex justify-end gap-2 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn de ${formatName(m.name)}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-cream text-ink hover:bg-ochre hover:text-white"
                      >
                        <LinkedinIcon className="h-4 w-4" />
                      </a>
                      <a
                        href={m.email}
                        aria-label={`Écrire à ${formatName(m.name)}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-cream text-ink hover:bg-ochre hover:text-white"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{formatName(m.name)}</h3>
                  <p className="text-sm font-medium text-ochre">{m.role}</p>
                  <p className="mt-1 text-sm text-ink/60">{m.title}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
