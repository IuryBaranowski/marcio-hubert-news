"use client";

export default function ProfessionalTrajectorySection() {
  const highlights = [
    "Correspondente em Washington D.C. (2018-2021)",
    "Cobertura de 12 edições da Agrishow",
    "Entrevistas com ministros, senadores e CEOs",
    "Palestrante em eventos nacionais e internacionais",
    "Mais de 500 análises publicadas",
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-6 leading-tight">
              Uma Trajetória Dedicada à Análise e ao Interesse Público
            </h2>
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                A carreira de Marcio Hubert começou nas redações de grandes
                veículos de comunicação brasileiros, onde desenvolveu habilidades
                de apuração rigorosa, checagem de fatos e construção narrativa
                baseada em contexto e profundidade analítica.
              </p>
              <p>
                Ao longo dos anos, especializou-se em temas estratégicos: o
                agronegócio como motor econômico do país, a dinâmica política
                nacional, as relações bilaterais entre Brasil e Estados Unidos, e
                os impactos da economia global nos mercados domésticos.
              </p>
              <p>
                Entre 2018 e 2021, atuou como correspondente em Washington D.C.,
                onde acompanhou de perto negociações comerciais, debates no
                Congresso americano e a formulação de políticas que afetam
                diretamente o Brasil. Essa experiência internacional consolidou sua
                visão estratégica e ampliou sua rede de fontes em ambos os países.
              </p>
              <p>
                De volta ao Brasil, fundou o{" "}
                <strong>Marcio Hubert News</strong> com o objetivo de oferecer um
                jornalismo que vai além da manchete: um portal que entrega contexto,
                análise e perspectivas fundamentadas para profissionais que precisam
                tomar decisões informadas.
              </p>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img
                className="w-full h-auto object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d93acf9715-3b1b2b5f4966254e90a6.png"
                alt="Marcio Hubert - Jornalista especializado em agronegócio, política e relações internacionais"
              />
            </div>

            <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-8">
              <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-6">
                Destaques da Carreira
              </h3>
              <ul className="space-y-4">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <i className="fa-solid fa-check-circle text-[#C8102E] text-xl mt-1 flex-shrink-0"></i>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
