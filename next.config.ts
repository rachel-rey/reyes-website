import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true, // Needed if using Next.js images in static export
  },
};

export default nextConfig;
