import { prismaClient } from '@/modules/shared/prisma-client.server'

export const deleteBlogPostBySlug = async (slug: string) => {
  console.log(`Trying to delete blog post with slug ${slug}.`)
  await prismaClient.$connect()
  await prismaClient.blog_posts.delete({ where: { slug } })
  await prismaClient.$disconnect()
  console.log(`Blog post with slug ${slug} deleted.`)
}
