"use client";

import { ReactNode } from "react";

interface AboutHeroSectionProps {
  badge?: {
    icon?: string;
    text: string;
  };
  title: string | ReactNode;
  description: string;
  ctaButtons?: ReactNode;
}

export default function AboutHeroSection({
  badge = { icon: "fa-solid fa-user-tie", text: "Sobre o Editor" },
  title,
  description,
  ctaButtons,
}: AboutHeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628] h-[500px] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C8102E] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          {badge && (
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              {badge.icon && (
                <i className={`${badge.icon} text-[#C8102E]`}></i>
              )}
              <span className="text-white text-sm font-medium">{badge.text}</span>
            </div>
          )}

          <h1 className="font-serif font-bold text-4xl md:text-6xl text-white leading-tight mb-6">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-6 md:mb-10">
            {description}
          </p>

          {ctaButtons && (
            <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4">
              {ctaButtons}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
