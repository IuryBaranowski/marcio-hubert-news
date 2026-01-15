"use client";

export default function ProfessionalProfileSection() {
  const credentials = [
    "Mais de 15 anos de experiência em jornalismo econômico e político",
    "Correspondente em Washington D.C. (2018-2021)",
    "Especialista em Agronegócio e Relações Brasil-EUA",
    "Cobertura de mais de 50 eventos estratégicos nacionais e internacionais",
    "Palestrante e comentarista em fóruns de agronegócio e economia",
  ];

  const specializations = [
    {
      icon: "fa-solid fa-seedling",
      title: "Agronegócio",
      description: "Produção, exportação, políticas públicas, tecnologia agrícola",
      bgColor: "bg-green-50",
      borderColor: "border-green-600",
      iconColor: "text-green-600",
    },
    {
      icon: "fa-solid fa-landmark",
      title: "Política",
      description: "Análise política nacional, Congresso, Executivo, Judiciário",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-600",
      iconColor: "text-blue-600",
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Economia",
      description: "Mercados, política monetária, investimentos, indicadores",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-600",
      iconColor: "text-purple-600",
    },
    {
      icon: "fa-solid fa-globe-americas",
      title: "Brasil-EUA",
      description: "Relações bilaterais, comércio, política externa",
      bgColor: "bg-red-50",
      borderColor: "border-red-600",
      iconColor: "text-red-600",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
            Perfil Profissional
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Marcio Hubert: experiência, credibilidade e especialização em
            jornalismo estratégico
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8">
              <div className="h-80 md:h-96 overflow-hidden bg-gray-100">
                <img
                  className="w-full h-full object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d93acf9715-3b1b2b5f4966254e90a6.png"
                  alt="Marcio Hubert - Jornalista, Editor-Chefe e Fundador do Marcio Hubert News"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-3">
                  Marcio Hubert
                </h3>
                <p className="text-gray-600 text-base md:text-lg mb-4">
                  Jornalista, Editor-Chefe e Fundador do Marcio Hubert News
                </p>
                <div className="flex items-center space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#0A1628] hover:bg-[#C8102E] hover:text-white transition-colors"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#0A1628] hover:bg-[#C8102E] hover:text-white transition-colors"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#0A1628] hover:bg-[#C8102E] hover:text-white transition-colors"
                  >
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h4 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-6">
                Principais Credenciais
              </h4>
              <ul className="space-y-4">
                {credentials.map((credential, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <i className="fa-solid fa-check-circle text-[#C8102E] text-xl mt-1 shrink-0"></i>
                    <span className="text-gray-700">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h4 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-6">
                Biografia Institucional
              </h4>
              <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                <p>
                  Marcio Hubert é jornalista com formação acadêmica em Comunicação
                  Social e especialização em Economia e Relações Internacionais.
                  Iniciou sua carreira em grandes redações brasileiras, onde
                  desenvolveu expertise em cobertura política e econômica.
                </p>
                <p>
                  Entre 2018 e 2021, atuou como correspondente em Washington D.C.,
                  cobrindo as relações bilaterais entre Brasil e Estados Unidos,
                  negociações comerciais e política externa americana. Essa
                  experiência internacional consolidou sua visão estratégica sobre os
                  impactos globais no Brasil.
                </p>
                <p>
                  De volta ao país, especializou-se na cobertura do agronegócio,
                  reconhecendo o setor como motor econômico nacional e tema
                  estratégico para o desenvolvimento brasileiro. Participou de dezenas
                  de eventos como Agrishow, Congresso Brasileiro do Agronegócio e
                  fóruns setoriais.
                </p>
                <p>
                  Em 2024, fundou o Marcio Hubert News, portal dedicado a oferecer
                  jornalismo analítico, imparcial e focado em profissionais que
                  buscam decisões estratégicas baseadas em informação de qualidade.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h4 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-6">
                Áreas de Especialização
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {specializations.map((spec, index) => (
                  <div
                    key={index}
                    className={`${spec.bgColor} rounded-lg p-4 md:p-5 border-l-4 ${spec.borderColor}`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <i
                        className={`${spec.icon} ${spec.iconColor} text-lg md:text-xl`}
                      ></i>
                      <h5 className="font-semibold text-[#0A1628] text-sm md:text-base">
                        {spec.title}
                      </h5>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {spec.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
