import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import authenticator from '@/modules/auth/authenticator.server'
import { preventPageIndexing } from '@/modules/shared/seo/meta'

export const meta: MetaFunction = preventPageIndexing

export const loader: LoaderFunction = ({ request }) =>
  authenticator.authenticate('google', request, {
    successRedirect: '/blog?authenticated=1',
    failureRedirect: '/auth/login?authentication_failed=1',
  })
