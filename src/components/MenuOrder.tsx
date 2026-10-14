"use client";

import { useState } from "react";
import { menu } from "@/data/menu";
import { SlipFooter } from "./SlipFooter";
import { SlipHeader } from "./SlipHeader";

const peso = new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" });

type Qty = Record<string, number>;

const roundBtn =
  "size-11 rounded-full border-2 border-ink text-xl leading-none transition-colors hover:bg-ink hover:text-cream";

export function MenuOrder({ table }: { table?: string }) {
  const [qty, setQty] = useState<Qty>({});
  const [open, setOpen] = useState(false);

  const change = (id: string, d: number) =>
    setQty((q) => {
      const next = Math.max(0, (q[id] ?? 0) + d);
      const rest = { ...q };
      delete rest[id];
      return next ? { ...rest, [id]: next } : rest;
    });

  const items = menu.flatMap((c) => c.items).filter((i) => qty[i.id]);
  const count = items.reduce((n, i) => n + qty[i.id], 0);

  return (
    <>
      <nav
        aria-label="Menu categories"
        className="sticky top-0 z-10 -mx-5 mb-5 flex gap-2 overflow-x-auto bg-roast/95 px-5 py-3"
      >
        {menu.map((cat) => (
          <a
            key={cat.id}
            href={`#cat-${cat.id}`}
            className="shrink-0 rounded-full border border-line px-4 py-2 text-sm text-cream transition-colors hover:border-crema"
          >
            {cat.name}
          </a>
        ))}
      </nav>

      <div className="slip-wrap">
        <div className="slip feed">
          <SlipHeader table={table} />
          {menu.map((cat) => (
            <section
              key={cat.id}
              id={`cat-${cat.id}`}
              aria-labelledby={`h-${cat.id}`}
              className="scroll-mt-16 pt-4 first:pt-0"
            >
              <h2 id={`h-${cat.id}`} className="font-display text-xl font-semibold">
                {cat.name}
              </h2>
              <ul className="mt-2">
                {cat.items.map((item, i) => (
                  <li key={item.id} style={{ "--i": i } as React.CSSProperties} className="line-in py-3">
                    <div className="flex items-end gap-2">
                      <p className="text-lg leading-snug font-medium">{item.name}</p>
                      <span className="leader" aria-hidden />
                      <p className="shrink-0 text-base text-ink-soft">
                        {item.price === null ? (
                          <span aria-label="Price to be confirmed">₱ —</span>
                        ) : (
                          peso.format(item.price)
                        )}
                      </p>
                    </div>
                    {item.description && <p className="mt-0.5 text-sm text-ink-soft">{item.description}</p>}
                    {table && (
                      <div className="mt-2 flex items-center gap-3">
                        {qty[item.id] ? (
                          <>
                            <button onClick={() => change(item.id, -1)} aria-label={`Remove one ${item.name}`} className={roundBtn}>
                              −
                            </button>
                            <span className="w-6 text-center text-lg font-semibold" aria-live="polite">
                              {qty[item.id]}
                            </span>
                            <button onClick={() => change(item.id, 1)} aria-label={`Add one more ${item.name}`} className={roundBtn}>
                              +
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={() => change(item.id, 1)}
                            className="min-h-11 rounded-full border-2 border-ink px-5 text-sm font-semibold tracking-wide uppercase transition-colors hover:bg-ink hover:text-cream"
                          >
                            Add to my slip
                          </button>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <SlipFooter
            note={
              table
                ? `Orders and payment are handled by our staff. Show your slip to them at table ${table}.`
                : "Scan the code on your table to build a slip, or order at the counter."
            }
          />
        </div>
      </div>

      {table && (
        <div className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-roast-2/95 px-5 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div className="mx-auto max-w-md">
            {open && (
              <div id="my-slip" className="mb-3 max-h-[40vh] overflow-y-auto rounded-md bg-cream p-4 text-ink">
                <p className="font-display text-lg font-semibold">Table {table}: show this to staff</p>
                {items.length === 0 ? (
                  <p className="mt-2 text-sm text-ink-soft">Nothing yet. Tap “Add to my slip” on a drink.</p>
                ) : (
                  <ul className="mt-2 divide-y divide-rule">
                    {items.map((i) => (
                      <li key={i.id} className="flex justify-between py-2 text-lg">
                        <span>{i.name}</span>
                        <span className="font-semibold">× {qty[i.id]}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <p className="mt-3 text-xs text-ink-soft">This slip is only on your phone. It has not been sent or paid.</p>
              </div>
            )}
            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="my-slip"
              className="flex min-h-12 w-full items-center justify-between rounded-full bg-crema px-6 font-semibold text-roast transition-opacity hover:opacity-90"
            >
              <span>My slip · Table {table}</span>
              <span>{count === 0 ? "Empty" : `${count} ${count === 1 ? "drink" : "drinks"}`}</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
