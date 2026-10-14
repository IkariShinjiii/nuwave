import type { Metadata } from "next";
import { Suspense } from "react";
import { MenuOrder } from "@/components/MenuOrder";
import { shop } from "@/data/menu";

export const metadata: Metadata = { title: `Menu | ${shop.name}` };

async function TableMenu({ params }: Pick<PageProps<"/menu/[table]">, "params">) {
  const { table } = await params;
  return <MenuOrder table={decodeURIComponent(table)} />;
}

// Target of the table QR codes: /menu/<table>. Orders are placed with staff / the POS (scope A).
export default function TableMenuPage({ params }: PageProps<"/menu/[table]">) {
  return (
    <main className="mx-auto max-w-md px-5 pb-32">
      <Suspense fallback={<div className="min-h-screen" />}>
        <TableMenu params={params} />
      </Suspense>
    </main>
  );
}
