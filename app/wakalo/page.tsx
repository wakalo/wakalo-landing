import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Impact from "@/components/Impact";
import Coverage from "@/components/Coverage";
import LivingRoute from "@/components/LivingRoute";
import BetaSignup from "@/components/BetaSignup";
import FAQ from "@/components/FAQ";
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
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Benefits />
      <Impact />
      <Coverage />
      <LivingRoute />
      <BetaSignup />
      <FAQ />
      <Footer />
      <BackToTop />
    </main>
  );
}
