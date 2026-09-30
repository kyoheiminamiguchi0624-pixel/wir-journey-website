import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { news, formatNewsDate } from "@/lib/data/news";
import { buildMetadata } from "@/lib/seo";
import styles from "./news.module.css";

export const metadata = buildMetadata({
  title: "NEWS",
  description: "京都クラフトドリンクメーカー Wir Journeyの新商品情報やお知らせを掲載しています。",
  path: "/news",
});

export default function NewsListPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "NEWS", path: "/news" }]} />

      <Section tone="surface">
        <div className={styles.hero}>
          <p className={styles.eyebrow}>NEWS</p>
          <h1 className={styles.heroTitle}>お知らせ</h1>
        </div>
      </Section>

      <Section narrow>
        <ul className={styles.list}>
          {news.map((item) => (
            <li key={item.slug}>
              <Link href={`/news/${item.slug}`} className={styles.item}>
                <div className={styles.meta}>
                  <time dateTime={item.date} className={styles.date}>
                    {formatNewsDate(item.date)}
                  </time>
                  <span className={styles.category}>{item.category}</span>
                </div>
                <p className={styles.title}>{item.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
