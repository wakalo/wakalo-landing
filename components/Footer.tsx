"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

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

const footerLinks = {
  product: [
    { name: "Comment ça marche", href: "/wakalo#how-it-works" },
    { name: "Fonctionnalités", href: "/wakalo#features" },
    { name: "Devenir conducteur", href: "/wakalo#beta" },
    { name: "Rejoindre la bêta", href: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__tkL-LRUNTZaVjA2QjVLMjVLTEFPREhRMUtOQTY1Ni4u" },
  ],
  company: [
    { name: "À propos", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "Centre d'aide", href: "/help" },
    { name: "Conditions d'utilisation", href: "/terms" },
    { name: "Mentions légales", href: "/legal" },
  ],
};

const socialLinks = [
  { icon: LinkedinIcon, href: "https://www.linkedin.com/company/wakalo", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: TikTokIcon, href: "#", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-forest-deep via-forest-mid to-green-living text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 30%, rgba(52, 211, 153, 0.1) 30%, rgba(52, 211, 153, 0.1) 70%, transparent 70%),
              linear-gradient(-45deg, transparent 30%, rgba(52, 211, 153, 0.1) 30%, rgba(52, 211, 153, 0.1) 70%, transparent 70%)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-display font-black text-3xl mb-4">
                <span className="text-mint-bright">Wak</span>alo
              </h3>
              <p className="text-slate-200 leading-relaxed mb-6">
                La plateforme de covoiturage qui révolutionne la mobilité au Bénin. Voyagez ensemble,
                économisez ensemble.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:contact@wakalo.online"
                  className="flex items-center gap-3 text-slate-200 hover:text-mint-bright transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>contact@wakalo.online</span>
                </a>
                <a
                  href="tel:+22900000000"
                  className="flex items-center gap-3 text-slate-200 hover:text-mint-bright transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+229 XX XX XX XX</span>
                </a>
                <div className="flex items-center gap-3 text-slate-200">
                  <MapPin className="w-5 h-5" />
                  <span>Cotonou, Bénin</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display font-bold text-lg mb-4">Produit</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-200 hover:text-mint-bright transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display font-bold text-lg mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-200 hover:text-mint-bright transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-200 hover:text-mint-bright transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-slate-300 text-sm"
          >
            © 2025 Wakalo. Tous droits réservés.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-mint-bright/20 flex items-center justify-center text-slate-200 hover:text-mint-bright transition-all"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
