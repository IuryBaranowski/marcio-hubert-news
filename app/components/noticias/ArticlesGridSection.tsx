"use client";

import { useState } from "react";
import ArticleCard from "./ArticleCard";

const articles = [
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/48ac4b9ee9-c862ee86b86679ea1160.png",
    imageAlt:
      "modern agricultural machinery harvesting soybeans in vast farm field, professional photography, editorial style",
    category: "AGRONEGÓCIO",
    categoryColor: "green" as const,
    date: "15 de Janeiro, 2025",
    title: "Exportações do agronegócio brasileiro batem recorde histórico em 2024",
    description:
      "Setor supera US$ 160 bilhões em vendas externas, impulsionado por soja, milho e carne bovina. Analistas projetam crescimento contínuo.",
    readTime: "8 min de leitura",
    analysisType: "Análise Econômica",
    analysisIcon: "fa-solid fa-chart-simple",
  },
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/5184135cf3-f3e686d30b9046a18884.png",
    imageAlt:
      "brazilian congress building in brasilia, political architecture, editorial photography",
    category: "POLÍTICA",
    categoryColor: "blue" as const,
    date: "14 de Janeiro, 2025",
    title: "Congresso retoma discussão sobre reforma tributária com foco no agro",
    description:
      "Parlamentares debatem impactos da reforma sobre o setor agrícola e buscam garantias para manutenção da competitividade.",
    readTime: "6 min de leitura",
    analysisType: "Política Nacional",
    analysisIcon: "fa-solid fa-gavel",
  },
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/cf1b4d3f40-1feaf83676f828bbf519.png",
    imageAlt: "stock market trading floor, financial charts, business editorial photography",
    category: "ECONOMIA",
    categoryColor: "purple" as const,
    date: "14 de Janeiro, 2025",
    title: "Banco Central mantém taxa Selic em 11,75% ao ano",
    description:
      "Decisão do Copom reflete cautela com inflação e cenário externo. Mercado aguarda sinais sobre próximos movimentos.",
    readTime: "5 min de leitura",
    analysisType: "Mercados",
    analysisIcon: "fa-solid fa-coins",
  },
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/6c6da06d09-657106c438bc2f9c3fc8.png",
    imageAlt: "brazil and usa flags together, diplomatic relations, editorial photography",
    category: "BRASIL-EUA",
    categoryColor: "red" as const,
    date: "13 de Janeiro, 2025",
    title: "Nova rodada de negociações comerciais entre Brasil e Estados Unidos",
    description:
      "Países discutem acordo bilateral para facilitar exportações do agronegócio brasileiro ao mercado americano.",
    readTime: "7 min de leitura",
    analysisType: "Relações Bilaterais",
    analysisIcon: "fa-solid fa-handshake",
  },
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/5d7b2727ce-b54b9e5903e399721a67.png",
    imageAlt: "global economy, world map with connections, international trade editorial",
    category: "MUNDO",
    categoryColor: "orange" as const,
    date: "13 de Janeiro, 2025",
    title: "FMI revisa projeções de crescimento global para 2025",
    description:
      "Economias emergentes devem liderar expansão econômica mundial, com destaque para Brasil e Índia.",
    readTime: "5 min de leitura",
    analysisType: "Economia Global",
    analysisIcon: "fa-solid fa-globe",
  },
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/2bc52d2bf3-aa5318741262adc5eb2f.png",
    imageAlt:
      "sustainable agriculture, green technology in farming, editorial photography",
    category: "AGRONEGÓCIO",
    categoryColor: "green" as const,
    date: "12 de Janeiro, 2025",
    title: "Tecnologias sustentáveis transformam agricultura brasileira",
    description:
      "Investimentos em AgTech crescem 45% e prometem revolucionar setor com soluções para produtividade e sustentabilidade.",
    readTime: "9 min de leitura",
    analysisType: "Inovação",
    analysisIcon: "fa-solid fa-microchip",
  },
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/572ca6c787-bb5c8fb58c2866989c88.png",
    imageAlt: "political interview setup, professional journalism, editorial broadcast",
    category: "POLÍTICA",
    categoryColor: "blue" as const,
    date: "11 de Janeiro, 2025",
    title: "Ministro da Agricultura anuncia novas medidas para crédito rural",
    description:
      "Pacote de incentivos visa facilitar acesso ao financiamento para pequenos e médios produtores.",
    readTime: "6 min de leitura",
    analysisType: "Políticas Públicas",
    analysisIcon: "fa-solid fa-file-invoice-dollar",
  },
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/3c6f6ccd99-5d3121a7fc83d9d3dbca.png",
    imageAlt: "economic analysis studio, financial news broadcast, professional editorial",
    category: "ECONOMIA",
    categoryColor: "purple" as const,
    date: "10 de Janeiro, 2025",
    title: "Dólar fecha em alta após decisão do Federal Reserve",
    description:
      "Mercado reage à manutenção dos juros americanos e projeções sobre política monetária em 2025.",
    readTime: "5 min de leitura",
    analysisType: "Câmbio",
    analysisIcon: "fa-solid fa-dollar-sign",
  },
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/f9aba1d8ae-aefa72bac2a3b02e92a4.png",
    imageAlt: "international shipping containers, global trade, logistics editorial photography",
    category: "BRASIL-EUA",
    categoryColor: "red" as const,
    date: "09 de Janeiro, 2025",
    title: "EUA aprovam importação de mais produtos agrícolas brasileiros",
    description:
      "Acordo sanitário abre mercado americano para frutas e carnes processadas do Brasil.",
    readTime: "7 min de leitura",
    analysisType: "Comércio Exterior",
    analysisIcon: "fa-solid fa-truck",
  },
];

export default function ArticlesGridSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>

        <div className="mt-8 md:mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-3 md:px-4 py-2 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 md:px-4 py-2 rounded font-medium transition-colors ${
                  currentPage === page
                    ? "bg-[#0A1628] text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className="px-3 md:px-4 py-2 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
