import { preventPageIndexing } from '@labeilleviennoise/seo'
import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import { googleAuthenticator } from '@/modules/auth/auth.server'

export const meta: MetaFunction = preventPageIndexing

export const loader: LoaderFunction = ({ request }) =>
  googleAuthenticator.authenticate('google', request, {
    successRedirect: `${process.env.BASE_URL_WEBSITE}/blog`,
    failureRedirect: '/login?authentication_failed=1',
  })
