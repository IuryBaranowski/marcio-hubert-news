"use client";

import Link from "next/link";
import Image from "next/image";

interface NewsCardProps {
  image: string;
  imageAlt: string;
  category: string;
  categoryColor: "green" | "blue" | "purple" | "red" | "orange";
  date: string;
  title: string;
  description?: string;
  readTime?: string;
  analysisType?: string;
  featured?: boolean;
  href?: string;
}

const categoryColors = {
  green: "bg-green-100 text-green-800",
  blue: "bg-blue-100 text-blue-800",
  purple: "bg-purple-100 text-purple-800",
  red: "bg-red-100 text-red-800",
  orange: "bg-orange-100 text-orange-800",
};

export default function NewsCard({
  image,
  imageAlt,
  category,
  categoryColor,
  date,
  title,
  description,
  readTime,
  analysisType,
  featured = false,
  href = "#",
}: NewsCardProps) {
  const cardContent = (
    <article
      className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow group cursor-pointer"
    >
      <div className={`overflow-hidden bg-gray-100 ${featured ? "h-96" : "h-48"}`}>
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className={featured ? "p-8" : "p-6"}>
        <div className={`flex items-center space-x-3 ${featured ? "mb-4" : "mb-3"}`}>
          <span
            className={`px-3 py-1 ${categoryColors[categoryColor]} text-xs font-semibold rounded-full`}
          >
            {category}
          </span>
          <span className={`text-gray-500 ${featured ? "text-sm" : "text-xs"}`}>
            {date}
          </span>
        </div>
        <h3
          className={`font-serif font-bold text-editorial-navy leading-tight group-hover:text-[#C8102E] transition-colors ${
            featured
              ? "text-2xl md:text-3xl mb-4"
              : "text-lg md:text-xl mb-3"
          }`}
        >
          {title}
        </h3>
        {description && (
          <p
            className={`text-gray-600 leading-relaxed mb-4 ${
              featured ? "text-base md:text-lg" : "text-sm"
            }`}
          >
            {description}
          </p>
        )}
        {(readTime || analysisType) && (
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            {readTime && (
              <span className="flex items-center space-x-2">
                <i className="fa-regular fa-clock"></i>
                <span>{readTime}</span>
              </span>
            )}
            {analysisType && (
              <span className="flex items-center space-x-2">
                <i className="fa-solid fa-chart-simple"></i>
                <span>{analysisType}</span>
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );

  return href ? <Link href={href}>{cardContent}</Link> : cardContent;
}

