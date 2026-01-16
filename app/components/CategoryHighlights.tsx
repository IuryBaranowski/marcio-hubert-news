"use client";

import Link from "next/link";

interface CategoryItem {
  icon: string;
  title: string;
  description: string;
  color: string;
  borderColor: string;
  textColor: string;
  bgColor: string;
}

const categories: CategoryItem[] = [
  {
    icon: "fa-solid fa-seedling",
    title: "Agronegócio",
    description: "Mediador em painéis, fóruns e debates técnicos no agro.",
    color: "green",
    borderColor: "border-green-600",
    textColor: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: "fa-solid fa-landmark",
    title: "Política",
    description: "Cobertura de eventos políticos, entrevistas e debates nacionais.",
    color: "blue",
    borderColor: "border-blue-600",
    textColor: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Economia",
    description: "Eventos de economia estratégica para o agronegocio Brasileiro.",
    color: "purple",
    borderColor: "border-purple-600",
    textColor: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: "fa-solid fa-globe-americas",
    title: "Estados Unidos",
    description: "Editor, produtor e âncora do Headlines na CBS TV - News 12.",
    color: "red",
    borderColor: "border-red-600",
    textColor: "text-red-600",
    bgColor: "bg-red-100",
  },
];

export default function CategoryHighlights() {
  return (
    <section className="py-10 md:py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className={`bg-white rounded-lg p-5 md:p-8 border-l-4 ${category.borderColor} hover:shadow-lg transition-shadow cursor-pointer group`}
            >
              <div
                className={`w-10 h-10 md:w-12 md:h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform`}
              >
                <i className={`${category.icon} ${category.textColor} text-xl md:text-2xl`}></i>
              </div>
              <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                {category.description}
              </p>
              <Link
                href="#"
                className={`${category.textColor} font-semibold text-xs md:text-sm hover:underline`}
              >
                Ver cobertura →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

