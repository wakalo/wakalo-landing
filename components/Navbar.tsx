"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/#services", label: "Services" },
  { href: "/#products", label: "Produits" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

// Pages that belong to the Wakalo carpooling app keep its green identity
const APP_PATHS = ["/wakalo", "/help", "/terms", "/legal"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Page may already be scrolled (anchor link, restored position) before the listener exists
    const frame = requestAnimationFrame(handleScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isApp = APP_PATHS.some((p) => pathname.startsWith(p));
  const isHome = pathname === "/";

  const barClass = isApp
    ? "bg-forest-deep/97 backdrop-blur-md shadow-lg shadow-forest-deep/20"
    : scrolled || !isHome || isMenuOpen
      ? "bg-cream/90 backdrop-blur-md border-b border-ink/10"
      : "bg-transparent";

  const linkClass = (active: boolean) =>
    isApp
      ? active
        ? "text-mint-bright"
        : "text-slate-300 hover:text-white"
      : active
        ? "text-ochre"
        : "text-ink/70 hover:text-ink";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${barClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-1.5" aria-label="Wakalo Corp, accueil">
            <span className={`font-display font-bold text-xl tracking-tight ${isApp ? "text-white" : "text-ink"}`}>
              wakalo
            </span>
            <span className={`font-display text-sm font-medium ${isApp ? "text-mint-bright" : "text-ochre"}`}>
              corp
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium text-sm transition-colors ${linkClass(pathname === link.href)}`}
              >
                {link.label}
              </Link>
            ))}

            {isApp ? (
              <Link
                href="/wakalo#beta"
                className="px-5 py-2 bg-mint-bright text-forest-deep font-bold text-sm rounded-full hover:bg-mint-soft transition-colors"
              >
                Bêta gratuite
              </Link>
            ) : (
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 px-5 py-2.5 bg-ink text-cream font-semibold text-sm rounded-full hover:bg-ochre transition-colors"
              >
                Lancer un projet
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors ${isApp ? "text-slate-300 hover:text-white" : "text-ink"}`}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden border-t ${
              isApp ? "bg-forest-deep border-white/10" : "bg-cream border-ink/10"
            }`}
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 text-lg font-medium transition-colors ${linkClass(pathname === link.href)}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={isApp ? "/wakalo#beta" : "/contact"}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-center px-6 py-3 font-semibold rounded-full mt-4 ${
                  isApp ? "bg-mint-bright text-forest-deep" : "bg-ink text-cream"
                }`}
              >
                {isApp ? "Bêta gratuite" : "Lancer un projet"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
