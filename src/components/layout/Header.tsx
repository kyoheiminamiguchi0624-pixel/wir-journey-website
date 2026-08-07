"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, PRIMARY_CTA, SITE } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-light bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="font-display-en text-xl tracking-wide text-ink" onClick={() => setOpen(false)}>
          {SITE.name}
        </Link>

        <nav aria-label="メインナビゲーション" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm text-ink-soft transition-colors hover:text-moss",
                pathname === link.href && "text-moss"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={PRIMARY_CTA.href}
            className="inline-flex items-center rounded-[4px] bg-moss px-5 py-2.5 text-sm text-paper transition-colors hover:bg-moss-deep"
          >
            {PRIMARY_CTA.label}
          </Link>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn("h-px w-6 bg-ink transition-transform", open && "translate-y-1.5 rotate-45")} />
          <span className={cn("h-px w-6 bg-ink transition-opacity", open && "opacity-0")} />
          <span className={cn("h-px w-6 bg-ink transition-transform", open && "-translate-y-1.5 -rotate-45")} />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="モバイルナビゲーション" className="border-t border-stone-light bg-paper lg:hidden">
          <ul className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-ink-soft hover:text-moss"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href={PRIMARY_CTA.href}
                onClick={() => setOpen(false)}
                className="block rounded-[4px] bg-moss px-5 py-3 text-center text-sm text-paper"
              >
                {PRIMARY_CTA.label}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
