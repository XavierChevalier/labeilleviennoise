import { createAuthenticator } from '@labeilleviennoise/auth'

export const googleAuthenticator = createAuthenticator({
  baseUrl: process.env.BASE_URL!,
  sessionSecret: process.env.SESSION_SECRET!,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  googleClientId: process.env.GOOGLE_CLIENT_ID!,
})
