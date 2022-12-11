import * as fs from 'fs'
import { HTTP_STATUS_OK } from '@netlify/functions/dist/lib/consts'

export const loader = () =>
  new Response(
    `
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      ${fs
        .readdirSync('app/routes')
        .map(removeFileExtension)
        .filter(ignorePaths(['sitemap[.]xml']))
        .map(toAbsoluteUrl)
        .map(toXmlUrlFragment)
        .join('')}
    </urlset>
    `,
    {
      status: HTTP_STATUS_OK,
      headers: {
        'Content-Type': 'application/xml',
        'xml-version': '1.0',
        encoding: 'UTF-8',
      },
    }
  )

const toAbsoluteUrl = (path: string) => `https://labeilleviennoise.com/${path}`

const removeFileExtension = (path: string) => path.replace('.tsx', '')

const ignorePaths = (pathsToIgnore: string[]) => (path: string) =>
  !pathsToIgnore.includes(path)

const toXmlUrlFragment = (url: string) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
`
