"use client";

import { useTranslations } from "next-intl";

export default function DirectContactChannelsSection() {
  const t = useTranslations("contato.directChannels");
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="bg-[#F5F5F5] rounded-2xl p-8 md:p-10 text-center hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-[#C8102E] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <i className="fa-solid fa-envelope text-white text-2xl md:text-3xl"></i>
            </div>
            <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-3">
              {t("generalEmail.title")}
            </h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              {t("generalEmail.description")}
            </p>
            <a
              href="mailto:contato@marciohubertnews.com"
              className="text-[#C8102E] font-semibold text-base md:text-lg hover:underline"
            >
              contato@marciohubertnews.com
            </a>
            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-300">
              <p className="text-xs md:text-sm text-gray-500">
                {t("generalEmail.response")}
              </p>
            </div>
          </div>

          <div className="bg-[#F5F5F5] rounded-2xl p-8 md:p-10 text-center hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <i className="fa-solid fa-newspaper text-white text-2xl md:text-3xl"></i>
            </div>
            <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-3">
              {t("pressOffice.title")}
            </h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              {t("pressOffice.description")}
            </p>
            <a
              href="mailto:imprensa@marciohubertnews.com"
              className="text-[#C8102E] font-semibold text-base md:text-lg hover:underline"
            >
              imprensa@marciohubertnews.com
            </a>
            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-300">
              <p className="text-xs md:text-sm text-gray-500">{t("pressOffice.response")}</p>
            </div>
          </div>

          <div className="bg-[#F5F5F5] rounded-2xl p-8 md:p-10 text-center hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <i className="fa-solid fa-briefcase text-white text-2xl md:text-3xl"></i>
            </div>
            <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-3">
              {t("commercial.title")}
            </h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              {t("commercial.description")}
            </p>
            <a
              href="mailto:comercial@marciohubertnews.com"
              className="text-[#C8102E] font-semibold text-base md:text-lg hover:underline"
            >
              comercial@marciohubertnews.com
            </a>
            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-300">
              <p className="text-xs md:text-sm text-gray-500">
                {t("commercial.response")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <i className="fa-solid fa-phone text-[#C8102E] text-2xl md:text-3xl"></i>
                <h3 className="font-serif font-bold text-xl md:text-2xl text-white">
                  {t("phone.title")}
                </h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm md:text-base">
                {t("phone.description")}
              </p>
              <a
                href="tel:+5561999999999"
                className="text-white font-bold text-xl md:text-2xl hover:text-[#C8102E] transition-colors block"
              >
                +55 61 99999-9999
              </a>
              <p className="text-gray-400 text-xs md:text-sm mt-2">
                {t("phone.schedule")}
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-4">
                <i className="fa-solid fa-location-dot text-[#C8102E] text-2xl md:text-3xl"></i>
                <h3 className="font-serif font-bold text-xl md:text-2xl text-white">
                  {t("address.title")}
                </h3>
              </div>
              <p className="text-gray-300 mb-2 text-sm md:text-base">
                Marcio Hubert News
                <br />
                SCS Quadra 02, Bloco C, Sala 404
                <br />
                Edifício Tancredo Neves
                <br />
                Brasília, DF – CEP 70300-500
              </p>
              <p className="text-gray-400 text-xs md:text-sm mt-4">
                {t("address.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
