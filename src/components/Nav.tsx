"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/content/site";
import Tiger from "./Tiger";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-ink/12 bg-paper/92 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-5 px-5 py-3">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label={`${site.name}, home`}
        >
          <Tiger tone="navy" width={44} priority />
          <span className="wordmark text-[13px] leading-[1.1] text-ink sm:text-[14px]">
            INDIA
            <br />
            AUSTRALS
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-6 md:flex" aria-label="Main">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[15px] text-ink/75 underline-offset-[6px] transition-colors hover:text-navy hover:underline"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="ml-auto flex h-9 items-center gap-2 border border-ink/25 px-3 text-[13px] text-ink/80 md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-ink/12 bg-paper px-5 pb-4 md:hidden"
        >
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-ink/10 py-3 text-[17px] text-ink/85 last:border-0"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
