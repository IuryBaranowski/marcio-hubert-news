"use client";

import { Link } from "@/i18n/navigation";

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
              Comunicação Estratégica para Redução de Risco e Crescimento
            </h2>
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
              Em ambientes marcados por instabilidade política, ruído informacional e 
              decisões de alto impacto, empresas e empres ários não precisam apenas de 
              informação precisam de clareza estratégica, previsibilidade e proteção.
              Minha atuação vai além da análise ou observação do cenário. 
              Sou jornalista internacional baseado nos Estados Unidos,
              empresário com operações ativas no país e profissional inserido no 
              ecossistema da mídia americana. Isso me permite atuar diretamente no jogo,
              compreendendo como decisões institucionais, narrativas públicas e movimentos 
              de poder afetam negócios, reputações e resultados financeiros.
            </p>
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
              Ajudo empresas e líderes a reduzir riscos de exposição pública, regulatória
              e reputacional; Blindar o negócio contra crises, ruídos e narrativas 
              desfavoráveis; Ganhar escala com posicionamento claro e comunicação estratégica;
              Aumentar previsibilidade em cenários complexos e voláteis;
              Gerar valor e lucro por meio de decisões mais informadas e seguras.
              Não entrego discursos genéricos nem soluções teóricas. 
              Estruturo narrativas, estratégias e decisões baseadas em fatos, dados 
              oficiais e vivência direta nos bastidores.
            </p>
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
             Não atuo como comentarista externo, mas como parceiro estratégico de empresas e
              empresários que precisam se posicionar, se proteger e crescer em mercados 
              altamente expostos, especialmente na relação entre Brasil, Estados Unidos, 
              Emirados Árabes Unidos e América Latina.
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
                  Palestrante e mediador de eventos.
                  </span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-check-circle text-[#C8102E] text-lg md:text-xl"></i>
                <span className="text-white text-sm md:text-base">
                  Membro da Society of Professional Journalists / USA.
                </span>
              </div>
            </div>
            <Link
              href="/sobre"
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
            <div className="absolute -bottom-15 -right-6 bg-white rounded-xl shadow-xl p-4 md:p-6 max-w-xs hidden md:block">
              <div className="flex items-center space-x-3 mb-2 md:mb-3">
                <i className="fa-solid fa-quote-left text-[#C8102E] text-xl md:text-2xl"></i>
              </div>
              <p className="text-[#0A1628] text-sm md:text-base font-medium italic">
                Nosso trabalho é diagnosticar cenários, estruturar posicionamento, preparar
                porta-vozes e gerir riscos. A compreensão prática de como funcionam as
                instituições, as leis e o ecossistema de poder nos Estados Unidos é usada 
                como ferramenta para tomada de decisão, gestão de crise e crescimento
                sustentável. Ajudamos empresas e líderes a ganhar previsibilidade, bater
                metas e se posicionar com clareza em mercados complexos.
              </p>
            </div>
            {/* Mobile Quote */}
            <div className="bg-white rounded-xl shadow-xl p-4 mt-6 md:hidden">
              <div className="flex items-start space-x-3 mb-2">
                <i className="fa-solid fa-quote-left text-[#C8102E] text-xl"></i>
              </div>
              <p className="text-[#0A1628] text-sm font-medium italic">
                &ldquo;Nosso trabalho é diagnosticar cenários, estruturar posicionamento, preparar porta-vozes e gerir riscos. A compreensão prática de como funcionam as instituições, as leis e o ecossistema de poder nos Estados Unidos é usada como ferramenta para tomada de decisão, gestão de crise e crescimento sustentável. Ajudamos empresas e líderes a ganhar previsibilidade, bater metas e se posicionar com clareza em mercados complexos.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

