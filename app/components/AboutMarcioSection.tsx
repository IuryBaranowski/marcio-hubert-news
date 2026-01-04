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
              Em um ambiente cada vez mais marcado por polarização, desinformação e narrativas
              simplificadas, compreender como os Estados Unidos funcionam de fato tornou-se
              essencial para o público brasileiro. Leis, instituições e decisões políticas
               americanas impactam diretamente o Brasil e a vida de milhões de brasileiros que 
               vivem fora do país.
            </p>
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
              O Marcio Hubert News nasce para preencher essa lacuna com jornalismo educativo, 
              direto e acessível. O projeto traduz o funcionamento do sistema político, 
              jurídico e econômico americano com base em fatos, dados oficiais e experiência 
              prática, sem discursos ideológicos ou atalhos narrativos.
            </p>
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
             Para a comunidade brasileira no Brasil e no exterior, o canal se propõe a ser
              uma referência confiável. Um espaço de informação responsável, feito por quem 
              vive, trabalha e atua nos Estados Unidos, com o compromisso de informar para 
              esclarecer e não para dividir.
            </p>
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-check-circle text-[#C8102E] text-lg md:text-xl"></i>
                <span className="text-white text-sm md:text-base">
                  Especialista em Agronegócio, Economia e Política.
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-check-circle text-[#C8102E] text-lg md:text-xl"></i>
                <span className="text-white text-sm md:text-base">
                  Membro da Society of Professional Journalists / USA 3.
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-check-circle text-[#C8102E] text-lg md:text-xl"></i>
                <span className="text-white text-sm md:text-base">
                  Palestrante e mediador de eventos.
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
                src="images/marciosecondphoto.jpeg"
                alt="professional male journalist in business suit, corporate portrait photography, editorial style, confident pose"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 md:p-6 max-w-xs hidden md:block">
              <div className="flex items-center space-x-3 mb-2 md:mb-3">
                <i className="fa-solid fa-quote-left text-[#C8102E] text-xl md:text-2xl"></i>
              </div>
              <p className="text-[#0A1628] text-sm md:text-base font-medium italic">
                "Em um cenário marcado por polarização e excesso de narrativas, o Marcio
                Hubert News surge como um espaço de jornalismo educativo e esclarecedor. Informação com contexto,
                fatos e linguagem simples para quem quer entender, na prática, como funcionam as instituições e
                as leis americanas. Sem discurso, sem militância e sem distorções."
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

