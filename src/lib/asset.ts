/** Prefix a public-folder path with the base path, for CSS url() and raw <img>. */
export const asset = (p: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${p}`;
