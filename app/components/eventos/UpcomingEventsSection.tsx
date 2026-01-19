"use client";

import { useTranslations } from "next-intl";
import UpcomingEventCard from "./UpcomingEventCard";

const upcomingEvents = [
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/485ea186ce-0aac81a6e940ea22d0d4.png",
    imageAlt:
      "agricultural trade show exhibition, professional event photography, editorial style",
    category: "AGRONEGÓCIO",
    categoryColor: "green" as const,
    location: "São Paulo, SP",
    title: "Agrishow 2025",
    description:
      "A maior feira de tecnologia agrícola da América Latina. Cobertura completa com foco em inovações, lançamentos de produtos e entrevistas com lideranças do setor.",
    date: "29 de Abril - 03 de Maio, 2025",
  },
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/c77a4c1732-dc106306ae2a06dd1f19.png",
    imageAlt:
      "political summit conference, government officials meeting, editorial photography",
    category: "POLÍTICA",
    categoryColor: "blue" as const,
    location: "Brasília, DF",
    title: "Fórum Nacional de Agricultura",
    description:
      "Debate sobre políticas públicas para o setor agrícola com participação de ministros, parlamentares e representantes de entidades do agronegócio.",
    date: "15 de Março, 2025",
  },
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/35b8dd1288-b1e1cbb176327351d70d.png",
    imageAlt:
      "international business summit, corporate conference, professional event photography",
    category: "BRASIL-EUA",
    categoryColor: "red" as const,
    location: "Washington, D.C.",
    title: "Brazil-US Business Summit",
    description:
      "Encontro bilateral para discussão de parcerias comerciais, investimentos no agronegócio e facilitação de exportações brasileiras.",
    date: "22 de Junho, 2025",
  },
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/915583f0ba-ce003064bebc82f1d3c0.png",
    imageAlt:
      "economic forum, financial conference, business leaders, editorial photography",
    category: "ECONOMIA",
    categoryColor: "purple" as const,
    location: "Rio de Janeiro, RJ",
    title: "Congresso Brasileiro do Agronegócio",
    description:
      "Análise das perspectivas econômicas, oportunidades de investimento e desafios regulatórios do setor agrícola brasileiro.",
    date: "10 de Agosto, 2025",
  },
];

export default function UpcomingEventsSection() {
  const t = useTranslations("eventos.upcomingEvents");
  
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-3">
              {t("title")}
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              {t("subtitle")}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <i className="fa-solid fa-filter mr-2"></i>{t("filter")}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {upcomingEvents.map((event, index) => (
            <UpcomingEventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
