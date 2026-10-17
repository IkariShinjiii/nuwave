import { ImageResponse } from "next/og";
import { shop } from "@/data/menu";

export const alt = `${shop.name}, ${shop.location}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Share card styled as the order slip: cream docket on the roast counter. Type only, no logo or photos.
export default function Image() {
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
        }}
      >
        <div
          style={{
            width: 760,
            height: 500,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "#f1e8d8",
            color: "#1c1714",
            padding: "48px 56px",
            borderRadius: 6,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>{shop.name}</div>
            <div style={{ fontSize: 30, color: "#62544a", marginTop: 12 }}>{shop.location}</div>
          </div>
          <div style={{ display: "flex", borderTop: "4px dashed #cdbfa8", paddingTop: 24, flexDirection: "column" }}>
            <div style={{ fontSize: 32 }}>{`Open ${shop.hours}`}</div>
            <div style={{ fontSize: 26, color: "#62544a", marginTop: 8 }}>Scan the code on your table for the menu</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
