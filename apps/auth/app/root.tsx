import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react'
import type { FC, HTMLProps } from 'react'
import React from 'react'
import appStylesheetUrl from '@/assets/styles/app.generated.css'

export const links: LinksFunction = () => [
  { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
  { rel: 'stylesheet', href: appStylesheetUrl },
]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: "Auth - L'Abeille Viennoise",
  viewport: 'width=device-width,initial-scale=1',
})

export const CatchBoundary = () => {
  const caught = useCatch()

  return <CatchBoundaryLayout>{caught.status}</CatchBoundaryLayout>
}

export default function App() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
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
      </head>
      <body className="text-neutral-900 bg-white min-h-screen scroll-smooth">
        <main className="min-h-screen">{children}</main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  </React.StrictMode>
)
