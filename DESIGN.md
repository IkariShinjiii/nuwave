# Design: Ñuwave Specialty Coffee

Derived from the shipped build (Next.js 16, Tailwind 4). Source of truth for tokens is `src/app/globals.css`.

## Concept
The site is the order slip a café hands you: one cream docket on a dark roast counter. No hero image, no card grid. The slip prints in on load, lines follow, and a bottom bar holds the personal slip on table pages. Nothing is sent or paid on the site; ordering and payment stay with staff and the shop's own POS and QR Ph device.

## Color
| Token | Value | Use |
|---|---|---|
| roast | `#1c1714` | Page ground, ink on the slip |
| roast-2 | `#26201c` | Raised dark surfaces |
| cream | `#f1e8d8` | The slip, text on roast |
| crema | `#d2a673` | Primary action on dark (slip bar), hover borders, focus ring on dark |
| matcha | `#8fae8b` | Reserved accent |
| ember | `#d9825f` | Warnings only |
| ink-soft | `#62544a` | Secondary text on the slip |
| stamp | `#46663f` | Deep matcha: stamps, "Open now", focus ring on the slip |
| rule | `#cdbfa8` | Dashed rules on the slip |
| line | `#3d332c` | Borders on roast |

Strategy: dark counter, light paper. Roast and cream carry ~90% of the surface; crema and stamp are the only accents.

## Typography
- Display: Fraunces (`--font-fraunces`): shop name, category headings, table number, slip titles.
- Text: IBM Plex Sans 400/500/600 (`--font-plex`), tabular numerals on the whole body so prices align.
- Shop name 2rem/1.05; item names 1.125rem medium; secondary 0.875rem; footnotes 0.75rem.

## Components
- **Slip** (`.slip`, `.slip-wrap`): cream panel, 22px side padding, zig-zag torn bottom edge via a conic-gradient mask, drop shadow on the wrapper because filters on a masked element are clipped.
- **Leader** (`.leader`): dotted line between item name and price.
- **Stamp** (`.stamp`): rotated -3°, 2px stamp-green border, uppercase. Used for the table number and "Sold out".
- **Menu line**: name, leader, price (`₱ —` while unconfirmed). Table pages add "Add to my slip" or a −/+ stepper (44px targets). Sold-out items are struck through, stamped, and lose the add button.
- **Slip bar** (table pages only): fixed bottom, crema pill "My slip · Table N" with a count; expands into a cream list stating the slip is local and unsent.
- **Category chips**: sticky, shown only with 2+ categories.
- **Footer**: hours (+ live "Open now / Closed now" in Manila time), address, Instagram, a page-specific note.

## Motion
`feed` (900ms clip-path reveal, the slip printing) and `line-in` (500ms staggered 70ms per line). Both are disabled under `prefers-reduced-motion`.

## Metadata
Generated tab icon (`src/app/icon.tsx`) and share card (`src/app/opengraph-image.tsx`) are type-only placeholders in the palette. No logo or photos exist yet; replace both when the owner supplies approved assets (issue #5). `metadataBase` in `layout.tsx` must change with the custom domain (issue #6).

## Content rules
Prices, photos, and hours are never invented. Unknown price renders `₱ —`. The menu shows "Menu as of <date>" from `menuUpdated` in `src/data/menu.ts`; bump it when names or prices are re-checked.

## Known gaps
- No real logo or photography.
- Not yet reviewed on a physical phone or scanned from a printed QR.
- The detector passed, but no independent finish review has been run.
