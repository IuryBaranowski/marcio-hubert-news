"use client";

import AboutHeroSection from "../../components/AboutHeroSection";
import EventsIntroSection from "../../components/EventsIntroSection";
import EventCoverageFormatSection from "../../components/EventCoverageFormatSection";
import UpcomingEventsSection from "../../components/UpcomingEventsSection";
import PastEventsSection from "../../components/PastEventsSection";
import CoverageStructureSection from "../../components/CoverageStructureSection";
import EventTypesSection from "../../components/EventTypesSection";
import EventCommitmentSection from "../../components/EventCommitmentSection";
import EventsNewsletterCTA from "../../components/EventsNewsletterCTA";
import Footer from "../../components/Footer";

export default function EventosPage() {
  return (
    <main className="font-sans bg-white text-[#2C2C2C] antialiased">
      <AboutHeroSection
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
      <EventsNewsletterCTA />
      <Footer />
    </main>
  );
}
