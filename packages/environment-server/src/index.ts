import * as process from 'process'
import invariant from 'tiny-invariant'

process.env.NODE_ENV = process.env.NODE_ENV || 'production'

interface ServerEnv {
  CURRENT_BASE_URL: string
}

const assertExistingEnv = (envName: string): string => {
  invariant(envName in process.env, `Missing environment variable "${envName}"`)

  return process.env[envName] as string
}

const getMandatoryClientEnvFromServer = (serverEnv: ServerEnv) => {
  const IS_PRODUCTION = assertExistingEnv('NODE_ENV') === 'production'

  return {
    ...serverEnv,
    IS_PRODUCTION,
    IS_DEV: !IS_PRODUCTION,
    BASE_URL_AUTH: assertExistingEnv('BASE_URL_AUTH'),
    BASE_URL_BLOG: assertExistingEnv('BASE_URL_BLOG'),
    BASE_URL_WEBSITE: assertExistingEnv('BASE_URL_WEBSITE'),
    BASE_URL_SHOP: assertExistingEnv('BASE_URL_SHOP'),
  } as const
}

export type MandatoryClientEnv = ReturnType<
  typeof getMandatoryClientEnvFromServer
>

// Inspired by https://egghead.io/lessons/remix-expose-specific-environmental-variables-to-the-client-using-remix
const storeMandatoryClientEnvFromServer = (serverEnv: ServerEnv): void =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  (global._ENV = getMandatoryClientEnvFromServer(serverEnv))

export const storeMandatoryClientEnvFromServerRequest = (
  request: Request
): void =>
  storeMandatoryClientEnvFromServer({
    CURRENT_BASE_URL: getBaseUrlFromRequest(request),
  })

const getBaseUrlFromRequest = (request: Request): string =>
  new URL(request.url).origin
