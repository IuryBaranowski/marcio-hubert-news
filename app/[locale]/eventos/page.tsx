"use client";

import HeroSection from "../../components/shared/HeroSection";
import EventsIntroSection from "../../components/eventos/EventsIntroSection";
import EventCoverageFormatSection from "../../components/eventos/EventCoverageFormatSection";
import UpcomingEventsSection from "../../components/eventos/UpcomingEventsSection";
import PastEventsSection from "../../components/eventos/PastEventsSection";
import CoverageStructureSection from "../../components/eventos/CoverageStructureSection";
import EventTypesSection from "../../components/eventos/EventTypesSection";
import EventCommitmentSection from "../../components/eventos/EventCommitmentSection";
import SimpleNewsletterCTA from "../../components/shared/SimpleNewsletterCTA";
import Footer from "../../components/shared/Footer";

export default function EventosPage() {
  return (
    <main className="font-sans bg-white text-[#2C2C2C] antialiased">
      <HeroSection
        badge={{
          icon: "fa-solid fa-calendar-days",
          text: "Cobertura de Eventos",
        }}
        title={
          <>
            Jornalismo Além das
            <br />
            Manchetes dos Eventos
          </>
        }
        description="A presença do Marcio Hubert News nos principais eventos do agronegócio, política e economia garante cobertura aprofundada, análise contextualizada e registro completo dos momentos que movem o Brasil."
      />
      <EventsIntroSection />
      <EventCoverageFormatSection />
      <UpcomingEventsSection />
      <PastEventsSection />
      <CoverageStructureSection />
      <EventTypesSection />
      <EventCommitmentSection />
      <SimpleNewsletterCTA
        title="Receba Cobertura Exclusiva de Eventos"
        description="Seja o primeiro a receber análises, entrevistas e bastidores dos principais eventos do agronegócio, política e economia brasileira."
        source="eventos"
      />
      <Footer />
    </main>
  );
}
