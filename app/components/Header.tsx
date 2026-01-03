"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("politics"), href: "/politica" },
    { label: t("economy"), href: "/economia" },
    { label: t("usbr"), href: "/eua-x-brasil" },
    { label: t("contact"), href: "/contato" },
  ];

  function changeLocale(nextLocale: "pt-br" | "en") {
    const path = pathname || "/";
    const cleaned = path.replace(/^\/(pt-br|en)(?=\/|$)/, "");
    const nextPath = cleaned === "" ? "/" : cleaned;
    router.replace(`/${nextLocale}${nextPath}`);
    setOpen(false);
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!open) return;
      const el = panelRef.current;
      if (el && !el.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link href="/" className="brand" aria-label="Marcio Hubert News - Home">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-text">Marcio Hubert News</span>
        </Link>

        <nav className="nav-desktop" aria-label="Menu principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}

          <div className="lang-switch" aria-label="Trocar idioma">
            <button
              type="button"
              className={`lang-btn ${locale === "pt-br" ? "active" : ""}`}
              onClick={() => changeLocale("pt-br")}
              aria-label="Português (Brasil)"
            >
              BR
            </button>

            <span className="lang-sep">|</span>

            <button
              type="button"
              className={`lang-btn ${locale === "en" ? "active" : ""}`}
              onClick={() => changeLocale("en")}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </nav>

        <button
          className="hamburger"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`hamburger-lines ${open ? "is-open" : ""}`} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-panel ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="false"
      >
        <div className="container mobile-panel-inner" ref={panelRef}>
          <div className="lang-switch mobile" aria-label="Trocar idioma">
            <button
              type="button"
              className={`lang-btn ${locale === "pt-br" ? "active" : ""}`}
              onClick={() => changeLocale("pt-br")}
            >
              BR
            </button>

            <span className="lang-sep">|</span>

            <button
              type="button"
              className={`lang-btn ${locale === "en" ? "active" : ""}`}
              onClick={() => changeLocale("en")}
            >
              EN
            </button>
          </div>

          <nav className="nav-mobile" aria-label="Menu mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}