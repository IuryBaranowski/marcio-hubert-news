"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import PastEventCard from "./PastEventCard";

const pastEvents = [
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/48ac4b9ee9-c862ee86b86679ea1160.png",
    imageAlt:
      "agricultural conference, business networking event, professional photography",
    category: "AGRONEGÓCIO",
    categoryColor: "green" as const,
    month: "Dezembro 2024",
    title: "Summit Brasileiro de Exportação Agrícola",
    description:
      "Análise das estratégias de abertura de novos mercados internacionais e entrevistas com exportadores e representantes governamentais.",
    location: "São Paulo, SP",
  },
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/5184135cf3-f3e686d30b9046a18884.png",
    imageAlt:
      "political conference, government summit, editorial photography",
    category: "POLÍTICA",
    categoryColor: "blue" as const,
    month: "Novembro 2024",
    title: "Encontro Nacional de Lideranças Ruralistas",
    description:
      "Debate sobre a agenda política do setor agrícola no Congresso Nacional e articulação de bancadas parlamentares.",
    location: "Brasília, DF",
  },
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/cf1b4d3f40-1feaf83676f828bbf519.png",
    imageAlt: "economic summit, financial forum, business conference",
    category: "ECONOMIA",
    categoryColor: "purple" as const,
    month: "Outubro 2024",
    title: "Fórum de Investimentos no Agronegócio",
    description:
      "Encontro entre investidores nacionais e internacionais para discutir oportunidades no setor agrícola brasileiro.",
    location: "Rio de Janeiro, RJ",
  },
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/6c6da06d09-657106c438bc2f9c3fc8.png",
    imageAlt:
      "international diplomatic meeting, bilateral relations, professional photography",
    category: "BRASIL-EUA",
    categoryColor: "red" as const,
    month: "Setembro 2024",
    title: "Diálogo Brasil-EUA sobre Comércio Agrícola",
    description:
      "Reunião bilateral para discussão de barreiras comerciais, acordos fitossanitários e facilitação de exportações.",
    location: "Miami, FL (EUA)",
  },
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/2bc52d2bf3-aa5318741262adc5eb2f.png",
    imageAlt:
      "sustainable agriculture conference, green technology event",
    category: "AGRONEGÓCIO",
    categoryColor: "green" as const,
    month: "Agosto 2024",
    title: "Congresso de Agricultura Sustentável",
    description:
      "Debate sobre práticas sustentáveis, certificações ambientais e acesso a mercados internacionais premium.",
    location: "Curitiba, PR",
  },
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/5d7b2727ce-b54b9e5903e399721a67.png",
    imageAlt: "technology conference, innovation summit, professional event",
    category: "TECNOLOGIA",
    categoryColor: "orange" as const,
    month: "Julho 2024",
    title: "Feira de Inovação em AgTech",
    description:
      "Apresentação de startups, tecnologias disruptivas e soluções digitais para otimização da produção agrícola.",
    location: "Campinas, SP",
  },
];

export default function PastEventsSection() {
  const t = useTranslations("eventos.pastEvents");
  
  return (
    <section className="py-12 md:py-20 bg-[#F5F5F5]">
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
            className="inline-flex items-center space-x-2 text-[#C8102E] font-semibold hover:underline"
          >
            <span>{t("seeAll")}</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event, index) => (
            <PastEventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
