import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
  title: "Wakalo - Covoiturage au Bénin | Voyagez Ensemble",
  description:
    "Rejoignez la révolution du covoiturage au Bénin. Partagez vos trajets en toute sécurité, économisez et voyagez ensemble. Programme bêta 2025.",
  keywords: [
    "covoiturage",
    "Bénin",
    "transport",
    "partage de trajet",
    "mobilité",
    "Wakalo",
    "Cotonou",
    "Porto-Novo",
    "Parakou",
  ],
  authors: [{ name: "Wakalo" }],
  openGraph: {
    type: "website",
    locale: "fr_BJ",
    url: "https://wakalo.online/",
    title: "Wakalo - Covoiturage au Bénin",
    description: "Partagez vos trajets en toute sécurité. Programme bêta 2025.",
    siteName: "Wakalo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wakalo - Covoiturage au Bénin",
    description: "Partagez vos trajets en toute sécurité. Programme bêta 2025.",
  },
  themeColor: "#064E3B",
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
      <body className="min-h-full">{children}</body>
    </html>
  );
}
