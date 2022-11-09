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
import React from 'react'
import NavigationFooter from './modules/navigation/footer/navigation-footer'
import NavigationBar from './modules/navigation/header/navigation-bar'
import appStylesheetUrl from '@/assets/styles/app.generated.css'
import PageNotFound from '@/modules/boundary/404'

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

export const loader: LoaderFunction = async () => {
  return json<RootLoaderData>({
    env: {
      BASE_URL: process.env.BASE_URL as string,
      PUBLIC_INSTAGRAM_URL: process.env.PUBLIC_INSTAGRAM_URL as string,
      PUBLIC_FACEBOOK_URL: process.env.PUBLIC_FACEBOOK_URL as string,
      PUBLIC_CONTACT_MAIL: process.env.PUBLIC_CONTACT_MAIL as string,
      PUBLIC_IMAGEKIT_URL_ENDPOINT: process.env
        .PUBLIC_IMAGEKIT_URL_ENDPOINT as string,
      PUBLIC_IMAGEKIT_PUBLIC_KEY: process.env
        .PUBLIC_IMAGEKIT_PUBLIC_KEY as string,
    },
  })
}

export const EnvContext = React.createContext<PublicEnv>({} as PublicEnv)
export default function App() {
  const { env } = useLoaderData<RootLoaderData>()

  return (
    <html lang="fr">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="text-neutral-900 bg-white dark:bg-gray-900 dark:text-white min-h-screen">
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
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
                <NavigationFooter />
              </IKContext>
            </Flowbite>
          </EnvContext.Provider>
        </React.StrictMode>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3204963,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </body>
    </html>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  return (
    <html lang="fr">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="text-neutral-900 dark:bg-gray-500 dark:text-white min-h-screen">
        <React.StrictMode>
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
            <NavigationBar />
            {caught.status == 404 && <PageNotFound />}
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
            <NavigationFooter />
          </Flowbite>
        </React.StrictMode>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3204963,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </body>
    </html>
  )
}
