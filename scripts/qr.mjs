// Usage: node scripts/qr.mjs <base-url> [tables]   e.g. node scripts/qr.mjs https://nuwave-blond.vercel.app 12
// Writes one SVG per table into ./qr/ (print these and stick them on the tables).
import QRCode from "qrcode";
import { mkdirSync, writeFileSync } from "node:fs";

const base = (process.argv[2] ?? "").replace(/\/$/, "");
const count = Number(process.argv[3] ?? 10);
if (!base.startsWith("http")) {
  console.error("Usage: node scripts/qr.mjs <base-url> [tables]");
  process.exit(1);
}
mkdirSync("qr", { recursive: true });
for (let t = 1; t <= count; t++) {
  const svg = await QRCode.toString(`${base}/menu/${t}`, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 2,
    color: { dark: "#1c1714", light: "#f1e8d8" },
  });
  writeFileSync(`qr/table-${t}.svg`, svg);
}
console.log(`Wrote ${count} QR codes to ./qr for ${base}/menu/<table>`);
