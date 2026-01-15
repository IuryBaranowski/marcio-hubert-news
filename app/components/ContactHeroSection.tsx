"use client";

export default function ContactHeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628] h-[500px] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C8102E] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <i className="fa-solid fa-comments text-[#C8102E]"></i>
            <span className="text-white text-sm font-medium">Entre em Contato</span>
          </div>

          <h1 className="font-serif font-bold text-4xl md:text-6xl text-white leading-tight mb-6">
            Estamos Prontos para
            <br />
            Ouvir Você
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
            Seja você um leitor, jornalista, parceiro comercial ou representante de imprensa, valorizamos sua mensagem. Entre em contato conosco para sugestões de pauta, parcerias estratégicas, solicitações de entrevista ou qualquer outra questão profissional.
          </p>
        </div>
      </div>
    </section>
  );
}
