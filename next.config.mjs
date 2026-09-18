/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Set NEXT_PUBLIC_BASE_PATH="" when the site moves to its own domain.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
