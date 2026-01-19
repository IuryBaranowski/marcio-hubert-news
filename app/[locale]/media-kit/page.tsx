"use client";

import { useTranslations } from "next-intl";
import HeroSection from "../../components/shared/HeroSection";
import MediaKitIntroSection from "../../components/media-kit/MediaKitIntroSection";
import ProfessionalProfileSection from "../../components/media-kit/ProfessionalProfileSection";
import ContentFormatsSection from "../../components/media-kit/ContentFormatsSection";
import AudienceProfileSection from "../../components/media-kit/AudienceProfileSection";
import PressContactSection from "../../components/media-kit/PressContactSection";
import DownloadCTASection from "../../components/media-kit/DownloadCTASection";
import Footer from "../../components/shared/Footer";

export default function MediaKitPage() {
  const t = useTranslations("mediaKit.hero");
  const tCommon = useTranslations("common");
  
  return (
    <main className="font-sans bg-white text-[#2C2C2C] antialiased">
      <HeroSection
        badge={{
          icon: "fa-solid fa-file-lines",
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
        ctaButtons={
          <>
            <a
              href="#"
              className="inline-flex items-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-[#C8102E] text-white font-semibold rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl"
            >
              <i className="fa-solid fa-download"></i>
              <span>{t("ctaDownload")}</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              <i className="fa-solid fa-envelope"></i>
              <span>{t("ctaContact")}</span>
            </a>
          </>
        }
      />
      <MediaKitIntroSection />
      <ProfessionalProfileSection />
      <ContentFormatsSection />
      <AudienceProfileSection />
      <PressContactSection />
      <DownloadCTASection />
      <Footer />
    </main>
  );
}
