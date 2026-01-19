"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("header");
  const tCommon = useTranslations("common");
  const tFooter = useTranslations("footer");

  const navigationLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/sobre" },
    { label: t("consulting"), href: "/noticias" },
    { label: t("lecture"), href: "/tv" },
    { label: t("mentoring"), href: "/eventos" },
    { label: t("mediaTraining"), href: "/media-kit" },
    { label: t("crisisManagement"), href: "/media-kit" },
    { label: t("contact"), href: "/contato" },
  ];

  const categories = [
    { label: tFooter("agribusiness"), href: "#" },
    { label: tFooter("politics"), href: "#" },
    { label: tFooter("economy"), href: "#" },
    { label: tFooter("unitedStates"), href: "#" }
  ];

  const socialLinks = [
    { icon: "fa-brands fa-youtube", href: "https://www.youtube.com/@MarcioHubertNews" },
    { icon: "fa-brands fa-linkedin", href: "https://www.linkedin.com/in/marciohubert/" },
    { icon: "fa-brands fa-tiktok", href: "https://www.tiktok.com/@marciohubertnews?is_from_webapp=1&sender_device=pc" },
    { icon: "fa-brands fa-instagram", href: "https://www.instagram.com/marciohubertnews/" },
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
                  {tCommon("brandName")}
                </span>
                <span className="font-sans text-[10px] md:text-xs text-gray-400 tracking-wide">
                  {tCommon("brandSubtitle")}
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              {tFooter("description")}
            </p>
            <div className="flex items-center space-x-2 md:space-x-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#C8102E] transition-colors"
                >
                  <i className={social.icon}></i>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white text-sm md:text-lg mb-4 md:mb-6">
              {tFooter("navigation")}
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
              {tFooter("categories")}
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
              {tFooter("contact")}
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start space-x-2 md:space-x-3">
                <i className="fa-solid fa-envelope text-[#C8102E] mt-0.5 md:mt-1 text-sm"></i>
                <div>
                  <div className="text-gray-400 text-[10px] md:text-xs mb-0.5 md:mb-1">
                    {tCommon("email")}
                  </div>
                  <a
                    href="mailto:journalist.marciohubert@gmail.com"
                    className="text-white text-xs md:text-sm hover:text-[#C8102E] transition-colors"
                  >
                    journalist.marciohubert@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2 md:space-x-3">
                <i className="fa-solid fa-phone text-[#C8102E] mt-0.5 md:mt-1 text-sm"></i>
                <div>
                  <div className="text-gray-400 text-[10px] md:text-xs mb-0.5 md:mb-1">
                    {tCommon("press")}
                  </div>
                  <a
                    href="tel:+16892434840"
                    className="text-white text-xs md:text-sm hover:text-[#C8102E] transition-colors"
                  >
                    +1 (689) 243-4840
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2 md:space-x-3">
                <i className="fa-solid fa-location-dot text-[#C8102E] mt-0.5 md:mt-1 text-sm"></i>
                <div>
                  <div className="text-gray-400 text-[10px] md:text-xs mb-0.5 md:mb-1">
                    {tCommon("headquarters")}
                  </div>
                  <span className="text-white text-xs md:text-sm">
                    Tennessee - USA
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
            {tCommon("allRightsReserved")}
          </p>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors"
            >
              {tCommon("privacyPolicy")}
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors"
            >
              {tCommon("termsOfUse")}
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors"
            >
              {tCommon("codeOfEthics")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
