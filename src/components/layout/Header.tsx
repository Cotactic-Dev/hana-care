"use client";

import Icon from "@/components/ui/Icon";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { trackEvent } from "@/lib/analytics";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile nav on navigation
  useEffect(() => setNavOpen(false), [pathname]);

  return (
    <header className={`main-header${scrolled ? " scrolled" : ""}`}>
      <div className="container header-wrapper">
        <Link href="/" className="logo-brand" aria-label="Hana Care ฮานาแคร์ — หน้าแรก">
          <Image
            src="/assets/images/brand/hanacare-logo.png"
            alt="Hana Care ฮานาแคร์"
            width={764}
            height={136}
            priority
            className="brand-logo"
          />
        </Link>

        <nav aria-label="Main">
          <ul className={`nav-links${navOpen ? " is-open" : ""}`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link${isActive(pathname, item.href) ? " active" : ""}`}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <div className="lang-switch">
            {(["th", "en"] as const).map((l) => (
              <button key={l} className={`lang-btn${lang === l ? " active" : ""}`} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <Link href="/contact-us/" className="btn btn-primary btn-sm" onClick={() => trackEvent("click_consult_header")}>
            {t("btn_consult")}
          </Link>

          <button
            className="mobile-menu-toggle"
            onClick={() => setNavOpen((o) => !o)}
            aria-label="Toggle Navigation"
            aria-expanded={navOpen}
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </header>
  );
}
