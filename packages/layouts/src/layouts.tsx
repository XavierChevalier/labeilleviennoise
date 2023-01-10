import {
  getClientEnv,
  InjectClientEnv,
} from '@labeilleviennoise/environment-client'
import { NavigationBar, NavigationFooter } from '@labeilleviennoise/navigation'
import { GoogleAnalyticsScript } from '@labeilleviennoise/seo'
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { Flowbite } from 'flowbite-react'
import type { FC, HTMLProps } from 'react'

export const DefaultLayout: FC<HTMLProps<HTMLElement>> = ({ children }) => {
  const env = getClientEnv()

  return (
    <html lang="fr">
      <head>
        <Meta />
        <Links />
        <InjectClientEnv />
        {env.IS_PRODUCTION && <GoogleAnalyticsScript />}
      </head>
      <body className="text-neutral-900 bg-white min-h-screen scroll-smooth">
        <Flowbite theme={{ usePreferences: false }}>
          <NavigationBar />
          <main className="min-h-[65vh]">{children}</main>
          <NavigationFooter />
        </Flowbite>
        <Scripts />
        <ScrollRestoration />
        <LiveReload />
      </body>
    </html>
  )
}
