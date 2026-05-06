"use client";

import { motion } from "framer-motion";
import { Share2, MessageCircle, AtSign, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Comment ça marche", href: "#" },
    { name: "Tarifs", href: "#" },
    { name: "Devenir conducteur", href: "#" },
    { name: "Application mobile", href: "#" },
  ],
  company: [
    { name: "À propos", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Carrières", href: "#" },
    { name: "Contact", href: "#" },
  ],
  support: [
    { name: "Centre d'aide", href: "#" },
    { name: "Sécurité", href: "#" },
    { name: "Politique de confidentialité", href: "#" },
    { name: "Conditions d'utilisation", href: "#" },
  ],
};

const socialLinks = [
  { icon: Share2, href: "#", label: "Facebook" },
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: AtSign, href: "#", label: "Instagram" },
  { icon: Mail, href: "#", label: "LinkedIn" },
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
