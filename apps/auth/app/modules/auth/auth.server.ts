import { createAuthenticator } from '@labeilleviennoise/auth-server'

export const googleAuthenticator = createAuthenticator({
  baseUrl: process.env.BASE_URL_AUTH!,
  sessionDomain: process.env.SESSION_DOMAIN!,
  sessionSecret: process.env.SESSION_SECRET!,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  googleClientId: process.env.GOOGLE_CLIENT_ID!,
})
