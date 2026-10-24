import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for Hostinger shared hosting (Apache, no Node.js server)
  output: "export",
  // Emit /about/index.html instead of /about.html so Apache serves clean URLs
  trailingSlash: true,
  // Default image optimization needs a server
  images: { unoptimized: true },
};

export default nextConfig;
