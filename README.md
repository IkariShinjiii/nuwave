# Ñuwave Specialty Coffee

Website and table-QR menu for Ñuwave Specialty Coffee, Fajardo cor. Libertad St., Jaro, Iloilo City.
Live: https://nuwave-blond.vercel.app

Customers scan a QR code on their table, browse the menu on their phone, build a personal "slip" and show it to staff.
Ordering and payment stay with the shop's POS and QR Ph device; nothing is sent or paid on the site.

## Routes

- `/` home
- `/menu` public menu
- `/menu/<table>` table menu (target of the QR codes)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

Stack: Next.js 16, Tailwind 4, TypeScript.

## Editing the menu and shop info

Everything lives in `src/data/menu.ts`. A `price` of `null` shows "₱ —" until the owner confirms it.

## Table QR codes

```bash
node scripts/qr.mjs https://nuwave-blond.vercel.app 10
```

Writes `qr/table-1.svg` … `qr/table-10.svg` (git-ignored). Regenerate if the domain changes.

## Deploys

Vercel deploys every push to `main`. Pull requests get preview deployments. Work is tracked in GitHub issues; open a PR per issue and reference it (`Closes #n`).
