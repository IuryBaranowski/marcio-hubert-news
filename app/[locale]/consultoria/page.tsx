"use client";

import { useTranslations } from "next-intl";
import HeroSection from "../../components/shared/HeroSection";
import NewsIntroSection from "../../components/consultoria/NewsIntroSection";
import NewsCategoriesSection from "../../components/consultoria/NewsCategoriesSection";
import ArticlesGridIntroSection from "../../components/consultoria/ArticlesGridIntroSection";
import FilterSection from "../../components/consultoria/FilterSection";
import ArticlesGridSection from "../../components/consultoria/ArticlesGridSection";
import ReadingExperienceSection from "../../components/consultoria/ReadingExperienceSection";
import NewsletterCTA from "../../components/home/NewsletterCTA";
import Footer from "../../components/shared/Footer";

export default function ConsultoriaPage() {
  const t = useTranslations("noticias.hero");
  
  return (
    <main className="font-sans bg-white text-[#2C2C2C] antialiased">
      <HeroSection
        badge={{
          icon: "fa-solid fa-newspaper",
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
      <NewsIntroSection />
      <NewsCategoriesSection />
      <ArticlesGridIntroSection />
      <FilterSection />
      <ArticlesGridSection />
      <ReadingExperienceSection />
      <NewsletterCTA />
      <Footer />
    </main>
  );
}
