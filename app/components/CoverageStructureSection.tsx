"use client";

interface StructureItem {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

const structureItems: StructureItem[] = [
  {
    icon: "fa-solid fa-circle-info",
    title: "O Contexto do Evento",
    description:
      "Por que este evento é relevante? Qual o cenário político, econômico ou setorial que justifica sua realização? Quem são os principais participantes e o que está em jogo? Esta seção contextualiza o evento dentro de um quadro estratégico mais amplo.",
    bgColor: "bg-blue-600",
  },
  {
    icon: "fa-solid fa-star",
    title: "Momentos-Chave",
    description:
      "Registro dos principais painéis, declarações, anúncios e debates. Quais foram as mensagens mais relevantes? Quais posicionamentos chamaram atenção? Quais tendências foram apresentadas? Esta seção destaca o que realmente importa dentro da programação do evento.",
    bgColor: "bg-green-600",
  },
  {
    icon: "fa-solid fa-microscope",
    title: "Análise e Impacto",
    description:
      "O que o evento revela sobre o setor? Quais são os impactos práticos das discussões para empresas, produtores rurais, investidores ou formuladores de políticas públicas? Esta seção oferece a perspectiva analítica que diferencia o Marcio Hubert News de uma cobertura meramente descritiva.",
    bgColor: "bg-purple-600",
  },
  {
    icon: "fa-solid fa-photo-film",
    title: "Registro Multimídia",
    description:
      "Galeria de fotos profissionais, vídeos de entrevistas exclusivas e trechos de painéis estratégicos. O conteúdo multimídia complementa a análise textual e oferece ao leitor uma experiência completa do evento.",
    bgColor: "bg-red-600",
  },
];

export default function CoverageStructureSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
            Estrutura de Cobertura
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Cada evento coberto segue uma metodologia editorial que garante
            profundidade, contexto e utilidade estratégica
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#F5F5F5] rounded-2xl p-8 md:p-12">
          <div className="space-y-8 md:space-y-10">
            {structureItems.map((item, index) => (
              <div key={index}>
                <div className="flex items-start space-x-4 mb-4">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 ${item.bgColor} rounded-xl flex items-center justify-center shrink-0`}
                  >
                    <i className={`${item.icon} text-white text-lg md:text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
