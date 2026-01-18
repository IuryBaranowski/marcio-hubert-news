"use client";

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
  return (
    <main className="font-sans bg-white text-[#2C2C2C] antialiased">
      <HeroSection
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
