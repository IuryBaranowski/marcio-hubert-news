"use client";

import { useTranslations } from "next-intl";

export default function EventsIntroSection() {
  const t = useTranslations("eventos.intro");
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-6 leading-tight">
            {t("title")}
          </h2>
          <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
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
        </div>
      </div>
    </section>
  );
}
