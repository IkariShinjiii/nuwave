import { shop } from "@/data/menu";

export function SlipFooter({ note }: { note: string }) {
  return (
    <footer className="mt-6 border-t-2 border-dashed border-rule pt-4 text-sm text-ink-soft">
      <p>{note}</p>
      <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
        <dt className="font-semibold text-ink">Open</dt>
        <dd>{shop.hours}</dd>
        <dt className="font-semibold text-ink">Find us</dt>
        <dd>{shop.address}</dd>
        <dt className="font-semibold text-ink">Instagram</dt>
        <dd>
          <a className="underline underline-offset-4" href={`https://instagram.com/${shop.instagram}`}>
            @{shop.instagram}
          </a>
        </dd>
      </dl>
    </footer>
  );
}
