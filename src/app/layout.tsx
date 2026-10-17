import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Sans({ variable: "--font-plex", subsets: ["latin"], weight: ["400", "500", "600"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });

// Update when the custom domain is set up (issue #6).
export const metadata: Metadata = {
  metadataBase: new URL("https://nuwave-blond.vercel.app"),
  title: "Ñuwave Specialty Coffee",
  description: "Specialty coffee in Jaro, Iloilo City.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plex.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
