import Link from "next/link";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { PRIMARY_CTA, SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative border-b border-stone-light bg-paper">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 py-16 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:py-0">
        <div className="order-2 lg:order-1 lg:py-24">
          <p className="font-display-en text-sm italic tracking-[0.2em] text-moss">
            Craft Drink Maker — Kyoto
          </p>
          <h1 className="mt-5 font-serif-jp text-4xl leading-[1.4] text-ink md:text-5xl">
            {SITE.tagline}
          </h1>
          <p className="mt-6 max-w-md leading-8 text-ink-soft">
            京都の素材と職人・生産者の物語を、一本のボトルに。Wir Journeyは、貴店のドリンクメニューに
            「京都らしい体験」という価値を添えるクラフトドリンクメーカーです。
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href={PRIMARY_CTA.href}
              className="inline-flex items-center justify-center rounded-[4px] bg-moss px-8 py-4 text-sm tracking-wide text-paper transition-colors hover:bg-moss-deep"
            >
              {PRIMARY_CTA.label}
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-[4px] border border-ink px-8 py-4 text-sm tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              商品を見る
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <PhotoFrame
            alt="京都の朝の光の中、木のテーブルに置かれたWir Journeyのクラフトドリンクボトル"
            ratio="portrait"
            priority
            className="lg:h-[640px] lg:aspect-auto"
          />
        </div>
      </div>
    </section>
  );
}
