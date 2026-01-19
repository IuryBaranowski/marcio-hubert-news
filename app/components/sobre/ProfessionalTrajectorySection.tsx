"use client";

import { useTranslations } from "next-intl";

export default function ProfessionalTrajectorySection() {
  const t = useTranslations("sobre.trajectory");
  
  const highlights = t.raw("highlights.items") as string[];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-6 leading-tight">
              {t("title")}
            </h2>
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                {t("description1")}
              </p>
              <p>
                {t("description2")}
              </p>
              <p>
                {t("description3")}
              </p>
              <p>
                {t("description4")}
              </p>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img
                className="w-full h-auto object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d93acf9715-3b1b2b5f4966254e90a6.png"
                alt="Marcio Hubert - Jornalista especializado em agronegócio, política e relações internacionais"
              />
            </div>

            <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-8">
              <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-6">
                {t("highlights.title")}
              </h3>
              <ul className="space-y-4">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <i className="fa-solid fa-check-circle text-[#C8102E] text-xl mt-1 flex-shrink-0"></i>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
