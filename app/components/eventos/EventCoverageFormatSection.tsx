"use client";

import { useTranslations } from "next-intl";

interface CoverageFormat {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export default function EventCoverageFormatSection() {
  const t = useTranslations("eventos.coverageFormat");
  
  const coverageFormats: CoverageFormat[] = [
    {
      icon: "fa-solid fa-newspaper",
      title: t("articles.title"),
      description: t("articles.description"),
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: "fa-solid fa-camera",
      title: t("photos.title"),
      description: t("photos.description"),
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: "fa-solid fa-video",
      title: t("video.title"),
      description: t("video.description"),
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
  ];
  return (
    <section className="py-12 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {coverageFormats.map((format, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 md:p-10 hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${format.bgColor} rounded-xl flex items-center justify-center mb-6 mx-auto`}
              >
                <i
                  className={`${format.icon} ${format.iconColor} text-2xl md:text-3xl`}
                ></i>
              </div>
              <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] text-center mb-4">
                {format.title}
              </h3>
              <p className="text-gray-700 text-center leading-relaxed text-sm md:text-base">
                {format.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
