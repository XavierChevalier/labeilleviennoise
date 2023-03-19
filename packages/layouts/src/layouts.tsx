import {
  getClientEnv,
  InjectClientEnv,
} from '@labeilleviennoise/environment-client'
import { NavigationBar, NavigationFooter } from '@labeilleviennoise/navigation'
import { GoogleAnalyticsScript } from '@labeilleviennoise/seo'
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { Flowbite } from 'flowbite-react'
import type { FC, HTMLProps } from 'react'

export const DefaultLayout: FC<HTMLProps<HTMLElement>> = ({ children }) => {
  const env = getClientEnv()

  return (
    <html lang="fr">
      <head>
        <Meta />
        <Links />
        <InjectClientEnv />
        {env.IS_PRODUCTION && <GoogleAnalyticsScript />}
      </head>
      <body className="text-neutral-900 bg-white min-h-screen scroll-smooth">
        <Flowbite theme={{ usePreferences: false }}>
          <MiimosaBanner />
          <NavigationBar />
          <main className="min-h-[65vh]">{children}</main>
          <NavigationFooter />
        </Flowbite>
        <Scripts />
        <ScrollRestoration />
        <LiveReload />
      </body>
    </html>
  )
}

const MiimosaBanner = () => (
  <a
    href="https://miimosa.com/fr/projects/les-abeilles-en-ville-un-enjeu-majeur-pour-la-biodiversite?l=fr"
    target="_blank"
    rel="noreferrer"
  >
    <div className="bg-[#fffbcc] hover:bg-[#fffde3] text-neutral-800 text-center p-3 md:px-0">
      Aidez-nous à développer la future miellerie urbaine de Vienne avant le 2
      avril
      <ArrowRight />
    </div>
  </a>
)

const ArrowRight = () => (
  <svg
    viewBox="0 0 14 10"
    fill="none"
    aria-hidden="true"
    focusable="false"
    role="presentation"
    className="icon icon-arrow inline-block pointer-events-none ml-2 align-middle mb-1 w-4 h-4"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
      fill="currentColor"
    />
  </svg>
)
