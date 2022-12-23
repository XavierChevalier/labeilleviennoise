import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { authenticator } from '@/modules/auth/authenticator.server'
import { preventPageIndexing } from '@/modules/shared/seo/meta'

export const meta: MetaFunction = preventPageIndexing

export const loader: LoaderFunction = () => redirect('/auth/login')

export const action: ActionFunction = ({ request }) =>
  authenticator.authenticate('google', request)
