import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { PRIVACY_ENACTED, privacyIntro, privacySections } from "@/lib/data/privacy";
import { buildMetadata } from "@/lib/seo";
import styles from "./privacy.module.css";

export const metadata = buildMetadata({
  title: "プライバシーポリシー",
  description: "京都クラフトドリンクメーカー Wir Journey（合同会社Hobby Works）のプライバシーポリシーです。",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "プライバシーポリシー", path: "/privacy" }]} />

      <Section tone="surface" className={styles.heroSection}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>PRIVACY POLICY</p>
          <h1 className={styles.heroTitle}>プライバシーポリシー</h1>
        </div>
      </Section>

      <Section narrow className={styles.bodySection}>
        <p className={styles.intro}>{privacyIntro}</p>

        {privacySections.map((section) => (
          <section key={section.title} className={styles.block}>
            <h2 className={styles.heading}>{section.title}</h2>
            {section.body?.map((text) => (
              <p key={text} className={styles.text}>
                {text}
              </p>
            ))}
            {section.items && (
              <ul className={styles.list}>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {section.after?.map((text) => (
              <p key={text} className={styles.text}>
                {text}
              </p>
            ))}
            {section.links && (
              <ul className={styles.links}>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <p className={styles.enacted}>制定日：{PRIVACY_ENACTED}</p>
      </Section>
    </>
  );
}
