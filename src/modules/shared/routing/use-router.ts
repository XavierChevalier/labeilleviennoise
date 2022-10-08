import type { AstroGlobal } from 'astro'

export const useRouter = (astro: Readonly<AstroGlobal>) => {
  const url = new URL(astro.url)

  return {
    isCurrentPath: (path: string | URL) => url.pathname === path.toString(),
  }
}
