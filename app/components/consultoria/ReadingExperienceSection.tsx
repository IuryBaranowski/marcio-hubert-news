"use client";

import { useTranslations } from "next-intl";

export default function ReadingExperienceSection() {
  const t = useTranslations("noticias.readingExperience");
  return (
    <section className="py-12 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#C8102E] rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
              <i className="fa-solid fa-book-open text-white text-2xl md:text-3xl"></i>
            </div>

            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-6">
              {t("title")}
            </h2>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t("description1") }} />
              <p>{t("description2")}</p>
              <p dangerouslySetInnerHTML={{ __html: t("description3") }} />
            </div>

            <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-6 md:gap-8">
                <div>
                  <div className="text-[#C8102E] font-bold text-3xl md:text-4xl mb-2">
                    100%
                  </div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">
                    {t("stats.factChecking")}
                  </div>
                </div>
                <div>
                  <div className="text-[#C8102E] font-bold text-3xl md:text-4xl mb-2">
                    Zero
                  </div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">
                    {t("stats.sensationalism")}
                  </div>
                </div>
                <div>
                  <div className="text-[#C8102E] font-bold text-3xl md:text-4xl mb-2">
                    Total
                  </div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">
                    {t("stats.impartiality")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
