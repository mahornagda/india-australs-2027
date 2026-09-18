import Image from "next/image";
import { asset } from "@/lib/asset";

export default function Tiger({
  tone = "navy",
  width = 120,
  className = "",
  priority = false,
}: {
  tone?: "navy" | "cream";
  width?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={asset(`/img/tiger-${tone}.png`)}
      alt=""
      aria-hidden="true"
      width={width}
      height={Math.round((width * 677) / 1423)}
      className={className}
      priority={priority}
      unoptimized
    />
  );
}
