"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface ContactCard {
  icon: string;
  title: string;
  email: string;
  description: string;
  bgColor: string;
}

export default function PressContactSection() {
  const t = useTranslations("mediaKit.pressContact");
  
  const contactCards: ContactCard[] = [
    {
      icon: "fa-solid fa-envelope",
      title: t("cards.press.title"),
      email: "imprensa@marciohubertnews.com",
      description: t("cards.press.description"),
      bgColor: "bg-blue-600",
    },
    {
      icon: "fa-solid fa-handshake",
      title: t("cards.partnerships.title"),
      email: "parcerias@marciohubertnews.com",
      description: t("cards.partnerships.description"),
      bgColor: "bg-green-600",
    },
    {
      icon: "fa-solid fa-bullhorn",
      title: t("cards.advertising.title"),
      email: "comercial@marciohubertnews.com",
      description: t("cards.advertising.description"),
      bgColor: "bg-purple-600",
    },
  ];
  
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requestType: t("form.requestTypes.interview"),
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${card.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6`}
              >
                <i className={`${card.icon} text-white text-xl md:text-2xl`}></i>
              </div>
              <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-3">
                {card.title}
              </h3>
              <a
                href={`mailto:${card.email}`}
                className="text-[#C8102E] font-semibold hover:underline text-base md:text-lg block mb-3"
              >
                {card.email}
              </a>
              <p className="text-gray-600 text-xs md:text-sm">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <h3 className="font-serif font-bold text-2xl md:text-3xl text-white mb-4">
                {t("form.title")}
              </h3>
              <p className="text-gray-300 text-base md:text-lg">
                {t("form.subtitle")}
              </p>
            </div>

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2 text-xs md:text-sm">
                    {t("form.fullName")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("form.placeholders.name")}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white rounded-lg text-[#0A1628] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2 text-xs md:text-sm">
                    {t("form.company")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("form.placeholders.company")}
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white rounded-lg text-[#0A1628] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-sm"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2 text-xs md:text-sm">
                    {t("form.professionalEmail")}
                  </label>
                  <input
                    type="email"
                    placeholder={t("form.placeholders.email")}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white rounded-lg text-[#0A1628] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2 text-xs md:text-sm">
                    {t("form.phone")}
                  </label>
                  <input
                    type="tel"
                    placeholder={t("form.placeholders.phone")}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white rounded-lg text-[#0A1628] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-xs md:text-sm">
                  {t("form.requestType")}
                </label>
                <select
                  value={formData.requestType}
                  onChange={(e) =>
                    setFormData({ ...formData, requestType: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white rounded-lg text-[#0A1628] focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-sm"
                  required
                >
                  <option>{t("form.requestTypes.interview")}</option>
                  <option>{t("form.requestTypes.audience")}</option>
                  <option>{t("form.requestTypes.editorial")}</option>
                  <option>{t("form.requestTypes.commercial")}</option>
                  <option>{t("form.requestTypes.event")}</option>
                  <option>{t("form.requestTypes.other")}</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-xs md:text-sm">
                  {t("form.message")}
                </label>
                <textarea
                  rows={5}
                  placeholder={t("form.placeholders.message")}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white rounded-lg text-[#0A1628] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E] resize-none text-sm"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 md:py-4 bg-[#C8102E] text-white font-bold text-base md:text-lg rounded-lg hover:bg-red-700 transition-colors shadow-xl"
              >
                {t("form.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
