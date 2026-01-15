"use client";

interface Principle {
  icon: string;
  title: string;
  description: string[];
  bgColor: string;
}

const principles: Principle[] = [
  {
    icon: "fa-solid fa-balance-scale",
    title: "Independência Editorial",
    description: [
      "O Marcio Hubert News não possui vínculos políticos, partidários ou corporativos que comprometam a imparcialidade da cobertura. A linha editorial é construída com base em critérios jornalísticos, não em agendas externas.",
      "Essa independência garante que as análises reflitam os fatos e contextos relevantes, sem distorções ou omissões motivadas por interesses de terceiros.",
    ],
    bgColor: "bg-blue-600",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Responsabilidade com a Verdade",
    description: [
      "Cada informação publicada passa por rigorosa checagem de fatos e verificação de fontes. O compromisso com a precisão é inegociável, e eventuais erros são corrigidos de forma transparente e imediata.",
      "Não há espaço para sensacionalismo, desinformação ou conteúdos que comprometam a confiança do leitor na qualidade da informação.",
    ],
    bgColor: "bg-green-600",
  },
  {
    icon: "fa-solid fa-lightbulb",
    title: "Contexto Acima do Imediatismo",
    description: [
      "O jornalismo de qualidade não se resume à velocidade de publicação. O diferencial do Marcio Hubert News está na capacidade de oferecer contexto, explicar causas e consequências, e apresentar múltiplas perspectivas.",
      "O leitor não precisa apenas saber o que aconteceu, mas entender por que aconteceu e o que isso significa para o futuro.",
    ],
    bgColor: "bg-purple-600",
  },
  {
    icon: "fa-solid fa-handshake",
    title: "Compromisso com o Leitor",
    description: [
      "O público do Marcio Hubert News é composto por profissionais exigentes que buscam informação estratégica. Por isso, o portal compromete-se a respeitar a inteligência do leitor, oferecendo conteúdo denso, bem fundamentado e útil.",
      "A relação com a audiência é baseada em transparência, responsabilidade e entrega consistente de valor informativo.",
    ],
    bgColor: "bg-[#C8102E]",
  },
];

export default function EditorialPrinciplesDetailSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
            Princípios Editoriais
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Os pilares que orientam cada publicação, análise e conteúdo produzido
            pelo Marcio Hubert News
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] rounded-2xl p-8 md:p-10 hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-16 h-16 ${principle.bgColor} rounded-xl flex items-center justify-center mb-6`}
              >
                <i className={`${principle.icon} text-white text-3xl`}></i>
              </div>
              <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-4">
                {principle.title}
              </h3>
              {principle.description.map((paragraph, pIndex) => (
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

        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <i className="fa-solid fa-quote-left text-[#C8102E] text-3xl md:text-4xl mb-6"></i>
            <blockquote className="font-serif text-xl md:text-3xl text-white leading-relaxed mb-6 md:mb-8 italic">
              "O jornalismo não pode ser neutro diante da verdade. Nosso
              compromisso é com os fatos, com o contexto e com a responsabilidade
              de informar com clareza e profundidade. Não basta noticiar: é preciso
              explicar, contextualizar e oferecer ao leitor as ferramentas para que
              ele tome decisões estratégicas bem fundamentadas."
            </blockquote>
            <div className="text-gray-300 font-semibold text-base md:text-lg">
              — Marcio Hubert, Editor-Chefe
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
