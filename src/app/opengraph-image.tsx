import { ImageResponse } from "next/og";
import { SITE_TAGLINE } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#2551c4",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            R
          </div>
          <div style={{ display: "flex", gap: 8, fontSize: 30, fontWeight: 800, color: "#12275e" }}>
            <span>RAJ</span>
            <span style={{ color: "#2551c4" }}>EduTech</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 54, fontWeight: 800, color: "#12275e", lineHeight: 1.15, maxWidth: 980 }}>
            {SITE_TAGLINE}
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {["BTech", "MBBS", "BBA/MBA"].map((p) => (
              <div
                key={p}
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#12275e",
                  background: "#eef9e0",
                  border: "1.5px solid #6bbf1f",
                  borderRadius: 999,
                  padding: "8px 20px",
                }}
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
