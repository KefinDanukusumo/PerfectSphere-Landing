import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamic social card rendered on demand. Mirrors the brand: dark
 * canvas, a lit amber sphere, and the headline. Used for both
 * OpenGraph and Twitter (see twitter-image.tsx).
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0F19",
          padding: "72px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* ambient glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -120,
            width: 760,
            height: 760,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 38% 30%, #FFFBE0 0%, #FFEA00 20%, #E08E00 48%, #3A2A04 78%, #0B0F19 100%)",
            opacity: 0.95,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -240,
            right: -160,
            width: 840,
            height: 840,
            borderRadius: "50%",
            border: "1px solid rgba(255,183,3,0.35)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 35% 30%, #FFFBE0, #E08E00 70%)",
            }}
          />
          <span
            style={{
              color: "#969caa",
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Perfect Sphere
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#FFB703",
              fontSize: 24,
              letterSpacing: 3,
              marginBottom: 18,
              fontFamily: "monospace",
            }}
          >
            // revops engineering
          </span>
          <span
            style={{
              color: "#ecedf1",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 880,
              letterSpacing: -2,
            }}
          >
            We fix revenue leaks between your CRM, Aurora Solar & GoodLeap.
          </span>
          <span style={{ color: "#969caa", fontSize: 30, marginTop: 26 }}>
            For solar & home-improvement teams · perfectsphere.dev
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
