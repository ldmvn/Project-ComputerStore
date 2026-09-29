import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  outputFileTracingRoot: path.resolve(__dirname, "../../"),
  images: {
    // TODO: Add remotePatterns for http://localhost:4000/uploads/**.
    // TODO: Handle /uploads image URLs when requests pass through Apache.
    remotePatterns: [],
  },
};

export default nextConfig;