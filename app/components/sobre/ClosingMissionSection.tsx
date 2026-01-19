"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ClosingMissionSection() {
  const t = useTranslations("sobre.closingMission");
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C8102E] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <h2 className="font-serif font-bold text-3xl md:text-5xl text-white mb-6 md:mb-8 leading-tight">
          {t("title")}
        </h2>
        <div className="space-y-4 md:space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed mb-8 md:mb-12">
          <p>
            {t("description1")}
          </p>
          <p>
            {t("description2")}
          </p>
          <p>
            {t("description3")}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 max-w-3xl mx-auto mb-8 md:mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <i className="fa-solid fa-bullseye text-[#C8102E] text-3xl md:text-4xl"></i>
            <h3 className="font-serif font-bold text-2xl md:text-3xl text-white">
              {t("vision.title")}
            </h3>
          </div>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            {t("vision.description")}
          </p>
        </div>

        <div>
          <Link
            href="#"
            className="inline-flex items-center space-x-3 px-8 md:px-10 py-4 md:py-5 bg-[#C8102E] text-white font-bold text-base md:text-lg rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-2xl"
          >
            <span>{t("cta")}</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
