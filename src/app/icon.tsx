import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Wordmark-free placeholder until the owner supplies a logo: cream Ñ on roast.
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
          background: "#1c1714",
          color: "#f1e8d8",
          fontSize: 44,
          fontWeight: 700,
          borderRadius: 12,
        }}
      >
        Ñ
      </div>
    ),
    size,
  );
}
