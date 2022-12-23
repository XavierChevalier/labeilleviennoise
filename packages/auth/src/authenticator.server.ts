import { createAuthenticator } from './authenticator-factory.server'

export const googleAuthenticator = createAuthenticator({
  sessionSecret: process.env.SESSION_SECRET!,
  baseUrl: process.env.BASE_URL!,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  googleClientId: process.env.GOOGLE_CLIENT_ID!,
})
