"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import TVVideoCard from "./TVVideoCard";

const latestVideos = [
  {
    thumbnail:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/f9aba1d8ae-aefa72bac2a3b02e92a4.png",
    thumbnailAlt:
      "professional news analysis setup, editorial broadcast, modern studio",
    duration: "18:42",
    category: "AGRONEGÓCIO",
    categoryColor: "green" as const,
    date: "15 de Janeiro, 2025",
    title:
      "Exportações do Agronegócio Batem Recorde: Análise dos Números e Perspectivas",
    description:
      "Análise completa dos recordes de exportação do agronegócio brasileiro em 2024 e projeções para 2025.",
    views: "15.3K visualizações",
  },
  {
    thumbnail:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/572ca6c787-bb5c8fb58c2866989c88.png",
    thumbnailAlt:
      "political interview, government analysis, editorial journalism broadcast",
    duration: "24:15",
    category: "POLÍTICA",
    categoryColor: "blue" as const,
    date: "14 de Janeiro, 2025",
    title:
      "Reforma Tributária: Entenda os Pontos Principais e os Impactos Econômicos",
    description:
      "Análise detalhada da reforma tributária em discussão no Congresso e seus efeitos para empresas e consumidores.",
    views: "22.1K visualizações",
  },
  {
    thumbnail:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/3c6f6ccd99-5d3121a7fc83d9d3dbca.png",
    thumbnailAlt: "economic analysis studio, financial broadcast, editorial journalism",
    duration: "16:30",
    category: "ECONOMIA",
    categoryColor: "purple" as const,
    date: "13 de Janeiro, 2025",
    title:
      "Selic Mantida em 11,75%: O Que Isso Significa para Investidores e Empresas",
    description:
      "Análise da decisão do Banco Central e seus impactos nos mercados financeiros e na economia real.",
    views: "18.7K visualizações",
  },
  {
    thumbnail:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/6c6da06d09-657106c438bc2f9c3fc8.png",
    thumbnailAlt: "brazil usa relations, diplomatic analysis, editorial broadcast",
    duration: "20:18",
    category: "BRASIL-EUA",
    categoryColor: "red" as const,
    date: "12 de Janeiro, 2025",
    title: "Nova Rodada de Negociações Brasil-EUA: O Que Está em Jogo",
    description:
      "Análise das negociações comerciais bilaterais e seus impactos para o agronegócio brasileiro.",
    views: "13.5K visualizações",
  },
  {
    thumbnail:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/2bc52d2bf3-aa5318741262adc5eb2f.png",
    thumbnailAlt:
      "sustainable agriculture technology, agtech innovation, editorial journalism",
    duration: "22:45",
    category: "AGRONEGÓCIO",
    categoryColor: "green" as const,
    date: "10 de Janeiro, 2025",
    title:
      "Tecnologias Sustentáveis no Agro: Inovações que Transformam o Setor",
    description:
      "Análise do crescimento de investimentos em AgTech e o impacto das tecnologias sustentáveis.",
    views: "11.2K visualizações",
  },
  {
    thumbnail:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/5d7b2727ce-b54b9e5903e399721a67.png",
    thumbnailAlt: "global economy analysis, international markets, editorial broadcast",
    duration: "19:30",
    category: "MUNDO",
    categoryColor: "orange" as const,
    date: "08 de Janeiro, 2025",
    title:
      "FMI Revisa Projeções Globais: Impactos para Economias Emergentes",
    description:
      "Análise das novas projeções do FMI e o que isso significa para o Brasil e América Latina.",
    views: "9.8K visualizações",
  },
];

export default function LatestVideosSection() {
  const t = useTranslations("tv.latestVideos");
  
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
          <Link
            href="#"
            className="inline-flex items-center space-x-2 px-5 md:px-6 py-2.5 md:py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            <i className="fa-brands fa-youtube"></i>
            <span>{t("cta")}</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {latestVideos.map((video, index) => (
            <TVVideoCard key={index} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
}
