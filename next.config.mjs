/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Custom domain (drfareenaasghar.com) is served from the site root — no /Doctor basePath
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
