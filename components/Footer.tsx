import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BETA_FORM_URL, CONTACT_EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/links";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const footerColumns = [
  {
    title: "Entreprise",
    links: [
      { name: "À propos", href: "/about" },
      { name: "Services", href: "/#services" },
      { name: "Notre méthode", href: "/#method" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Produits",
    links: [
      { name: "Wakalo · Covoiturage", href: "/wakalo" },
      { name: "Rejoindre la bêta", href: BETA_FORM_URL, external: true },
    ],
  },
  {
    title: "Support & légal",
    links: [
      { name: "Centre d'aide", href: "/help" },
      { name: "Conditions d'utilisation", href: "/terms" },
      { name: "Mentions légales", href: "/legal" },
    ],
  },
];

const socialLinks = [
  { icon: LinkedinIcon, href: "https://www.linkedin.com/company/wakalo", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: TikTokIcon, href: "#", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-paper">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-display text-3xl font-bold tracking-tight">
              wakalo <span className="text-mint-bright font-medium">corp</span>
            </p>
            <p className="mt-4 max-w-sm text-paper/60 leading-relaxed">
              Entreprise du numérique basée à Cotonou. Nous concevons des applications sur mesure
              et développons nos propres produits.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-paper/70 hover:text-mint-bright transition-colors">
                <Mail className="w-4 h-4" />
                {CONTACT_EMAIL}
              </a>
              <a href={PHONE_HREF} className="flex items-center gap-3 text-paper/70 hover:text-mint-bright transition-colors">
                <Phone className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
              <p className="flex items-center gap-3 text-paper/70">
                <MapPin className="w-4 h-4" />
                Cotonou, Bénin
              </p>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/40 mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    {"external" in link ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-paper/80 hover:text-mint-bright transition-colors"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link href={link.href} className="text-paper/80 hover:text-mint-bright transition-colors">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-paper/10 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-paper/50 text-sm">© {new Date().getFullYear()} Wakalo Corp. Tous droits réservés.</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-paper/15 flex items-center justify-center text-paper/70 hover:text-ink hover:bg-mint-bright hover:border-mint-bright transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
