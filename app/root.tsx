import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node'
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
import PageNotFound from '@/modules/boundary/404'
import HotJarScript from '@/modules/tracker/hot-jar-script'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: appStylesheetUrl },
]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: "L'Abeille Viennoise",
  viewport: 'width=device-width,initial-scale=1',
})

interface RootLoaderData {
  readonly env: PublicEnv
}

export const loader: LoaderFunction = () =>
  json<RootLoaderData>({
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
    <DefaultLayout>{caught.status == 404 && <PageNotFound />}</DefaultLayout>
  )
}

export default function App() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  )
}

const DefaultLayout: FC<HTMLProps<HTMLElement>> = ({ children }) => {
  const { env } = useLoaderData<RootLoaderData>()

  return (
    <html lang="fr">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="text-neutral-900 bg-white dark:bg-gray-900 dark:text-white min-h-screen scroll-smooth">
        <React.StrictMode>
          <EnvContext.Provider value={env}>
            <Flowbite
              theme={{
                usePreferences: false,
                theme: {
                  darkThemeToggle: {
                    base: 'text-gray-500 hover:text-gray-900 dark:hover:text-white',
                  },
                },
              }}
            >
              <IKContext
                publicKey={env.PUBLIC_IMAGEKIT_PUBLIC_KEY}
                urlEndpoint={env.PUBLIC_IMAGEKIT_URL_ENDPOINT}
              >
                <NavigationBar />
                <main>{children}</main>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
                <NavigationFooter />
              </IKContext>
            </Flowbite>
          </EnvContext.Provider>
        </React.StrictMode>
        <HotJarScript />
      </body>
    </html>
  )
}
