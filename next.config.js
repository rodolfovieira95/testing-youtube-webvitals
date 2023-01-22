/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pngkey.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "timsegurancadigital.com.br",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
