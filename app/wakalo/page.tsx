import type { Metadata } from "next";
import WakaloHero from "@/components/wakalo/WakaloHero";
import HowItWorks from "@/components/wakalo/HowItWorks";
import Features from "@/components/wakalo/Features";
import Mission from "@/components/wakalo/Mission";
import Coverage from "@/components/wakalo/Coverage";
import BetaCTA from "@/components/wakalo/BetaCTA";
import FAQ from "@/components/wakalo/FAQ";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Wakalo - Covoiturage au Bénin | Voyagez Ensemble",
  description:
    "Rejoignez la révolution du covoiturage au Bénin. Partagez vos trajets en toute sécurité, économisez et voyagez ensemble. Une application Wakalo Corp.",
  openGraph: {
    type: "website",
    locale: "fr_BJ",
    url: "https://wakalo.online/wakalo",
    title: "Wakalo - Covoiturage au Bénin",
    description: "Partagez vos trajets en toute sécurité. Programme bêta ouvert.",
    siteName: "Wakalo",
  },
};

export default function WakaloPage() {
  return (
    <main className="min-h-screen bg-paper">
      <WakaloHero />
      <HowItWorks />
      <Features />
      <Mission />
      <Coverage />
      <BetaCTA />
      <FAQ />
      <Footer />
      <BackToTop />
    </main>
  );
}
