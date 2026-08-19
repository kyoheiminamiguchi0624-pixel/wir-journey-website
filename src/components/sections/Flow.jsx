import styles from "./Flow.module.css";

// design4ハンドオフのHOME専用「取引・導入の流れ」(4ステップ)。
// /for-businessが使用する既存のAdoptionFlow.jsx(5ステップ)とは独立させている。
const flowSteps = [
  { label: "お問い合わせ", desc: "フォームより、店舗情報とご相談内容をお知らせください。" },
  { label: "ヒアリング", desc: "業態や提供スタイルを伺い、相性の良い商品をご案内します。" },
  { label: "サンプル・お見積り", desc: "実際に味わっていただいたうえで、条件をご相談ください。" },
  { label: "ご発注・納品", desc: "必要な数量からご発注いただけます。継続のご相談も承ります。" },
].map((f, i) => ({ ...f, step: String(i + 1).padStart(2, "0") }));

export function Flow() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>FLOW</p>
        <h2 className={styles.heading}>取引・導入の流れ</h2>
        <p className={styles.lead}>お問い合わせいただいた後の流れをご案内します。</p>
        <div className={styles.grid}>
          {flowSteps.map((item) => (
            <div key={item.step} className={styles.item}>
              <span className={styles.step}>{item.step}</span>
              <h3 className={styles.label}>{item.label}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
