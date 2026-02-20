"use client";

import { useState } from "react";
import { PALESTRAS_IMAGES } from "./palestrasImages";

export default function PalestrasVitrine() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {PALESTRAS_IMAGES.map((src, index) => (
            <button
              key={index}
              type="button"
              className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={src}
                alt={`Palestra ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizar imagem"
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
            onClick={() => setLightboxIndex(null)}
            aria-label="Fechar"
          >
            <i className="fa-solid fa-times text-2xl" />
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={PALESTRAS_IMAGES[lightboxIndex]}
              alt={`Palestra ${lightboxIndex + 1}`}
              className="max-h-[90vh] w-auto max-w-full object-contain rounded-lg"
            />
          </div>
          {PALESTRAS_IMAGES.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(
                    (lightboxIndex - 1 + PALESTRAS_IMAGES.length) %
                      PALESTRAS_IMAGES.length
                  );
                }}
                aria-label="Imagem anterior"
              >
                <i className="fa-solid fa-chevron-left text-2xl" />
              </button>
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(
                    (lightboxIndex + 1) % PALESTRAS_IMAGES.length
                  );
                }}
                aria-label="Próxima imagem"
              >
                <i className="fa-solid fa-chevron-right text-2xl" />
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
}
