"use client";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div style={{ padding: 24 }}>
      <h1>{t("title")}</h1>
      <p>{t("subtitle")}</p>
    </div>
  );
}