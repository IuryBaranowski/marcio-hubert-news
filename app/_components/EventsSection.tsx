"use client";

import Link from "next/link";
import EventCard from "./EventCard";

const events = [
  {
    id: 1,
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/485ea186ce-0aac81a6e940ea22d0d4.png",
    imageAlt:
      "agricultural trade show exhibition, professional event photography, editorial style",
    category: "AGRONEGÓCIO",
    categoryColor: "green" as const,
    location: "São Paulo, SP",
    title: "Agrishow 2025",
    description:
      "Cobertura completa da maior feira de tecnologia agrícola da América Latina, com entrevistas exclusivas e análises de mercado.",
    date: "29 de Abril - 03 de Maio, 2025",
  },
  {
    id: 2,
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/c77a4c1732-dc106306ae2a06dd1f19.png",
    imageAlt:
      "political summit conference, government officials meeting, editorial photography",
    category: "POLÍTICA",
    categoryColor: "blue" as const,
    location: "Brasília, DF",
    title: "Fórum Nacional de Agricultura",
    description:
      "Debate sobre políticas públicas para o setor agrícola com presença de ministros e parlamentares.",
    date: "15 de Março, 2025",
  },
  {
    id: 3,
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/35b8dd1288-b1e1cbb176327351d70d.png",
    imageAlt:
      "international business summit, corporate conference, professional event photography",
    category: "BRASIL-EUA",
    categoryColor: "red" as const,
    location: "Washington, D.C.",
    title: "Brazil-US Business Summit",
    description:
      "Encontro bilateral para discussão de parcerias comerciais e investimentos no agronegócio.",
    date: "22 de Junho, 2025",
  },
  {
    id: 4,
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/915583f0ba-ce003064bebc82f1d3c0.png",
    imageAlt:
      "economic forum, financial conference, business leaders, editorial photography",
    category: "ECONOMIA",
    categoryColor: "purple" as const,
    location: "Rio de Janeiro, RJ",
    title: "Congresso Brasileiro do Agronegócio",
    description:
      "Análise das perspectivas econômicas e oportunidades de investimento no setor.",
    date: "10 de Agosto, 2025",
  },
];

export default function EventsSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6 md:mb-12">
          <div>
            <h2 className="font-serif font-bold text-2xl md:text-4xl text-[#0A1628] mb-1 md:mb-3">
              Cobertura de Eventos
            </h2>
            <p className="text-gray-600 text-sm md:text-lg">
              Presença nos principais eventos do agronegócio e política nacional
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center space-x-2 text-[#C8102E] font-semibold hover:underline text-sm md:text-base"
          >
            <span className="hidden md:inline">Ver todos os eventos</span>
            <span className="md:hidden">Ver todos →</span>
            <i className="fa-solid fa-arrow-right hidden md:inline"></i>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

