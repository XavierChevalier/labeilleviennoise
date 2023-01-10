import { getClientEnv } from '@labeilleviennoise/environment-client'
import type { HtmlMetaDescriptor } from '@remix-run/react'
import type { MetaFunction } from '@remix-run/react/dist/routeModules'

interface BuildMetaProps {
  title: string
  description: string
  noIndex?: boolean
}

interface MetaProps extends BuildMetaProps {
  url: string
}

export const buildMeta =
  ({ title, description, noIndex = false }: BuildMetaProps): MetaFunction =>
  ({ location }) =>
    [addOpenGraph, addTwitter, addIndexing].reduce(
      (meta, fn) => ({
        ...meta,
        ...fn({
          title,
          description,
          url: `${getClientEnv().CURRENT_BASE_URL}${location.pathname}`,
          noIndex,
        }),
      }),
      {
        charset: 'utf-8',
        viewport: 'width=device-width,initial-scale=1',
        title,
        description,
      }
    )

export const preventPageIndexing = buildMeta({
  noIndex: true,
  title: "L'Abeille Viennoise",
  description: "Le site de l'Abeille Viennoise.",
})

const addOpenGraph = ({
  title,
  description,
  url,
}: MetaProps): HtmlMetaDescriptor => ({
  'og:title': title,
  'og:description': description,
  'og:image': 'https://ik.imagekit.io/labeilleviennoise/images/bee-large.png',
  'og:image:alt': "Illustration de l'Abeille Viennoise",
  'og:url': url,
  'og:type': 'website',
})

const addTwitter = ({
  title,
  description,
  url,
}: MetaProps): HtmlMetaDescriptor => ({
  'twitter:title': title,
  'twitter:description': description,
  'twitter:image':
    'https://ik.imagekit.io/labeilleviennoise/images/bee-large.png',
  'twitter:image:alt': "Illustration de l'Abeille Viennoise",
  'twitter:url': url,
  'twitter:card': 'summary_large_image',
})

const addIndexing = ({ noIndex }: MetaProps): HtmlMetaDescriptor =>
  noIndex
    ? {
        robots: 'noindex',
        googlebot: 'noindex',
      }
    : {}
