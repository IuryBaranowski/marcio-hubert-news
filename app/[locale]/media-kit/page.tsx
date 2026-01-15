"use client";

import AboutHeroSection from "../../components/AboutHeroSection";
import MediaKitIntroSection from "../../components/MediaKitIntroSection";
import ProfessionalProfileSection from "../../components/ProfessionalProfileSection";
import ContentFormatsSection from "../../components/ContentFormatsSection";
import AudienceProfileSection from "../../components/AudienceProfileSection";
import PressContactSection from "../../components/PressContactSection";
import DownloadCTASection from "../../components/DownloadCTASection";
import Footer from "../../components/Footer";

export default function MediaKitPage() {
  return (
    <main className="font-sans bg-white text-[#2C2C2C] antialiased">
      <AboutHeroSection
        badge={{
          icon: "fa-solid fa-file-lines",
          text: "Informações para Imprensa e Parcerias",
        }}
        title={
          <>
            Media Kit
            <br />
            Marcio Hubert News
          </>
        }
        description="Informações institucionais, dados de audiência, perfil editorial e contatos para parcerias estratégicas, assessoria de imprensa e oportunidades de colaboração."
        ctaButtons={
          <>
            <a
              href="#"
              className="inline-flex items-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-[#C8102E] text-white font-semibold rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl"
            >
              <i className="fa-solid fa-download"></i>
              <span>Baixar Media Kit Completo (PDF)</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              <i className="fa-solid fa-envelope"></i>
              <span>Entrar em Contato</span>
            </a>
          </>
        }
      />
      <MediaKitIntroSection />
      <ProfessionalProfileSection />
      <ContentFormatsSection />
      <AudienceProfileSection />
      <PressContactSection />
      <DownloadCTASection />
      <Footer />
    </main>
  );
}
