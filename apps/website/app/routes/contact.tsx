import { buildMeta } from '@labeilleviennoise/seo'
import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

export const meta = buildMeta({
  title: "Contact - L'Abeille Viennoise",
  description:
    'Contactez-nous pour toute question. Nous vous répondrons dans les plus brefs délais.',
})

export const loader = (() =>
  redirect(`${process.env.BASE_URL_SHOP}/pages/contact`, {
    statusText: 'Permanent Redirect',
    status: 308,
  })) satisfies LoaderFunction
