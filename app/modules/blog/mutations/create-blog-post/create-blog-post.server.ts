import { findBlogPostBySlug } from '@/modules/blog/queries/find-blog-post-by-slug.server'
import { prismaClient } from '@/modules/shared/prisma-client.server'
import type { CreateBlogPostValidationSchema } from '@/routes/admin/blog/posts/new'

export const createBlogPost = async (post: CreateBlogPostValidationSchema) => {
  console.log(`Trying to create blog post with slug ${post.slug}.`)
  const existingPost = await findBlogPostBySlug(post.slug)
  if (existingPost) {
    throw new Error(`A blog post with slug ${post.slug} already exists.`)
  }

  await prismaClient.$connect()
  await prismaClient.blog_posts.create({ data: post })
  await prismaClient.$disconnect()
  console.log(`Blog post with slug ${post.slug} created.`)
}
