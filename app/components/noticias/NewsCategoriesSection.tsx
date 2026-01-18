"use client";

interface NewsCategory {
  icon: string;
  title: string;
  description: string;
  italicText: string;
  borderColor: string;
  iconBgColor: string;
  iconColor: string;
  spanFull?: boolean;
}

const categories: NewsCategory[] = [
  {
    icon: "fa-solid fa-seedling",
    title: "Agronegócio",
    description:
      "Cobertura completa do setor que move mais de 25% do PIB brasileiro. Análises sobre produção, exportação, tecnologias agrícolas, mercado de commodities, políticas públicas e impactos climáticos.",
    italicText:
      "Informação estratégica para produtores rurais, empresários do agro, investidores e profissionais do setor.",
    borderColor: "border-green-600",
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: "fa-solid fa-landmark",
    title: "Política",
    description:
      "Análise dos principais debates políticos nacionais, com foco nos temas que impactam a economia, o agronegócio e as relações internacionais. Cobertura equilibrada do Congresso, Executivo e Judiciário.",
    italicText: "Contexto e imparcialidade para entender as decisões políticas além da polarização.",
    borderColor: "border-blue-600",
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Economia",
    description:
      "Mercados financeiros, política monetária, inflação, câmbio, investimentos e perspectivas econômicas. Análise de indicadores e tendências que afetam empresas, consumidores e investidores no Brasil.",
    italicText: "Dados técnicos explicados de forma acessível para decisões estratégicas.",
    borderColor: "border-purple-600",
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: "fa-solid fa-handshake",
    title: "Brasil & Estados Unidos",
    description:
      "Análise especializada das relações bilaterais entre Brasil e Estados Unidos: comércio, investimentos, política externa, acordos setoriais e impactos das decisões americanas no Brasil.",
    italicText: "Visão privilegiada com fontes estratégicas em ambos os países.",
    borderColor: "border-red-600",
    iconBgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    icon: "fa-solid fa-earth-americas",
    title: "Mundo",
    description:
      "Cobertura seletiva de eventos globais com impacto estratégico no Brasil: decisões de bancos centrais internacionais, conflitos geopolíticos que afetam commodities, mudanças regulatórias em mercados relevantes e tendências tecnológicas globais.",
    italicText:
      "Apenas notícias internacionais com relevância estratégica para o público brasileiro.",
    borderColor: "border-orange-600",
    iconBgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    spanFull: true,
  },
];

export default function NewsCategoriesSection() {
  return (
    <section className="py-12 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
            Categorias de Cobertura
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Navegue pelas áreas temáticas que compõem nossa linha editorial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 md:p-8 border-l-4 ${category.borderColor} hover:shadow-xl transition-shadow cursor-pointer group ${
                category.spanFull ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 ${category.iconBgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <i
                    className={`${category.icon} ${category.iconColor} text-xl md:text-2xl`}
                  ></i>
                </div>
                <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628]">
                  {category.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
                {category.description}
              </p>
              <p className="text-gray-600 text-xs md:text-sm italic">
                {category.italicText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
