"use client";

import { useTranslations } from "next-intl";

export default function ArticlesGridIntroSection() {
  const t = useTranslations("noticias.articlesGrid");
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-8 md:p-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 md:mb-6">
              <i className="fa-solid fa-sync text-[#C8102E]"></i>
              <span className="text-white text-xs md:text-sm font-semibold">
                {t("badge")}
              </span>
            </div>

            <h2 className="font-serif font-bold text-2xl md:text-4xl text-white mb-4 md:mb-6">
              {t("title")}
            </h2>

            <p className="text-base md:text-xl text-gray-300 leading-relaxed mb-4">
              {t("description1")}
            </p>

            <p className="text-sm md:text-lg text-gray-400 leading-relaxed">
              {t("description2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
