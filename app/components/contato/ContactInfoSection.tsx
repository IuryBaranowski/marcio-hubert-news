"use client";

import { useTranslations } from "next-intl";

const socialLinks = [
  { icon: "fa-brands fa-youtube", href: "https://www.youtube.com/@MarcioHubertNews" },
  { icon: "fa-brands fa-linkedin", href: "https://www.linkedin.com/in/marciohubert/" },
  { icon: "fa-brands fa-tiktok", href: "https://www.tiktok.com/@marciohubertnews?is_from_webapp=1&sender_device=pc" },
  { icon: "fa-brands fa-instagram", href: "https://www.instagram.com/marciohubertnews/" },
];

export default function ContactInfoSection() {
  const t = useTranslations("common");

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-[#F5F5F5] rounded-2xl p-8 md:p-10 space-y-6">
          <div className="flex items-start space-x-3">
            <i className="fa-solid fa-envelope text-[#C8102E] mt-1 text-lg" />
            <div>
              <div className="text-gray-500 text-sm mb-0.5">{t("email")}</div>
              <a
                href="mailto:journalist.marciohubert@gmail.com"
                className="text-[#0A1628] font-medium hover:text-[#C8102E] transition-colors"
              >
                journalist.marciohubert@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <i className="fa-brands fa-whatsapp text-[#C8102E] mt-1 text-lg" />
            <div>
              <div className="text-gray-500 text-sm mb-0.5">{t("press")}</div>
              <a
                href="https://wa.me/5511989978968"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A1628] font-medium hover:text-[#C8102E] transition-colors"
              >
                +55 (11) 98997-8968 <span className="text-gray-500 font-normal">(WhatsApp)</span>
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <i className="fa-solid fa-location-dot text-[#C8102E] mt-1 text-lg" />
            <div>
              <div className="text-gray-500 text-sm mb-0.5">{t("headquarters")}</div>
              <span className="text-[#0A1628] font-medium">Tennessee - USA</span>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center justify-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#0A1628] rounded-full flex items-center justify-center text-white hover:bg-[#C8102E] transition-colors"
                >
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
