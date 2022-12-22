import { createAuthenticator } from '@labeilleviennoise/auth/lib/authenticator-factory.server'
import type { User } from '@/modules/auth/users.server'
import { findUserByEmail } from '@/modules/auth/users.server'

export const authenticator = createAuthenticator<User>({
  findUserByEmail,
  sessionSecret: process.env.SESSION_SECRET!,
  baseUrl: process.env.BASE_URL!,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  googleClientId: process.env.GOOGLE_CLIENT_ID!,
})
