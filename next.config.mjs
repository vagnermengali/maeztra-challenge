/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  swcMinify: true,
  optimizeFonts: true,
  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;
