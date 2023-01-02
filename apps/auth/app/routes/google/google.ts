import { preventPageIndexing } from '@labeilleviennoise/seo'
import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { googleAuthenticator } from '@/modules/auth/auth.server'

export const meta: MetaFunction = preventPageIndexing

export const loader: LoaderFunction = () => redirect('/login')

export const action: ActionFunction = ({ request }) =>
  googleAuthenticator.authenticate('google', request, {
    successRedirect: `${process.env.BASE_URL_WEBSITE}/blog`,
  })
