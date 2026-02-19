"use client";

import { useTranslations } from "next-intl";

interface NewsCategory {
  icon: string;
  title: string;
  description: string;
  italicText: string;
  borderColor: string;
  iconBgColor: string;
  iconColor: string;
  spanFull?: boolean;
}

export default function NewsCategoriesSection() {
  const t = useTranslations("noticias.categories");
  
  const categories: NewsCategory[] = [
    {
      icon: "fa-solid fa-seedling",
      title: t("agribusiness.title"),
      description: t("agribusiness.description"),
      italicText: t("agribusiness.italicText"),
      borderColor: "border-green-600",
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: "fa-solid fa-landmark",
      title: t("politics.title"),
      description: t("politics.description"),
      italicText: t("politics.italicText"),
      borderColor: "border-blue-600",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: "fa-solid fa-chart-line",
      title: t("economy.title"),
      description: t("economy.description"),
      italicText: t("economy.italicText"),
      borderColor: "border-purple-600",
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: "fa-solid fa-handshake",
      title: t("brazilUsa.title"),
      description: t("brazilUsa.description"),
      italicText: t("brazilUsa.italicText"),
      borderColor: "border-red-600",
      iconBgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: "fa-solid fa-earth-americas",
      title: t("world.title"),
      description: t("world.description"),
      italicText: t("world.italicText"),
      borderColor: "border-orange-600",
      iconBgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      spanFull: true,
    },
  ];
  return (
    <section className="py-12 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 md:p-8 border-l-4 ${category.borderColor} hover:shadow-xl transition-shadow cursor-pointer group ${
                category.spanFull ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 ${category.iconBgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <i
                    className={`${category.icon} ${category.iconColor} text-xl md:text-2xl`}
                  ></i>
                </div>
                <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628]">
                  {category.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
                {category.description}
              </p>
              <p className="text-gray-600 text-xs md:text-sm italic">
                {category.italicText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
