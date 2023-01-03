import appStylesheetUrl from '@/assets/styles/app.generated.css'
import { CatchBoundary as AppCatchBoundary } from '@labeilleviennoise/catch-boundary'
import { DefaultLayout } from '@labeilleviennoise/layouts'
import { RouterContext } from '@labeilleviennoise/router'
import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { IKContext } from 'imagekitio-react'
import { createContext } from 'react'
import { typedjson, useTypedLoaderData } from 'remix-typedjson'
import type { UseDataFunctionReturn } from 'remix-typedjson/dist/remix'

export const links: LinksFunction = () => [
  {
    rel: 'icon',
    href: 'https://ik.imagekit.io/labeilleviennoise/images/favicon/favicon.svg',
    type: 'image/svg+xml',
    sizes: 'any',
  },
  { rel: 'stylesheet', href: appStylesheetUrl },
]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: "L'Abeille Viennoise",
  viewport: 'width=device-width,initial-scale=1',
})

export const loader = (({ request }) =>
  typedjson({
    currentBaseUrl: new URL(request.url).origin,
    env: {
      BASE_URL_AUTH: process.env.BASE_URL_AUTH as string,
      BASE_URL_WEBSITE: process.env.BASE_URL_WEBSITE as string,
      BASE_URL_BLOG: process.env.BASE_URL_BLOG as string,
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
  })) satisfies LoaderFunction

type PublicEnv = UseDataFunctionReturn<typeof loader>['env']
export const EnvContext = createContext<PublicEnv>({} as PublicEnv)

export const CatchBoundary = AppCatchBoundary

export default function App() {
  const { env, currentBaseUrl } = useTypedLoaderData<typeof loader>()

  return (
    <EnvContext.Provider value={env}>
      <IKContext
        urlEndpoint={env.PUBLIC_IMAGEKIT_URL_ENDPOINT}
        publicKey={env.PUBLIC_IMAGEKIT_PUBLIC_KEY}
      >
        <RouterContext.Provider
          value={{
            currentBaseUrl,
            baseUrlAuth: env.BASE_URL_AUTH,
            baseUrlWebsite: env.BASE_URL_WEBSITE,
            baseUrlBlog: env.BASE_URL_BLOG,
          }}
        >
          <DefaultLayout isProduction={env.IS_PRODUCTION}>
            <Outlet />
          </DefaultLayout>
        </RouterContext.Provider>
      </IKContext>
    </EnvContext.Provider>
  )
}
