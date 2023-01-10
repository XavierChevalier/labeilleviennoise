import type { LoaderFunction } from '@remix-run/node'
import { typedjson } from 'remix-typedjson'
import invariant from 'tiny-invariant'
import { findBlogPostBySlug } from '@/modules/blog/queries/find-blog-post-by-slug.server'

export const findBlogPostLoader = (async ({ params }) => {
  invariant(params.slug, 'Slug is required')
  const blogPost = await findBlogPostBySlug(params.slug)
  if (!blogPost) {
    throw typedjson({ message: 'Article introuvable' }, { status: 404 })
  }

  return typedjson(blogPost, { headers: { 'Cache-Control': 'max-age=86400' } })
}) satisfies LoaderFunction
