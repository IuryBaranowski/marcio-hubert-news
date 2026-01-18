"use client";

import { useState } from "react";

interface ContactCard {
  icon: string;
  title: string;
  email: string;
  description: string;
  bgColor: string;
}

const contactCards: ContactCard[] = [
  {
    icon: "fa-solid fa-envelope",
    title: "Assessoria de Imprensa",
    email: "imprensa@marciohubertnews.com",
    description: "Para solicitações de entrevistas e informações editoriais",
    bgColor: "bg-blue-600",
  },
  {
    icon: "fa-solid fa-handshake",
    title: "Parcerias Estratégicas",
    email: "parcerias@marciohubertnews.com",
    description: "Para oportunidades de colaboração institucional",
    bgColor: "bg-green-600",
  },
  {
    icon: "fa-solid fa-bullhorn",
    title: "Publicidade e Mídia",
    email: "comercial@marciohubertnews.com",
    description: "Para oportunidades comerciais e patrocínios",
    bgColor: "bg-purple-600",
  },
];

export default function PressContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requestType: "Entrevista com Marcio Hubert",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
            Contato para Imprensa e Parcerias
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Para entrevistas, solicitações de informações adicionais, parcerias
            estratégicas ou colaborações editoriais, entre em contato através dos
            canais abaixo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${card.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6`}
              >
                <i className={`${card.icon} text-white text-xl md:text-2xl`}></i>
              </div>
              <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-3">
                {card.title}
              </h3>
              <a
                href={`mailto:${card.email}`}
                className="text-[#C8102E] font-semibold hover:underline text-base md:text-lg block mb-3"
              >
                {card.email}
              </a>
              <p className="text-gray-600 text-xs md:text-sm">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <h3 className="font-serif font-bold text-2xl md:text-3xl text-white mb-4">
                Solicite Informações Adicionais
              </h3>
              <p className="text-gray-300 text-base md:text-lg">
                Preencha o formulário abaixo e nossa equipe entrará em contato em
                até 24 horas úteis
              </p>
            </div>

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2 text-xs md:text-sm">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white rounded-lg text-[#0A1628] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2 text-xs md:text-sm">
                    Empresa / Veículo
                  </label>
                  <input
                    type="text"
                    placeholder="Nome da empresa"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white rounded-lg text-[#0A1628] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-sm"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2 text-xs md:text-sm">
                    E-mail Profissional
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white rounded-lg text-[#0A1628] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2 text-xs md:text-sm">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white rounded-lg text-[#0A1628] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-xs md:text-sm">
                  Tipo de Solicitação
                </label>
                <select
                  value={formData.requestType}
                  onChange={(e) =>
                    setFormData({ ...formData, requestType: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white rounded-lg text-[#0A1628] focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-sm"
                  required
                >
                  <option>Entrevista com Marcio Hubert</option>
                  <option>Informações sobre audiência</option>
                  <option>Parceria editorial</option>
                  <option>Oportunidade comercial</option>
                  <option>Cobertura de evento</option>
                  <option>Outro assunto</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-xs md:text-sm">
                  Mensagem
                </label>
                <textarea
                  rows={5}
                  placeholder="Descreva sua solicitação"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white rounded-lg text-[#0A1628] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E] resize-none text-sm"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 md:py-4 bg-[#C8102E] text-white font-bold text-base md:text-lg rounded-lg hover:bg-red-700 transition-colors shadow-xl"
              >
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
