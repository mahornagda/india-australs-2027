"use client";

import { useMemo, useState } from "react";
import { groups } from "@/content/progress";

const waiting = groups.find((g) => g.key === "waiting")!;

export default function LogBoard() {
  const [owner, setOwner] = useState<string | null>(null);

  const owners = useMemo(() => {
    const t = waiting.items.reduce<Record<string, number>>((a, i) => {
      const o = i.owner ?? "Unassigned";
      a[o] = (a[o] ?? 0) + 1;
      return a;
    }, {});
    return Object.entries(t).sort((a, b) => b[1] - a[1]);
  }, []);

  const rows = owner ? waiting.items.filter((i) => (i.owner ?? "Unassigned") === owner) : waiting.items;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-1.5">
        <button type="button" onClick={() => setOwner(null)} aria-pressed={owner === null} className="chip">
          Everyone
          <span className="ml-1.5 opacity-72">{waiting.items.length}</span>
        </button>
        {owners.map(([o, n]) => (
          <button
            key={o}
            type="button"
            onClick={() => setOwner(owner === o ? null : o)}
            aria-pressed={owner === o}
            className="chip"
          >
            {o}
            <span className="ml-1.5 opacity-72">{n}</span>
          </button>
        ))}
      </div>

      <ol className="mt-7 border-t border-cream/15">
        {rows.map((i, n) => (
          <li
            key={i.what}
            className="grid gap-x-6 gap-y-1 border-b border-cream/15 py-4 sm:grid-cols-[2.5rem_1fr_minmax(0,13rem)]"
          >
            <span className="datum hidden pt-1 text-[12px] text-cream/72 sm:block">
              {String(n + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-[15px] leading-snug text-cream">{i.what}</p>
              {i.note && <p className="mt-1 max-w-[62ch] text-[13.5px] leading-snug text-cream/70">{i.note}</p>}
            </div>
            <p className="datum text-[12px] text-gold sm:text-right">{i.owner}</p>
          </li>
        ))}
      </ol>

      <p aria-live="polite" className="datum mt-4 text-[12px] text-cream/76">
        {owner ? `${rows.length} waiting on ${owner}` : `${rows.length} open`}
      </p>
    </div>
  );
}
