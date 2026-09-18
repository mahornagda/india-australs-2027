"use client";

import { useState } from "react";
import { places, DELHI, project, MAP_W, MAP_H, WIN } from "@/content/map";

const REGIONS = ["South Asia", "South East Asia", "North East Asia", "Oceania", "Beyond Australasia"];

const d = project(DELHI.lat, DELHI.lon);

function arc(lat: number, lon: number) {
  const p = project(lat, lon);
  const dx = d.x - p.x;
  const dy = d.y - p.y;
  const len = Math.hypot(dx, dy) || 1;
  // Bow every route the same way, so the sheet reads as one set of routes.
  const cx = (p.x + d.x) / 2 - (dy / len) * len * 0.17;
  const cy = (p.y + d.y) / 2 + (dx / len) * len * 0.17;
  return `M ${p.x} ${p.y} Q ${cx} ${cy} ${d.x} ${d.y}`;
}

export default function NetworkMap() {
  const [active, setActive] = useState<string | null>(null);
  const lit = (r: string) => active === null || active === r;

  const lons = [];
  for (let l = Math.ceil(WIN.lonMin / 30) * 30; l <= WIN.lonMax; l += 30) lons.push(l);
  const lats = [];
  for (let l = Math.floor(WIN.latMax / 20) * 20; l >= WIN.latMin; l -= 20) lats.push(l);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive(null)}
          aria-pressed={active === null}
          className={`border px-3 py-1.5 text-[13.5px] transition-colors ${
            active === null
              ? "border-gold bg-gold/20 text-cream"
              : "border-cream/25 text-cream/65 hover:border-cream/50"
          }`}
        >
          All regions
        </button>
        {REGIONS.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setActive(active === r ? null : r)}
            aria-pressed={active === r}
            className={`border px-3 py-1.5 text-[13.5px] transition-colors ${
              active === r
                ? "border-gold bg-gold/20 text-cream"
                : "border-cream/25 text-cream/65 hover:border-cream/50"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="-mx-5 mt-6 overflow-x-auto px-5 sm:mx-0 sm:px-0">
      <svg
        viewBox={`0 0 ${MAP_W} ${MAP_H}`}
        className="w-full min-w-[700px]"
        role="img"
        aria-label={`Routes into New Delhi from the ${places.length} countries our advisor network covers.`}
      >
        <g stroke="#f9e6d4" strokeOpacity="0.1" strokeWidth="1">
          {lons.map((l) => {
            const x = project(0, l).x;
            return <line key={`x${l}`} x1={x} y1={0} x2={x} y2={MAP_H} />;
          })}
          {lats.map((l) => {
            const y = project(l, 0).y;
            return <line key={`y${l}`} x1={0} y1={y} x2={MAP_W} y2={y} />;
          })}
        </g>

        <g fill="none" strokeWidth="1.4" strokeLinecap="round">
          {places.map((p) => (
            <path
              key={`a${p.name}`}
              d={arc(p.lat, p.lon)}
              stroke="#e1c379"
              strokeOpacity={lit(p.region) ? 0.62 : 0.08}
              style={{ transition: "stroke-opacity .25s" }}
            />
          ))}
        </g>

        {places.map((p) => {
          const q = project(p.lat, p.lon);
          const on = lit(p.region);
          return (
            <g key={p.name} style={{ transition: "opacity .25s" }} opacity={on ? 1 : 0.14}>
              <circle cx={q.x} cy={q.y} r="4.5" fill="#f9e6d4" />
              <text
                x={q.x + (p.dx ?? 11)}
                y={q.y + (p.dy ?? 4)}
                textAnchor={p.flip ? "end" : "start"}
                fill="#f9e6d4"
                fillOpacity="0.82"
                fontSize="13"
                fontFamily="var(--font-spectral), Georgia, serif"
              >
                {p.name}
              </text>
            </g>
          );
        })}

        <g>
          <circle cx={d.x} cy={d.y} r="13" fill="none" stroke="#e1c379" strokeWidth="1.2" />
          <circle cx={d.x} cy={d.y} r="6.5" fill="#e1c379" />
          <text
            x={d.x}
            y={d.y - 22}
            textAnchor="middle"
            fill="#e1c379"
            fontSize="17"
            fontFamily="var(--font-cormorant), Georgia, serif"
            letterSpacing="3"
          >
            NEW DELHI
          </text>
        </g>
      </svg>
      </div>

      <p className="mt-4 text-[14px] font-light text-cream/55">
        {active
          ? `${places.filter((p) => p.region === active).length} countries in ${active}.`
          : `${places.length} countries, five regions.`}{" "}
        These are the places our advisors work in, not a list of who may enter — eligibility is still
        being settled.
      </p>
    </div>
  );
}
