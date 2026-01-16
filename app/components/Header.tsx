"use client";

import { useState } from "react";
import { usePathname, Link } from "../../i18n/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Notícias", href: "/noticias" },
    { label: "TV", href: "/tv" },
    { label: "Eventos", href: "/eventos" },
    { label: "Media Kit", href: "/media-kit" },
    { label: "Contato", href: "/contato" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-12">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#C8102E] rounded flex items-center justify-center">
                <i className="fa-solid fa-newspaper text-white text-xl"></i>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif font-bold text-xl text-[#0A1628]">
                  Marcio Hubert
                </span>
                <span className="font-sans text-xs text-gray-600 tracking-wide">
                  NEWS
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-sm font-medium transition-colors relative pb-1 ${
                      active
                        ? "text-[#C8102E] border-b-2 border-[#C8102E]"
                        : "text-gray-600 hover:text-[#C8102E]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {/* <button className="hidden lg:flex items-center space-x-2 px-5 py-2.5 bg-[#C8102E] text-white text-sm font-medium rounded hover:bg-red-700 transition-colors">
              <i className="fa-solid fa-envelope"></i>
              <span>Newsletter</span>
            </button> */}
            <button
              className="lg:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-3">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block text-sm font-medium py-2 border-l-4 pl-3 transition-colors ${
                    active
                      ? "text-[#C8102E] border-[#C8102E] font-semibold"
                      : "text-gray-600 border-transparent"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="#"
              className="flex items-center justify-center space-x-2 px-5 py-3 bg-[#C8102E] text-white text-sm font-medium rounded mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="fa-solid fa-envelope"></i>
              <span>Newsletter</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
