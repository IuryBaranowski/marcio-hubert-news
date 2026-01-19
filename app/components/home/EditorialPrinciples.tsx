"use client";

import { useTranslations } from "next-intl";

interface Principle {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export default function EditorialPrinciples() {
  const t = useTranslations("home.editorialPrinciples");
  
  const principles: Principle[] = [
    {
      icon: "fa-solid fa-balance-scale",
      title: t("principles.impartial.title"),
      description: t("principles.impartial.description"),
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: "fa-solid fa-crosshairs",
      title: t("principles.strategic.title"),
      description: t("principles.strategic.description"),
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: t("principles.credibility.title"),
      description: t("principles.credibility.description"),
      bgColor: "bg-red-100",
      iconColor: "text-[#C8102E]",
    },
  ];
  return (
    <section className="py-12 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-serif font-bold text-2xl md:text-4xl text-[#0A1628] mb-2 md:mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-3xl mx-auto">
            {t("subtitle")}
          </p>

          {/* Logos */}
          <div className="mt-6 md:mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
              {/* Logo 1 */}
              <a
                href="#"
                aria-label="Parceiro 1"
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-200 p-5 md:p-7 h-28 md:h-50 flex items-center justify-center">
                  <img
                    src="/images/uslands-logo.jpeg"
                    alt="Logo Parceiro 1"
                    className="h-full w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity md:grayscale md:group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              </a>

              {/* Logo 2 */}
              <a
                href="#"
                aria-label="Parceiro 2"
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-200 p-5 md:p-7 h-28 md:h-50 flex items-center justify-center">
                  <img
                    src="/images/noticias-logo-dois.jpeg"
                    alt="Logo Parceiro 2"
                    className="h-full w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity md:grayscale md:group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              </a>

              {/* Logo 3 */}
              <a
                href="#"
                aria-label="Parceiro 3"
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-200 p-5 md:p-7 h-28 md:h-50 flex items-center justify-center">
                  <img
                    src="/images/hHubert.jpeg"
                    alt="Logo Parceiro 3"
                    className="h-full w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity md:grayscale md:group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${principle.bgColor} rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto`}
              >
                <i
                  className={`${principle.icon} ${principle.iconColor} text-2xl md:text-3xl`}
                ></i>
              </div>
              <h3 className="font-serif font-bold text-lg md:text-2xl text-[#0A1628] text-center mb-3 md:mb-4">
                {principle.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base text-center leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div> */}

        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <i className="fa-solid fa-quote-left text-[#C8102E] text-3xl md:text-4xl mb-4 md:mb-6"></i>
            <blockquote className="font-serif text-lg md:text-2xl text-white leading-relaxed mb-4 md:mb-6 italic">
              "A informação só tem valor quando ajuda a decidir melhor. Nosso
              trabalho é transformar contexto e leitura institucional em
              estratégia, previsibilidade e proteção."
            </blockquote>
            <p className="text-gray-300 text-sm md:text-base font-semibold">
              Marcio Hubert, Strategic Communication – USA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}