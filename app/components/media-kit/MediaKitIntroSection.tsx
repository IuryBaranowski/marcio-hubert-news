"use client";

import { useTranslations } from "next-intl";

export default function MediaKitIntroSection() {
  const t = useTranslations("mediaKit.intro");
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
              {t("title")}
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {t("description")}
            </p>
          </div>

          <div className="bg-[#F5F5F5] rounded-2xl p-8 md:p-10">
            <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-6">
              {t("purpose.title")}
            </h3>
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                {t("purpose.description1")}
              </p>
              <p>
                {t("purpose.description2")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
