/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // 2026年10月に商品名を「京番茶 クラフトチャイ」→「京バンチャクラフトラテ」に変更したため、旧URLを新URLへ恒久リダイレクト。
      {
        source: "/products/kyobancha-craft-chai",
        destination: "/products/kyobancha-craft-latte",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
