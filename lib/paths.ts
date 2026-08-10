/**
 * Prefix public asset paths with the GitHub Pages basePath.
 * Keep writing paths as "/images/..." in components — do NOT hardcode "/Doctor/images/...".
 */
export function withBase(path: string): string {
  if (!path || path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path
  }

  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  if (!base) return path

  return path.startsWith('/') ? `${base}${path}` : `${base}/${path}`
}
