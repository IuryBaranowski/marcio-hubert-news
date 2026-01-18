"use client";

export default function ContactClosingSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C8102E] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <h2 className="font-serif font-bold text-3xl md:text-5xl text-white mb-6 md:mb-8 leading-tight">
          Estamos Abertos ao Diálogo
        </h2>
        <div className="space-y-4 md:space-y-6 text-base md:text-xl text-gray-300 leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto">
          <p>
            O Marcio Hubert News valoriza a relação com seus leitores, parceiros e com a
            comunidade jornalística. Acreditamos que o jornalismo de qualidade se constrói
            com transparência, responsabilidade e abertura ao diálogo.
          </p>
          <p>
            Seja para sugerir uma pauta, propor uma parceria estratégica, solicitar uma
            entrevista ou simplesmente compartilhar sua opinião sobre nosso trabalho,
            estamos prontos para ouvir e responder com profissionalismo.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-3 md:space-x-4 mb-4 md:mb-6">
            <i className="fa-solid fa-comments text-[#C8102E] text-3xl md:text-4xl"></i>
            <h3 className="font-serif font-bold text-2xl md:text-3xl text-white">
              Nossa Promessa
            </h3>
          </div>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            Comprometemo-nos a responder todas as mensagens recebidas com{" "}
            <strong>atenção, respeito e clareza</strong>. Mesmo que não possamos atender a
            todas as solicitações imediatamente, garantimos uma resposta profissional e
            transparente. Sua mensagem é importante para nós.
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <a
            href="#contact-form-section"
            className="inline-flex items-center space-x-3 px-8 md:px-10 py-4 md:py-5 bg-[#C8102E] text-white font-bold text-base md:text-lg rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-2xl"
          >
            <i className="fa-solid fa-paper-plane"></i>
            <span>Envie Sua Mensagem Agora</span>
          </a>
        </div>
      </div>
    </section>
  );
}
