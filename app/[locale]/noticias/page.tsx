"use client";

import AboutHeroSection from "../../components/AboutHeroSection";
import NewsIntroSection from "../../components/NewsIntroSection";
import NewsCategoriesSection from "../../components/NewsCategoriesSection";
import ArticlesGridIntroSection from "../../components/ArticlesGridIntroSection";
import FilterSection from "../../components/FilterSection";
import ArticlesGridSection from "../../components/ArticlesGridSection";
import ReadingExperienceSection from "../../components/ReadingExperienceSection";
import NewsletterCTA from "../../components/NewsletterCTA";
import Footer from "../../components/Footer";

export default function NoticiasPage() {
  return (
    <main className="font-sans bg-white text-[#2C2C2C] antialiased">
      <AboutHeroSection
        badge={{
          icon: "fa-solid fa-newspaper",
          text: "Central de Notícias",
        }}
        title={
          <>
            Notícias com Análise
            <br />
            e Contexto Estratégico
          </>
        }
        description="Acompanhe a cobertura completa dos principais acontecimentos em agronegócio, política, economia e relações internacionais. Cada notícia é acompanhada de contexto, análise e perspectivas que vão além da manchete."
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
