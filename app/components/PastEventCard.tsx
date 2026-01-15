"use client";

import Link from "next/link";

interface PastEventCardProps {
  image: string;
  imageAlt: string;
  category: string;
  categoryColor: "green" | "blue" | "purple" | "red" | "orange";
  month: string;
  title: string;
  description: string;
  location: string;
  href?: string;
}

const categoryColors = {
  green: "bg-green-100 text-green-800",
  blue: "bg-blue-100 text-blue-800",
  purple: "bg-purple-100 text-purple-800",
  red: "bg-red-100 text-red-800",
  orange: "bg-orange-100 text-orange-800",
};

export default function PastEventCard({
  image,
  imageAlt,
  category,
  categoryColor,
  month,
  title,
  description,
  location,
  href = "#",
}: PastEventCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow group cursor-pointer">
      <div className="h-48 md:h-56 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 md:p-6">
        <div className="flex items-center space-x-3 mb-3">
          <span
            className={`px-2.5 md:px-3 py-1 ${categoryColors[categoryColor]} text-xs font-semibold rounded-full`}
          >
            {category}
          </span>
          <span className="text-gray-500 text-xs">{month}</span>
        </div>
        <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-3 leading-tight group-hover:text-[#C8102E] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-xs md:text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between text-xs md:text-sm">
          <span className="text-gray-500">{location}</span>
          <Link
            href={href}
            className="text-[#C8102E] font-semibold hover:underline"
          >
            Ver cobertura →
          </Link>
        </div>
      </div>
    </article>
  );
}
