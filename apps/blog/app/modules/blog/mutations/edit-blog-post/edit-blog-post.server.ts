import { prismaClient } from '@/modules/shared/prisma-client.server'
import type { CreateBlogPostValidationSchema } from '@/routes/admin/blog/posts/new'

export const editBlogPost =
  (previousSlug: string) => async (post: CreateBlogPostValidationSchema) => {
    console.log(`Trying to edit blog post with slug ${post.slug}.`)
    await prismaClient.$connect()
    await prismaClient.blog_posts.update({
      where: { slug: previousSlug },
      data: post,
    })
    await prismaClient.$disconnect()
    console.log(`Blog post with slug ${post.slug} edited.`)
  }
