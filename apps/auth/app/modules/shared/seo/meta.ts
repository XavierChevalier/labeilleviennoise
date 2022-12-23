import type { HtmlMetaDescriptor } from '@remix-run/react'

interface MetaProps extends IndexingProps {
  title: string
  description: string
  url: string
}

interface IndexingProps {
  noIndex?: boolean
}

export const generateMeta = ({
  title,
  description,
  url,
  noIndex = false,
}: MetaProps): HtmlMetaDescriptor => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
  title,
  description,
  ...addOpenGraph({ title, description, url }),
  ...addTwitter({ title, description, url }),
  ...addIndexing({ noIndex }),
})

export const preventPageIndexing = (): HtmlMetaDescriptor =>
  addIndexing({ noIndex: true })

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

const addIndexing = ({ noIndex }: IndexingProps): HtmlMetaDescriptor =>
  noIndex
    ? {
        robots: 'noindex',
        googlebot: 'noindex',
      }
    : {}
