"use client";

import AboutHeroSection from "../../components/AboutHeroSection";
import VideoIntroSection from "../../components/VideoIntroSection";
import VideoStyleSection from "../../components/VideoStyleSection";
import LatestVideosSection from "../../components/LatestVideosSection";
import VideoCategoriesSection from "../../components/VideoCategoriesSection";
import SubscribeCTASection from "../../components/SubscribeCTASection";
import SimpleNewsletterCTA from "../../components/SimpleNewsletterCTA";
import Footer from "../../components/Footer";

export default function TVPage() {
  return (
    <main className="font-sans bg-white text-[#2C2C2C] antialiased">
      <AboutHeroSection
        badge={{
          icon: "fa-brands fa-youtube",
          text: "Marcio Hubert TV",
        }}
        title={
          <>
            Análise em Vídeo:
            <br />
            Contexto e Profundidade
          </>
        }
        description="Conteúdo audiovisual exclusivo que vai além das manchetes. Análises estratégicas, entrevistas com especialistas e cobertura aprofundada dos temas que impactam o Brasil."
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
