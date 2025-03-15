import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 // output: "export",  Enables `next export`
  images: {
    unoptimized: true, // Needed if using Next.js images in static export
  },
};

export default nextConfig;
