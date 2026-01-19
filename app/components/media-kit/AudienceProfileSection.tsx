"use client";

import { useTranslations } from "next-intl";

interface AudienceMetric {
  icon: string;
  value: string;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
}

export default function AudienceProfileSection() {
  const t = useTranslations("mediaKit.audienceProfile");
  
  const audienceMetrics: AudienceMetric[] = [
    {
      icon: "fa-solid fa-users",
      value: t("metrics.readers.value"),
      title: t("metrics.readers.title"),
      description: t("metrics.readers.description"),
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: "fa-solid fa-envelope-open-text",
      value: t("metrics.subscribers.value"),
      title: t("metrics.subscribers.title"),
      description: t("metrics.subscribers.description"),
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: "fa-solid fa-chart-line",
      value: t("metrics.engagement.value"),
      title: t("metrics.engagement.title"),
      description: t("metrics.engagement.description"),
      iconBgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
  ];
  
  const professionalProfile = t.raw("segments.professional.items") as string[];
  const demographicProfile = t.raw("segments.demographic.items") as string[];
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {audienceMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-16 h-16 md:w-20 md:h-20 ${metric.iconBgColor} rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6`}
              >
                <i
                  className={`${metric.icon} ${metric.iconColor} text-3xl md:text-4xl`}
                ></i>
              </div>
              <div className="text-[#C8102E] font-bold text-4xl md:text-5xl mb-2">
                {metric.value}
              </div>
              <div className="text-gray-600 font-semibold text-base md:text-lg mb-3">
                {metric.title}
              </div>
              <p className="text-gray-600 text-xs md:text-sm">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
          <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-6 md:mb-8 text-center">
            {t("segments.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h4 className="font-semibold text-lg md:text-xl text-[#0A1628] mb-4 md:mb-6 flex items-center space-x-3">
                <i className="fa-solid fa-briefcase text-[#C8102E] text-xl md:text-2xl"></i>
                <span>{t("segments.professional.title")}</span>
              </h4>
              <ul className="space-y-3">
                {professionalProfile.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <i className="fa-solid fa-circle-check text-[#C8102E] mt-1 shrink-0"></i>
                    <span className="text-gray-700 text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg md:text-xl text-[#0A1628] mb-4 md:mb-6 flex items-center space-x-3">
                <i className="fa-solid fa-graduation-cap text-[#C8102E] text-xl md:text-2xl"></i>
                <span>{t("segments.demographic.title")}</span>
              </h4>
              <ul className="space-y-3">
                {demographicProfile.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <i className="fa-solid fa-circle-check text-[#C8102E] mt-1 shrink-0"></i>
                    <span className="text-gray-700 text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
