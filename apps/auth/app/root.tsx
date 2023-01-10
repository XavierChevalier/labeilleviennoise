import { CatchBoundary as AppCatchBoundary } from '@labeilleviennoise/catch-boundary'
import { DefaultLayout } from '@labeilleviennoise/layouts'
import { withMonitoring } from '@labeilleviennoise/monitoring'
import { preventPageIndexing } from '@labeilleviennoise/seo'
import type { LinksFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
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

export const meta = preventPageIndexing

export const CatchBoundary = AppCatchBoundary

const App = () => (
  <DefaultLayout>
    <Outlet />
  </DefaultLayout>
)
export default withMonitoring(App)
