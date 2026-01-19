"use client";

import { useTranslations } from "next-intl";

export default function ContactExpectationsSection() {
  const t = useTranslations("contato.expectations");
  return (
    <section className="py-12 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-[#C8102E] hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4 md:space-x-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-clock text-[#C8102E] text-xl md:text-2xl"></i>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-2 md:mb-3">
                  {t("responseTime.title")}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {t("responseTime.description")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4 md:space-x-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-comments text-blue-600 text-xl md:text-2xl"></i>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-2 md:mb-3">
                  {t("messageTypes.title")}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2 md:mb-3 text-sm md:text-base">
                  {t("messageTypes.subtitle")}
                </p>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start space-x-2">
                    <i className="fa-solid fa-check text-green-600 mt-1"></i>
                    <span>
                      {t("messageTypes.suggestions")}
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fa-solid fa-check text-green-600 mt-1"></i>
                    <span>{t("messageTypes.interviews")}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fa-solid fa-check text-green-600 mt-1"></i>
                    <span>{t("messageTypes.partnerships")}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fa-solid fa-check text-green-600 mt-1"></i>
                    <span>
                      {t("messageTypes.questions")}
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fa-solid fa-check text-green-600 mt-1"></i>
                    <span>{t("messageTypes.feedback")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-green-600 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4 md:space-x-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-shield-halved text-green-600 text-xl md:text-2xl"></i>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-2 md:mb-3">
                  {t("privacy.title")}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {t("privacy.description")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-purple-600 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4 md:space-x-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-handshake text-purple-600 text-xl md:text-2xl"></i>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-2 md:mb-3">
                  {t("professional.title")}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {t("professional.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
