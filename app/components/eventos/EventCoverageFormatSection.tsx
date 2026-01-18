"use client";

interface CoverageFormat {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const coverageFormats: CoverageFormat[] = [
  {
    icon: "fa-solid fa-newspaper",
    title: "Artigos Analíticos",
    description:
      "Textos aprofundados que contextualizam o evento, destacam os principais temas debatidos, analisam declarações de lideranças e projetam impactos futuros. Cada artigo segue a metodologia editorial do portal: fato, contexto, análise e próximos passos.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: "fa-solid fa-camera",
    title: "Registro Fotográfico",
    description:
      "Fotos profissionais que capturam momentos estratégicos: painéis, entrevistas, bastidores, networking e reações. O registro visual complementa a narrativa textual e oferece ao leitor uma experiência mais rica da cobertura.",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: "fa-solid fa-video",
    title: "Conteúdo em Vídeo",
    description:
      "Entrevistas exclusivas, análises ao vivo e resumos em vídeo publicados no canal Marcio Hubert TV. O formato audiovisual permite que o leitor acompanhe declarações completas e perceba nuances que o texto escrito não captura.",
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
];

export default function EventCoverageFormatSection() {
  return (
    <section className="py-12 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
            Como Documentamos Cada Evento
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Nossa cobertura combina diferentes formatos para garantir que o leitor
            tenha acesso completo ao que aconteceu, por que aconteceu e o que isso
            significa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {coverageFormats.map((format, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 md:p-10 hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${format.bgColor} rounded-xl flex items-center justify-center mb-6 mx-auto`}
              >
                <i
                  className={`${format.icon} ${format.iconColor} text-2xl md:text-3xl`}
                ></i>
              </div>
              <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] text-center mb-4">
                {format.title}
              </h3>
              <p className="text-gray-700 text-center leading-relaxed text-sm md:text-base">
                {format.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
