import { getClientEnv } from '@labeilleviennoise/environment-client'
import { useLocation, useMatches } from '@remix-run/react'
import * as Sentry from '@sentry/remix'
import { withSentry } from '@sentry/remix'
import { useEffect } from 'react'

export const withMonitoring = withSentry

export const registerMonitoring = (): void => {
  if (safeIsDev()) {
    return
  }

  Sentry.init({
    dsn: 'https://75850afd13554264983775f3d254f933:efe0696569484c5aa4c6f7c035560fcb@o4504442582925312.ingest.sentry.io/4504442586005504',
    tracesSampleRate: 1,
    environment: 'production',
    integrations: [
      new Sentry.BrowserTracing({
        routingInstrumentation: Sentry.remixRouterInstrumentation(
          useEffect,
          useLocation,
          useMatches
        ),
      }),
    ],
  })
}

const safeIsDev = (): boolean => {
  try {
    // Trying to get the environment from the server
    return process.env.NODE_ENV === 'development'
  } catch (error) {
    try {
      // Trying to get the environment from the client
      return getClientEnv().IS_DEV
    } catch (error) {}
  }

  const error = new Error(
    'Could not determine if we are in dev or not. Defaulting to production.'
  )
  Sentry.captureException(error)
  console.error(error)
  return false
}
