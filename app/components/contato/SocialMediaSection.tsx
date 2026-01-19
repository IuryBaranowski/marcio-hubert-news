"use client";

import { useTranslations } from "next-intl";

export default function SocialMediaSection() {
  const t = useTranslations("contato.socialMedia");
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <a
            href="#"
            className="bg-[#F5F5F5] rounded-xl p-6 md:p-8 text-center hover:shadow-xl transition-all transform hover:scale-105 group"
          >
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 transition-colors">
              <i className="fa-brands fa-youtube text-white text-2xl md:text-3xl"></i>
            </div>
            <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-2">
              {t("youtube.name")}
            </h3>
            <p className="text-gray-600 text-xs md:text-sm mb-3">
              {t("youtube.description")}
            </p>
            <span className="text-[#C8102E] font-semibold text-xs md:text-sm">
              {t("youtube.handle")}
            </span>
          </a>

          <a
            href="#"
            className="bg-[#F5F5F5] rounded-xl p-6 md:p-8 text-center hover:shadow-xl transition-all transform hover:scale-105 group"
          >
            <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-800 transition-colors">
              <i className="fa-brands fa-linkedin text-white text-2xl md:text-3xl"></i>
            </div>
            <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-2">
              {t("linkedin.name")}
            </h3>
            <p className="text-gray-600 text-xs md:text-sm mb-3">
              {t("linkedin.description")}
            </p>
            <span className="text-[#C8102E] font-semibold text-xs md:text-sm">
              {t("linkedin.handle")}
            </span>
          </a>

          <a
            href="#"
            className="bg-[#F5F5F5] rounded-xl p-6 md:p-8 text-center hover:shadow-xl transition-all transform hover:scale-105 group"
          >
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-800 transition-colors">
              <i className="fa-brands fa-x-twitter text-white text-2xl md:text-3xl"></i>
            </div>
            <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-2">
              {t("twitter.name")}
            </h3>
            <p className="text-gray-600 text-xs md:text-sm mb-3">
              {t("twitter.description")}
            </p>
            <span className="text-[#C8102E] font-semibold text-xs md:text-sm">
              {t("twitter.handle")}
            </span>
          </a>

          <a
            href="#"
            className="bg-[#F5F5F5] rounded-xl p-6 md:p-8 text-center hover:shadow-xl transition-all transform hover:scale-105 group"
          >
            <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-700 transition-colors">
              <i className="fa-brands fa-instagram text-white text-2xl md:text-3xl"></i>
            </div>
            <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-2">
              {t("instagram.name")}
            </h3>
            <p className="text-gray-600 text-xs md:text-sm mb-3">
              {t("instagram.description")}
            </p>
            <span className="text-[#C8102E] font-semibold text-xs md:text-sm">
              {t("instagram.handle")}
            </span>
          </a>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-gray-600 text-sm md:text-base">
            {t("note")}
          </p>
        </div>
      </div>
    </section>
  );
}
