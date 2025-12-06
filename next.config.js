/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
  },
  trailingSlash: false,
  // Netlify compatibility
  output: undefined, // Let Netlify plugin handle output
};

module.exports = nextConfig;
