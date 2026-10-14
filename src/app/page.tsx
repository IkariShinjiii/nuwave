import Link from "next/link";
import { SlipFooter } from "@/components/SlipFooter";
import { SlipHeader } from "@/components/SlipHeader";
import { menu } from "@/data/menu";

export default function Home() {
  const preview = menu.flatMap((c) => c.items).slice(0, 4);
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-5 py-10">
      <div className="slip-wrap">
        <div className="slip feed">
          <SlipHeader />
          <p className="font-display text-2xl leading-snug text-balance">
            Specialty coffee in Jaro. Pick a drink, then tell us at the counter or your table.
          </p>
          <ul className="mt-5">
            {preview.map((item, i) => (
              <li key={item.id} style={{ "--i": i } as React.CSSProperties} className="line-in flex items-end gap-2 py-2">
                <span className="text-lg font-medium">{item.name}</span>
                <span className="leader" aria-hidden />
                <span className="text-ink-soft" aria-label="Price to be confirmed">₱ —</span>
              </li>
            ))}
          </ul>
          <Link
            href="/menu"
            className="mt-6 flex min-h-12 items-center justify-center rounded-full bg-ink px-6 font-semibold text-cream transition-opacity hover:opacity-90"
          >
            View the full menu
          </Link>
          <SlipFooter note="Order at the counter or from your table." />
        </div>
      </div>
    </main>
  );
}
