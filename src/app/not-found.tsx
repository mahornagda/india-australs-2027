import Link from "next/link";
import { Page, Band } from "@/components/Section";
import { nav } from "@/content/site";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <>
      <Page
        eyebrow="Not found"
        title="There is nothing at this address"
        lede="The page has either moved or was never here. Everything the site holds is one of these."
      />
      <Band tone="paper">
        <ul className="grid gap-x-12 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...nav, { href: "/ask", label: "Ask us something" }, { href: "/resources", label: "Prep and policies" }, { href: "/progress", label: "Where the website stands" }].map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                className="border-b border-navy/30 pb-1 text-[1.1rem] text-navy hover:border-navy"
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </Band>
    </>
  );
}
