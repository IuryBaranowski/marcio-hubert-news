"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import VideoCard from "./VideoCard";

const videos = [
    {
    id: 1,
    thumbnail:
      "/images/Manipulado.jpeg",
    thumbnailAlt:
      "Você está sendo usado. E talvez ainda não tenha percebido #011",
    duration: "4:09",
    title:
      "Você está sendo usado. E talvez ainda não tenha percebido #011",
    description:
      "Enquanto você briga por políticos, ministros ou ideologias, o sistema aprende que pode avançar sem resistência. Este vídeo não é sobre direita ou esquerda.É sobre limite. É sobre Constituição. É sobre separação de poderes. Eu vivo e trabalho dentro da imprensa americana.",
         href: "https://www.youtube.com/watch?v=7PK13BYWC4c",
  },
  {
    id: 2,
    thumbnail:
      "/images/SISTEMA_CAPA.png",
    thumbnailAlt:
      "political interview setup, professional journalism, editorial broadcast",
    duration: "4:01",
    title:
      "O que significa SISTEMA nos Estados Unidos #010",
    description:
      "Neste episódio, eu explico o que os Estados Unidos chamam de “sistema”, por que essa palavra tem um significado muito diferente do que no Brasil e como essa lógica ajuda a entender instituições como o Federal Reserve, a Suprema Corte e o próprio Judiciário americano.",
    href: "https://www.youtube.com/watch?v=_xmthTk2XRw",
  },
  {
    id: 3,
    thumbnail:
      "/images/JORNALISTA.png",
    thumbnailAlt:
      "political interview setup, professional journalism, editorial broadcast",
    duration: "0:57",
    title:
      "Jornalista Brasileiro na Mídia e Imprensa dos Estados Unidos #009",
    description:
      "Gaúcho, começou a carreira no interior do Rio Grande do Sul e mudou-se para São Paulo/SP onde fez graduação, pós-graduação, mestrado e dezenas de especializações em diversos mercados: financeiro, gestão e liderança de equipe.",
    href: "https://www.youtube.com/watch?v=nkDWozvKJU4",
  }
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

