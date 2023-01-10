import { preventPageIndexing } from '@labeilleviennoise/seo'
import type { LoaderFunction } from '@remix-run/node'
import { googleAuthenticator } from '@/modules/auth/auth.server'

export const meta = preventPageIndexing

export const loader = (({ request }) =>
  googleAuthenticator.authenticate('google', request, {
    successRedirect: process.env.BASE_URL_BLOG,
    failureRedirect: `${process.env.BASE_URL_AUTH}/login?authentication_failed=1`,
  })) satisfies LoaderFunction
