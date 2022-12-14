import type { LoaderFunction } from '@remix-run/node'
import type { Authenticator } from 'remix-auth'

export const redirectIfNotAuthenticated =
  (authenticator: Authenticator) =>
  async (request: Request): Promise<void> => {
    await authenticator.isAuthenticated(request, {
      failureRedirect: '/auth/login',
    })
  }

export const redirectIfNotAuthenticatedLoader = (
  authenticator: Authenticator
) =>
  (async ({ request }): Promise<null> => {
    await redirectIfNotAuthenticated(authenticator)(request)

    return null
  }) satisfies LoaderFunction
