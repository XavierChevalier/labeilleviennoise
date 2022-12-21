import * as process from 'process'
import { createCookieSessionStorage } from '@remix-run/node'
import { Authenticator } from 'remix-auth'
import invariant from 'tiny-invariant'
import { GoogleStrategy } from '@/modules/auth/auth-google-strategy.server'
import type { User } from '@/modules/auth/users.server'
import { findUserByEmail } from '@/modules/auth/users.server'

const authenticator = new Authenticator<User>(
  createCookieSessionStorage({
    cookie: {
      name: 'session',
      secrets: [process.env.SESSION_SECRET!],
      path: '/',
      httpOnly: true,
      secure: true,
    },
  })
)
const invariantWithLog: typeof invariant = (condition, message) => {
  if (!condition) {
    console.error(message)
  }
  invariant(condition, message)
}
const googleStrategy = new GoogleStrategy<User>(
  {
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: `${process.env.BASE_URL}/auth/google/callback`,
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

export default authenticator
