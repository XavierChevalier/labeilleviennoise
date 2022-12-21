import type { LoaderArgs } from '@remix-run/node'
import authenticator from '@/modules/auth/authenticator.server'

export const redirectIfNotAuthenticated = async (
  request: Request
): Promise<void> => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: '/auth/login',
  })
}

export const redirectIfNotAuthenticatedLoader = async ({
  request,
}: LoaderArgs): Promise<null> => {
  await redirectIfNotAuthenticated(request)

  return null
}
