"use client";

import { useTranslations } from "next-intl";
import HeroSection from "../../components/shared/HeroSection";
import VideoIntroSection from "../../components/tv/VideoIntroSection";
import VideoStyleSection from "../../components/tv/VideoStyleSection";
import LatestVideosSection from "../../components/tv/LatestVideosSection";
import VideoCategoriesSection from "../../components/tv/VideoCategoriesSection";
import SubscribeCTASection from "../../components/tv/SubscribeCTASection";
import SimpleNewsletterCTA from "../../components/shared/SimpleNewsletterCTA";
import Footer from "../../components/shared/Footer";

export default function TVPage() {
  const t = useTranslations("tv.hero");
  
  return (
    <main className="font-sans bg-white text-[#2C2C2C] antialiased">
      <HeroSection
        badge={{
          icon: "fa-brands fa-youtube",
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
      <VideoIntroSection />
      <VideoStyleSection />
      <LatestVideosSection />
      <VideoCategoriesSection />
      <SubscribeCTASection />
      <SimpleNewsletterCTA source="tv" />
      <Footer />
    </main>
  );
}
