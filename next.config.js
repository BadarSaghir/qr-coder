/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: "/qr-coder",
  basePath: "/qr-coder",
  transpilePackages: ['@ionic/react', '@ionic/core', '@stencil/core', 'ionicons'],
};
module.exports = nextConfig;
