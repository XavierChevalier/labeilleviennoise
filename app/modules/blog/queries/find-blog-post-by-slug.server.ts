import { prismaClient } from '@/modules/shared/prisma-client.server'

export const findBlogPostBySlug = async (slug: string) => {
  await prismaClient.$connect()
  const foundBlogPost = await prismaClient.blog_posts.findFirst({
    where: { slug },
  })
  prismaClient.$disconnect()

  return foundBlogPost
}

export type FindBlogPostBySlug = Awaited<ReturnType<typeof findBlogPostBySlug>>
