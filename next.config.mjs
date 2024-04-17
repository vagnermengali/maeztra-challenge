/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  compress: true,
  swcMinify: true,
  optimizeFonts: true,
  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;
