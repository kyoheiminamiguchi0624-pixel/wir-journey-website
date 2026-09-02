import { Shippori_Mincho, EB_Garamond, Zen_Kaku_Gothic_New } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";
import { organizationJsonLd } from "@/lib/seo";

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-shippori-mincho",
  display: "swap",
});

// ISSUESのeyebrow専用(PainPoints.module.cssのvar(--font-accent))。
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
  variable: "--font-eb-garamond",
  display: "swap",
});

// 本文用(DESIGN_GUIDELINES.md準拠)。
const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-zen-kaku-gothic-new",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.fullName}｜${SITE.tagline}`,
    template: `%s｜${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: SITE.fullName,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ja"
      className={`${shipporiMincho.variable} ${ebGaramond.variable} ${zenKakuGothicNew.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <a href="#main-content" className="skip-link">
          本文へスキップ
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-M3D23MLYYK" />
      </body>
    </html>
  );
}
