"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FOOTER_LINKS, PRIMARY_CTA, SITE, BASE_SHOP_URL, BASE_SHOP_LABEL } from "@/lib/constants";
import styles from "./Footer.module.css";

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const contactHref = isHome ? "#contact" : PRIMARY_CTA.href;

  function resolveHref(link) {
    return isHome && link.anchorOnHome ? link.anchorOnHome : link.href;
  }

  return (
    <footer className={styles.footer}>
      <Container maxWidth="1240px">
        <div className={styles.row}>
          <div className={styles.brandCol}>
            <p className={styles.logo}>
              <span className={styles.logoLabel}>京都クラフトドリンクメーカー</span>
              <span className={styles.logoName}>{SITE.name}</span>
            </p>
            <p className={styles.description}>
              京都・西陣のノンアルコール専業クラフトドリンクメーカー。地域素材を活かした無添加・無着色のドリンクをつくっています。
            </p>
            <a href={BASE_SHOP_URL} target="_blank" rel="noopener" className={styles.baseLink}>
              {BASE_SHOP_LABEL}
            </a>
          </div>

          <div className={styles.col}>
            <p className={styles.colLabel}>サイトマップ</p>
            <nav className={styles.nav} aria-label="フッターナビゲーション">
              {FOOTER_LINKS.map((link) => (
                <Link key={link.label} href={resolveHref(link)} className={styles.navLink}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.col}>
            <p className={styles.colLabel}>お取引について</p>
            <p className={styles.description}>業務用のお取引について、お気軽にご相談ください。</p>
            <Button href={contactHref} className={styles.ctaButton}>
              {PRIMARY_CTA.label}
            </Button>
          </div>
        </div>

        <p className={styles.copyright}>© 2026 Wir Journey. All rights reserved.</p>
      </Container>
    </footer>
  );
}
