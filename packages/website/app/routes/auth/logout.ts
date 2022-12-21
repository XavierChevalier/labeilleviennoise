import type { LoaderArgs, MetaFunction } from '@remix-run/node'
import authenticator from '@/modules/auth/authenticator.server'
import { preventPageIndexing } from '@/modules/shared/seo/meta'

export const meta: MetaFunction = preventPageIndexing

export const loader = ({ request }: LoaderArgs) =>
  authenticator.logout(request, { redirectTo: '/blog' })
