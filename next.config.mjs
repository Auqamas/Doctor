/** @type {import('next').NextConfig} */
const repoName = 'Doctor'

// GitHub Actions sets GITHUB_ACTIONS=true — use /Doctor only for Pages deploy.
// Local `next dev` / `next build` stay at http://localhost:3000/
const isGithubPages =
  process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true'
const basePath = isGithubPages ? `/${repoName}` : ''

const nextConfig = {
  output: 'export',
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  env: {
    // Used by withBase() so public images work on GitHub Pages
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
