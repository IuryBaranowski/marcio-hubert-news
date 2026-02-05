"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import VideoCard from "./VideoCard";

const videos = [
  {
    id: 1,
    thumbnail:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/f9aba1d8ae-aefa72bac2a3b02e92a4.png",
    thumbnailAlt:
      "Banco Master - o caso que cruzou a fronteira jurídica #008",
    duration: "5:37",
    title:
      "Banco Master - o caso que cruzou a fronteira jurídica #008",
    description:
      "Quando a Justiça dos Estados Unidos reconhece a liquidação de um banco estrangeiro, isso não é apenas um ato formal. É a entrada desse caso no sistema judicial americano, um sistema que opera com base em documentos, rastreabilidade financeira e registros verificáveis. Explicarei o que realmente significa o reconhecimento do caso do Banco Master nos Estados Unidos.",
    href: "https://www.youtube.com/watch?v=CpG4aNTKfos",
  },
  {
    id: 2,
    thumbnail:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/572ca6c787-bb5c8fb58c2866989c88.png",
    thumbnailAlt:
      "political interview setup, professional journalism, editorial broadcast",
    duration: "4:15",
    title:
      "O debate político no Brasil NÃO entende o sistema dos Estados Unidos #007",
    description:
      "O debate político no Brasil frequentemente usa os Estados Unidos como referência, mas ignora como o sistema americano realmente funciona. Neste vídeo, entenda por que as comparações são equivocadas, como o sistema político dos EUA é diferente do brasileiro, e por que isso distorce o debate público no Brasil.",
    href: "https://www.youtube.com/watch?v=YmglrfXg7bc",
  },
  {
    id: 3,
    thumbnail:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/3c6f6ccd99-5d3121a7fc83d9d3dbca.png",
    thumbnailAlt:
      "Por que o produtor brasileiro está sem margem no jogo global?",
    duration: "4:29",
    title: "Por que o produtor brasileiro está sem margem no jogo global? #006",
    description:
      "O produtor brasileiro produz mais, investe mais e assume mais riscos, mas fica com cada vez menos margem. Neste episódio, eu explico por que o produtor está perdendo margem no jogo global, quem realmente dita as regras do mercado, como a formação de preços acontece na prática e por que, no fim, a conta não fecha para quem está na ponta da produção.",
    href: "https://www.youtube.com/watch?v=o6omSiJyBUY",
  },
];

export default function TVSection() {
  const t = useTranslations("home.tv");
  
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-12">
          <div className="mb-4 md:mb-0">
            <div className="inline-flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-red-50 rounded-full mb-3 md:mb-4">
              <i className="fa-brands fa-youtube text-[#C8102E] text-sm md:text-base"></i>
              <span className="text-[#C8102E] text-xs md:text-sm font-semibold">
                {t("badge")}
              </span>
            </div>
            <h2 className="font-serif font-bold text-2xl md:text-4xl text-[#0A1628] mb-2 md:mb-3">
              {t("title")}
            </h2>
            <p className="text-gray-600 text-sm md:text-lg">
              {t("subtitle")}
            </p>
          </div>
          <Link
            href="https://www.youtube.com/@MarcioHubertNews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-5 md:px-6 py-3 bg-[#C8102E] text-white font-semibold rounded-lg hover:bg-red-700 transition-colors w-full md:w-auto"
          >
            <i 
            className="fa-brands fa-youtube"></i>
            <span className="text-sm md:text-base">{t("cta")}</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
}

