import Image from "next/image";

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
      src={`/img/tiger-${tone}.png`}
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
