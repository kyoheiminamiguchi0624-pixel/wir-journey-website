"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, PRIMARY_CTA, SITE } from "@/lib/constants";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const [brandLine1, ...brandRest] = SITE.fullName.split(" ");
  const brandLine2 = brandRest.join(" ");

  return (
    <header className={styles.header}>
      <Container className={styles.bar}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoLine}>{brandLine1}</span>
          <span className={styles.logoLine}>{brandLine2}</span>
        </Link>

        <nav className={styles.nav} aria-label="グローバルナビゲーション">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.ctaDesktop}>
          <Button href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Button>
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
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href={PRIMARY_CTA.href} onClick={() => setOpen(false)}>
            {PRIMARY_CTA.label}
          </Link>
        </nav>
      )}

      {/* スマートフォンではPrimary CTAの固定表示を推奨(Draft 0.8方針) */}
      <div className={styles.fixedCta}>
        <Button href={PRIMARY_CTA.href} className={styles.fixedCtaButton}>
          {PRIMARY_CTA.label}
        </Button>
      </div>
    </header>
  );
}
