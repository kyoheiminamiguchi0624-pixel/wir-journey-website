"use client";

import { useState } from "react";
import styles from "./StoreMap.module.css";

// Google マイマップの埋め込み。ページ表示時には読み込まず、
// ボタンを押したときだけiframeを読み込む(表示速度とスマホのスクロール対策)。
export function StoreMap({ src }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.frame}>
      {loaded ? (
        <iframe
          src={src}
          title="Wir Journey お取り扱い店舗の地図"
          className={styles.iframe}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className={styles.placeholder}>
          <p className={styles.note}>Google マップで店舗の場所を表示します。</p>
          <button type="button" className={styles.button} onClick={() => setLoaded(true)}>
            地図を表示する
          </button>
        </div>
      )}
    </div>
  );
}
