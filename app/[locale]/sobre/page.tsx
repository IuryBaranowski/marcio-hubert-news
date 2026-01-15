"use client";

import AboutHeroSection from "../../components/AboutHeroSection";
import ProfessionalTrajectorySection from "../../components/ProfessionalTrajectorySection";
import TimelineSection from "../../components/TimelineSection";
import EditorialPrinciplesDetailSection from "../../components/EditorialPrinciplesDetailSection";
import CoverageAreasSection from "../../components/CoverageAreasSection";
import ClosingMissionSection from "../../components/ClosingMissionSection";
import SimpleNewsletterCTA from "../../components/SimpleNewsletterCTA";
import Footer from "../../components/Footer";

export default function SobrePage() {
  return (
    <main className="font-sans bg-white text-[#2C2C2C] antialiased">
      <AboutHeroSection
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
