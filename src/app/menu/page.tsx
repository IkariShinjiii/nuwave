import type { Metadata } from "next";
import { MenuOrder } from "@/components/MenuOrder";
import { shop } from "@/data/menu";

export const metadata: Metadata = { title: `Menu | ${shop.name}` };

export default function MenuPage() {
  return (
    <main className="mx-auto max-w-md px-5 pb-16">
      <MenuOrder />
    </main>
  );
}
