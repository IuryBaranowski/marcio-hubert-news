"use client";

export default function ReadingExperienceSection() {
  return (
    <section className="py-12 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#C8102E] rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
              <i className="fa-solid fa-book-open text-white text-2xl md:text-3xl"></i>
            </div>

            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-6">
              Uma Experiência de Leitura Diferenciada
            </h2>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                No Marcio Hubert News, cada artigo é estruturado para oferecer não
                apenas informação, mas <strong>compreensão estratégica</strong>.
                Nosso formato editorial divide o conteúdo em seções claras:{" "}
                <strong>O Fato</strong>, <strong>O Contexto</strong>,{" "}
                <strong>A Análise</strong> e <strong>Próximos Passos</strong>.
              </p>

              <p>
                Essa estrutura garante que o leitor tenha acesso ao acontecimento,
                entenda suas causas históricas e políticas, compreenda as implicações
                práticas e saiba quais desdobramentos esperar. É jornalismo que
                empodera o leitor a tomar decisões informadas.
              </p>

              <p>
                Além disso, priorizamos <strong>clareza na escrita</strong>,{" "}
                <strong>profundidade analítica</strong> e <strong>acessibilidade</strong>.
                Mesmo temas técnicos são explicados de forma que profissionais de
                diferentes áreas possam compreender e aplicar as informações em seus
                contextos estratégicos.
              </p>
            </div>

            <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-6 md:gap-8">
                <div>
                  <div className="text-[#C8102E] font-bold text-3xl md:text-4xl mb-2">
                    100%
                  </div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">
                    Checagem de Fatos
                  </div>
                </div>
                <div>
                  <div className="text-[#C8102E] font-bold text-3xl md:text-4xl mb-2">
                    Zero
                  </div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">
                    Sensacionalismo
                  </div>
                </div>
                <div>
                  <div className="text-[#C8102E] font-bold text-3xl md:text-4xl mb-2">
                    Total
                  </div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">
                    Imparcialidade
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
