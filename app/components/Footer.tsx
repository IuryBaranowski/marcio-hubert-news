"use client";

import Link from "next/link";

export default function Footer() {
  const navigationLinks = [
    { label: "Home", href: "#" },
    { label: "Sobre", href: "#" },
    { label: "Notícias", href: "#" },
    { label: "TV", href: "#" },
    { label: "Eventos", href: "#" },
    { label: "Media Kit", href: "#" },
    { label: "Contato", href: "#" },
  ];

  const categories = [
    { label: "Agronegócio", href: "#" },
    { label: "Política", href: "#" },
    { label: "Economia", href: "#" },
    { label: "Brasil-EUA", href: "#" },
    { label: "Mundo", href: "#" },
    { label: "Análises", href: "#" },
  ];

  const socialLinks = [
    { icon: "fa-brands fa-youtube", href: "#" },
    { icon: "fa-brands fa-linkedin", href: "#" },
    { icon: "fa-brands fa-twitter", href: "#" },
    { icon: "fa-brands fa-instagram", href: "#" },
  ];

  return (
    <footer className="bg-[#0A1628] pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12 pb-8 md:pb-12 border-b border-white/10">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#C8102E] rounded flex items-center justify-center">
                <i className="fa-solid fa-newspaper text-white text-base md:text-xl"></i>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif font-bold text-base md:text-xl text-white">
                  Marcio Hubert
                </span>
                <span className="font-sans text-[10px] md:text-xs text-gray-400 tracking-wide">
                  NEWS
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              Jornalismo profissional com foco em agronegócio, política,
              economia e relações Brasil-EUA.
            </p>
            <div className="flex items-center space-x-2 md:space-x-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#C8102E] transition-colors"
                >
                  <i className={social.icon}></i>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white text-sm md:text-lg mb-4 md:mb-6">
              Navegação
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white text-sm md:text-lg mb-4 md:mb-6">
              Categorias
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {categories.map((category) => (
                <li key={category.label}>
                  <Link
                    href={category.href}
                    className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white text-sm md:text-lg mb-4 md:mb-6">
              Contato
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start space-x-2 md:space-x-3">
                <i className="fa-solid fa-envelope text-[#C8102E] mt-0.5 md:mt-1 text-sm"></i>
                <div>
                  <div className="text-gray-400 text-[10px] md:text-xs mb-0.5 md:mb-1">
                    E-mail
                  </div>
                  <a
                    href="mailto:contato@marciohubertnews.com"
                    className="text-white text-xs md:text-sm hover:text-[#C8102E] transition-colors"
                  >
                    contato@marciohubertnews.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2 md:space-x-3">
                <i className="fa-solid fa-phone text-[#C8102E] mt-0.5 md:mt-1 text-sm"></i>
                <div>
                  <div className="text-gray-400 text-[10px] md:text-xs mb-0.5 md:mb-1">
                    Imprensa
                  </div>
                  <a
                    href="tel:+5511999999999"
                    className="text-white text-xs md:text-sm hover:text-[#C8102E] transition-colors"
                  >
                    +55 11 99999-9999
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2 md:space-x-3">
                <i className="fa-solid fa-location-dot text-[#C8102E] mt-0.5 md:mt-1 text-sm"></i>
                <div>
                  <div className="text-gray-400 text-[10px] md:text-xs mb-0.5 md:mb-1">
                    Sede
                  </div>
                  <span className="text-white text-xs md:text-sm">
                    Brasília, DF - Brasil
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
            © 2025 Marcio Hubert News. Todos os direitos reservados.
          </p>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors"
            >
              Termos de Uso
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors"
            >
              Código de Ética
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

