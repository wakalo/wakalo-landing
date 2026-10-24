import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/links";
import Reveal from "./Reveal";

export default function ProjectCTA() {
  return (
    <section className="bg-cream px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink text-cream">
        <Image
          src="/benin/cotonou-1.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ochre">Basés à Cotonou · Ouverts au monde</p>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Parlons de votre projet.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-cream/70">
              Une idée d&apos;application, un outil à moderniser, un partenariat ? Racontez-nous : nous
              revenons vers vous sous 48 h.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ochre px-7 py-4 font-semibold text-white transition-colors hover:bg-ochre-dark"
              >
                Lancer un projet
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-7 py-4 font-semibold transition-colors hover:bg-cream hover:text-ink"
              >
                <Mail className="h-5 w-5" />
                {CONTACT_EMAIL}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
