import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Plus Jakarta Sans - Warm, humanist font (matching the app)
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-satoshi",
  display: "swap",
});

// Space Grotesk - Technical precision for display and numbers
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Using Space Grotesk for both display and mono for consistency
const cabinet = spaceGrotesk;

export const metadata: Metadata = {
  title: "Wakalo Corp — Solutions numériques innovantes au Bénin",
  description:
    "Wakalo Corp est une entreprise du numérique basée à Cotonou. Nous concevons des applications web et mobiles sur mesure pour nos clients et développons nos propres produits, dont Wakalo, l'application de covoiturage.",
  keywords: [
    "Wakalo Corp",
    "développement d'applications",
    "application mobile",
    "site web",
    "transformation numérique",
    "Bénin",
    "Cotonou",
    "covoiturage",
    "Wakalo",
  ],
  authors: [{ name: "Wakalo Corp" }],
  openGraph: {
    type: "website",
    locale: "fr_BJ",
    url: "https://wakalo.online/",
    title: "Wakalo Corp — Solutions numériques innovantes",
    description: "Applications sur mesure et produits numériques conçus au Bénin.",
    siteName: "Wakalo Corp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wakalo Corp — Solutions numériques innovantes",
    description: "Applications sur mesure et produits numériques conçus au Bénin.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1220",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${plusJakarta.variable} ${cabinet.variable} ${spaceGrotesk.variable} h-full`}
    >
      <body className="min-h-full">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
