"use client";

interface UpcomingEventCardProps {
  image: string;
  imageAlt: string;
  category: string;
  categoryColor: "green" | "blue" | "purple" | "red" | "orange";
  location: string;
  title: string;
  description: string;
  date: string;
  status?: string;
}

const categoryColors = {
  green: "bg-green-100 text-green-800",
  blue: "bg-blue-100 text-blue-800",
  purple: "bg-purple-100 text-purple-800",
  red: "bg-red-100 text-red-800",
  orange: "bg-orange-100 text-orange-800",
};

export default function UpcomingEventCard({
  image,
  imageAlt,
  category,
  categoryColor,
  location,
  title,
  description,
  date,
  status = "EM BREVE",
}: UpcomingEventCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow group">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-48 h-40 md:h-48 flex-shrink-0 overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4 md:p-6 flex flex-col justify-between flex-1">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span
                className={`px-2.5 md:px-3 py-1 ${categoryColors[categoryColor]} text-xs font-semibold rounded-full`}
              >
                {category}
              </span>
              <span className="text-gray-500 text-xs md:text-sm">{location}</span>
            </div>
            <h3 className="font-serif font-bold text-xl md:text-2xl text-[#0A1628] mb-3 leading-tight group-hover:text-[#C8102E] transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-4">{description}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-500">
              <i className="fa-regular fa-calendar"></i>
              <span>{date}</span>
            </div>
            <span className="px-2.5 md:px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
              {status}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
