"use client";

export default function ContactIntroSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4 md:mb-6">
            Conecte-se com o Marcio Hubert News
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Nossa equipe está disponível para atender leitores, profissionais de imprensa, parceiros institucionais e empresas que buscam colaboração editorial, patrocínio de conteúdo ou entrevistas exclusivas. Valorizamos o diálogo aberto e respondemos a todas as mensagens com seriedade e profissionalismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <i className="fa-solid fa-user-pen text-blue-600 text-2xl md:text-3xl"></i>
            </div>
            <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-3">
              Leitores e Audiência
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sugestões de pauta, dúvidas sobre conteúdo publicado, feedback editorial ou solicitações de análises específicas.
            </p>
          </div>

          <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <i className="fa-solid fa-microphone text-green-600 text-2xl md:text-3xl"></i>
            </div>
            <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-3">
              Imprensa e Mídia
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Solicitações de entrevistas com Marcio Hubert, pedidos de comentários sobre temas estratégicos ou parcerias editoriais.
            </p>
          </div>

          <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <i className="fa-solid fa-handshake text-[#C8102E] text-2xl md:text-3xl"></i>
            </div>
            <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-3">
              Parceiros Comerciais
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Propostas de patrocínio, branded content, participação em eventos ou colaborações estratégicas com empresas do setor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
