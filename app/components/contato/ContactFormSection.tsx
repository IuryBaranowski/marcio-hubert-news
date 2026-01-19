"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactFormSection() {
  const t = useTranslations("contato.form");
  const tCommon = useTranslations("common");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    company: "",
    message: "",
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact-form-section" className="py-12 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-white mb-4 md:mb-6 leading-tight">
                  {t("title")}
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  {t("description")}
                </p>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-clock text-[#C8102E] text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1 text-sm md:text-base">
                        {t("responseTime")}
                      </div>
                      <div className="text-gray-400 text-xs md:text-sm">
                        {t("responseTimeValue")}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-shield-halved text-[#C8102E] text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1 text-sm md:text-base">
                        {t("privacy")}
                      </div>
                      <div className="text-gray-400 text-xs md:text-sm">
                        {t("privacyValue")}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-user-check text-[#C8102E] text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1 text-sm md:text-base">
                        {t("professional")}
                      </div>
                      <div className="text-gray-400 text-xs md:text-sm">
                        {t("professionalValue")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 md:pt-8 border-t border-white/20 mt-6 md:mt-8">
                <p className="text-gray-400 text-xs md:text-sm">
                  {t("preferOtherChannel")}
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 p-8 md:p-12">
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-[#0A1628] mb-2">
                      {t("fullName")} <span className="text-[#C8102E]">{t("required")}</span>
                    </label>
                    <input
                      type="text"
                      placeholder={tCommon("yourName")}
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-[#0A1628] mb-2">
                      {tCommon("email")} <span className="text-[#C8102E]">{t("required")}</span>
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-[#0A1628] mb-2">
                      {t("phone")}
                    </label>
                    <input
                      type="tel"
                      placeholder={t("phonePlaceholder")}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-[#0A1628] mb-2">
                      {t("subject")} <span className="text-[#C8102E]">{t("required")}</span>
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent text-sm"
                    >
                      <option value="">{t("subjectSelect")}</option>
                      <option>{t("subjectOptions.suggestion")}</option>
                      <option>{t("subjectOptions.interview")}</option>
                      <option>{t("subjectOptions.partnership")}</option>
                      <option>{t("subjectOptions.pressOffice")}</option>
                      <option>{t("subjectOptions.contentQuestion")}</option>
                      <option>{t("subjectOptions.feedback")}</option>
                      <option>{t("subjectOptions.other")}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-[#0A1628] mb-2">
                    {t("company")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("companyPlaceholder")}
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-[#0A1628] mb-2">
                    {t("message")} <span className="text-[#C8102E]">{t("required")}</span>
                  </label>
                  <textarea
                    rows={6}
                    placeholder={t("messagePlaceholder")}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent resize-none text-sm"
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    checked={formData.privacy}
                    onChange={(e) =>
                      setFormData({ ...formData, privacy: e.target.checked })
                    }
                    className="mt-1 w-4 h-4 text-[#C8102E] border-gray-300 rounded focus:ring-[#C8102E]"
                  />
                  <label htmlFor="privacy" className="text-xs md:text-sm text-gray-600">
                    {t("privacyCheck")}{" "}
                    <span className="text-[#C8102E]">{t("required")}</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 md:py-4 bg-[#C8102E] text-white font-bold text-base md:text-lg rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {t("submit")}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  {t("requiredFields")}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
