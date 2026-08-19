import Link from "next/link";
import styles from "./FaqExcerpt.module.css";

// design4ハンドオフのHOME専用FAQ抜粋(3件)。/faqページの共有データ
// (src/lib/data/faq.js)とは内容が異なるため独立させている。
const faqItems = [
  {
    question: "どのような業態で取り扱えますか？",
    answer: "ホテル、レストラン、カフェ、バー、小売店など、京都市内を中心とした事業者様にご利用いただいています。",
  },
  {
    question: "小ロットでも導入できますか？",
    answer: "はい。大きなロットを抱えずに、必要な数量からご相談いただけます。",
  },
  {
    question: "添加物は使用していますか？",
    answer: "無添加・無着色で製造しています。",
  },
];

export function FaqExcerpt() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>FAQ</p>
        <h2 className={styles.heading}>よくある質問</h2>
        <div className={styles.list}>
          {faqItems.map((item) => (
            <div key={item.question} className={styles.item}>
              <p className={styles.question}>{item.question}</p>
              <p className={styles.answer}>{item.answer}</p>
            </div>
          ))}
        </div>
        <div className={styles.more}>
          <Link href="/faq" className={styles.link}>
            よくある質問をすべて見る
          </Link>
        </div>
      </div>
    </section>
  );
}
