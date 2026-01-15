"use client";

import { useTranslations } from "next-intl";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import LatestNewsSection from "../components/LatestNewsSection";
import CategoryHighlights from "../components/CategoryHighlights";
import TVSection from "../components/TVSection";
import AboutMarcioSection from "../components/AboutMarcioSection";
import EventsSection from "../components/EventsSection";
import EditorialPrinciples from "../components/EditorialPrinciples";
import NewsletterCTA from "../components/NewsletterCTA";
import Footer from "../components/Footer";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="font-sans bg-white text-[#2C2C2C] antialiased">
      {/* <Header /> */}
      <HeroSection />
      <LatestNewsSection />
      <CategoryHighlights />
      <TVSection />
      <AboutMarcioSection />
      <EventsSection />
      <EditorialPrinciples />
      <NewsletterCTA />
      <Footer />
    </main>
  );
}