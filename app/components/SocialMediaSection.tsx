"use client";

export default function SocialMediaSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
            Acompanhe Nossas Redes Sociais
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Fique por dentro das últimas notícias, análises e conteúdos exclusivos em tempo real
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <a
            href="#"
            className="bg-[#F5F5F5] rounded-xl p-6 md:p-8 text-center hover:shadow-xl transition-all transform hover:scale-105 group"
          >
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 transition-colors">
              <i className="fa-brands fa-youtube text-white text-2xl md:text-3xl"></i>
            </div>
            <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-2">
              YouTube
            </h3>
            <p className="text-gray-600 text-xs md:text-sm mb-3">
              Análises em vídeo e entrevistas exclusivas
            </p>
            <span className="text-[#C8102E] font-semibold text-xs md:text-sm">
              @MarcioHubertNews
            </span>
          </a>

          <a
            href="#"
            className="bg-[#F5F5F5] rounded-xl p-6 md:p-8 text-center hover:shadow-xl transition-all transform hover:scale-105 group"
          >
            <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-800 transition-colors">
              <i className="fa-brands fa-linkedin text-white text-2xl md:text-3xl"></i>
            </div>
            <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-2">
              LinkedIn
            </h3>
            <p className="text-gray-600 text-xs md:text-sm mb-3">
              Networking profissional e insights estratégicos
            </p>
            <span className="text-[#C8102E] font-semibold text-xs md:text-sm">
              Marcio Hubert
            </span>
          </a>

          <a
            href="#"
            className="bg-[#F5F5F5] rounded-xl p-6 md:p-8 text-center hover:shadow-xl transition-all transform hover:scale-105 group"
          >
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-800 transition-colors">
              <i className="fa-brands fa-x-twitter text-white text-2xl md:text-3xl"></i>
            </div>
            <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-2">
              X / Twitter
            </h3>
            <p className="text-gray-600 text-xs md:text-sm mb-3">
              Notícias em tempo real e comentários rápidos
            </p>
            <span className="text-[#C8102E] font-semibold text-xs md:text-sm">
              @MarcioHubertNews
            </span>
          </a>

          <a
            href="#"
            className="bg-[#F5F5F5] rounded-xl p-6 md:p-8 text-center hover:shadow-xl transition-all transform hover:scale-105 group"
          >
            <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-700 transition-colors">
              <i className="fa-brands fa-instagram text-white text-2xl md:text-3xl"></i>
            </div>
            <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-2">
              Instagram
            </h3>
            <p className="text-gray-600 text-xs md:text-sm mb-3">
              Bastidores, eventos e conteúdo visual
            </p>
            <span className="text-[#C8102E] font-semibold text-xs md:text-sm">
              @MarcioHubertNews
            </span>
          </a>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-gray-600 text-sm md:text-base">
            Mensagens diretas nas redes sociais não substituem os canais oficiais de contato
            profissional listados acima.
          </p>
        </div>
      </div>
    </section>
  );
}
