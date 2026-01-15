"use client";

interface ContentFormat {
  icon: string;
  title: string;
  description: string;
  features: string[];
  bgColor: string;
}

const contentFormats: ContentFormat[] = [
  {
    icon: "fa-solid fa-newspaper",
    title: "Artigos Analíticos",
    description:
      "Textos aprofundados que vão além da notícia factual. Cada artigo é estruturado em seções claras: O Fato, O Contexto, A Análise e Próximos Passos. Esse formato oferece ao leitor uma compreensão completa do tema, com dados verificados, múltiplas fontes e perspectivas equilibradas.",
    features: [
      "Publicação diária de análises",
      "Média de 800 a 1.500 palavras por artigo",
      "Estrutura editorial padronizada",
      "Checagem rigorosa de fatos e fontes",
    ],
    bgColor: "bg-blue-600",
  },
  {
    icon: "fa-solid fa-video",
    title: "Vídeos no YouTube",
    description:
      "Canal no YouTube com análises em vídeo, entrevistas exclusivas e comentários sobre os principais temas da semana. Os vídeos complementam o conteúdo escrito e oferecem uma experiência audiovisual para quem prefere consumir informação em formato dinâmico.",
    features: [
      "Publicação semanal de vídeos",
      "Duração média de 15 a 25 minutos",
      "Entrevistas com especialistas e autoridades",
      "Produção profissional de estúdio",
    ],
    bgColor: "bg-red-600",
  },
  {
    icon: "fa-solid fa-calendar-days",
    title: "Cobertura de Eventos",
    description:
      "Presença estratégica nos principais eventos do agronegócio, política e economia. A cobertura inclui entrevistas ao vivo, análises de bastidores, resumos executivos e registro fotográfico e audiovisual dos momentos mais relevantes.",
    features: [
      "Cobertura de Agrishow, fóruns setoriais e eventos políticos",
      "Entrevistas exclusivas com palestrantes e autoridades",
      "Resumos executivos pós-evento",
      "Análise de impactos e desdobramentos",
    ],
    bgColor: "bg-green-600",
  },
  {
    icon: "fa-solid fa-microphone",
    title: "Entrevistas Exclusivas",
    description:
      "Conversas aprofundadas com ministros, parlamentares, CEOs do agronegócio, economistas e especialistas em política internacional. As entrevistas são conduzidas com rigor jornalístico, buscando respostas claras e contextualizadas sobre temas estratégicos.",
    features: [
      "Publicação quinzenal de entrevistas",
      "Formato escrito e em vídeo",
      "Foco em temas estratégicos e decisões de impacto",
      "Acesso a fontes de alto nível",
    ],
    bgColor: "bg-purple-600",
  },
];

export default function ContentFormatsSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
            Formatos de Conteúdo
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            O Marcio Hubert News produz conteúdo em múltiplos formatos para atender
            diferentes perfis de consumo de informação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {contentFormats.map((format, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] rounded-2xl p-8 md:p-10 hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${format.bgColor} rounded-xl flex items-center justify-center mb-6`}
              >
                <i className={`${format.icon} text-white text-2xl md:text-3xl`}></i>
              </div>
              <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-4">
                {format.title}
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                {format.description}
              </p>
              <div className="space-y-3">
                {format.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center space-x-3">
                    <i className="fa-solid fa-check text-[#C8102E]"></i>
                    <span className="text-gray-700 text-sm md:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
