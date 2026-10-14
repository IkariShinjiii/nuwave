# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Primary: a seated customer at Ñuwave Specialty Coffee (Jaro, Iloilo City) on their own phone, having scanned the table QR code, who wants to see what is on offer and what it costs, then order via staff / the shop's POS. Secondary (not yet prioritized): people discovering the shop online (Instagram, search) who want the vibe, location, hours and menu.

## Product Purpose
A website plus table-QR menu for Ñuwave (scope A in the project plan): browse the menu and info; ordering and payment stay with the existing POS and QR Ph device. Success: a customer finds a drink and price in seconds and orders without confusion; staff are not burdened with a second payment system.

## Positioning
A local specialty-coffee shop in Jaro, Iloilo whose menu includes distinctive drinks (e.g. Black Sesame Latte, Sweet Kanella). The site is the shop's own, not a delivery-platform listing.

## Operating Context
Customers scan a per-table QR code (/menu/<table>) on mobile data or café Wi-Fi, often one-handed, in a café. Orders go through staff / POS. Payment is not built into the site.

## Capabilities and Constraints
- Stack: Next.js 16, Tailwind 4, motion, in D:\PROJECTS\Nuwave. Menu data in src/data/menu.ts.
- Open: POS brand and integration, whether QR Ph device covers payment, final scope (A, B or C), hosting, domain.
- Menu prices, drink list, hours and street address are NOT yet supplied by the owner; show "Price to be confirmed" and omit hours/address until given.

## Brand Commitments
- Name "Ñuwave Specialty Coffee" (with Ñ); location Jaro, Iloilo City; Instagram nuwavecoffeeph.
- User-pinned: palette roast / crema / matcha, type Fraunces + IBM Plex Sans.
- No logo or owner photos exist yet.

## Evidence on Hand
No verified menu, prices, hours, address, photos or logo. A web search found no listing for the shop beyond the Instagram handle named by the client; do not fabricate other socials. Do not reuse Grab/third-party photos or menu text.

## Product Principles
1. Menu first on the table route: the drink and its price within one thumb-scroll.
2. Never invent facts: prices, hours, address and photos wait for the owner.
3. The site orchestrates nothing about payment; it hands off to staff/POS clearly.
4. Local and warm, not generic café template.

## Accessibility & Inclusion
Legible in dim café light and bright sun; large tap targets; WCAG AA contrast; respects reduced motion.
