import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Header from "../components/Header";
import { locales } from "../../i18n/routing";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) notFound();

  // Necessário para getTranslations funcionar nos Server Components
  setRequestLocale(locale);

  // Carrega o JSON diretamente pelo locale da URL (sem fallback)
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      <main className="page">{children}</main>
    </NextIntlClientProvider>
  );
}