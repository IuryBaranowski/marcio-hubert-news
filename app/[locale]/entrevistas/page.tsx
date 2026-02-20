"use client";

import { useTranslations } from "next-intl";
import HeroSection from "../../components/shared/HeroSection";
import EntrevistasVitrine from "../../components/entrevistas/EntrevistasVitrine";
import Footer from "../../components/shared/Footer";

export default function EntrevistasPage() {
  const t = useTranslations("entrevistas.hero");

  return (
    <main className="font-sans bg-white text-[#2C2C2C] antialiased">
      <HeroSection
        badge={{
          icon: "fa-solid fa-microphone",
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
      <EntrevistasVitrine />
      <Footer />
    </main>
  );
}
