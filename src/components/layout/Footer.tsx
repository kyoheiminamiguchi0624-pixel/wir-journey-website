import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { BrushDivider } from "@/components/ui/BrushDivider";

export function Footer() {
  return (
    <footer className="border-t border-stone-light bg-ink text-paper">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display-en text-2xl tracking-wide">{SITE.name}</p>
            <BrushDivider variant="gold" className="my-4 max-w-[140px]" />
            <p className="max-w-sm text-sm leading-7 text-paper/70">{SITE.description}</p>
          </div>

          <div>
            <p className="mb-4 text-xs tracking-[0.2em] text-paper/50">SITEMAP</p>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-paper/80 hover:text-kyo-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-paper/80 hover:text-kyo-gold">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs tracking-[0.2em] text-paper/50">お取引・運営</p>
            <ul className="space-y-2.5 text-sm text-paper/80">
              <li>{SITE.operator}</li>
              <li>京都市</li>
              <li>
                <a
                  href={SITE.baseShopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-kyo-gold"
                >
                  BASEショップ（個人のお客様） ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-paper/15 pt-6 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.operator} / {SITE.fullName}</p>
        </div>
      </div>
    </footer>
  );
}
