import { prismaClient } from '@/modules/shared/prisma-client.server'

export const findAllBlogPosts = async () => {
  await prismaClient.$connect()
  const blogPosts = await prismaClient.blog_posts.findMany()
  prismaClient.$disconnect()

  return blogPosts
}
