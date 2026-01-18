"use client";

import { Link } from "@/i18n/navigation";
import NewsCard from "./NewsCard";

const newsData = [
  {
    id: 1,
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/48ac4b9ee9-c862ee86b86679ea1160.png",
    imageAlt:
      "modern agricultural machinery harvesting soybeans in vast farm field, professional photography, editorial style",
    category: "AGRONEGÓCIO",
    categoryColor: "green" as const,
    date: "15 de Janeiro, 2025",
    title:
      "Exportações do agronegócio brasileiro batem recorde histórico em 2024",
    description:
      "Setor supera US$ 160 bilhões em vendas externas, impulsionado por soja, milho e carne bovina. Analistas projetam crescimento contínuo para 2025 com abertura de novos mercados asiáticos.",
    readTime: "8 min de leitura",
    analysisType: "Análise Econômica",
    featured: true,
  },
  {
    id: 2,
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/5184135cf3-f3e686d30b9046a18884.png",
    imageAlt:
      "brazilian congress building in brasilia, political architecture, editorial photography",
    category: "POLÍTICA",
    categoryColor: "blue" as const,
    date: "14 de Janeiro, 2025",
    title: "Congresso retoma discussão sobre reforma tributária",
  },
  {
    id: 3,
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/cf1b4d3f40-1feaf83676f828bbf519.png",
    imageAlt:
      "stock market trading floor, financial charts, business editorial photography",
    category: "ECONOMIA",
    categoryColor: "purple" as const,
    date: "14 de Janeiro, 2025",
    title: "Banco Central mantém taxa Selic em 11,75% ao ano",
  },
  {
    id: 4,
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/6c6da06d09-657106c438bc2f9c3fc8.png",
    imageAlt:
      "brazil and usa flags together, diplomatic relations, editorial photography",
    category: "BRASIL-EUA",
    categoryColor: "red" as const,
    date: "13 de Janeiro, 2025",
    title:
      "Nova rodada de negociações comerciais entre Brasil e Estados Unidos",
    description:
      "Países discutem acordo bilateral para facilitar exportações do agronegócio brasileiro.",
    readTime: "6 min de leitura",
  },
  {
    id: 5,
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/5d7b2727ce-b54b9e5903e399721a67.png",
    imageAlt:
      "global economy, world map with connections, international trade editorial",
    category: "MUNDO",
    categoryColor: "orange" as const,
    date: "13 de Janeiro, 2025",
    title: "FMI revisa projeções de crescimento global para 2025",
    description:
      "Economias emergentes devem liderar expansão econômica mundial.",
    readTime: "5 min de leitura",
  },
  {
    id: 6,
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/2bc52d2bf3-aa5318741262adc5eb2f.png",
    imageAlt:
      "sustainable agriculture, green technology in farming, editorial photography",
    category: "AGRONEGÓCIO",
    categoryColor: "green" as const,
    date: "12 de Janeiro, 2025",
    title: "Tecnologias sustentáveis transformam agricultura brasileira",
    description:
      "Investimentos em AgTech crescem 45% e prometem revolucionar setor.",
    readTime: "7 min de leitura",
  },
];

export default function LatestNewsSection() {
  const featuredNews = newsData.find((item) => item.featured);
  const sidebarNews = newsData.filter(
    (item) => item.id === 2 || item.id === 3
  );
  const gridNews = newsData.filter((item) => item.id >= 4);

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div>
            <h2 className="font-serif font-bold text-2xl md:text-4xl text-[#0A1628] mb-2 md:mb-3">
              Últimas Notícias
            </h2>
            <p className="text-gray-600 text-sm md:text-lg">
              Cobertura atualizada dos principais acontecimentos
            </p>
          </div>
          <Link
            href="/noticias"
            className="inline-flex items-center space-x-2 text-[#C8102E] font-semibold hover:underline text-sm md:text-base"
          >
            <span className="hidden md:inline">Ver todas as notícias</span>
            <span className="md:hidden">Ver todas →</span>
            <i className="fa-solid fa-arrow-right hidden md:inline"></i>
          </Link>
        </div>

        {/* Desktop Layout - Featured card left, sidebar cards right */}
        <div className="hidden md:grid md:grid-cols-12 gap-6 mb-8">
          {featuredNews && (
            <div className="col-span-8">
              <NewsCard
                key={featuredNews.id}
                {...featuredNews}
                featured={true}
              />
            </div>
          )}
          <div className="col-span-4 space-y-6">
            {sidebarNews.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          {newsData.slice(0, 3).map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>

        {/* Grid News - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {gridNews.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>

        {/* Grid News - Mobile */}
        <div className="md:hidden space-y-4 mt-4">
          {gridNews.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
}

