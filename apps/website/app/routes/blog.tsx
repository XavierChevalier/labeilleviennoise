import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

export const loader = (() =>
  redirect(process.env.BASE_URL_BLOG as string, {
    statusText: 'Permanent Redirect',
    status: 308,
  })) satisfies LoaderFunction
