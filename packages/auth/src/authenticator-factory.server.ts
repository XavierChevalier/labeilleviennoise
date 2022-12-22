import { createCookieSessionStorage } from '@remix-run/node'
import { Authenticator } from 'remix-auth'
import invariant from 'tiny-invariant'
import { GoogleStrategy } from './auth-google-strategy.server'

const invariantWithLog: typeof invariant = (condition, message) => {
  if (!condition) {
    console.error(message)
  }
  invariant(condition, message)
}

interface CreateAuthenticatorOptions<User extends Record<string, unknown>> {
  findUserByEmail: (email: string) => Promise<User | null>
  sessionSecret: string
  googleClientId: string
  googleClientSecret: string
  baseUrl: string
}

export const createAuthenticator = <User extends Record<string, unknown>>({
  findUserByEmail,
  sessionSecret,
  googleClientId,
  googleClientSecret,
  baseUrl,
}: CreateAuthenticatorOptions<User>) => {
  const authenticator = new Authenticator<User>(
    createCookieSessionStorage({
      cookie: {
        name: 'session',
        secrets: [sessionSecret],
        path: '/',
        httpOnly: true,
        secure: true,
      },
    })
  )
  const googleStrategy = new GoogleStrategy<User>(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: `${baseUrl}/auth/google/callback`,
    },
    async ({ profile }) => {
      const email = profile.emails?.[0].value
      invariantWithLog(email, 'Google profile must have an email')
      const user = await findUserByEmail(email)
      invariantWithLog(user, `User with email ${email} not found`)

      return user
    }
  )

  authenticator.use(googleStrategy)

  return authenticator
}
