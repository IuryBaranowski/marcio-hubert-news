"use client";

import { useTranslations } from "next-intl";
import HeroSection from "../../components/shared/HeroSection";
import PalestrasVitrine from "../../components/palestras/PalestrasVitrine";
import Footer from "../../components/shared/Footer";

export default function PalestrasPage() {
  const t = useTranslations("eventos.hero");

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
      <PalestrasVitrine />
      <Footer />
    </main>
  );
}
