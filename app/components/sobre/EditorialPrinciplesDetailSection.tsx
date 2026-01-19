"use client";

import { useTranslations } from "next-intl";

interface Principle {
  icon: string;
  title: string;
  description: string[];
  bgColor: string;
}

export default function EditorialPrinciplesDetailSection() {
  const t = useTranslations("sobre.editorialPrinciples");
  
  const principles: Principle[] = [
    {
      icon: "fa-solid fa-balance-scale",
      title: t("independence.title"),
      description: [
        t("independence.description1"),
        t("independence.description2"),
      ],
      bgColor: "bg-blue-600",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: t("truth.title"),
      description: [
        t("truth.description1"),
        t("truth.description2"),
      ],
      bgColor: "bg-green-600",
    },
    {
      icon: "fa-solid fa-lightbulb",
      title: t("context.title"),
      description: [
        t("context.description1"),
        t("context.description2"),
      ],
      bgColor: "bg-purple-600",
    },
    {
      icon: "fa-solid fa-handshake",
      title: t("commitment.title"),
      description: [
        t("commitment.description1"),
        t("commitment.description2"),
      ],
      bgColor: "bg-[#C8102E]",
    },
  ];
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] rounded-2xl p-8 md:p-10 hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-16 h-16 ${principle.bgColor} rounded-xl flex items-center justify-center mb-6`}
              >
                <i className={`${principle.icon} text-white text-3xl`}></i>
              </div>
              <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-4">
                {principle.title}
              </h3>
              {principle.description.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <i className="fa-solid fa-quote-left text-[#C8102E] text-3xl md:text-4xl mb-6"></i>
            <blockquote className="font-serif text-xl md:text-3xl text-white leading-relaxed mb-6 md:mb-8 italic">
              &ldquo;{t("quote")}&rdquo;
            </blockquote>
            <div className="text-gray-300 font-semibold text-base md:text-lg">
              — Marcio Hubert, Editor-Chefe
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
