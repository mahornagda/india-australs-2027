import Link from "next/link";
import { PageHead, Band } from "@/components/Shell";
import { nav } from "@/content/site";

export const metadata = { title: "Page not found" };

const all = [
  ...nav,
  { href: "/contact", label: "Contact" },
  { href: "/resources", label: "Prep and policies" },
  { href: "/progress", label: "Where the website stands" },
];

export default function NotFound() {
  return (
    <>
      <PageHead
        kicker="Not found"
        title="Nothing at this address"
        lede="The page has either moved or was never here. Everything the site holds is one of these."
      />
      <Band>
        <ul className="grid gap-x-10 border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {all.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="rec py-3 text-[15px]">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </Band>
    </>
  );
}
