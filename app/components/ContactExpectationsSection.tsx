"use client";

export default function ContactExpectationsSection() {
  return (
    <section className="py-12 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
            O Que Você Pode Esperar de Nós
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Nosso compromisso com transparência e profissionalismo se estende ao atendimento
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-[#C8102E] hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4 md:space-x-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-clock text-[#C8102E] text-xl md:text-2xl"></i>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-2 md:mb-3">
                  Tempo de Resposta
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Todas as mensagens recebidas via formulário ou e-mail são respondidas em
                  até <strong>48 horas úteis</strong>. Solicitações urgentes de imprensa
                  recebem prioridade e podem ser atendidas no mesmo dia, dependendo da
                  disponibilidade da equipe.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4 md:space-x-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-comments text-blue-600 text-xl md:text-2xl"></i>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-2 md:mb-3">
                  Tipos de Mensagem Aceitas
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2 md:mb-3 text-sm md:text-base">
                  Estamos abertos a receber:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start space-x-2">
                    <i className="fa-solid fa-check text-green-600 mt-1"></i>
                    <span>
                      Sugestões de pautas e temas relevantes para cobertura
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fa-solid fa-check text-green-600 mt-1"></i>
                    <span>Solicitações de entrevistas com Marcio Hubert</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fa-solid fa-check text-green-600 mt-1"></i>
                    <span>Propostas de parcerias editoriais ou comerciais</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fa-solid fa-check text-green-600 mt-1"></i>
                    <span>
                      Dúvidas ou esclarecimentos sobre conteúdo publicado
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fa-solid fa-check text-green-600 mt-1"></i>
                    <span>Feedback construtivo sobre a linha editorial</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fa-solid fa-check text-green-600 mt-1"></i>
                    <span>Convites para eventos, palestras e conferências</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-green-600 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4 md:space-x-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-shield-halved text-green-600 text-xl md:text-2xl"></i>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-2 md:mb-3">
                  Privacidade e Confidencialidade
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Todas as informações compartilhadas conosco são tratadas com{" "}
                  <strong>confidencialidade</strong>. Seus dados pessoais não serão
                  compartilhados com terceiros sem autorização expressa. Respeitamos
                  integralmente a Lei Geral de Proteção de Dados (LGPD) e garantimos a
                  segurança de todas as comunicações.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-purple-600 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4 md:space-x-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-handshake text-purple-600 text-xl md:text-2xl"></i>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-2 md:mb-3">
                  Abordagem Profissional
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Nossa equipe trata todas as solicitações com{" "}
                  <strong>seriedade, respeito e profissionalismo</strong>. Mesmo que não
                  possamos atender imediatamente a todas as demandas, garantimos uma resposta
                  clara, objetiva e cortês. Valorizamos o diálogo aberto e a construção de
                  relações de longo prazo baseadas em confiança mútua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
