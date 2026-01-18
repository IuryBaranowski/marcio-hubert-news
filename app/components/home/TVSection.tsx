"use client";

import { Link } from "@/i18n/navigation";
import VideoCard from "./VideoCard";

const videos = [
  {
    id: 1,
    thumbnail:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/f9aba1d8ae-aefa72bac2a3b02e92a4.png",
    thumbnailAlt:
      "professional news studio setup, editorial video production, broadcast quality",
    duration: "15:42",
    title:
      "O que o Federal Reserve nunca explica ao público I #002",
    description:
      "Neste episódio, você começa a entender, de forma clara e objetiva, qual é o papel do Banco Central americano (Federal Reserve), como ele funciona e por que suas decisões influenciam toda a economia mundial.",
    date: "13 de Janeiro, 2025",
    views: "12.5K",
  },
  {
    id: 2,
    thumbnail:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/572ca6c787-bb5c8fb58c2866989c88.png",
    thumbnailAlt:
      "political interview setup, professional journalism, editorial broadcast",
    duration: "22:15",
    title:
      "Entrevista: Ministro da Agricultura sobre Políticas de Exportação",
    description:
      "Conversa exclusiva sobre as estratégias do governo para fortalecer as vendas externas.",
    date: "10 de Janeiro, 2025",
    views: "18.2K",
  },
  {
    id: 3,
    thumbnail:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/3c6f6ccd99-5d3121a7fc83d9d3dbca.png",
    thumbnailAlt:
      "economic analysis studio, financial news broadcast, professional editorial",
    duration: "18:30",
    title: "Análise: Impactos da Política Monetária Americana no Brasil",
    description:
      "Como as decisões do Federal Reserve afetam a economia brasileira e o agronegócio.",
    date: "08 de Janeiro, 2025",
    views: "9.8K",
  },
];

export default function TVSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-12">
          <div className="mb-4 md:mb-0">
            <div className="inline-flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-red-50 rounded-full mb-3 md:mb-4">
              <i className="fa-brands fa-youtube text-[#C8102E] text-sm md:text-base"></i>
              <span className="text-[#C8102E] text-xs md:text-sm font-semibold">
                MarcioHubertNews
              </span>
            </div>
            <h2 className="font-serif font-bold text-2xl md:text-4xl text-[#0A1628] mb-2 md:mb-3">
              Posicionamento institucional
            </h2>
            <p className="text-gray-600 text-sm md:text-lg">
              Conteúdo com análises e entrevistas
            </p>
          </div>
          <Link
            href="https://www.youtube.com/@MarcioHubertNews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-5 md:px-6 py-3 bg-[#C8102E] text-white font-semibold rounded-lg hover:bg-red-700 transition-colors w-full md:w-auto"
          >
            <i 
            className="fa-brands fa-youtube"></i>
            <span className="text-sm md:text-base">Acesse o Canal</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
}

