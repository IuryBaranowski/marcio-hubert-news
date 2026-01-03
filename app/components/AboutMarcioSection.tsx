"use client";

import Link from "next/link";

export default function AboutMarcioSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 md:mb-6">
              <i className="fa-solid fa-user-tie text-[#C8102E] text-sm md:text-base"></i>
              <span className="text-white text-xs md:text-sm font-semibold">
                SOBRE O EDITOR
              </span>
            </div>
            <h2 className="font-serif font-bold text-2xl md:text-4xl text-white mb-4 md:mb-6 leading-tight">
              Marcio Hubert:
              <br />
              Jornalismo com Credibilidade
            </h2>
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
              Com mais de 15 anos de experiência em jornalismo político e
              econômico, Marcio Hubert consolidou-se como uma das principais vozes
              na análise estratégica do agronegócio e das relações
              Brasil-Estados Unidos.
            </p>
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
              Sua trajetória inclui passagens por grandes veículos de
              comunicação, cobertura de eventos internacionais e entrevistas
              exclusivas com lideranças políticas e empresariais. O compromisso
              com a imparcialidade e a profundidade analítica são marcas
              registradas de seu trabalho.
            </p>
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-check-circle text-[#C8102E] text-lg md:text-xl"></i>
                <span className="text-white text-sm md:text-base">
                  Especialista em Agronegócio e Relações Internacionais
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-check-circle text-[#C8102E] text-lg md:text-xl"></i>
                <span className="text-white text-sm md:text-base">
                  Correspondente em Washington D.C. (2018-2021)
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-check-circle text-[#C8102E] text-lg md:text-xl"></i>
                <span className="text-white text-sm md:text-base">
                  Palestrante em Eventos Nacionais e Internacionais
                </span>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex items-center justify-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-[#C8102E] text-white font-semibold rounded-lg hover:bg-red-700 transition-colors w-full md:w-auto"
            >
              <span className="text-sm md:text-base">Conheça a Trajetória</span>
              <i className="fa-solid fa-arrow-right text-xs md:text-base"></i>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -left-8 w-48 h-48 md:w-72 md:h-72 bg-[#C8102E]/20 rounded-full blur-3xl hidden md:block"></div>
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d93acf9715-3b1b2b5f4966254e90a6.png"
                alt="professional male journalist in business suit, corporate portrait photography, editorial style, confident pose"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 md:p-6 max-w-xs hidden md:block">
              <div className="flex items-center space-x-3 mb-2 md:mb-3">
                <i className="fa-solid fa-quote-left text-[#C8102E] text-xl md:text-2xl"></i>
              </div>
              <p className="text-[#0A1628] text-sm md:text-base font-medium italic">
                "Não basta informar. É preciso contextualizar, analisar e
                oferecer perspectivas que empoderem o leitor a tomar decisões
                estratégicas."
              </p>
            </div>
            {/* Mobile Quote */}
            <div className="bg-white rounded-xl shadow-xl p-4 mt-6 md:hidden">
              <div className="flex items-start space-x-3 mb-2">
                <i className="fa-solid fa-quote-left text-[#C8102E] text-xl"></i>
              </div>
              <p className="text-[#0A1628] text-sm font-medium italic">
                "Não basta informar. É preciso contextualizar, analisar e
                oferecer perspectivas que empoderem o leitor a tomar decisões
                estratégicas."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

