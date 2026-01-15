"use client";

import { useState } from "react";

export default function FilterSection() {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [sortBy, setSortBy] = useState("Mais Recentes");

  const categories = [
    "Todas",
    "Agronegócio",
    "Política",
    "Economia",
    "Brasil-EUA",
    "Mundo",
  ];

  return (
    <section className="py-6 md:py-8 bg-[#F5F5F5] border-t border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
            <span className="text-xs md:text-sm font-semibold text-[#0A1628]">
              Filtrar por categoria:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 md:px-4 py-2 text-xs md:text-sm font-medium rounded transition-colors ${
                    selectedCategory === category
                      ? "bg-[#0A1628] text-white hover:bg-[#1E3A5F]"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-xs md:text-sm text-gray-600">Ordenar por:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 md:px-4 py-2 bg-white border border-gray-300 rounded text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
            >
              <option>Mais Recentes</option>
              <option>Mais Lidas</option>
              <option>Análises em Destaque</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
