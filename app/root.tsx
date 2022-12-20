import type { LinksFunction, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from '@remix-run/react'
import { Flowbite } from 'flowbite-react'
import { IKContext } from 'imagekitio-react'
import type { FC, HTMLProps } from 'react'
import React, { createContext } from 'react'
import NavigationFooter from './modules/navigation/footer/navigation-footer'
import NavigationBar from './modules/navigation/header/navigation-bar'
import appStylesheetUrl from '@/assets/styles/app.generated.css'
import PageNotFound from '@/modules/boundary/page-not-found'
import UnknownError from '@/modules/boundary/unknown-error'
import GoogleAnalyticsScript from '@/modules/tracker/google-analytics-script'

export const links: LinksFunction = () => [
  { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
  { rel: 'stylesheet', href: appStylesheetUrl },
]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: "L'Abeille Viennoise",
  viewport: 'width=device-width,initial-scale=1',
})

export const loader = () =>
  json({
    env: {
      BASE_URL: process.env.BASE_URL as string,
      IS_DEV: process.env.NODE_ENV === 'development',
      IS_PRODUCTION: process.env.NODE_ENV === 'production',
      PUBLIC_INSTAGRAM_URL: process.env.PUBLIC_INSTAGRAM_URL as string,
      PUBLIC_FACEBOOK_URL: process.env.PUBLIC_FACEBOOK_URL as string,
      PUBLIC_CONTACT_MAIL: process.env.PUBLIC_CONTACT_MAIL as string,
      PUBLIC_IMAGEKIT_URL_ENDPOINT: process.env
        .PUBLIC_IMAGEKIT_URL_ENDPOINT as string,
      PUBLIC_IMAGEKIT_PUBLIC_KEY: process.env
        .PUBLIC_IMAGEKIT_PUBLIC_KEY as string,
    },
  })

export const EnvContext = createContext<PublicEnv>({} as PublicEnv)

export const CatchBoundary = () => {
  const caught = useCatch()

  return (
    <CatchBoundaryLayout>
      {caught.status === 404 ? (
        <PageNotFound title={caught.data.message} />
      ) : (
        <UnknownError />
      )}
    </CatchBoundaryLayout>
  )
}

export default function App() {
  const { env } = useLoaderData<typeof loader>()

  return (
    <EnvContext.Provider value={env}>
      <IKContext
        urlEndpoint={env.PUBLIC_IMAGEKIT_URL_ENDPOINT}
        publicKey={env.PUBLIC_IMAGEKIT_PUBLIC_KEY}
      >
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>
      </IKContext>
    </EnvContext.Provider>
  )
}

const CatchBoundaryLayout: FC<HTMLProps<HTMLElement>> = ({ children }) => (
  <DefaultLayout>{children}</DefaultLayout>
)

const DefaultLayout: FC<HTMLProps<HTMLElement>> = ({ children }) => (
  <React.StrictMode>
    <html lang="fr">
      <head>
        <Meta />
        <Links />
        <GoogleAnalyticsScript />
      </head>
      <body className="text-neutral-900 bg-white min-h-screen scroll-smooth">
        <Flowbite theme={{ usePreferences: false }}>
          <NavigationBar />
          <main>{children}</main>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <NavigationFooter />
        </Flowbite>
      </body>
    </html>
  </React.StrictMode>
)
