import { CatchBoundary as AppCatchBoundary } from '@labeilleviennoise/catch-boundary'
import { DefaultLayout } from '@labeilleviennoise/layouts'
import { RouterContext } from '@labeilleviennoise/router'
import { generateMeta } from '@labeilleviennoise/seo'
import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { typedjson, useTypedLoaderData } from 'remix-typedjson'
import appStylesheetUrl from '@/assets/styles/app.generated.css'

export const links: LinksFunction = () => [
  {
    rel: 'icon',
    href: 'https://ik.imagekit.io/labeilleviennoise/images/favicon/favicon.svg',
    type: 'image/svg+xml',
    sizes: 'any',
  },
  { rel: 'stylesheet', href: appStylesheetUrl },
]

export const meta: MetaFunction = () =>
  generateMeta({
    title: "Auth - L'Abeille Viennoise",
    description: "Authentification pour l'application L'Abeille Viennoise",
    url: 'https://auth.labeilleviennoise.com',
    noIndex: true,
  })

export const loader = (({ request }) =>
  typedjson({
    currentBaseUrl: new URL(request.url).origin,
    env: {
      BASE_URL_AUTH: process.env.BASE_URL_AUTH as string,
      BASE_URL_BLOG: process.env.BASE_URL_BLOG as string,
      BASE_URL_WEBSITE: process.env.BASE_URL_WEBSITE as string,
      IS_DEV: process.env.NODE_ENV === 'development',
      IS_PRODUCTION: process.env.NODE_ENV === 'production',
    },
  })) satisfies LoaderFunction

export const CatchBoundary = AppCatchBoundary

export default function App() {
  const { env, currentBaseUrl } = useTypedLoaderData<typeof loader>()

  return (
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
  )
}
