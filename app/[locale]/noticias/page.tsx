"use client";

import { useTranslations } from "next-intl";
import HeroSection from "../../components/shared/HeroSection";
import NewsIntroSection from "../../components/noticias/NewsIntroSection";
import NewsCategoriesSection from "../../components/noticias/NewsCategoriesSection";
import ArticlesGridIntroSection from "../../components/noticias/ArticlesGridIntroSection";
import FilterSection from "../../components/noticias/FilterSection";
import ArticlesGridSection from "../../components/noticias/ArticlesGridSection";
import ReadingExperienceSection from "../../components/noticias/ReadingExperienceSection";
import NewsletterCTA from "../../components/home/NewsletterCTA";
import Footer from "../../components/shared/Footer";

export default function NoticiasPage() {
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
