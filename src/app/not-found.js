import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PRIMARY_CTA } from "@/lib/constants";
import styles from "./not-found.module.css";

export const metadata = {
  title: "ページが見つかりません｜Wir Journey",
  description: "お探しのページが見つかりませんでした。",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Section narrow>
      <div className={styles.wrap}>
        <h1>お探しのページが見つかりませんでした</h1>
        <p>
          URLが変更されたか、削除された可能性があります。
          <br />
          お手数ですが、下記よりお探しの情報をご確認ください。
        </p>
        <div className={styles.actions}>
          <Button href="/">TOPページへ戻る</Button>
          <Button href="/products" variant="outline">
            商品一覧を見る
          </Button>
          <Button href={PRIMARY_CTA.href} variant="outline">
            {PRIMARY_CTA.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
