"use client";

import HeroSection from "../../components/shared/HeroSection";
import ProfessionalTrajectorySection from "../../components/sobre/ProfessionalTrajectorySection";
import TimelineSection from "../../components/sobre/TimelineSection";
import EditorialPrinciplesDetailSection from "../../components/sobre/EditorialPrinciplesDetailSection";
import CoverageAreasSection from "../../components/sobre/CoverageAreasSection";
import ClosingMissionSection from "../../components/sobre/ClosingMissionSection";
import SimpleNewsletterCTA from "../../components/shared/SimpleNewsletterCTA";
import Footer from "../../components/shared/Footer";

export default function SobrePage() {
  return (
    <main className="font-sans bg-white text-[#2C2C2C] antialiased">
      <HeroSection
        badge={{
          icon: "fa-solid fa-user-tie",
          text: "Sobre o Editor",
        }}
        title={
          <>
            Jornalismo de Credibilidade
            <br />
            ao Serviço da Informação
          </>
        }
        description="Marcio Hubert é jornalista especializado em agronegócio, política e relações internacionais, com mais de 15 anos de experiência na cobertura dos principais temas que impactam o Brasil e suas relações com o mundo."
      />
      <ProfessionalTrajectorySection />
      <TimelineSection />
      <EditorialPrinciplesDetailSection />
      <CoverageAreasSection />
      <ClosingMissionSection />
      <SimpleNewsletterCTA source="sobre" />
      <Footer />
    </main>
  );
}
