import Link from "next/link";
import { news, formatNewsDate } from "@/lib/data/news";
import styles from "./NewsStrip.module.css";

// TOPのヒーロー直下に置くコンパクトなNEWS帯。最新3件(スマホは2件)の日付・カテゴリ・タイトルのみ表示し、
// 下の「こんなお悩みはありませんか？」からの説明の流れを妨げない高さに抑える。
export function NewsStrip() {
  const latest = news.slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section className={styles.strip} aria-labelledby="home-news-heading">
      <div className={styles.box}>
        <div className={styles.head}>
          <h2 id="home-news-heading" className={styles.heading}>
            <span className={styles.headingEn}>NEWS</span>
            <span className={styles.headingJa}>お知らせ</span>
          </h2>
          <Link href="/news" className={styles.more}>
            一覧を見る<span aria-hidden="true"> ›</span>
          </Link>
        </div>
        <ul className={styles.list}>
          {latest.map((item) => (
            <li key={item.slug}>
              <Link href={`/news/${item.slug}`} className={styles.item}>
                <time dateTime={item.date} className={styles.date}>
                  {formatNewsDate(item.date)}
                </time>
                <span className={styles.category}>{item.category}</span>
                <span className={styles.title}>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
