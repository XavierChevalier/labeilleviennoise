import appStylesheetUrl from '@/assets/styles/app.generated.css'
import { CatchBoundary as AppCatchBoundary } from '@labeilleviennoise/catch-boundary'
import { DefaultLayout } from '@labeilleviennoise/layouts'
import { withMonitoring } from '@labeilleviennoise/monitoring'
import { buildMeta } from '@labeilleviennoise/seo'
import type { LinksFunction, LoaderFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { IKContext } from 'imagekitio-react'
import { typedjson, useTypedLoaderData } from 'remix-typedjson'

export const links: LinksFunction = () => [
  {
    rel: 'icon',
    href: 'https://ik.imagekit.io/labeilleviennoise/images/favicon/favicon.svg',
    type: 'image/svg+xml',
    sizes: 'any',
  },
  { rel: 'stylesheet', href: appStylesheetUrl },
]

export const meta = buildMeta({
  title: "Blog - L'Abeille Viennoise",
  description: "Blog de l'Abeille Viennoise",
})

export const loader = (() =>
  typedjson({
    env: {
      PUBLIC_IMAGEKIT_URL_ENDPOINT: process.env
        .PUBLIC_IMAGEKIT_URL_ENDPOINT as string,
      PUBLIC_IMAGEKIT_PUBLIC_KEY: process.env
        .PUBLIC_IMAGEKIT_PUBLIC_KEY as string,
    },
  })) satisfies LoaderFunction

export const CatchBoundary = AppCatchBoundary

const App = () => {
  const { env } = useTypedLoaderData<typeof loader>()

  return (
    <IKContext
      urlEndpoint={env.PUBLIC_IMAGEKIT_URL_ENDPOINT}
      publicKey={env.PUBLIC_IMAGEKIT_PUBLIC_KEY}
    >
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    </IKContext>
  )
}
export default withMonitoring(App)
