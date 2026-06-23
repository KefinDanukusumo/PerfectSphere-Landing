import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Favicon: a tiny lit sphere on the brand canvas.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#07090d",
        }}
      >
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 35% 30%, #d7d1ff, #8a7cff 45%, #2a2350 90%)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
