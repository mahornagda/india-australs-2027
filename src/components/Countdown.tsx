"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

export default function Countdown() {
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => {
    const target = new Date(`${site.start}T09:00:00+05:30`).getTime();
    const tick = () => setDays(Math.max(0, Math.ceil((target - Date.now()) / 86_400_000)));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  return (
    <span>
      <span className="datum">{days === null ? "—" : days.toLocaleString("en-IN")}</span> days to go
    </span>
  );
}
