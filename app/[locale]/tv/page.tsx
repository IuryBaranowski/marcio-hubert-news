"use client";

import HeroSection from "../../components/shared/HeroSection";
import VideoIntroSection from "../../components/tv/VideoIntroSection";
import VideoStyleSection from "../../components/tv/VideoStyleSection";
import LatestVideosSection from "../../components/tv/LatestVideosSection";
import VideoCategoriesSection from "../../components/tv/VideoCategoriesSection";
import SubscribeCTASection from "../../components/tv/SubscribeCTASection";
import SimpleNewsletterCTA from "../../components/shared/SimpleNewsletterCTA";
import Footer from "../../components/shared/Footer";

export default function TVPage() {
  return (
    <main className="font-sans bg-white text-[#2C2C2C] antialiased">
      <HeroSection
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
