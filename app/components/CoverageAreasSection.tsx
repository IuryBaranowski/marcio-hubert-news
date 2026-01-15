"use client";

interface CoverageArea {
  icon: string;
  title: string;
  description: string[];
  borderColor: string;
  iconBgColor: string;
  iconColor: string;
  spanFull?: boolean;
}

const coverageAreas: CoverageArea[] = [
  {
    icon: "fa-solid fa-seedling",
    title: "Agronegócio",
    description: [
      "Cobertura completa do setor que representa mais de 25% do PIB brasileiro. Análises sobre produção, exportação, políticas públicas, tecnologias agrícolas, mercado de commodities e impactos climáticos.",
      "O foco está em oferecer ao produtor rural, ao empresário do agro e ao investidor informações estratégicas que orientem decisões de curto, médio e longo prazo.",
    ],
    borderColor: "border-green-600",
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: "fa-solid fa-landmark",
    title: "Política",
    description: [
      "Análise dos principais debates políticos nacionais, com foco nos temas que impactam a economia, o agronegócio e as relações internacionais. Cobertura do Congresso, Executivo e Judiciário.",
      "O objetivo é ir além da polarização e oferecer ao leitor uma visão equilibrada, contextualizada e focada nos impactos práticos das decisões políticas.",
    ],
    borderColor: "border-blue-600",
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Economia",
    description: [
      "Cobertura de mercados financeiros, política monetária, inflação, câmbio, investimentos e perspectivas econômicas. Análise de indicadores e tendências que afetam empresas, consumidores e investidores.",
      "A abordagem combina dados técnicos com explicações acessíveis, permitindo que o leitor compreenda os movimentos econômicos e suas implicações práticas.",
    ],
    borderColor: "border-purple-600",
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: "fa-solid fa-globe-americas",
    title: "Brasil–EUA",
    description: [
      "Análise especializada das relações bilaterais entre Brasil e Estados Unidos, incluindo comércio, investimentos, política externa, acordos setoriais e impactos das decisões americanas no Brasil.",
      "A experiência como correspondente em Washington D.C. garante uma visão privilegiada e fontes estratégicas em ambos os países.",
    ],
    borderColor: "border-red-600",
    iconBgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    icon: "fa-solid fa-earth-americas",
    title: "Notícias Internacionais com Impacto Estratégico",
    description: [
      "Cobertura seletiva de eventos globais que possuem impacto direto ou indireto no Brasil: decisões de bancos centrais internacionais, conflitos geopolíticos que afetam commodities, mudanças regulatórias em mercados relevantes e tendências tecnológicas globais.",
      "O critério editorial é claro: só entra na pauta internacional o que tem relevância estratégica para o público brasileiro.",
    ],
    borderColor: "border-orange-600",
    iconBgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    spanFull: true,
  },
];

export default function CoverageAreasSection() {
  return (
    <section className="py-12 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
            Áreas de Cobertura
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            O Marcio Hubert News concentra sua atuação em temas estratégicos que
            impactam diretamente o Brasil e suas relações internacionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {coverageAreas.map((area, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 md:p-10 border-l-4 ${area.borderColor} hover:shadow-xl transition-shadow ${
                area.spanFull ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 ${area.iconBgColor} rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <i
                    className={`${area.icon} ${area.iconColor} text-2xl md:text-3xl`}
                  ></i>
                </div>
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-[#0A1628]">
                  {area.title}
                </h3>
              </div>
              {area.description.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
