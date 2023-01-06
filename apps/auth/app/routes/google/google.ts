import { preventPageIndexing } from '@labeilleviennoise/seo'
import type { ActionFunction } from '@remix-run/node'
import { googleAuthenticator } from '@/modules/auth/auth.server'
import { permanentRedirectToLogin } from '@/modules/auth/redirect-auth.server'

export const meta = preventPageIndexing

export const loader = permanentRedirectToLogin

export const action = (({ request }) =>
  googleAuthenticator.authenticate('google', request, {
    successRedirect: process.env.BASE_URL_BLOG,
  })) satisfies ActionFunction
