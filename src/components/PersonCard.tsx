import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/asset";
import type { Person } from "@/content/people";

export default function PersonCard({
  p,
  size = "md",
}: {
  p: Person;
  size?: "lg" | "md" | "sm";
}) {
  const type = {
    lg: { name: "text-[1.35rem]", meta: "text-[13.5px]", pad: "p-2" },
    md: { name: "text-[1.1rem]", meta: "text-[12.5px]", pad: "p-1.5" },
    sm: { name: "text-[0.98rem]", meta: "text-[12px]", pad: "p-1.5" },
  }[size];

  return (
    <Link href={`/people/${p.slug}/`} className="group block">
      <div
        className={`border border-current/25 transition-colors duration-150 group-hover:border-current ${type.pad}`}
      >
        {p.photo ? (
          <Image
            src={asset(`/img/portraits/${p.photo}.webp`)}
            alt={p.name}
            width={520}
            height={650}
            className="aspect-[4/5] w-full object-cover"
            unoptimized
          />
        ) : (
          <div className="flex aspect-[4/5] w-full items-center justify-center bg-current/10">
            <span className="display text-[2rem] opacity-55">{p.name[0]}</span>
          </div>
        )}
      </div>
      <h3 className={`mt-2.5 leading-tight ${type.name}`} style={{ fontFamily: "var(--font-display)" }}>
        {p.name}
      </h3>
      <p className={`mt-0.5 opacity-80 ${type.meta}`}>
        {p.group === "advisor" || p.group === "senior" ? p.country ?? p.role : p.role}
      </p>
      {p.group !== "advisor" && p.country && (
        <p className={`opacity-65 ${type.meta}`}>{p.country}</p>
      )}
      <span className="mt-1.5 block h-px w-0 bg-current transition-all duration-200 group-hover:w-12" />
    </Link>
  );
}
