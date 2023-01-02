import { GoogleAnalyticsScript } from '@labeilleviennoise/seo'
import { NavigationBar, NavigationFooter } from '@labeilleviennoise/ui'
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { Flowbite } from 'flowbite-react'
import type { FC, HTMLProps } from 'react'

interface LayoutProps extends HTMLProps<HTMLDivElement> {}

interface CatchBoundaryLayoutProps extends LayoutProps {}

export const CatchBoundaryLayout: FC<CatchBoundaryLayoutProps> = ({
  children,
  ...props
}) => (
  <DefaultLayout isProduction={true} {...props}>
    {children}
  </DefaultLayout>
)

interface DefaultLayoutProps extends LayoutProps {
  isProduction: boolean
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({
  children,
  isProduction,
}) => (
  <html lang="fr">
    <head>
      <Meta />
      <Links />
      <GoogleAnalyticsScript isProduction={isProduction} />
    </head>
    <body className="text-neutral-900 bg-white min-h-screen scroll-smooth">
      <Flowbite theme={{ usePreferences: false }}>
        <NavigationBar />
        <main className="min-h-[65vh]">{children}</main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <NavigationFooter />
      </Flowbite>
    </body>
  </html>
)
