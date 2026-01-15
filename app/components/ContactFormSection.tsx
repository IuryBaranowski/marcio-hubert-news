"use client";

import { useState } from "react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    company: "",
    message: "",
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact-form-section" className="py-12 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-white mb-4 md:mb-6 leading-tight">
                  Envie Sua Mensagem
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  Preencha o formulário ao lado e nossa equipe responderá em até 48 horas úteis. Todas as mensagens são tratadas com confidencialidade e profissionalismo.
                </p>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-clock text-[#C8102E] text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1 text-sm md:text-base">
                        Tempo de Resposta
                      </div>
                      <div className="text-gray-400 text-xs md:text-sm">
                        Até 48 horas úteis
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-shield-halved text-[#C8102E] text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1 text-sm md:text-base">
                        Privacidade Garantida
                      </div>
                      <div className="text-gray-400 text-xs md:text-sm">
                        Seus dados são protegidos
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-user-check text-[#C8102E] text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1 text-sm md:text-base">
                        Atendimento Profissional
                      </div>
                      <div className="text-gray-400 text-xs md:text-sm">
                        Equipe especializada
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 md:pt-8 border-t border-white/20 mt-6 md:mt-8">
                <p className="text-gray-400 text-xs md:text-sm">
                  Preferiu outro canal? Veja as informações de contato direto abaixo do formulário.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 p-8 md:p-12">
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-[#0A1628] mb-2">
                      Nome Completo <span className="text-[#C8102E]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-[#0A1628] mb-2">
                      E-mail <span className="text-[#C8102E]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-[#0A1628] mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      placeholder="+55 (11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-[#0A1628] mb-2">
                      Assunto <span className="text-[#C8102E]">*</span>
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent text-sm"
                    >
                      <option value="">Selecione um assunto</option>
                      <option>Sugestão de Pauta</option>
                      <option>Solicitação de Entrevista</option>
                      <option>Parceria Comercial</option>
                      <option>Assessoria de Imprensa</option>
                      <option>Dúvida sobre Conteúdo</option>
                      <option>Feedback Editorial</option>
                      <option>Outro Assunto</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-[#0A1628] mb-2">
                    Empresa / Organização
                  </label>
                  <input
                    type="text"
                    placeholder="Nome da empresa (opcional)"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-[#0A1628] mb-2">
                    Mensagem <span className="text-[#C8102E]">*</span>
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Descreva sua solicitação, sugestão ou dúvida de forma clara e objetiva..."
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent resize-none text-sm"
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    checked={formData.privacy}
                    onChange={(e) =>
                      setFormData({ ...formData, privacy: e.target.checked })
                    }
                    className="mt-1 w-4 h-4 text-[#C8102E] border-gray-300 rounded focus:ring-[#C8102E]"
                  />
                  <label htmlFor="privacy" className="text-xs md:text-sm text-gray-600">
                    Concordo com a{" "}
                    <a href="#" className="text-[#C8102E] hover:underline font-medium">
                      Política de Privacidade
                    </a>{" "}
                    e autorizo o uso dos meus dados para responder esta solicitação.{" "}
                    <span className="text-[#C8102E]">*</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 md:py-4 bg-[#C8102E] text-white font-bold text-base md:text-lg rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Enviar Mensagem
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Campos marcados com <span className="text-[#C8102E]">*</span> são
                  obrigatórios
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
