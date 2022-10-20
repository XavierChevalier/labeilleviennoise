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
  useLoaderData,
} from '@remix-run/react'
import React from 'react'
import NavigationFooter from './modules/navigation/footer/navigation-footer'
import NavigationBar from './modules/navigation/header/navigation-bar'
import appStylesheetUrl from '@/assets/styles/app.generated.css'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: appStylesheetUrl }]
}

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
      PUBLIC_INSTAGRAM_URL: process.env.PUBLIC_INSTAGRAM_URL as string,
      PUBLIC_FACEBOOK_URL: process.env.PUBLIC_FACEBOOK_URL as string,
      PUBLIC_CONTACT_MAIL: process.env.PUBLIC_CONTACT_MAIL as string,
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
      <body className="text-neutral-900 dark:bg-gray-500 dark:text-white min-h-screen">
        <React.StrictMode>
          <EnvContext.Provider value={env}>
            <NavigationBar />
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
            <NavigationFooter />
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
