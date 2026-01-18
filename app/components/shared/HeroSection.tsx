"use client";

import { ReactNode } from "react";

interface Stat {
  icon: string;
  value: string;
  label: string;
}

interface HeroSectionProps {
  badge?: {
    icon?: string;
    text: string;
  };
  title: string | ReactNode;
  description: string | ReactNode;
  ctaButtons?: ReactNode;
  stats?: Stat[];
  height?: number;
}

export default function HeroSection({
  badge,
  title,
  description,
  ctaButtons,
  stats,
  height = 500,
}: HeroSectionProps) {
  return (
    <section
      className="bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628] flex items-center relative overflow-hidden"
      style={{ height: `${height}px` }}
    >
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

          {stats && stats.length > 0 && (
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 mt-12 pt-12 border-t border-white/20">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <i className={`${stat.icon} text-[#C8102E] text-2xl`}></i>
                  <div>
                    <div className="text-white font-bold text-xl md:text-2xl">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-xs md:text-sm">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
