import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const benefits = [
  {
    label: "体験",
    title: "写真映えする体験価値",
    body: "京都らしい世界観のボトル・提供シーンは、外国人観光客のお客様によるSNS投稿を通じた自然な店舗PRにつながります。",
  },
  {
    label: "選択肢",
    title: "ノンアルコールの新しい選択肢",
    body: "全商品ノンアルコール。食中提案からウェルカムドリンクまで、幅広いシーンでメニューの奥行きを広げられます。",
  },
  {
    label: "物語",
    title: "京都の物語という差別化",
    body: "京檸檬プロジェクト協議会など、京都の生産者と連携した調達背景をそのままお客様への会話のきっかけにできます。",
  },
];

export function Benefits() {
  return (
    <Section tone="deep">
      <SectionTitle
        eyebrow="Why Wir Journey"
        title="導入いただく店舗様に、こんな価値を。"
        align="left"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {benefits.map((b, i) => (
          <Reveal key={b.title} delay={i * 100}>
            <Card className="h-full">
              <p className="font-display-en text-sm italic text-kyo-gold">{b.label}</p>
              <h3 className="mt-3 font-serif-jp text-xl">{b.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-soft">{b.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
