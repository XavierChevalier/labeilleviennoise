import { createCookieSessionStorage } from '@remix-run/node'
import { Authenticator } from 'remix-auth'
import invariant from 'tiny-invariant'
import { GoogleStrategy } from './auth-google-strategy'
import type { User } from './users'
import { findUserByEmail } from './users'

const invariantWithLog: typeof invariant = (condition, message) => {
  if (!condition) {
    console.error(message)
  }
  invariant(condition, message)
}

interface CreateAuthenticatorOptions {
  sessionDomain: string
  sessionSecret: string
  googleClientId: string
  googleClientSecret: string
  baseUrl: string
}

export const createAuthenticator = ({
  sessionDomain,
  sessionSecret,
  googleClientId,
  googleClientSecret,
  baseUrl,
}: CreateAuthenticatorOptions) => {
  const authenticator = new Authenticator<User>(
    createCookieSessionStorage({
      cookie: {
        name: 'session',
        domain: sessionDomain,
        secrets: [sessionSecret],
        path: '/',
        httpOnly: true,
        secure: true,
      },
    })
  )
  authenticator.use(
    new GoogleStrategy<User>(
      {
        clientID: googleClientId,
        clientSecret: googleClientSecret,
        callbackURL: `${baseUrl}/google/callback`,
      },
      async ({ profile }) => {
        console.log('Verifying user with Google profile')
        const email = profile.emails?.[0].value
        invariantWithLog(email, 'Google profile must have an email')
        const user = await findUserByEmail(email)
        invariantWithLog(user, `User with email ${email} not found`)

        return user
      }
    )
  )

  return authenticator
}
