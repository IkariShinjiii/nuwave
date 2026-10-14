import { shop } from "@/data/menu";

export function SlipHeader({ table }: { table?: string }) {
  return (
    <header className="mb-6 border-b-2 border-dashed border-rule pb-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-[2rem] leading-[1.05] font-semibold text-balance">{shop.name}</h1>
          <p className="mt-1 text-sm text-ink-soft">{shop.location}</p>
        </div>
        {table && (
          <p className="stamp shrink-0 text-center leading-tight" aria-label={`Table ${table}`}>
            Table
            <span className="font-display block text-3xl leading-none tracking-normal normal-case">{table}</span>
          </p>
        )}
      </div>
    </header>
  );
}
