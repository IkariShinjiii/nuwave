"use client";

import { useEffect, useState } from "react";

// Hours are 11am to 1am daily (Asia/Manila, UTC+8, no DST), so "open" wraps past midnight.
function isOpen(now: Date) {
  const manilaHour = (now.getUTCHours() + 8) % 24;
  return manilaHour >= 11 || manilaHour < 1;
}

export function OpenNow() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const tick = () => setOpen(isOpen(new Date()));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  if (open === null) return null;
  return (
    <span className={open ? "font-semibold text-stamp" : "font-semibold text-ink"}>
      {" · "}
      {open ? "Open now" : "Closed now"}
    </span>
  );
}
