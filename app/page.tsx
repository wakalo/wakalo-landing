import CorpHero from "@/components/corp/CorpHero";
import WhatWeDo from "@/components/corp/WhatWeDo";
import Services from "@/components/corp/Services";
import Method from "@/components/corp/Method";
import WakaloShowcase from "@/components/corp/WakaloShowcase";
import TeamSection from "@/components/corp/TeamSection";
import ProjectCTA from "@/components/corp/ProjectCTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <CorpHero />
      <WhatWeDo />
      <Services />
      <Method />
      <WakaloShowcase />
      <TeamSection />
      <ProjectCTA />
      <Footer />
      <BackToTop />
    </main>
  );
}
