import { redirect } from '@remix-run/node'

export const permanentRedirectToLogin = () =>
  redirect(`${process.env.BASE_URL_AUTH}/login`, {
    statusText: 'Permanent Redirect',
    status: 308,
  })
