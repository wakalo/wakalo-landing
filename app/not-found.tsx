import Link from "next/link";
import { Home, Mail } from "lucide-react";
import HeroIn from "@/components/corp/HeroIn";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-6 text-ink">
      <div className="max-w-lg text-center">
        <HeroIn>
          <p className="select-none font-display text-[9rem] font-bold leading-none text-brand">404</p>
        </HeroIn>
        <HeroIn delay={0.1}>
          <h1 className="mt-4 font-display text-3xl font-bold">Page introuvable</h1>
          <p className="mt-4 text-lg text-ink/60">La page que vous cherchez n&apos;existe pas ou a été déplacée.</p>
        </HeroIn>
        <HeroIn delay={0.2}>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              <Home className="h-5 w-5" />
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-7 py-4 font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              <Mail className="h-5 w-5" />
              Nous contacter
            </Link>
          </div>
        </HeroIn>
      </div>
    </main>
  );
}
