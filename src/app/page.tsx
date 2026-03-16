import HeroSection from "@/components/sections/HeroSection";
import PropositoSection from "@/components/sections/PropositoSection";
import TresForcasSection from "@/components/sections/TresForcasSection";
import {
  ArquitetosSection,
  EstrategistasSection,
  DesenvolvedoresSection,
} from "@/components/sections/PapelDetalhadoSection";
import EncontrosSection from "@/components/sections/EncontrosSection";
import TempoEspacoSection from "@/components/sections/TempoEspacoSection";
import IncentivadoresSection from "@/components/sections/IncentivadoresSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-[#080808] text-white overflow-hidden">
      <HeroSection />
      <PropositoSection />
      <TresForcasSection />
      <ArquitetosSection />
      <EstrategistasSection />
      <DesenvolvedoresSection />
      <EncontrosSection />
      <TempoEspacoSection />
      <IncentivadoresSection />
      <Footer />
    </main>
  );
}
