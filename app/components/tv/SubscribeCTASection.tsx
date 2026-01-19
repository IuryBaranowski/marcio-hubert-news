"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function SubscribeCTASection() {
  const t = useTranslations("tv.subscribe");
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C8102E] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 md:mb-6">
            <i className="fa-brands fa-youtube text-red-600"></i>
            <span className="text-white text-xs md:text-sm font-semibold">
              {t("badge")}
            </span>
          </div>
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-white mb-4 md:mb-6 leading-tight">
            {t("title")}
            <br />
            {t("title2")}
          </h2>
          <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6 md:mb-10">
            {t("description")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-8 md:mb-16">
          <Link
            href="#"
            className="inline-flex items-center space-x-3 px-8 md:px-10 py-4 md:py-5 bg-red-600 text-white font-bold text-base md:text-lg rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-2xl"
          >
            <i className="fa-brands fa-youtube text-xl md:text-2xl"></i>
            <span>{t("ctaSubscribe")}</span>
          </Link>
          <Link
            href="#"
            className="inline-flex items-center space-x-3 px-8 md:px-10 py-4 md:py-5 bg-white/10 backdrop-blur-sm text-white font-bold text-base md:text-lg rounded-lg hover:bg-white/20 transition-all border border-white/20"
          >
            <i className="fa-solid fa-bell"></i>
            <span>{t("ctaNotifications")}</span>
          </Link>
        </div>

        <div className="mt-8 md:mt-16 grid grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-white font-bold text-3xl md:text-4xl mb-2">
              200+
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              {t("stats.videos")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-white font-bold text-3xl md:text-4xl mb-2">
              50K+
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              {t("stats.subscribers")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-white font-bold text-3xl md:text-4xl mb-2">
              2M+
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              {t("stats.views")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
