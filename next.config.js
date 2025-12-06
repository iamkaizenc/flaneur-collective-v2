/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: false, // Netlify will handle optimization
  },
  // Netlify compatibility
  trailingSlash: false,
};

module.exports = nextConfig;
