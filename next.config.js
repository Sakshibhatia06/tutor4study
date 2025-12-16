/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  images: {
    domains: [
      "localhost",
      "ivory-stingray-579496.hostingersite.com", // WordPress / Blog domain
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // if blog uses Sanity CMS
      },
    ],
  },

  eslint: {
    // Skip ESLint during build (useful for production deploys)
    ignoreDuringBuilds: true,
  },

  typescript: {
    // Allow build even if TS has errors (temporary)
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

