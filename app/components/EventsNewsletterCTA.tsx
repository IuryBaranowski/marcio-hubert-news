"use client";

import { useState } from "react";

export default function EventsNewsletterCTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Newsletter subscription:", email);
  };

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8102E]/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 md:mb-6">
              <i className="fa-solid fa-envelope text-[#C8102E]"></i>
              <span className="text-white text-xs md:text-sm font-semibold">
                NEWSLETTER EXCLUSIVA
              </span>
            </div>

            <h2 className="font-serif font-bold text-2xl md:text-4xl text-white mb-4 md:mb-6 leading-tight">
              Receba Cobertura Exclusiva de Eventos
            </h2>

            <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6 md:mb-10">
              Seja o primeiro a receber análises, entrevistas e bastidores dos
              principais eventos do agronegócio, política e economia brasileira.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4 max-w-2xl mx-auto"
            >
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full md:flex-1 px-4 md:px-6 py-3 md:py-4 rounded-lg text-[#0A1628] font-medium focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-sm md:text-base"
                required
              />
              <button
                type="submit"
                className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-[#C8102E] text-white font-bold rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap text-sm md:text-base"
              >
                Inscrever-se Grátis
              </button>
            </form>

            <p className="text-gray-400 text-xs md:text-sm mt-4 md:mt-6">
              Junte-se a mais de 50 mil profissionais que confiam no Marcio Hubert
              News
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
