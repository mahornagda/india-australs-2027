"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/content/site";
import { counts } from "@/content/progress";
import Tiger from "./Tiger";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/15 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1180px] items-stretch gap-4 px-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 py-2.5"
          aria-label={`${site.name}, home`}
        >
          <Tiger tone="navy" width={40} priority />
          <span className="wordmark text-[11.5px] leading-[1.12] text-ink">
            INDIA
            <br />
            AUSTRALS
          </span>
        </Link>

        <nav className="ml-auto hidden items-stretch md:flex" aria-label="Main">
          {nav.map((n) => {
            const on = path === n.href || path.startsWith(`${n.href}/`);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={on ? "page" : undefined}
                className={`flex items-center border-b-2 px-3.5 text-[13.5px] transition-colors duration-150 ${
                  on
                    ? "border-navy text-navy"
                    : "border-transparent text-ink/75 hover:border-ink/30 hover:text-ink"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/progress"
          className="hidden items-center gap-2 self-center border border-ink/30 px-3 py-1.5 text-[12px] transition-colors duration-150 hover:border-navy hover:bg-navy hover:text-cream lg:flex"
        >
          <span className="datum">{counts.waiting}</span>
          <span>open questions</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="ml-auto self-center border border-ink/30 px-3 py-1.5 text-[13px] md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-ink/15 md:hidden">
          {[...nav, { href: "/contact", label: "Contact" }, { href: "/progress", label: "Where the website stands" }].map(
            (n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rec px-4 py-3 text-[15px]"
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>
      )}
    </header>
  );
}
