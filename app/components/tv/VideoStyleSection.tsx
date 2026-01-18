"use client";

interface VideoStyle {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const videoStyles: VideoStyle[] = [
  {
    icon: "fa-solid fa-bullseye",
    title: "Tom Direto",
    description:
      "Sem rodeios ou enrolação. Cada vídeo vai direto ao ponto, apresentando os fatos, o contexto e a análise de forma clara e objetiva. Respeitamos o tempo do espectador oferecendo conteúdo denso e bem estruturado.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: "fa-solid fa-chart-simple",
    title: "Abordagem Analítica",
    description:
      "Não basta relatar o que aconteceu. Explicamos o porquê, exploramos as causas, apresentamos múltiplas perspectivas e projetamos possíveis desdobramentos. Análise estratégica é o diferencial de cada vídeo.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: "fa-solid fa-book-open",
    title: "Contexto Sempre Presente",
    description:
      "Cada tema é contextualizado historicamente, politicamente e economicamente. O espectador não fica apenas com a notícia, mas compreende o panorama completo que permite decisões informadas.",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
];

export default function VideoStyleSection() {
  return (
    <section className="py-12 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
            O Estilo dos Nossos Vídeos
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Conteúdo direto, analítico e contextualizado, sem sensacionalismo ou
            superficialidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {videoStyles.map((style, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 md:p-10 hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${style.bgColor} rounded-xl flex items-center justify-center mb-6`}
              >
                <i
                  className={`${style.icon} ${style.iconColor} text-2xl md:text-3xl`}
                ></i>
              </div>
              <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-4">
                {style.title}
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {style.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <i className="fa-solid fa-quote-left text-[#C8102E] text-3xl md:text-4xl mb-6"></i>
            <blockquote className="font-serif text-xl md:text-3xl text-white leading-relaxed mb-6 md:mb-8 italic">
              "O vídeo não substitui o texto, mas complementa a experiência de quem
              busca informação de qualidade. É a mesma profundidade analítica, agora
              em um formato que permite maior imersão e compreensão visual dos temas
              estratégicos."
            </blockquote>
            <div className="text-gray-300 font-semibold text-base md:text-lg">
              — Marcio Hubert
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
