"use client";

import ContactHeroSection from "../../components/ContactHeroSection";
import ContactIntroSection from "../../components/ContactIntroSection";
import ContactFormSection from "../../components/ContactFormSection";
import DirectContactChannelsSection from "../../components/DirectContactChannelsSection";
import ContactExpectationsSection from "../../components/ContactExpectationsSection";
import SocialMediaSection from "../../components/SocialMediaSection";
import ContactClosingSection from "../../components/ContactClosingSection";
import Footer from "../../components/Footer";

export default function ContatoPage() {
  return (
    <main className="font-sans bg-white text-[#2C2C2C] antialiased">
      <ContactHeroSection />
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
