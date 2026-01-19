"use client";

import { useTranslations } from "next-intl";
import HeroSection from "../../components/shared/HeroSection";
import ContactIntroSection from "../../components/contato/ContactIntroSection";
import ContactFormSection from "../../components/contato/ContactFormSection";
import DirectContactChannelsSection from "../../components/contato/DirectContactChannelsSection";
import ContactExpectationsSection from "../../components/contato/ContactExpectationsSection";
import SocialMediaSection from "../../components/contato/SocialMediaSection";
import ContactClosingSection from "../../components/contato/ContactClosingSection";
import Footer from "../../components/shared/Footer";

export default function ContatoPage() {
  const t = useTranslations("contato.hero");
  
  return (
    <main className="font-sans bg-white text-[#2C2C2C] antialiased">
      <HeroSection
        badge={{
          icon: "fa-solid fa-comments",
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
      <ContactIntroSection />
      <ContactFormSection />
      <DirectContactChannelsSection />
      <ContactExpectationsSection />
      <SocialMediaSection />
      <ContactClosingSection />
      <Footer />
    </main>
  );
}
