export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-800">
          Kyoto Craft Drink Maker
        </p>

        <h1 className="mb-6 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Wir Journey
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-stone-600">
          京都でしか出会えない、
          <br />
          クラフトドリンク体験を。
        </p>

        <div className="flex gap-4">
          <a
            href="#contact"
            className="rounded-full bg-green-900 px-8 py-4 text-white transition hover:bg-green-800"
          >
            お問い合わせ
          </a>

          <a
            href="https://wir-journey.com"
            target="_blank"
            className="rounded-full border border-stone-300 px-8 py-4 transition hover:bg-stone-100"
          >
            BASEショップを見る
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-24 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-8">
          <h2 className="mb-3 text-xl font-semibold">完全無添加</h2>
          <p className="text-stone-600">
            素材本来の美味しさを大切にしたクラフトドリンク。
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-8">
          <h2 className="mb-3 text-xl font-semibold">京都産素材</h2>
          <p className="text-stone-600">
            京都ならではの食材を活かしたプレミアムシリーズ。
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-8">
          <h2 className="mb-3 text-xl font-semibold">OEM対応</h2>
          <p className="text-stone-600">
            カフェ・ホテル・飲食店向けの商品開発にも対応。
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-green-900 px-6 py-24 text-center text-white"
      >
        <h2 className="mb-6 text-4xl font-bold">
          店舗導入をご検討ですか？
        </h2>

        <p className="mb-10">
          ダミーサイトです。お問い合わせフォームは後ほど実装します。
        </p>

        <button className="rounded-full bg-white px-8 py-4 font-semibold text-green-900">
          お問い合わせはこちら
        </button>
      </section>
    </main>
  );
}