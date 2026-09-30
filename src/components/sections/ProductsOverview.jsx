import Image from "next/image";
import Link from "next/link";
import { PRODUCT_SERIES } from "@/lib/data/products";
import styles from "./ProductsOverview.module.css";

// design4ハンドオフのシリーズ紹介文・画像(Draft 0.8商品マスタとは別に、
// HOME PRODUCTSセクション専用のシリーズ単位コピーとして扱う)。
const seriesContent = {
  rtd: {
    desc: "京檸檬を使ったボトルタイプのクラフトコーラ。開栓してそのまま提供できます。",
    image: "/images/home/product-0.webp",
    imageAlt: "京檸檬クラフトコーラ RTDの商品写真",
  },
  sparkling: {
    desc: "食事に合わせやすい、澄んだ味わいのスパークリング。乾杯やペアリングの選択肢として。",
    image: "/images/home/product-1.webp",
    imageAlt: "京檸檬クラフトスパークリングの商品写真",
  },
  cola: {
    desc: "スパイスの香りが立つクラフトコーラ。ソーダ割りやアレンジで店らしい一杯に。",
    image: "/images/home/product-2.webp",
    imageAlt: "京都 リンゴノコーラの商品写真",
  },
  chai: {
    desc: "香り高いチャイ。ホットでもアイスでも、通年のメニューとして扱えます。",
    image: "/images/home/product-3.webp",
    imageAlt: "京都 スパイスノチャイの商品写真",
  },
};

export function ProductsOverview() {
  return (
    <section id="products" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>PRODUCTS</p>
          <h2 className={styles.heading}>4つのシリーズ</h2>
        </div>
        <div className={styles.grid}>
          {PRODUCT_SERIES.map((series) => {
            const content = seriesContent[series.key];
            return (
              <div key={series.key} className={styles.item}>
                <h3 className={styles.itemTitle}>{series.label}</h3>
                <div className={styles.imageBox}>
                  <Image
                    src={content.image}
                    alt={content.imageAlt}
                    fill
                    sizes="(min-width: 1000px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className={styles.image}
                  />
                </div>
                <p className={styles.desc}>{content.desc}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.more}>
          <Link href="/products" className={styles.moreLink}>
            商品をもっとみる
          </Link>
        </div>
      </div>
    </section>
  );
}
