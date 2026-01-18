"use client";

import HeroSection from "../../components/shared/HeroSection";
import ContactIntroSection from "../../components/contato/ContactIntroSection";
import ContactFormSection from "../../components/contato/ContactFormSection";
import DirectContactChannelsSection from "../../components/contato/DirectContactChannelsSection";
import ContactExpectationsSection from "../../components/contato/ContactExpectationsSection";
import SocialMediaSection from "../../components/contato/SocialMediaSection";
import ContactClosingSection from "../../components/contato/ContactClosingSection";
import Footer from "../../components/shared/Footer";

export default function ContatoPage() {
  return (
    <main className="font-sans bg-white text-[#2C2C2C] antialiased">
      <HeroSection
        badge={{
          icon: "fa-solid fa-comments",
          text: "Entre em Contato",
        }}
        title={
          <>
            Estamos Prontos para
            <br />
            Ouvir Você
          </>
        }
        description="Seja você um leitor, jornalista, parceiro comercial ou representante de imprensa, valorizamos sua mensagem. Entre em contato conosco para sugestões de pauta, parcerias estratégicas, solicitações de entrevista ou qualquer outra questão profissional."
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
