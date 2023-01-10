import { preventPageIndexing } from '@labeilleviennoise/seo'
import type { LoaderFunction } from '@remix-run/node'
import { googleAuthenticator } from '@/modules/auth/auth.server'

export const meta = preventPageIndexing

export const loader = (({ request }) =>
  googleAuthenticator.logout(request, {
    redirectTo: process.env.BASE_URL_BLOG!,
  })) satisfies LoaderFunction
