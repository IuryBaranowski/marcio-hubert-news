"use client";

import { useTranslations } from "next-intl";

interface EventType {
  icon: string;
  title: string;
  description: string;
  borderColor: string;
  iconColor: string;
}

export default function EventTypesSection() {
  const t = useTranslations("eventos.eventTypes");
  
  const eventTypes: EventType[] = [
    {
      icon: "fa-solid fa-tractor",
      title: t("fairs.title"),
      description: t("fairs.description"),
      borderColor: "border-green-600",
      iconColor: "text-green-600",
    },
    {
      icon: "fa-solid fa-handshake",
      title: t("forums.title"),
      description: t("forums.description"),
      borderColor: "border-blue-600",
      iconColor: "text-blue-600",
    },
    {
      icon: "fa-solid fa-chart-pie",
      title: t("seminars.title"),
      description: t("seminars.description"),
      borderColor: "border-purple-600",
      iconColor: "text-purple-600",
    },
    {
      icon: "fa-solid fa-flag-usa",
      title: t("bilateral.title"),
      description: t("bilateral.description"),
      borderColor: "border-red-600",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {eventTypes.map((type, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 md:p-8 border-l-4 ${type.borderColor} hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <i className={`${type.icon} ${type.iconColor} text-2xl md:text-3xl`}></i>
                <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628]">
                  {type.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
