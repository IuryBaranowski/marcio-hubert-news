"use client";

import Link from "next/link";

export default function EventCommitmentSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C8102E] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <h2 className="font-serif font-bold text-3xl md:text-5xl text-white mb-6 md:mb-8 leading-tight">
          Presença e Credibilidade
        </h2>
        <div className="space-y-4 md:space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed mb-8 md:mb-12">
          <p>
            A cobertura de eventos exige mais do que presença física: exige
            conhecimento prévio do setor, capacidade de identificar o que é
            relevante, habilidade de fazer as perguntas certas e compromisso com
            a entrega de conteúdo útil ao leitor.
          </p>
          <p>
            O Marcio Hubert News não participa de eventos apenas para registrar
            palestras. Participamos para construir narrativas estratégicas, para
            entrevistar quem realmente decide, para capturar bastidores e para
            oferecer ao nosso público uma visão que vai além do que está na
            programação oficial.
          </p>
          <p>
            Nosso compromisso é transformar cada evento coberto em conteúdo que
            ajude profissionais a entender tendências, antecipar movimentos de
            mercado e tomar decisões mais informadas.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 max-w-3xl mx-auto mb-8 md:mb-16">
          <i className="fa-solid fa-quote-left text-[#C8102E] text-3xl md:text-4xl mb-6"></i>
          <blockquote className="font-serif text-lg md:text-2xl text-white leading-relaxed italic mb-4 md:mb-6">
            "Estar presente nos eventos certos, com as perguntas certas e o olhar
            estratégico necessário é o que diferencia uma cobertura jornalística de
            um simples registro burocrático."
          </blockquote>
          <p className="text-gray-300 font-semibold text-sm md:text-base">
            — Marcio Hubert, Editor-Chefe
          </p>
        </div>

        <div>
          <Link
            href="#"
            className="inline-flex items-center space-x-3 px-8 md:px-10 py-4 md:py-5 bg-[#C8102E] text-white font-bold text-base md:text-lg rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-2xl"
          >
            <span>Acompanhe Nossa Cobertura de Eventos</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
