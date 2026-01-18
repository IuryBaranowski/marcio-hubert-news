"use client";

import { useTranslations } from "next-intl";
import HeroSection from "../components/home/HeroSection";
import CategoryHighlights from "../components/home/CategoryHighlights";
import TVSection from "../components/home/TVSection";
import AboutMarcioSection from "../components/home/AboutMarcioSection";
import EditorialPrinciples from "../components/home/EditorialPrinciples";
import Footer from "../components/shared/Footer";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="font-sans bg-white text-[#2C2C2C] antialiased">
      <HeroSection />
      {/* <LatestNewsSection /> */}
      <CategoryHighlights />
      <TVSection />
      <AboutMarcioSection />
      {/* <EventsSection /> */}
      <EditorialPrinciples />
      {/* <NewsletterCTA /> */}
      <Footer />
    </main>
  );
}