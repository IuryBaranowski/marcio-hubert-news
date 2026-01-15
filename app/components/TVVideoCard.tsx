"use client";

import Link from "next/link";

interface TVVideoCardProps {
  thumbnail: string;
  thumbnailAlt: string;
  duration: string;
  category: string;
  categoryColor: "green" | "blue" | "purple" | "red" | "orange";
  date: string;
  title: string;
  description: string;
  views: string;
  href?: string;
}

const categoryColors = {
  green: "bg-green-100 text-green-800",
  blue: "bg-blue-100 text-blue-800",
  purple: "bg-purple-100 text-purple-800",
  red: "bg-red-100 text-red-800",
  orange: "bg-orange-100 text-orange-800",
};

export default function TVVideoCard({
  thumbnail,
  thumbnailAlt,
  duration,
  category,
  categoryColor,
  date,
  title,
  description,
  views,
  href = "#",
}: TVVideoCardProps) {
  const cardContent = (
    <article className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow group cursor-pointer">
      <div className="relative h-56 md:h-64 overflow-hidden bg-gray-900">
        <img
          src={thumbnail}
          alt={thumbnailAlt}
          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <i className="fa-solid fa-play text-white text-lg md:text-xl ml-1"></i>
          </div>
        </div>
        <div className="absolute top-3 md:top-4 right-3 md:right-4 px-2.5 md:px-3 py-1 bg-black/80 backdrop-blur-sm rounded text-white text-xs md:text-sm font-medium">
          {duration}
        </div>
        <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 px-2.5 md:px-3 py-1 bg-red-600 rounded text-white text-xs font-semibold">
          YOUTUBE
        </div>
      </div>
      <div className="p-4 md:p-6">
        <div className="flex items-center space-x-3 mb-3">
          <span
            className={`px-2.5 md:px-3 py-1 ${categoryColors[categoryColor]} text-xs font-semibold rounded-full`}
          >
            {category}
          </span>
          <span className="text-gray-500 text-xs md:text-sm">{date}</span>
        </div>
        <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-3 leading-tight group-hover:text-[#C8102E] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-xs md:text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
          <span className="flex items-center space-x-1">
            <i className="fa-solid fa-eye"></i>
            <span>{views}</span>
          </span>
        </div>
      </div>
    </article>
  );

  return href ? <Link href={href}>{cardContent}</Link> : cardContent;
}
