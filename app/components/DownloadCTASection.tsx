"use client";

import Link from "next/link";

export default function DownloadCTASection() {
  return (
    <section className="py-12 md:py-24 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#C8102E]/10 rounded-full mb-4 md:mb-6">
          <i className="fa-solid fa-file-pdf text-[#C8102E]"></i>
          <span className="text-[#C8102E] text-xs md:text-sm font-semibold">
            DOCUMENTO COMPLETO
          </span>
        </div>

        <h2 className="font-serif font-bold text-3xl md:text-5xl text-[#0A1628] mb-4 md:mb-6 leading-tight">
          Baixe o Media Kit Completo em PDF
        </h2>

        <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6 md:mb-10">
          Documento institucional com todas as informações sobre o Marcio Hubert
          News: perfil editorial, dados de audiência, formatos de conteúdo, contatos
          e oportunidades de parceria.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4 mb-8 md:mb-12">
          <Link
            href="#"
            className="inline-flex items-center space-x-3 px-8 md:px-10 py-4 md:py-5 bg-[#C8102E] text-white font-bold text-base md:text-lg rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-2xl"
          >
            <i className="fa-solid fa-download text-lg md:text-xl"></i>
            <span>Baixar Media Kit (PDF)</span>
          </Link>
          <Link
            href="#"
            className="inline-flex items-center space-x-3 px-8 md:px-10 py-4 md:py-5 bg-white text-[#0A1628] font-bold text-base md:text-lg rounded-lg hover:bg-gray-50 transition-all border-2 border-[#0A1628]"
          >
            <i className="fa-solid fa-envelope text-lg md:text-xl"></i>
            <span>Solicitar por E-mail</span>
          </Link>
        </div>

        <div className="mt-8 md:mt-12 bg-white rounded-2xl p-6 md:p-8 max-w-3xl mx-auto shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-red-100 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-file-pdf text-[#C8102E] text-2xl md:text-3xl"></i>
              </div>
              <div className="text-left">
                <h4 className="font-serif font-bold text-lg md:text-xl text-[#0A1628]">
                  Media Kit 2025
                </h4>
                <p className="text-gray-600 text-xs md:text-sm">
                  Documento institucional oficial • 12 páginas • PDF
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-[#C8102E] font-bold text-xl md:text-2xl">
                2.4 MB
              </div>
              <div className="text-gray-600 text-xs md:text-sm">
                Atualizado em Jan/2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
