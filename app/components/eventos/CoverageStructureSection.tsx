"use client";

import { useTranslations } from "next-intl";

interface StructureItem {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

export default function CoverageStructureSection() {
  const t = useTranslations("eventos.coverageStructure");
  
  const structureItems: StructureItem[] = [
    {
      icon: "fa-solid fa-circle-info",
      title: t("context.title"),
      description: t("context.description"),
      bgColor: "bg-blue-600",
    },
    {
      icon: "fa-solid fa-star",
      title: t("keyMoments.title"),
      description: t("keyMoments.description"),
      bgColor: "bg-green-600",
    },
    {
      icon: "fa-solid fa-microscope",
      title: t("analysis.title"),
      description: t("analysis.description"),
      bgColor: "bg-purple-600",
    },
    {
      icon: "fa-solid fa-photo-film",
      title: t("multimedia.title"),
      description: t("multimedia.description"),
      bgColor: "bg-red-600",
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

        <div className="max-w-4xl mx-auto bg-[#F5F5F5] rounded-2xl p-8 md:p-12">
          <div className="space-y-8 md:space-y-10">
            {structureItems.map((item, index) => (
              <div key={index}>
                <div className="flex items-start space-x-4 mb-4">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 ${item.bgColor} rounded-xl flex items-center justify-center shrink-0`}
                  >
                    <i className={`${item.icon} text-white text-lg md:text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
