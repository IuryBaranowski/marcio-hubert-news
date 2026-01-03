"use client";

interface Principle {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const principles: Principle[] = [
  {
    icon: "fa-solid fa-balance-scale",
    title: "Análise Imparcial",
    description:
      "Cobertura equilibrada e isenta, sem viés político ou ideológico. Nosso compromisso é com os fatos e o contexto necessário para compreendê-los.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: "fa-solid fa-crosshairs",
    title: "Foco Estratégico",
    description:
      "Vamos além das manchetes para oferecer análises que ajudam profissionais e empresários a tomar decisões informadas e estratégicas.",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Credibilidade Comprovada",
    description:
      "Mais de 15 anos de jornalismo profissional, com fontes verificadas e metodologia rigorosa de apuração e checagem de informações.",
    bgColor: "bg-red-100",
    iconColor: "text-[#C8102E]",
  },
];

export default function EditorialPrinciples() {
  return (
    <section className="py-12 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-serif font-bold text-2xl md:text-4xl text-[#0A1628] mb-2 md:mb-4">
            Nossos Princípios Editoriais
          </h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-3xl mx-auto">
            Compromisso com a verdade, imparcialidade e análise aprofundada que
            orienta cada publicação do Marcio Hubert News
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${principle.bgColor} rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto`}
              >
                <i
                  className={`${principle.icon} ${principle.iconColor} text-2xl md:text-3xl`}
                ></i>
              </div>
              <h3 className="font-serif font-bold text-lg md:text-2xl text-[#0A1628] text-center mb-3 md:mb-4">
                {principle.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base text-center leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <i className="fa-solid fa-quote-left text-[#C8102E] text-3xl md:text-4xl mb-4 md:mb-6"></i>
            <blockquote className="font-serif text-lg md:text-2xl text-white leading-relaxed mb-4 md:mb-6 italic">
              "Nosso compromisso é entregar jornalismo de qualidade que respeita
              a inteligência do leitor e contribui para um debate público mais
              informado e construtivo."
            </blockquote>
            <p className="text-gray-300 text-sm md:text-base font-semibold">
              — Marcio Hubert, Editor-Chefe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

