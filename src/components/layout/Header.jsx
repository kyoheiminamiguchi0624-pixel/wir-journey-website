"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, PRIMARY_CTA, BASE_SHOP_URL, BASE_SHOP_LABEL } from "@/lib/constants";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const contactHref = isHome ? "#contact" : PRIMARY_CTA.href;

  function resolveHref(link) {
    return isHome && link.anchorOnHome ? link.anchorOnHome : link.href;
  }

  return (
    <header className={styles.header}>
      <Container className={styles.bar} maxWidth="1320px">
        <Link href="/" className={styles.logo}>
          <span className={styles.logoLabel}>京都クラフトドリンクメーカー</span>
          <span className={styles.logoName}>Wir Journey</span>
        </Link>

        <div className={styles.desktopGroup}>
          <nav className={styles.nav} aria-label="グローバルナビゲーション">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={resolveHref(link)} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>
          <Button href={contactHref} className={styles.ctaButton}>
            {PRIMARY_CTA.label}
          </Button>
          <a href={BASE_SHOP_URL} target="_blank" rel="noopener" className={styles.baseLink}>
            {BASE_SHOP_LABEL}
          </a>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "閉じる" : "メニュー"}
        </button>
      </Container>

      {open && (
        <nav id="mobile-nav" className={styles.mobileNav} aria-label="モバイルナビゲーション">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={resolveHref(link)} onClick={() => setOpen(false)} className={styles.mobileNavLink}>
              {link.label}
            </Link>
          ))}
          <a href={contactHref} onClick={() => setOpen(false)} className={styles.mobileCta}>
            {PRIMARY_CTA.label}
          </a>
          <a
            href={BASE_SHOP_URL}
            target="_blank"
            rel="noopener"
            onClick={() => setOpen(false)}
            className={styles.mobileBaseLink}
          >
            {BASE_SHOP_LABEL}
          </a>
        </nav>
      )}

      <div className={styles.fixedCta}>
        <a href={contactHref} className={styles.fixedCtaButton}>
          {PRIMARY_CTA.label}
        </a>
      </div>
    </header>
  );
}
