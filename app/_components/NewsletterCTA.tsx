"use client";

import { useState } from "react";

export default function NewsletterCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Agronegócio",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-[#C8102E] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 md:mb-6">
            <i className="fa-solid fa-envelope text-[#C8102E] text-sm md:text-base"></i>
            <span className="text-white text-xs md:text-sm font-semibold">
              NEWSLETTER EXCLUSIVA
            </span>
          </div>
          <h2 className="font-serif font-bold text-2xl md:text-5xl text-white mb-4 md:mb-6 leading-tight">
            Não Fique Apenas na Manchete.
            <br />
            Entenda o Contexto.
          </h2>
          <p className="text-sm md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6 md:mb-10">
            Receba diariamente as principais notícias do agronegócio, política e
            economia com análises exclusivas direto no seu e-mail. Conteúdo
            gratuito para profissionais que buscam decisões estratégicas.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 max-w-3xl mx-auto">
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs md:text-sm font-semibold text-[#0A1628] mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-semibold text-[#0A1628] mb-2">
                  E-mail Profissional
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs md:text-sm font-semibold text-[#0A1628] mb-2">
                Área de Interesse
              </label>
              <select
                value={formData.interest}
                onChange={(e) =>
                  setFormData({ ...formData, interest: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent text-sm"
              >
                <option>Agronegócio</option>
                <option>Política</option>
                <option>Economia</option>
                <option>Brasil-EUA</option>
                <option>Todas as áreas</option>
              </select>
            </div>

            <div className="flex items-start space-x-2 md:space-x-3">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 text-[#C8102E] border-gray-300 rounded focus:ring-[#C8102E] flex-shrink-0"
              />
              <label
                htmlFor="terms"
                className="text-xs md:text-sm text-gray-600"
              >
                Concordo em receber comunicações do Marcio Hubert News e aceito
                a política de privacidade. Posso cancelar a qualquer momento.
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 md:py-4 bg-[#C8102E] text-white font-bold text-sm md:text-lg rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Quero Receber Análises Exclusivas
            </button>
          </form>

          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-4 md:gap-6 text-center">
              <div>
                <div className="text-[#C8102E] font-bold text-xl md:text-3xl mb-1">
                  50K+
                </div>
                <div className="text-gray-600 text-xs md:text-sm">
                  Assinantes Ativos
                </div>
              </div>
              <div>
                <div className="text-[#C8102E] font-bold text-xl md:text-3xl mb-1">
                  100%
                </div>
                <div className="text-gray-600 text-xs md:text-sm">Gratuito</div>
              </div>
              <div>
                <div className="text-[#C8102E] font-bold text-xl md:text-3xl mb-1">
                  Diário
                </div>
                <div className="text-gray-600 text-xs md:text-sm">
                  Análises Exclusivas
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-12 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            Junte-se a milhares de profissionais que confiam no Marcio Hubert
            News para se manterem informados
          </p>
        </div>
      </div>
    </section>
  );
}

