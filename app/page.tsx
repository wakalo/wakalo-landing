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

export default function Home() {
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
