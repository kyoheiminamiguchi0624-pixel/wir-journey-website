import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { buildMetadata } from "@/lib/seo";
import { getNewsBySlug } from "@/lib/data/news";
import styles from "./contact.module.css";

export const metadata = buildMetadata({
  title: "CONTACT",
  description: "Wir Journeyの商品導入・OEM・サンプルに関するお問い合わせはこちらから。",
  path: "/contact",
});

// お問い合わせページの目立つ位置に掲示するお知らせ(Newsの記事へのリンク)。
// 掲示が不要になったら、この定数とJSXの<Link className={styles.notice}>を削除する。
const PINNED_NOTICE_SLUG = "winter-shutdown-2026";

export default function ContactPage() {
  const pinnedNotice = getNewsBySlug(PINNED_NOTICE_SLUG);

  return (
    <>
      <Breadcrumb items={[{ name: "CONTACT", path: "/contact" }]} />

      <Section tone="surface">
        <div className={styles.hero}>
          <p className={styles.eyebrow}>CONTACT</p>
          <h1 className={styles.heroTitle}>お問い合わせ</h1>
          <p className={styles.heroLead}>
            業務用のお取引はもちろん、商品やサンプル、OEMについてなど、まだご相談内容が明確でない場合もお気軽にお問い合わせください。
          </p>
          {pinnedNotice && (
            <Link href={`/news/${pinnedNotice.slug}`} className={styles.notice}>
              <span className={styles.noticeLabel}>お知らせ</span>
              <span className={styles.noticeTitle}>
                {(pinnedNotice.titleParts ?? [pinnedNotice.title]).map((part) => (
                  <span key={part} className={styles.noticePhrase}>
                    {part}
                  </span>
                ))}
              </span>
              <span className={styles.noticeMore} aria-hidden="true">
                詳しくはこちら →
              </span>
            </Link>
          )}
        </div>
      </Section>

      <Section id="form" narrow className={styles.formSection}>
        <ContactForm />
      </Section>
    </>
  );
}
