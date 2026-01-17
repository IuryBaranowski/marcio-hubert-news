"use client";

import { Link } from "../../i18n/navigation";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628] h-[700px] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C8102E] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <div className="w-2 h-2 bg-[#C8102E] rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">
              Consultoria • Palestra • Mentoria • Media Training • Gestão de Crise
            </span>
          </div>

          <h1 className="font-serif font-bold text-4xl md:text-6xl text-white leading-tight mb-6">
            • Jornalista Internacional <br />
            • Comunicação Estratégica <br />
          </h1>
          <h6 className="font-serif font-bold text-1xl md:text-2xl text-white leading-tight mb-6">
            🇧🇷 Brasil &nbsp;&nbsp; 🇺🇸 EUA &nbsp;&nbsp; 🌎 LatAm &nbsp;&nbsp; 🇦🇪 EAU
          </h6>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl">
            Especialista no ambiente político, econômico e midiático dos EUA.
            <br />
            Ajudo empresas na tomada de decisão.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/noticias"
              className="inline-flex items-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-[#C8102E] text-white font-semibold rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl"
            >
              <span>Agendar Diagnóstico</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <Link
              href="https://www.youtube.com/@MarcioHubertNews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              <i className="fa-brands fa-youtube"
                style={{ color: "#ff0000b6" }}></i>
              <span className="hidden md:inline">
                Inscreva-se
              </span>
              <span className="md:hidden">Nosso Canal</span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 mt-12 pt-12 border-t border-white/20">
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-chart-line text-[#C8102E] text-2xl"></i>
              <div>
                <div className="text-white font-bold text-xl md:text-2xl">
                  200+
                </div>
                <div className="text-gray-400 text-xs md:text-sm">
                  Eventos
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-users text-[#C8102E] text-2xl"></i>
              <div>
                <div className="text-white font-bold text-xl md:text-2xl">
                  40M+
                </div>
                <div className="text-gray-400 text-xs md:text-sm">
                  Telespectadores
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-video text-[#C8102E] text-2xl"></i>
              <div>
                <div className="text-white font-bold text-xl md:text-2xl">
                  7K+
                </div>
                <div className="text-gray-400 text-xs md:text-sm">
                  Telejornais
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
