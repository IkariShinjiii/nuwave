# Ñuwave Specialty Coffee

> A table-QR menu and website for a specialty coffee shop in Jaro, Iloilo City: scan, browse, and show staff your slip.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

**Live:** https://nuwave-blond.vercel.app

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack), React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4, custom design tokens (roast, cream, crema, matcha)
- **Fonts:** Fraunces (display) and IBM Plex Sans (text) via `next/font`
- **Motion:** CSS animations (`motion` is installed for future use)
- **Tooling:** ESLint, `qrcode` for generating table QR codes
- **Data:** static menu file, no database yet
- **Hosting:** Vercel, auto-deployed from `main`

## Key Features

- **Order-slip design:** the site looks like a café order docket, with dotted price leaders and a printed-in animation.
- **Table QR menu:** each table's QR code opens `/menu/<table>` with that table number stamped on the slip.
- **My slip:** customers tap "Add to my slip" and show the list to staff. It stays on the phone and nothing is sent or paid.
- **Mobile-first:** large tap targets, sticky category chips and a bottom bar for one-handed use.
- **Shop info built in:** hours, address and Instagram link on every slip.
- **QR generator:** one command writes printable SVG codes for any number of tables.

Ordering and payment stay with the shop's POS and QR Ph device.

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm (ships with Node.js)
- No environment variables are required

### Installation and running

```bash
git clone https://github.com/IkariShinjiii/nuwave.git
cd nuwave
npm install
npm run dev
```

Open http://localhost:3000. Other commands: `npm run build`, `npm run lint`.

### Menu and shop details

Edit `src/data/menu.ts`. A `price` of `null` shows "₱ —" until the owner confirms it.

### Table QR codes

```bash
node scripts/qr.mjs https://nuwave-blond.vercel.app 10
```

This writes `qr/table-1.svg` to `qr/table-10.svg` (git-ignored). Regenerate them if the domain changes.

## Project Structure

```
nuwave/
├── public/                 static assets
├── scripts/
│   └── qr.mjs              table QR code generator
├── src/
│   ├── app/
│   │   ├── layout.tsx      fonts and metadata
│   │   ├── globals.css     design tokens, slip styles
│   │   ├── page.tsx        home
│   │   └── menu/
│   │       ├── page.tsx        public menu
│   │       └── [table]/page.tsx table menu (QR target)
│   ├── components/         SlipHeader, SlipFooter, MenuOrder
│   └── data/menu.ts        menu and shop info
├── PRODUCT.md              product context
└── README.md
```

## Contributing

Work is tracked in [GitHub issues](https://github.com/IkariShinjiii/nuwave/issues). Open a pull request per issue and reference it (`Closes #n`). Vercel builds a preview for every PR.

## License & Contact

No open-source license has been chosen yet, so all rights are reserved by default. Reuse needs permission from the owner.

For questions or requests, open an [issue](https://github.com/IkariShinjiii/nuwave/issues) or reach the maintainer through [@IkariShinjiii](https://github.com/IkariShinjiii) on GitHub. Ñuwave Specialty Coffee is on Instagram at [@nuwavecoffeeph](https://instagram.com/nuwavecoffeeph).
