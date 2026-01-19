"use client";

import { useTranslations } from "next-intl";
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
  const t = useTranslations("eventos.hero");
  const tNewsletter = useTranslations("eventos.newsletter");
  
  return (
    <main className="font-sans bg-white text-[#2C2C2C] antialiased">
      <HeroSection
        badge={{
          icon: "fa-solid fa-calendar-days",
          text: t("badge"),
        }}
        title={
          <>
            {t("title")}
            <br />
            {t("title2")}
          </>
        }
        description={t("description")}
      />
      <EventsIntroSection />
      <EventCoverageFormatSection />
      <UpcomingEventsSection />
      <PastEventsSection />
      <CoverageStructureSection />
      <EventTypesSection />
      <EventCommitmentSection />
      <SimpleNewsletterCTA
        title={tNewsletter("title")}
        description={tNewsletter("description")}
        source="eventos"
      />
      <Footer />
    </main>
  );
}
