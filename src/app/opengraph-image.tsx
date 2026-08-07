import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#f6f3ec",
          color: "#22261f",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 4, color: "#4b5d42", display: "flex" }}>
          CRAFT DRINK MAKER — KYOTO
        </div>
        <div style={{ fontSize: 72, marginTop: 28, display: "flex" }}>{SITE.name}</div>
        <div style={{ fontSize: 34, marginTop: 20, color: "#4b5147", display: "flex" }}>{SITE.tagline}</div>
      </div>
    ),
    { ...size }
  );
}
