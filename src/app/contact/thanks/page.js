import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import styles from "./thanks.module.css";

export const metadata = buildMetadata({
  title: "お問い合わせありがとうございます",
  description: "お問い合わせを受け付けました。",
  path: "/contact/thanks",
});

export default function ContactThanksPage() {
  return (
    <Section narrow>
      <div className={styles.wrap}>
        <h1>お問い合わせありがとうございます</h1>
        <p>内容を確認のうえ、担当者よりご連絡いたします。今しばらくお待ちください。</p>
        <Button href="/">HOMEへ戻る</Button>
      </div>
    </Section>
  );
}
