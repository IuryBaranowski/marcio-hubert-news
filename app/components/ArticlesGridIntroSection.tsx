"use client";

export default function ArticlesGridIntroSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-8 md:p-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 md:mb-6">
              <i className="fa-solid fa-sync text-[#C8102E]"></i>
              <span className="text-white text-xs md:text-sm font-semibold">
                ATUALIZAÇÃO EM TEMPO REAL
              </span>
            </div>

            <h2 className="font-serif font-bold text-2xl md:text-4xl text-white mb-4 md:mb-6">
              Conteúdo Sempre Atualizado
            </h2>

            <p className="text-base md:text-xl text-gray-300 leading-relaxed mb-4">
              Os artigos abaixo são atualizados continuamente à medida que novos
              acontecimentos surgem e análises são produzidas. Nosso sistema de
              publicação garante que você tenha acesso às informações mais recentes
              assim que elas são verificadas e contextualizadas.
            </p>

            <p className="text-sm md:text-lg text-gray-400 leading-relaxed">
              Cada artigo passa por rigorosa checagem editorial antes de ser
              publicado, garantindo precisão, contexto e análise de qualidade. Não
              publicamos conteúdo apenas por velocidade — publicamos quando temos
              algo relevante a dizer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
