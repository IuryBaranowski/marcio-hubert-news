"use client";

export default function DirectContactChannelsSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
            Canais de Contato Direto
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Prefere falar diretamente? Utilize um dos nossos canais oficiais de comunicação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="bg-[#F5F5F5] rounded-2xl p-8 md:p-10 text-center hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-[#C8102E] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <i className="fa-solid fa-envelope text-white text-2xl md:text-3xl"></i>
            </div>
            <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-3">
              E-mail Geral
            </h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Para sugestões, dúvidas e feedback editorial
            </p>
            <a
              href="mailto:contato@marciohubertnews.com"
              className="text-[#C8102E] font-semibold text-base md:text-lg hover:underline"
            >
              contato@marciohubertnews.com
            </a>
            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-300">
              <p className="text-xs md:text-sm text-gray-500">
                Resposta em até 48 horas úteis
              </p>
            </div>
          </div>

          <div className="bg-[#F5F5F5] rounded-2xl p-8 md:p-10 text-center hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <i className="fa-solid fa-newspaper text-white text-2xl md:text-3xl"></i>
            </div>
            <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-3">
              Assessoria de Imprensa
            </h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Solicitações de entrevistas e comentários à imprensa
            </p>
            <a
              href="mailto:imprensa@marciohubertnews.com"
              className="text-[#C8102E] font-semibold text-base md:text-lg hover:underline"
            >
              imprensa@marciohubertnews.com
            </a>
            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-300">
              <p className="text-xs md:text-sm text-gray-500">Atendimento prioritário</p>
            </div>
          </div>

          <div className="bg-[#F5F5F5] rounded-2xl p-8 md:p-10 text-center hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <i className="fa-solid fa-briefcase text-white text-2xl md:text-3xl"></i>
            </div>
            <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-3">
              Parcerias Comerciais
            </h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Propostas de patrocínio e colaboração estratégica
            </p>
            <a
              href="mailto:comercial@marciohubertnews.com"
              className="text-[#C8102E] font-semibold text-base md:text-lg hover:underline"
            >
              comercial@marciohubertnews.com
            </a>
            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-300">
              <p className="text-xs md:text-sm text-gray-500">
                Análise de propostas em 5 dias úteis
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <i className="fa-solid fa-phone text-[#C8102E] text-2xl md:text-3xl"></i>
                <h3 className="font-serif font-bold text-xl md:text-2xl text-white">
                  Telefone de Contato
                </h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm md:text-base">
                Para assuntos urgentes relacionados à imprensa ou parcerias estratégicas,
                entre em contato via telefone.
              </p>
              <a
                href="tel:+5561999999999"
                className="text-white font-bold text-xl md:text-2xl hover:text-[#C8102E] transition-colors block"
              >
                +55 61 99999-9999
              </a>
              <p className="text-gray-400 text-xs md:text-sm mt-2">
                Segunda a sexta, 9h às 18h (horário de Brasília)
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-4">
                <i className="fa-solid fa-location-dot text-[#C8102E] text-2xl md:text-3xl"></i>
                <h3 className="font-serif font-bold text-xl md:text-2xl text-white">
                  Endereço da Redação
                </h3>
              </div>
              <p className="text-gray-300 mb-2 text-sm md:text-base">
                Marcio Hubert News
                <br />
                SCS Quadra 02, Bloco C, Sala 404
                <br />
                Edifício Tancredo Neves
                <br />
                Brasília, DF – CEP 70300-500
              </p>
              <p className="text-gray-400 text-xs md:text-sm mt-4">
                Atendimento presencial mediante agendamento prévio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
