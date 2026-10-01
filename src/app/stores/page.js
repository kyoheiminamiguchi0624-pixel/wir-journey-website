import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { ContactCta } from "@/components/sections/ContactCta";
import { StoreMap } from "@/components/sections/StoreMap";
import { storeGroups, STORES_AS_OF, STORE_MAP_EMBED_URL } from "@/lib/data/stores";
import { buildMetadata } from "@/lib/seo";
import styles from "./stores.module.css";

export const metadata = buildMetadata({
  title: "お取り扱い店舗",
  description:
    "京都クラフトドリンクメーカー Wir Journeyのドリンクをお取り扱いいただいている店舗の一覧です。京都市内を中心に、カフェ・レストラン・ホテルなどでご提供いただいています。",
  path: "/stores",
});

const totalStores = storeGroups.reduce(
  (sum, group) => sum + group.areas.reduce((n, a) => n + a.stores.length, 0),
  0,
);

export default function StoresPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "お取り扱い店舗", path: "/stores" }]} />

      <Section tone="surface">
        <div className={styles.hero}>
          <p className={styles.eyebrow}>STORES</p>
          <h1 className={styles.heroTitle}>お取り扱い店舗</h1>
          <p className={styles.lead}>
            京都市内を中心に、カフェ・レストラン・ホテルなど
            <br className={styles.pcBreak} />
            {totalStores}店舗でWir Journeyのドリンクをお取り扱いいただいています。
          </p>
        </div>
      </Section>

      <Section>
        {STORE_MAP_EMBED_URL && (
          <div className={styles.map}>
            <StoreMap src={STORE_MAP_EMBED_URL} />
          </div>
        )}

        <div className={styles.groups}>
          {storeGroups.map((group) => (
            <section key={group.region} className={styles.group}>
              <h2 className={styles.region}>{group.region}</h2>
              <div className={styles.areas}>
                {group.areas.map((area) => (
                  <div key={area.area} className={styles.area}>
                    <h3 className={styles.areaName}>{area.area}</h3>
                    <ul className={styles.stores}>
                      {area.stores.map((store) => (
                        <li key={store}>{store}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className={styles.asOf}>{STORES_AS_OF}時点</p>
      </Section>

      <ContactCta />
    </>
  );
}
