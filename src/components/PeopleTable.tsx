"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { people, regions, groupLabel, type Group } from "@/content/people";

const GROUPS: Group[] = ["cap", "tab", "oc", "senior", "advisor"];

export default function PeopleTable() {
  const [q, setQ] = useState("");
  const [group, setGroup] = useState<Group | null>(null);
  const [region, setRegion] = useState<string | null>(null);

  const rows = useMemo(() => {
    const t = q.trim().toLowerCase();
    return people.filter((p) => {
      if (group && p.group !== group) return false;
      if (region && p.region !== region) return false;
      if (!t) return true;
      return (
        p.name.toLowerCase().includes(t) ||
        (p.country ?? "").toLowerCase().includes(t) ||
        p.role.toLowerCase().includes(t) ||
        p.credits.some((c) => c.role.toLowerCase().includes(t) || c.event.includes(t))
      );
    });
  }, [q, group, region]);

  const clear = () => {
    setQ("");
    setGroup(null);
    setRegion(null);
  };
  const filtered = q || group || region;

  return (
    <div>
      <div className="sticky top-[57px] z-20 -mx-4 border-b border-ink/15 bg-paper/95 px-4 py-3 backdrop-blur">
        <div className="flex flex-wrap items-center gap-2">
          <label className="relative">
            <span className="sr-only">Search people</span>
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search a name, country or credit…"
              className="w-[min(68vw,280px)] border border-ink/30 bg-transparent px-3 py-1.5 text-[13.5px] placeholder:text-ink/70 focus:border-navy"
            />
          </label>

          {GROUPS.map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setGroup(group === g ? null : g)}
              aria-pressed={group === g}
              className="chip"
            >
              {groupLabel[g]}
              <span className="ml-1.5 opacity-72">{people.filter((p) => p.group === g).length}</span>
            </button>
          ))}

          <span className="mx-1 hidden h-5 w-px bg-ink/20 sm:block" />

          {regions.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRegion(region === r ? null : r)}
              aria-pressed={region === r}
              className="chip"
            >
              {r}
            </button>
          ))}

          {filtered && (
            <button type="button" onClick={clear} className="chip border-dashed">
              Clear
            </button>
          )}

          <span aria-live="polite" className="datum ml-auto text-[12px] text-ink/70">
            {rows.length} of {people.length}
          </span>
        </div>
      </div>

      {rows.length === 0 ? (
        <p className="py-14 text-center text-[15px] text-ink/72">
          Nobody matches that. <button onClick={clear} className="underline underline-offset-4">Clear the filters</button>.
        </p>
      ) : (
        <div className="mt-1 border-t border-ink/15">
          <div className="hidden gap-4 border-b border-ink/15 px-2 py-2 md:grid md:grid-cols-[1.5fr_1.2fr_1fr_1fr_auto]">
            {["Name", "Role", "Country", "Region", "Record"].map((h) => (
              <span key={h} className="rail text-ink/70">
                {h}
              </span>
            ))}
          </div>
          <ul>
            {rows.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/people/${p.slug}/`}
                  className="rec grid gap-x-4 gap-y-0.5 px-2 py-2.5 md:grid-cols-[1.5fr_1.2fr_1fr_1fr_auto] md:items-baseline"
                >
                  <span className="text-[15px]">{p.name}</span>
                  <span className="dim text-[13.5px] opacity-78">{p.role}</span>
                  <span className="dim text-[13.5px] opacity-78">{p.country ?? "—"}</span>
                  <span className="dim datum text-[12px] opacity-74">{p.region ?? "—"}</span>
                  <span className="accent datum text-[12px] opacity-76 md:text-right">
                    {p.credits.length ? `${p.credits.length} entries` : "—"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
