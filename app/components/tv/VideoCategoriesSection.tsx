"use client";

import Link from "next/link";

interface VideoCategory {
  icon: string;
  title: string;
  description: string;
  videoCount: string;
  borderColor: string;
  iconBgColor: string;
  iconColor: string;
}

const videoCategories: VideoCategory[] = [
  {
    icon: "fa-solid fa-seedling",
    title: "Agronegócio",
    description: "Análises do setor agrícola brasileiro",
    videoCount: "48 vídeos",
    borderColor: "border-green-600",
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: "fa-solid fa-landmark",
    title: "Política",
    description: "Contexto dos debates políticos nacionais",
    videoCount: "62 vídeos",
    borderColor: "border-blue-600",
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Economia",
    description: "Mercados, indicadores e perspectivas",
    videoCount: "55 vídeos",
    borderColor: "border-purple-600",
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: "fa-solid fa-globe-americas",
    title: "Brasil-EUA",
    description: "Relações bilaterais e impactos estratégicos",
    videoCount: "35 vídeos",
    borderColor: "border-red-600",
    iconBgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
];

export default function VideoCategoriesSection() {
  return (
    <section className="py-12 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
            Categorias de Vídeos
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Conteúdo organizado por tema para facilitar sua busca por análises
            específicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoCategories.map((category, index) => (
            <Link
              key={index}
              href="#"
              className="bg-white rounded-lg p-6 md:p-8 border-l-4 hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div
                className={`w-10 h-10 md:w-12 md:h-12 ${category.iconBgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <i
                  className={`${category.icon} ${category.iconColor} text-xl md:text-2xl`}
                ></i>
              </div>
              <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mb-4">
                {category.description}
              </p>
              <div className={`${category.iconColor} font-semibold text-xs md:text-sm`}>
                {category.videoCount} →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
