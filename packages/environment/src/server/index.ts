interface ServerEnv {
  CURRENT_BASE_URL: string
}

const getMandatoryClientEnvFromServer = (serverEnv: ServerEnv) =>
  ({
    ...serverEnv,
    IS_DEV: process.env.NODE_ENV === 'development',
    IS_PRODUCTION: process.env.NODE_ENV === 'production',
    BASE_URL_AUTH: process.env.BASE_URL_AUTH as string,
    BASE_URL_BLOG: process.env.BASE_URL_BLOG as string,
    BASE_URL_WEBSITE: process.env.BASE_URL_WEBSITE as string,
  } as const)

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
