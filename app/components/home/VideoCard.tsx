"use client";

import Link from "next/link";

interface VideoCardProps {
  thumbnail: string;
  thumbnailAlt: string;
  duration: string;
  title: string;
  description: string;
  date: string;
  views: string;
  href?: string;
}

export default function VideoCard({
  thumbnail,
  thumbnailAlt,
  duration,
  title,
  description,
  href,
}: VideoCardProps) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
    href={href}
    target={href ? "_blank" : undefined}
    rel={href ? "noopener noreferrer" : undefined}
    className="block"
  >
    <article className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow group cursor-pointer">
      <div className="relative h-48 md:h-64 overflow-hidden bg-gray-900">
        <img
          src={thumbnail}
          alt={thumbnailAlt}
          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-[#C8102E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <i className="fa-solid fa-play text-white text-lg md:text-xl ml-0.5 md:ml-1"></i>
          </div>
        </div>
        <div className="absolute top-3 md:top-4 right-3 md:right-4 px-2.5 md:px-3 py-1 bg-black/80 backdrop-blur-sm rounded text-white text-xs md:text-sm font-medium">
          {duration}
        </div>
        <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 px-2.5 md:px-3 py-1 bg-[#C8102E] rounded text-white text-xs font-semibold">
          YOUTUBE
        </div>
      </div>
      <div className="p-4 md:p-6">
        <h3 className="font-serif font-bold text-base md:text-xl text-[#0A1628] mb-2 md:mb-3 leading-tight group-hover:text-[#C8102E] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 md:mb-4">{description}</p>
      </div>
    </article>
    </Wrapper>
  );
}