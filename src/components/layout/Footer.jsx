import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SITE } from "@/lib/constants";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div>
          <p className={styles.logo}>{SITE.name}</p>
          <p className={styles.tagline}>{SITE.tagline}</p>
        </div>

        <nav className={styles.nav} aria-label="フッターナビゲーション">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact">CONTACT</Link>
        </nav>

        <p className={styles.copyright}>© {SITE.fullName}</p>
      </Container>
    </footer>
  );
}
