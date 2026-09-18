"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { places, DELHI, project, MAP_W, MAP_H, WIN } from "@/content/map";
import { people, regions } from "@/content/people";

const d = project(DELHI.lat, DELHI.lon);

function route(lat: number, lon: number) {
  const p = project(lat, lon);
  const dx = d.x - p.x;
  const dy = d.y - p.y;
  const len = Math.hypot(dx, dy) || 1;
  const cx = (p.x + d.x) / 2 - (dy / len) * len * 0.17;
  const cy = (p.y + d.y) / 2 + (dx / len) * len * 0.17;
  // Sampled length, so the stroke can draw itself.
  let L = 0;
  let px = p.x;
  let py = p.y;
  for (let i = 1; i <= 16; i++) {
    const t = i / 16;
    const u = 1 - t;
    const x = u * u * p.x + 2 * u * t * cx + t * t * d.x;
    const y = u * u * p.y + 2 * u * t * cy + t * t * d.y;
    L += Math.hypot(x - px, y - py);
    px = x;
    py = y;
  }
  return { path: `M ${p.x} ${p.y} Q ${cx} ${cy} ${d.x} ${d.y}`, len: Math.ceil(L), p };
}

const routes = places.map((pl) => ({ ...pl, ...route(pl.lat, pl.lon) }));
/** The advisors this tournament has in a given country. */
const advisorsIn = (country: string) =>
  people.filter((p) => p.group === "advisor" && (p.country ?? "").includes(country));

export default function RouteMap({ tone = "navy" }: { tone?: "navy" | "paper" }) {
  const [active, setActive] = useState<string | null>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const lit = (r: string) => active === null || active === r;
  const inv = tone === "navy";
  const line = inv ? "#f9e6d4" : "#1f3969";
  const hub = inv ? "#e1c379" : "#1f3969";

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const over = el.scrollWidth - el.clientWidth;
    if (over > 0) el.scrollLeft = over * 0.62;
  }, []);

  const lons: number[] = [];
  for (let l = Math.ceil(WIN.lonMin / 30) * 30; l <= WIN.lonMax; l += 30) lons.push(l);
  const lats: number[] = [];
  for (let l = Math.floor(WIN.latMax / 20) * 20; l >= WIN.latMin; l -= 20) lats.push(l);

  const shown = active ? places.filter((p) => p.region === active) : places;

  return (
    <div className="min-w-0">
      <div className="flex flex-wrap items-center gap-1.5">
        <button type="button" onClick={() => setActive(null)} aria-pressed={active === null} className="chip">
          All 18
        </button>
        {regions.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setActive(active === r ? null : r)}
            aria-pressed={active === r}
            className="chip"
          >
            {r}
            <span className="ml-1.5 opacity-72">{places.filter((p) => p.region === r).length}</span>
          </button>
        ))}
      </div>

      <div ref={scroller} className="-mx-4 mt-5 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <svg
          viewBox={`0 0 ${MAP_W} ${MAP_H}`}
          className="w-full min-w-[680px]"
          role="img"
          aria-label={`Routes into New Delhi from the ${places.length} countries this tournament's advisor network covers.`}
        >
          <g stroke={line} strokeOpacity={inv ? 0.09 : 0.1} strokeWidth="1">
            {lons.map((l) => {
              const x = project(0, l).x;
              return <line key={`x${l}`} x1={x} y1={0} x2={x} y2={MAP_H} />;
            })}
            {lats.map((l) => {
              const y = project(l, 0).y;
              return <line key={`y${l}`} x1={0} y1={y} x2={MAP_W} y2={y} />;
            })}
          </g>

          <g fill="none" strokeWidth="1.3" strokeLinecap="round">
            {routes.map((r, i) => (
              <path
                key={`r${r.name}`}
                className="draw"
                d={r.path}
                stroke={hub}
                strokeOpacity={lit(r.region) ? 0.6 : 0.07}
                style={
                  {
                    "--len": r.len,
                    "--dur": `${(1.05 + (i % 7) * 0.13).toFixed(2)}s`,
                    transition: "stroke-opacity .2s",
                  } as React.CSSProperties
                }
              />
            ))}
          </g>

          {routes.map((r) => (
            <g
              key={r.name}
              opacity={lit(r.region) ? 1 : 0.14}
              style={{ transition: "opacity .2s" }}
            >
              <circle cx={r.p.x} cy={r.p.y} r="4" fill={line} />
              <text
                x={r.p.x + (r.dx ?? 11)}
                y={r.p.y + (r.dy ?? 4)}
                textAnchor={r.flip ? "end" : "start"}
                fill={line}
                fillOpacity="0.88"
                fontSize="12.5"
                fontFamily="var(--font-sans)"
              >
                {r.name}
              </text>
            </g>
          ))}

          <g>
            <circle cx={d.x} cy={d.y} r="12" fill="none" stroke={hub} strokeWidth="1.2" />
            <circle cx={d.x} cy={d.y} r="5.5" fill={hub} />
            <text
              x={d.x}
              y={d.y - 20}
              textAnchor="middle"
              fill={hub}
              fontSize="13"
              fontFamily="var(--font-plex-mono), monospace"
              letterSpacing="3"
            >
              NEW DELHI
            </text>
          </g>
        </svg>
      </div>

      <ul className="mt-6 grid gap-x-6 border-t border-current/15 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((pl) => {
          const who = advisorsIn(pl.name);
          const one = who.length === 1 ? who[0] : null;
          const body = (
            <>
              <span className="flex items-baseline justify-between gap-3">
                <span className="text-[14.5px]">{pl.name}</span>
                <span className="datum dim text-[11.5px] opacity-74">{pl.region}</span>
              </span>
              <span className="dim mt-0.5 block text-[13px] opacity-72">
                {who.length ? who.map((w) => w.name).join(", ") : "No advisor listed yet"}
              </span>
            </>
          );
          return (
            <li key={pl.name}>
              {one ? (
                <Link href={`/people/${one.slug}/`} className="rec py-2.5">
                  {body}
                </Link>
              ) : (
                <span className="block border-b border-current/15 py-2.5">{body}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
