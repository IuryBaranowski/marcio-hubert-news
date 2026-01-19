"use client";

import { useTranslations } from "next-intl";

interface ContentFormat {
  icon: string;
  title: string;
  description: string;
  features: string[];
  bgColor: string;
}

export default function ContentFormatsSection() {
  const t = useTranslations("mediaKit.contentFormats");
  
  const contentFormats: ContentFormat[] = [
    {
      icon: "fa-solid fa-newspaper",
      title: t("articles.title"),
      description: t("articles.description"),
      features: t.raw("articles.features") as string[],
      bgColor: "bg-blue-600",
    },
    {
      icon: "fa-solid fa-video",
      title: t("videos.title"),
      description: t("videos.description"),
      features: t.raw("videos.features") as string[],
      bgColor: "bg-red-600",
    },
    {
      icon: "fa-solid fa-calendar-days",
      title: t("events.title"),
      description: t("events.description"),
      features: t.raw("events.features") as string[],
      bgColor: "bg-green-600",
    },
    {
      icon: "fa-solid fa-microphone",
      title: t("interviews.title"),
      description: t("interviews.description"),
      features: t.raw("interviews.features") as string[],
      bgColor: "bg-purple-600",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {contentFormats.map((format, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] rounded-2xl p-8 md:p-10 hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${format.bgColor} rounded-xl flex items-center justify-center mb-6`}
              >
                <i className={`${format.icon} text-white text-2xl md:text-3xl`}></i>
              </div>
              <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-4">
                {format.title}
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                {format.description}
              </p>
              <div className="space-y-3">
                {format.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center space-x-3">
                    <i className="fa-solid fa-check text-[#C8102E]"></i>
                    <span className="text-gray-700 text-sm md:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
