import type { LoaderArgs } from '@remix-run/node'
import { googleAuthenticator } from './authenticator.server'

export const redirectIfNotAuthenticated = async (
  request: Request
): Promise<void> => {
  await googleAuthenticator.isAuthenticated(request, {
    failureRedirect: '/auth/login',
  })
}

export const redirectIfNotAuthenticatedLoader = async ({
  request,
}: LoaderArgs): Promise<null> => {
  await redirectIfNotAuthenticated(request)

  return null
}
