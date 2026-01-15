"use client";

export default function VideoIntroSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-red-50 rounded-full mb-4 md:mb-6">
              <i className="fa-brands fa-youtube text-red-600"></i>
              <span className="text-red-600 text-xs md:text-sm font-semibold">
                PUBLICADO NO YOUTUBE
              </span>
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-6 leading-tight">
              Por Que Consumir Conteúdo em Vídeo?
            </h2>
            <div className="space-y-4 md:space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Todo o conteúdo audiovisual do Marcio Hubert News é publicado no
                YouTube, garantindo acesso fácil, gratuito e multiplataforma. Os vídeos
                são otimizados para consumo em desktop, mobile e TV, permitindo que
                você acompanhe as análises no formato que preferir.
              </p>
              <p>
                O formato em vídeo oferece uma experiência mais rica e dinâmica: você
                não apenas lê sobre os fatos, mas acompanha análises ao vivo, vê
                entrevistas exclusivas e compreende o contexto através de elementos
                visuais, gráficos e infográficos explicativos.
              </p>
              <p>
                É o complemento perfeito para quem busca profundidade analítica sem
                abrir mão da praticidade e da imersão que o audiovisual proporciona.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -right-8 w-48 md:w-72 h-48 md:h-72 bg-red-600/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-64 md:h-96 bg-gray-900">
                <img
                  className="w-full h-full object-cover opacity-90"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f9aba1d8ae-aefa72bac2a3b02e92a4.png"
                  alt="professional news studio setup, broadcast quality video production, editorial journalism, modern equipment"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <i className="fa-solid fa-play text-white text-2xl md:text-3xl ml-1"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 md:p-6 max-w-xs">
              <div className="flex items-center space-x-3 md:space-x-4 mb-3">
                <i className="fa-brands fa-youtube text-red-600 text-2xl md:text-3xl"></i>
                <div>
                  <div className="text-[#0A1628] font-bold text-xl md:text-2xl">
                    200+
                  </div>
                  <div className="text-gray-600 text-xs md:text-sm">
                    Vídeos Publicados
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
