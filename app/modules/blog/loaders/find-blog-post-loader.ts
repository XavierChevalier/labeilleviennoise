import type { LoaderArgs } from '@remix-run/node'
import { typedjson } from 'remix-typedjson'
import invariant from 'tiny-invariant'
import { findBlogPostBySlug } from '@/modules/blog/queries/find-blog-post-by-slug.server'

export const findBlogPostLoader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, 'Slug is required')
  const blogPost = await findBlogPostBySlug(params.slug)

  return typedjson(blogPost!, {
    status: blogPost ? 200 : 404,
    headers: { 'Cache-Control': 'max-age=86400' },
  })
}
