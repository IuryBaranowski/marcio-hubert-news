"use client";

import { useTranslations } from "next-intl";

export default function NewsIntroSection() {
  const t = useTranslations("noticias.intro");
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#0A1628] mb-6">
            {t("title")}
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            {t("description1")}
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {t("description2")}
          </p>
        </div>
      </div>
    </section>
  );
}
