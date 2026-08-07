import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    title: "お問い合わせ",
    body: "フォームより店舗名・業態・気になる商品をお知らせください。1〜2営業日を目安にご返信します。",
  },
  {
    title: "ヒアリング・ご提案",
    body: "メニュー構成や客層に合わせ、おすすめの商品・提供方法をご提案します。",
  },
  {
    title: "条件のご相談",
    body: "数量・価格・納品方法について、店舗様の状況に合わせてすり合わせます。",
  },
  {
    title: "納品・お取扱い開始",
    body: "ご発注後、納品してお取扱い開始です。継続的な発注サイクルもご相談いただけます。",
  },
];

export function Flow() {
  return (
    <Section tone="paper">
      <SectionTitle eyebrow="How It Works" title="導入までの流れ" align="left" />
      <ol className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 90}>
            <li className="border-t border-stone pt-5">
              <span className="font-display-en text-sm italic text-kyo-gold">Step {i + 1}</span>
              <h3 className="mt-2 font-serif-jp text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{step.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
