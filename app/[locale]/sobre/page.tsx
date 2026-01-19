"use client";

import { useTranslations } from "next-intl";
import HeroSection from "../../components/shared/HeroSection";
import ProfessionalTrajectorySection from "../../components/sobre/ProfessionalTrajectorySection";
import TimelineSection from "../../components/sobre/TimelineSection";
import EditorialPrinciplesDetailSection from "../../components/sobre/EditorialPrinciplesDetailSection";
import CoverageAreasSection from "../../components/sobre/CoverageAreasSection";
import ClosingMissionSection from "../../components/sobre/ClosingMissionSection";
import SimpleNewsletterCTA from "../../components/shared/SimpleNewsletterCTA";
import Footer from "../../components/shared/Footer";

export default function SobrePage() {
  const t = useTranslations("sobre.hero");
  
  return (
    <main className="font-sans bg-white text-[#2C2C2C] antialiased">
      <HeroSection
        badge={{
          icon: "fa-solid fa-user-tie",
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
