"use client";

import { useTranslations } from "next-intl";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  side: "left" | "right";
}

export default function TimelineSection() {
  const t = useTranslations("sobre.timeline");
  
  const timelineEvents: TimelineEvent[] = [
    {
      year: "2008",
      title: t("events.2008.title"),
      description: t("events.2008.description"),
      icon: "fa-solid fa-star",
      side: "left",
    },
    {
      year: "2012",
      title: t("events.2012.title"),
      description: t("events.2012.description"),
      icon: "fa-solid fa-seedling",
      side: "right",
    },
    {
      year: "2018-2021",
      title: t("events.2018-2021.title"),
      description: t("events.2018-2021.description"),
      icon: "fa-solid fa-globe-americas",
      side: "left",
    },
    {
      year: "2022",
      title: t("events.2022.title"),
      description: t("events.2022.description"),
      icon: "fa-solid fa-video",
      side: "right",
    },
    {
      year: "2024",
      title: t("events.2024.title"),
      description: t("events.2024.description"),
      icon: "fa-solid fa-newspaper",
      side: "left",
    },
  ];
  return (
    <section className="py-12 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="relative">
          {/* Central line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#C8102E]"></div>

          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  event.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div
                  className={`w-full md:w-1/2 ${
                    event.side === "left"
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:text-left"
                  } mb-4 md:mb-0`}
                >
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="text-[#C8102E] font-bold text-lg md:text-xl mb-2">
                      {event.year}
                    </div>
                    <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A1628] mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Icon circle */}
                <div className="w-12 h-12 bg-[#C8102E] rounded-full flex items-center justify-center z-10 border-4 border-white shadow-lg flex-shrink-0">
                  <i className={`${event.icon} text-white`}></i>
                </div>

                {/* Empty space for alignment */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
