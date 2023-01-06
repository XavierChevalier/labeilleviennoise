import { redirect } from '@remix-run/node'

export const redirectToLogin = () =>
  redirect(`${process.env.BASE_URL_AUTH}/login`)
