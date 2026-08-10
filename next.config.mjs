/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/Doctor",

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;