import type { LoaderArgs, MetaFunction } from '@remix-run/node'
import { googleAuthenticator } from '@/modules/auth/auth.server'
import { preventPageIndexing } from '@/modules/shared/seo/meta'

export const meta: MetaFunction = preventPageIndexing

export const loader = ({ request }: LoaderArgs) =>
  googleAuthenticator.logout(request, {
    redirectTo: `${process.env.BASE_URL_WEBSITE}/blog`,
  })
